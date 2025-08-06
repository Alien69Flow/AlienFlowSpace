import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useFollow } from '@/hooks/useFollow';
import { UserPlus, UserMinus, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { User } from '@/lib/types';

interface FollowButtonProps {
  user: User;
  initialFollowing?: boolean;
  variant?: 'default' | 'compact' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onFollowChange?: (isFollowing: boolean) => void;
}

const FollowButton: React.FC<FollowButtonProps> = ({
  user,
  initialFollowing = false,
  variant = 'default',
  size = 'md',
  className,
  onFollowChange
}) => {
  const { isFollowing, isLoading, toggleFollow } = useFollow(initialFollowing);

  const handleToggleFollow = async () => {
    try {
      await toggleFollow(user.id);
      onFollowChange?.(!isFollowing);
    } catch (error) {
      console.error('Failed to toggle follow:', error);
    }
  };

  const getButtonContent = () => {
    if (isLoading) {
      return (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          <span className="font-orbitron text-sm">Processing...</span>
        </>
      );
    }

    if (isFollowing) {
      return (
        <>
          <UserMinus className="h-4 w-4" />
          <span className="font-orbitron text-sm">Unfollow</span>
        </>
      );
    }

    return (
      <>
        <UserPlus className="h-4 w-4" />
        <span className="font-orbitron text-sm">Follow</span>
      </>
    );
  };

  const getButtonStyles = () => {
    const baseStyles = "font-orbitron transition-all duration-300 ease-in-out";
    
    switch (variant) {
      case 'compact':
        return cn(
          baseStyles,
          "px-3 py-1.5 text-xs rounded-full",
          isFollowing
            ? "bg-follow-error hover:bg-follow-error/80 text-white border border-follow-error/20"
            : "bg-follow-primary hover:bg-follow-primary/80 text-alien-space-dark border border-follow-primary/20"
        );
      
      case 'outline':
        return cn(
          baseStyles,
          "px-4 py-2 text-sm rounded-lg border-2",
          isFollowing
            ? "border-follow-error text-follow-error hover:bg-follow-error/10"
            : "border-follow-primary text-follow-primary hover:bg-follow-primary/10"
        );
      
      default:
        return cn(
          baseStyles,
          "px-6 py-2.5 text-sm rounded-lg shadow-lg",
          isFollowing
            ? "bg-gradient-to-r from-follow-error to-follow-error/80 hover:from-follow-error/90 hover:to-follow-error/70 text-white"
            : "bg-gradient-to-r from-follow-primary to-follow-primary/80 hover:from-follow-primary/90 hover:to-follow-primary/70 text-alien-space-dark"
        );
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return "text-xs px-3 py-1.5";
      case 'lg':
        return "text-base px-8 py-3";
      default:
        return "text-sm px-6 py-2.5";
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <Button
        onClick={handleToggleFollow}
        disabled={isLoading}
        className={cn(
          getButtonStyles(),
          getSizeStyles(),
          "flex items-center gap-2 font-orbitron",
          "focus:ring-2 focus:ring-follow-primary/50 focus:outline-none",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          className
        )}
      >
        {getButtonContent()}
      </Button>
    </motion.div>
  );
};

export default FollowButton; 