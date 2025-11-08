/**
 * AI Key Generator Utility
 * Generates and manages unique AI keys linked to wallet addresses
 */

export const generateAIKey = (walletAddress: string): string => {
  // Create a unique identifier based on wallet address and timestamp
  const timestamp = Date.now();
  const randomSuffix = Math.random().toString(36).substring(2, 15);
  
  // Create a hash-like identifier (not cryptographically secure, just for demo)
  const baseString = `${walletAddress}-${timestamp}-${randomSuffix}`;
  const encoded = btoa(baseString).replace(/[^a-zA-Z0-9]/g, '').substring(0, 32);
  
  return `AFS-${encoded}`;
};

export const storeAIKey = (walletAddress: string, aiKey: string): void => {
  const storage = getAIKeyStorage();
  storage[walletAddress.toLowerCase()] = {
    key: aiKey,
    createdAt: Date.now(),
    lastUsed: Date.now()
  };
  localStorage.setItem('alienflowspace_ai_keys', JSON.stringify(storage));
};

export const getAIKey = (walletAddress: string): string | null => {
  const storage = getAIKeyStorage();
  const data = storage[walletAddress.toLowerCase()];
  
  if (data) {
    // Update last used timestamp
    data.lastUsed = Date.now();
    localStorage.setItem('alienflowspace_ai_keys', JSON.stringify(storage));
    return data.key;
  }
  
  return null;
};

export const regenerateAIKey = (walletAddress: string): string => {
  const newKey = generateAIKey(walletAddress);
  storeAIKey(walletAddress, newKey);
  return newKey;
};

export const deleteAIKey = (walletAddress: string): void => {
  const storage = getAIKeyStorage();
  delete storage[walletAddress.toLowerCase()];
  localStorage.setItem('alienflowspace_ai_keys', JSON.stringify(storage));
};

type AIKeyStorage = {
  [address: string]: {
    key: string;
    createdAt: number;
    lastUsed: number;
  };
};

const getAIKeyStorage = (): AIKeyStorage => {
  const stored = localStorage.getItem('alienflowspace_ai_keys');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error('Failed to parse AI key storage:', e);
      return {};
    }
  }
  return {};
};
