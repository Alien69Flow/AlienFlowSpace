import { useEffect, useState } from 'react';
import { useAppKitAccount } from '@reown/appkit/react';
import { generateAIKey, storeAIKey, getAIKey } from '@/utils/aiKeyGenerator';
import { toast } from 'sonner';

export const useWalletConnection = () => {
  const { address, isConnected } = useAppKitAccount();
  const [aiKey, setAiKey] = useState<string | null>(null);
  const [isLoadingKey, setIsLoadingKey] = useState(false);

  useEffect(() => {
    if (isConnected && address) {
      // Check if AI key exists for this wallet
      const existingKey = getAIKey(address);
      
      if (existingKey) {
        setAiKey(existingKey);
      } else {
        // Generate new AI key for first-time connection
        setIsLoadingKey(true);
        try {
          const newKey = generateAIKey(address);
          storeAIKey(address, newKey);
          setAiKey(newKey);
          
          toast.success('AI Key Generated!', {
            description: 'Your unique AI key has been created and linked to your wallet.',
            duration: 5000
          });
        } catch (error) {
          console.error('Failed to generate AI key:', error);
          toast.error('Failed to generate AI key', {
            description: 'Please try reconnecting your wallet.'
          });
        } finally {
          setIsLoadingKey(false);
        }
      }
    } else {
      // Clear AI key when wallet is disconnected
      setAiKey(null);
    }
  }, [isConnected, address]);

  return {
    address,
    isConnected,
    aiKey,
    isLoadingKey
  };
};
