import React, { useState } from 'react';
import { motion } from 'framer-motion';
import StarBackground from '@/components/StarBackground';
import UserCard from '@/components/UserCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Star, TrendingUp, Award, Zap } from 'lucide-react';
import type { User } from '@/lib/types';

// Sample user data
const sampleUsers: User[] = [
  {
    id: '1',
    username: 'alice_crypto',
    displayName: 'Alice Crypto',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    bio: 'DeFi enthusiast and blockchain developer. Building the future of decentralized finance.',
    location: 'San Francisco, CA',
    website: 'https://alicecrypto.dev',
    joinedAt: new Date('2022-01-15'),
    followersCount: 15420,
    followingCount: 892,
    isVerified: true,
    badges: [
      { id: '1', name: 'DeFi Pioneer', icon: '🏆', color: '#F0D882', description: 'Early DeFi adopter' },
      { id: '2', name: 'Code Master', icon: '💻', color: '#22C55E', description: 'Top contributor' }
    ],
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com/alice_crypto', username: '@alice_crypto' },
      { platform: 'github', url: 'https://github.com/alicecrypto', username: 'alicecrypto' }
    ]
  },
  {
    id: '2',
    username: 'bob_defi',
    displayName: 'Bob DeFi',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    bio: 'Yield farming expert and liquidity provider. Always hunting for the best APY opportunities.',
    location: 'New York, NY',
    website: 'https://bobdefi.com',
    joinedAt: new Date('2021-08-22'),
    followersCount: 8920,
    followingCount: 445,
    isVerified: true,
    badges: [
      { id: '3', name: 'Yield Hunter', icon: '🌾', color: '#22C55E', description: 'Yield farming expert' },
      { id: '4', name: 'Liquidity King', icon: '💧', color: '#3B82F6', description: 'Top liquidity provider' }
    ],
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com/bob_defi', username: '@bob_defi' },
      { platform: 'discord', url: 'https://discord.gg/bobdefi', username: 'bob_defi#1234' }
    ]
  },
  {
    id: '3',
    username: 'crypto_carol',
    displayName: 'Carol Blockchain',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    bio: 'NFT artist and metaverse explorer. Creating digital art for the blockchain era.',
    location: 'Los Angeles, CA',
    website: 'https://cryptocarol.art',
    joinedAt: new Date('2023-03-10'),
    followersCount: 23450,
    followingCount: 1234,
    isVerified: true,
    badges: [
      { id: '5', name: 'NFT Creator', icon: '🎨', color: '#EC4899', description: 'Digital artist' },
      { id: '6', name: 'Metaverse Explorer', icon: '🌐', color: '#8B5CF6', description: 'Virtual world pioneer' }
    ],
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com/crypto_carol', username: '@crypto_carol' },
      { platform: 'instagram', url: 'https://instagram.com/cryptocarol', username: '@cryptocarol' }
    ]
  },
  {
    id: '4',
    username: 'dave_miner',
    displayName: 'Dave Miner',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    bio: 'Mining enthusiast and hardware expert. Building efficient mining rigs for the future.',
    location: 'Austin, TX',
    website: 'https://daveminer.tech',
    joinedAt: new Date('2020-11-05'),
    followersCount: 5670,
    followingCount: 234,
    isVerified: false,
    badges: [
      { id: '7', name: 'Mining Expert', icon: '⛏️', color: '#F59E0B', description: 'Hardware specialist' }
    ],
    socialLinks: [
      { platform: 'github', url: 'https://github.com/daveminer', username: 'daveminer' },
      { platform: 'telegram', url: 'https://t.me/daveminer', username: '@daveminer' }
    ]
  }
];

const FollowDemo: React.FC = () => {
  const [selectedVariant, setSelectedVariant] = useState<'default' | 'compact' | 'detailed'>('default');
  const [showStats, setShowStats] = useState(true);

  const totalFollowers = sampleUsers.reduce((sum, user) => sum + user.followersCount, 0);
  const totalFollowing = sampleUsers.reduce((sum, user) => sum + user.followingCount, 0);
  const verifiedUsers = sampleUsers.filter(user => user.isVerified).length;

  return (
    <div className="relative flex flex-col flex-1 min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -20 }}>
        <StarBackground />
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-orbitron text-4xl md:text-5xl text-follow-primary mb-4">
            Follow System Demo
          </h1>
          <p className="text-lg text-gray-300 font-exo max-w-2xl mx-auto">
            Experience the cosmic follow functionality with WCAG contrast-checked design and modular scale typography.
          </p>
        </motion.div>

        {/* Stats Overview */}
        {showStats && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <Card className="bg-gradient-to-br from-alien-space-dark/80 to-alien-space/60 backdrop-blur-md border border-alien-gold/20">
              <CardHeader>
                <CardTitle className="font-orbitron text-2xl text-follow-primary text-center">
                  Community Statistics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Users className="h-8 w-8 text-follow-primary" />
                    </div>
                    <div className="font-orbitron text-2xl text-follow-primary mb-1">
                      {totalFollowers.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-400 font-exo">Total Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <TrendingUp className="h-8 w-8 text-follow-secondary" />
                    </div>
                    <div className="font-orbitron text-2xl text-follow-secondary mb-1">
                      {totalFollowing.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-400 font-exo">Total Following</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Award className="h-8 w-8 text-follow-accent" />
                    </div>
                    <div className="font-orbitron text-2xl text-follow-accent mb-1">
                      {verifiedUsers}
                    </div>
                    <div className="text-sm text-gray-400 font-exo">Verified Users</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Zap className="h-8 w-8 text-follow-success" />
                    </div>
                    <div className="font-orbitron text-2xl text-follow-success mb-1">
                      {sampleUsers.length}
                    </div>
                    <div className="text-sm text-gray-400 font-exo">Active Members</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center mb-8"
        >
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400 font-exo">Card Variant:</span>
            <div className="flex gap-2">
              {(['default', 'compact', 'detailed'] as const).map((variant) => (
                <Button
                  key={variant}
                  variant={selectedVariant === variant ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedVariant(variant)}
                  className="font-orbitron text-xs"
                >
                  {variant.charAt(0).toUpperCase() + variant.slice(1)}
                </Button>
              ))}
            </div>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowStats(!showStats)}
            className="font-orbitron text-xs"
          >
            {showStats ? 'Hide' : 'Show'} Stats
          </Button>
        </motion.div>

        {/* User Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {sampleUsers.map((user, index) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <UserCard
                user={user}
                variant={selectedVariant}
                showFollowButton={true}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Features Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-br from-alien-space-dark/90 to-alien-space/70 backdrop-blur-md border border-alien-gold/30">
            <CardHeader>
              <CardTitle className="font-orbitron text-2xl text-follow-primary text-center">
                Design Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-follow-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔤</span>
                  </div>
                  <h3 className="font-orbitron text-lg text-follow-primary mb-2">Orbitron Typography</h3>
                  <p className="text-sm text-gray-400 font-exo">
                    Techno-style headers using Orbitron font for futuristic aesthetics
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-follow-secondary/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h3 className="font-orbitron text-lg text-follow-secondary mb-2">WCAG Compliant</h3>
                  <p className="text-sm text-gray-400 font-exo">
                    Contrast-checked color palette ensuring accessibility standards
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-follow-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📏</span>
                  </div>
                  <h3 className="font-orbitron text-lg text-follow-accent mb-2">Modular Scale</h3>
                  <p className="text-sm text-gray-400 font-exo">
                    Consistent typography scale for harmonious visual hierarchy
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default FollowDemo; 