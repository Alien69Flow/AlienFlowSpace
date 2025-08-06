import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, UserPlus, UserMinus, TrendingUp, Award } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { FollowStats } from '@/lib/types';

interface FollowStatsProps {
  stats: FollowStats;
  variant?: 'default' | 'compact' | 'detailed';
  className?: string;
}

const FollowStats: React.FC<FollowStatsProps> = ({
  stats,
  variant = 'default',
  className
}) => {
  const getCardContent = () => {
    const baseCardClass = "bg-gradient-to-br from-alien-space-dark/80 to-alien-space/60 backdrop-blur-md border border-alien-gold/20";

    switch (variant) {
      case 'compact':
        return (
          <Card className={cn(baseCardClass, className)}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-follow-primary">
                    <Users className="h-5 w-5" />
                    <span className="font-orbitron text-lg">{stats.followersCount.toLocaleString()}</span>
                    <span className="text-xs text-gray-400 font-exo">followers</span>
                  </div>
                  <div className="flex items-center gap-2 text-follow-secondary">
                    <UserPlus className="h-5 w-5" />
                    <span className="font-orbitron text-lg">{stats.followingCount.toLocaleString()}</span>
                    <span className="text-xs text-gray-400 font-exo">following</span>
                  </div>
                </div>
                {stats.mutualCount > 0 && (
                  <div className="flex items-center gap-2 text-follow-accent">
                    <Award className="h-5 w-5" />
                    <span className="font-orbitron text-lg">{stats.mutualCount.toLocaleString()}</span>
                    <span className="text-xs text-gray-400 font-exo">mutual</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        );

      case 'detailed':
        return (
          <Card className={cn(baseCardClass, className)}>
            <CardHeader>
              <CardTitle className="font-orbitron text-xl text-follow-primary text-center">
                Follow Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 bg-follow-primary/20 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-follow-primary" />
                    </div>
                  </div>
                  <div className="font-orbitron text-3xl text-follow-primary mb-2">
                    {stats.followersCount.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-400 font-exo">Followers</div>
                  <div className="text-xs text-gray-500 font-exo mt-1">
                    People following you
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 bg-follow-secondary/20 rounded-full flex items-center justify-center">
                      <UserPlus className="h-6 w-6 text-follow-secondary" />
                    </div>
                  </div>
                  <div className="font-orbitron text-3xl text-follow-secondary mb-2">
                    {stats.followingCount.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-400 font-exo">Following</div>
                  <div className="text-xs text-gray-500 font-exo mt-1">
                    People you follow
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 bg-follow-accent/20 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-follow-accent" />
                    </div>
                  </div>
                  <div className="font-orbitron text-3xl text-follow-accent mb-2">
                    {stats.mutualCount.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-400 font-exo">Mutual</div>
                  <div className="text-xs text-gray-500 font-exo mt-1">
                    Mutual connections
                  </div>
                </motion.div>
              </div>

              {/* Progress indicators */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-exo text-gray-400">Follow Ratio</span>
                  <span className="font-orbitron text-follow-primary">
                    {stats.followingCount > 0 ? (stats.followersCount / stats.followingCount).toFixed(1) : '∞'}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min((stats.followersCount / (stats.followersCount + stats.followingCount)) * 100, 100)}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-gradient-to-r from-follow-primary to-follow-secondary h-2 rounded-full"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        );

      default:
        return (
          <Card className={cn(baseCardClass, className)}>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="h-8 w-8 text-follow-primary" />
                  </div>
                  <div className="font-orbitron text-2xl text-follow-primary mb-1">
                    {stats.followersCount.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-400 font-exo">Followers</div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <UserPlus className="h-8 w-8 text-follow-secondary" />
                  </div>
                  <div className="font-orbitron text-2xl text-follow-secondary mb-1">
                    {stats.followingCount.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-400 font-exo">Following</div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="h-8 w-8 text-follow-accent" />
                  </div>
                  <div className="font-orbitron text-2xl text-follow-accent mb-1">
                    {stats.mutualCount.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-400 font-exo">Mutual</div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {getCardContent()}
    </motion.div>
  );
};

export default FollowStats; 