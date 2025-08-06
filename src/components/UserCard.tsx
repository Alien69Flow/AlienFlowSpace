import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import FollowButton from './FollowButton';
import { MapPin, Globe, Calendar, Users, CheckCircle, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { User } from '@/lib/types';

interface UserCardProps {
  user: User;
  variant?: 'default' | 'compact' | 'detailed';
  showFollowButton?: boolean;
  className?: string;
}

const UserCard: React.FC<UserCardProps> = ({
  user,
  variant = 'default',
  showFollowButton = true,
  className
}) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      year: 'numeric'
    }).format(date);
  };

  const getCardContent = () => {
    switch (variant) {
      case 'compact':
        return (
          <Card className={cn(
            "bg-gradient-to-br from-alien-space-dark/80 to-alien-space/60 backdrop-blur-md",
            "border border-alien-gold/20 hover:border-alien-gold/40 transition-all duration-300",
            "hover:shadow-lg hover:shadow-follow-primary/20",
            className
          )}>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12 border-2 border-follow-primary/30">
                  <AvatarImage src={user.avatar} alt={user.displayName} />
                  <AvatarFallback className="bg-follow-primary/20 text-follow-primary font-orbitron">
                    {user.displayName.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-orbitron text-sm text-follow-primary truncate">
                      {user.displayName}
                    </h3>
                    {user.isVerified && (
                      <CheckCircle className="h-3 w-3 text-follow-success" />
                    )}
                  </div>
                  <p className="text-xs text-gray-400 font-exo truncate">
                    @{user.username}
                  </p>
                </div>
                
                {showFollowButton && (
                  <FollowButton 
                    user={user} 
                    variant="compact" 
                    size="sm" 
                  />
                )}
              </div>
            </CardContent>
          </Card>
        );

      case 'detailed':
        return (
          <Card className={cn(
            "bg-gradient-to-br from-alien-space-dark/90 to-alien-space/70 backdrop-blur-md",
            "border border-alien-gold/30 hover:border-alien-gold/50 transition-all duration-300",
            "hover:shadow-xl hover:shadow-follow-primary/30",
            className
          )}>
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16 border-3 border-follow-primary/40">
                    <AvatarImage src={user.avatar} alt={user.displayName} />
                    <AvatarFallback className="bg-follow-primary/20 text-follow-primary font-orbitron text-lg">
                      {user.displayName.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h2 className="font-orbitron text-xl text-follow-primary">
                        {user.displayName}
                      </h2>
                      {user.isVerified && (
                        <CheckCircle className="h-5 w-5 text-follow-success" />
                      )}
                    </div>
                    <p className="text-sm text-gray-400 font-exo mb-1">
                      @{user.username}
                    </p>
                    {user.bio && (
                      <p className="text-sm text-gray-300 font-exo max-w-md">
                        {user.bio}
                      </p>
                    )}
                  </div>
                </div>
                
                {showFollowButton && (
                  <FollowButton 
                    user={user} 
                    variant="default" 
                    size="md" 
                  />
                )}
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Stats */}
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-1 text-follow-primary">
                  <Users className="h-4 w-4" />
                  <span className="font-orbitron">{user.followersCount.toLocaleString()}</span>
                  <span className="text-gray-400 font-exo">followers</span>
                </div>
                <div className="flex items-center gap-1 text-follow-secondary">
                  <Users className="h-4 w-4" />
                  <span className="font-orbitron">{user.followingCount.toLocaleString()}</span>
                  <span className="text-gray-400 font-exo">following</span>
                </div>
              </div>
              
              {/* Badges */}
              {user.badges.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {user.badges.slice(0, 3).map((badge) => (
                    <Badge 
                      key={badge.id}
                      className="bg-follow-accent/20 text-follow-accent border border-follow-accent/30 font-orbitron text-xs"
                    >
                      <Star className="h-3 w-3 mr-1" />
                      {badge.name}
                    </Badge>
                  ))}
                </div>
              )}
              
              {/* Location and Website */}
              <div className="flex items-center gap-4 text-sm text-gray-400">
                {user.location && (
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span className="font-exo">{user.location}</span>
                  </div>
                )}
                {user.website && (
                  <div className="flex items-center gap-1">
                    <Globe className="h-4 w-4" />
                    <a 
                      href={user.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-exo hover:text-follow-primary transition-colors"
                    >
                      {user.website.replace(/^https?:\/\//, '')}
                    </a>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span className="font-exo">Joined {formatDate(user.joinedAt)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      default:
        return (
          <Card className={cn(
            "bg-gradient-to-br from-alien-space-dark/80 to-alien-space/60 backdrop-blur-md",
            "border border-alien-gold/20 hover:border-alien-gold/40 transition-all duration-300",
            "hover:shadow-lg hover:shadow-follow-primary/20",
            className
          )}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-14 w-14 border-2 border-follow-primary/30">
                  <AvatarImage src={user.avatar} alt={user.displayName} />
                  <AvatarFallback className="bg-follow-primary/20 text-follow-primary font-orbitron">
                    {user.displayName.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-orbitron text-lg text-follow-primary">
                      {user.displayName}
                    </h3>
                    {user.isVerified && (
                      <CheckCircle className="h-4 w-4 text-follow-success" />
                    )}
                  </div>
                  <p className="text-sm text-gray-400 font-exo mb-2">
                    @{user.username}
                  </p>
                  {user.bio && (
                    <p className="text-sm text-gray-300 font-exo line-clamp-2">
                      {user.bio}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-follow-primary">
                    <Users className="h-4 w-4" />
                    <span className="font-orbitron">{user.followersCount.toLocaleString()}</span>
                    <span className="text-gray-400 font-exo">followers</span>
                  </div>
                  <div className="flex items-center gap-1 text-follow-secondary">
                    <Users className="h-4 w-4" />
                    <span className="font-orbitron">{user.followingCount.toLocaleString()}</span>
                    <span className="text-gray-400 font-exo">following</span>
                  </div>
                </div>
                
                {showFollowButton && (
                  <FollowButton 
                    user={user} 
                    variant="outline" 
                    size="sm" 
                  />
                )}
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
      transition={{ duration: 0.3 }}
      whileHover={{ y: -2 }}
    >
      {getCardContent()}
    </motion.div>
  );
};

export default UserCard; 