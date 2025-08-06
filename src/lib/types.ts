export interface User {
  id: string;
  username: string;
  displayName: string;
  avatar?: string;
  bio?: string;
  location?: string;
  website?: string;
  joinedAt: Date;
  followersCount: number;
  followingCount: number;
  isVerified: boolean;
  badges: Badge[];
  socialLinks: SocialLink[];
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
}

export interface SocialLink {
  platform: 'twitter' | 'github' | 'linkedin' | 'discord' | 'telegram' | 'instagram';
  url: string;
  username: string;
}

export interface FollowRelationship {
  id: string;
  followerId: string;
  followingId: string;
  createdAt: Date;
  isMutual: boolean;
}

export interface FollowStats {
  followersCount: number;
  followingCount: number;
  mutualCount: number;
}

export interface FollowAction {
  type: 'follow' | 'unfollow';
  userId: string;
  timestamp: Date;
}

export interface UserProfile extends User {
  isFollowing: boolean;
  isFollowedBy: boolean;
  isMutual: boolean;
  followStats: FollowStats;
} 