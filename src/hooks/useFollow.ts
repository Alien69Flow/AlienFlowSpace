import { useState, useCallback } from 'react';
import { User, FollowAction } from '@/lib/types';

interface UseFollowReturn {
  isFollowing: boolean;
  isLoading: boolean;
  followUser: (userId: string) => Promise<void>;
  unfollowUser: (userId: string) => Promise<void>;
  toggleFollow: (userId: string) => Promise<void>;
}

export const useFollow = (initialFollowing: boolean = false): UseFollowReturn => {
  const [isFollowing, setIsFollowing] = useState(initialFollowing);
  const [isLoading, setIsLoading] = useState(false);

  const followUser = useCallback(async (userId: string) => {
    if (isLoading) return;
    
    setIsLoading(true);
    try {
      // Optimistic update
      setIsFollowing(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Here you would make the actual API call
      // await api.followUser(userId);
      
      // Log the action
      const action: FollowAction = {
        type: 'follow',
        userId,
        timestamp: new Date()
      };
      
      console.log('Follow action:', action);
      
    } catch (error) {
      // Revert optimistic update on error
      setIsFollowing(false);
      console.error('Error following user:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  const unfollowUser = useCallback(async (userId: string) => {
    if (isLoading) return;
    
    setIsLoading(true);
    try {
      // Optimistic update
      setIsFollowing(false);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Here you would make the actual API call
      // await api.unfollowUser(userId);
      
      // Log the action
      const action: FollowAction = {
        type: 'unfollow',
        userId,
        timestamp: new Date()
      };
      
      console.log('Unfollow action:', action);
      
    } catch (error) {
      // Revert optimistic update on error
      setIsFollowing(true);
      console.error('Error unfollowing user:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  const toggleFollow = useCallback(async (userId: string) => {
    if (isFollowing) {
      await unfollowUser(userId);
    } else {
      await followUser(userId);
    }
  }, [isFollowing, followUser, unfollowUser]);

  return {
    isFollowing,
    isLoading,
    followUser,
    unfollowUser,
    toggleFollow
  };
}; 