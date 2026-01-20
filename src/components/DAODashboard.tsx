import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, TrendingUp, FileText, Clock, CheckCircle, XCircle, RefreshCw, ExternalLink, Rocket, Star, Zap, Globe } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'framer-motion';

type Proposal = {
  id: number;
  title: string;
  status: 'active' | 'passed' | 'rejected';
  votesFor: number;
  votesAgainst: number;
  deadline: string;
  roadmapPhase?: string;
  description?: string;
  category?: string;
};

const DAODashboard: React.FC = () => {
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [selectedToken, setSelectedToken] = useState<string | null>(null);
  
  // AlienFlowSpace DAOs on Polygon
  const DAOS = [
    {
      name: 'AlienFlowSpace DAO',
      address: '0xCA497d631DB260ebFFF4bA71AEAc3201ae972a77',
      url: 'https://app.aragon.org/dao/polygon-mainnet/0xCA497d631DB260ebFFF4bA71AEAc3201ae972a77/dashboard',
      token: '$AFS'
    },
    {
      name: 'Alien69Flow DAO',
      address: '0x2A1F32A807b3f8a43F9473C1FA7d11881A579b16',
      url: 'https://app.aragon.org/dao/polygon-mainnet/0x2A1F32A807b3f8a43F9473C1FA7d11881A579b16/dashboard',
      token: '$A69F'
    }
  ];

  const [stats] = useState({
    activeVoters: 1618033,
    totalProposals: 47,
    votingPower: '3.14M',
    participationRate: 69
  });

  const [treasury] = useState([
    { name: 'AFS', value: 1000000, change: 5.2, color: '#22C55E', percentage: 61.5 },
    { name: 'A69', value: 500000, change: 3.8, color: '#F0D882', percentage: 30.8 },
    { name: 'POL', value: 50000, change: 2.5, color: '#8247E5', percentage: 3.1 },
    { name: 'ETH', value: 35000, change: 3.1, color: '#627EEA', percentage: 2.2 },
    { name: 'USDC', value: 25000, change: 0, color: '#2775CA', percentage: 1.5 },
    { name: 'ABTC', value: 15000, change: 4.2, color: '#F7931A', percentage: 0.9 }
  ]);

  // Enhanced proposals with roadmap integration
  const [proposals] = useState<Proposal[]>([
    { 
      id: 1, 
      title: 'Genesis Launch - DApp & Telegram Integration', 
      status: 'passed', 
      votesFor: 12450, 
      votesAgainst: 890, 
      deadline: '2025-09-30',
      roadmapPhase: 'Q3 2025',
      description: 'Deploy DApp and integrate Telegram Mini App for user accessibility',
      category: 'Development'
    },
    { 
      id: 2, 
      title: 'Ecosystem Integration Phase I - Strategic Alliances', 
      status: 'active', 
      votesFor: 8450, 
      votesAgainst: 1200, 
      deadline: '2026-03-15',
      roadmapPhase: 'Q4 2025',
      description: 'Collaborate with BioFi, DeFi, DePin, DeSci organizations',
      category: 'Partnerships'
    },
    { 
      id: 3, 
      title: 'UNESCO Partnership - Ecosystem Protection', 
      status: 'active', 
      votesFor: 9800, 
      votesAgainst: 2100, 
      deadline: '2026-02-28',
      roadmapPhase: 'Q4 2025',
      description: 'Partner with UNESCO to protect land and marine ecosystems',
      category: 'ReFi'
    },
    { 
      id: 4, 
      title: 'Phase II - Communication Bioecosystem Advancement', 
      status: 'active', 
      votesFor: 6800, 
      votesAgainst: 3400, 
      deadline: '2026-06-30',
      roadmapPhase: 'Q1 2026',
      description: 'Advance communication bioecosystem and energy efficiency',
      category: 'Research'
    },
    { 
      id: 5, 
      title: 'CoNetWorKing Mainnet - Token Distribution', 
      status: 'rejected', 
      votesFor: 4100, 
      votesAgainst: 7800, 
      deadline: '2027-06-30',
      roadmapPhase: 'Q2 2027',
      description: 'Launch airdrops with CrypTokens and exclusive NFTs',
      category: 'Tokenomics'
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdate(new Date());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    setLastUpdate(new Date());
  };

  const getTotalValue = () => {
    return treasury.reduce((sum, token) => sum + token.value, 0).toLocaleString('en-US', { maximumFractionDigits: 0 });
  };

  const getProposalStats = () => {
    const passed = proposals.filter(p => p.status === 'passed').length;
    const rejected = proposals.filter(p => p.status === 'rejected').length;
    const pending = proposals.filter(p => p.status === 'active').length;
    return { passed, rejected, pending };
  };

  const proposalStats = getProposalStats();

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Development': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Partnerships': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'ReFi': 'bg-green-500/20 text-green-400 border-green-500/30',
      'Research': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
      'Tokenomics': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
    };
    return colors[category] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  // Custom tooltip for pie chart
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-alien-space-dark/95 border border-alien-gold/40 rounded-lg p-3 shadow-xl backdrop-blur-sm">
          <p className="text-alien-gold font-nasalization font-bold">{data.name}</p>
          <p className="text-gray-300 font-exo text-sm">${data.value.toLocaleString()}</p>
          <p className="text-sm" style={{ color: data.change >= 0 ? '#22C55E' : '#EF4444' }}>
            {data.change >= 0 ? '+' : ''}{data.change}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-alien-green font-nasalization mb-2 flex items-center gap-3">
            <Rocket className="h-8 w-8 text-alien-gold animate-pulse" />
            DAO Dashboard
          </h2>
          <p className="text-gray-400 text-sm font-exo">
            Last updated: {lastUpdate.toLocaleTimeString()}
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {DAOS.map((dao) => (
            <Button
              key={dao.address}
              onClick={() => window.open(dao.url, '_blank')}
              className="bg-alien-gold/20 hover:bg-alien-gold/30 text-alien-gold border border-alien-gold/50 text-xs"
              size="sm"
            >
              <ExternalLink className="h-3 w-3 mr-1" />
              {dao.token}
            </Button>
          ))}
          <Button
            onClick={() => window.open('https://alienflowspace.gitbook.io/DAO', '_blank')}
            className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 border border-blue-500/50 text-xs"
            size="sm"
          >
            <FileText className="h-3 w-3 mr-1" />
            Docs
          </Button>
          <Button
            onClick={handleRefresh}
            className="bg-alien-green/20 hover:bg-alien-green/30 text-alien-green border border-alien-green/50"
            size="sm"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: Users, label: 'Active Voters', value: stats.activeVoters.toLocaleString(), sub: `${stats.participationRate}% participation`, color: 'alien-gold' },
          { icon: TrendingUp, label: 'Voting Power', value: stats.votingPower, sub: 'Total governance tokens', color: 'alien-green' },
          { icon: FileText, label: 'Total Proposals', value: stats.totalProposals.toString(), sub: `${proposalStats.passed} passed · ${proposalStats.rejected} rejected`, color: 'alien-gold' },
          { icon: Clock, label: 'Active Proposals', value: proposalStats.pending.toString(), sub: 'Awaiting community vote', color: 'alien-green' }
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className={`bg-alien-space-dark/80 backdrop-blur-md border-${stat.color}/30 hover:border-${stat.color}/60 transition-all duration-300`}>
              <CardHeader className="pb-2">
                <CardTitle className="text-xs font-medium text-gray-400 flex items-center gap-2 font-exo">
                  <stat.icon className="h-4 w-4" />
                  {stat.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`text-2xl lg:text-3xl font-bold text-${stat.color} font-nasalization`}>
                  {stat.value}
                </div>
                <p className="text-xs text-gray-500 mt-1 font-exo">{stat.sub}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Treasury Section - Enhanced Pie Chart */}
      <Card className="bg-alien-space-dark/80 backdrop-blur-md border-alien-gold/30">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle className="text-alien-gold font-nasalization flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Treasury Balance
              </CardTitle>
              <p className="text-3xl font-bold text-gray-100 mt-2 font-nasalization">
                ${getTotalValue()}
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => window.open('https://polygonscan.com/address/0xCA497d631DB260ebFFF4bA71AEAc3201ae972a77', '_blank')}
                variant="outline"
                size="sm"
                className="border-alien-gold/50 text-alien-gold hover:bg-alien-gold/10 text-xs"
              >
                <ExternalLink className="h-3 w-3 mr-1" />
                View on Explorer
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Enhanced Pie Chart */}
            <div className="relative">
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={treasury}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                    onMouseEnter={(_, idx) => setSelectedToken(treasury[idx].name)}
                    onMouseLeave={() => setSelectedToken(null)}
                  >
                    {treasury.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color}
                        stroke={selectedToken === entry.name ? '#fff' : 'transparent'}
                        strokeWidth={2}
                        style={{
                          filter: selectedToken === entry.name ? 'brightness(1.2)' : 'none',
                          cursor: 'pointer'
                        }}
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              {/* Center label */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <p className="text-alien-gold font-nasalization text-lg font-bold">
                    {selectedToken || 'Total'}
                  </p>
                  <p className="text-gray-400 text-sm font-exo">
                    {selectedToken 
                      ? `${treasury.find(t => t.name === selectedToken)?.percentage}%`
                      : '100%'
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Token Legend with details */}
            <div className="space-y-3">
              {treasury.map((token, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`flex items-center justify-between p-3 rounded-lg border transition-all duration-300 cursor-pointer ${
                    selectedToken === token.name 
                      ? 'bg-alien-space-light/40 border-alien-gold/50' 
                      : 'bg-alien-space-light/20 border-transparent hover:bg-alien-space-light/30'
                  }`}
                  onMouseEnter={() => setSelectedToken(token.name)}
                  onMouseLeave={() => setSelectedToken(null)}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full shadow-lg"
                      style={{ backgroundColor: token.color, boxShadow: `0 0 10px ${token.color}50` }}
                    />
                    <div>
                      <span className="text-gray-200 font-nasalization font-semibold">{token.name}</span>
                      <p className="text-xs text-gray-500 font-exo">${token.value.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`text-sm font-semibold ${token.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {token.change >= 0 ? '+' : ''}{token.change}%
                    </span>
                    <p className="text-xs text-gray-500 font-exo">{token.percentage}%</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Roadmap-Integrated Proposals */}
      <Card className="bg-alien-space-dark/80 backdrop-blur-md border-alien-gold/30">
        <CardHeader>
          <CardTitle className="text-alien-gold font-nasalization flex items-center gap-2">
            <Star className="h-5 w-5" />
            Roadmap Proposals
          </CardTitle>
          <p className="text-gray-400 text-sm font-exo">Community-driven milestones aligned with AlienTrip roadmap</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {proposals.map((proposal, idx) => (
              <motion.div 
                key={proposal.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="border border-alien-gold/20 rounded-xl p-5 hover:border-alien-gold/40 transition-all bg-gradient-to-r from-transparent to-alien-space-light/10"
              >
                {/* Header with roadmap phase */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {proposal.roadmapPhase && (
                    <span className="px-2 py-1 text-xs bg-alien-gold/20 text-alien-gold rounded-full border border-alien-gold/30 font-nasalization">
                      {proposal.roadmapPhase}
                    </span>
                  )}
                  {proposal.category && (
                    <span className={`px-2 py-1 text-xs rounded-full border ${getCategoryColor(proposal.category)}`}>
                      {proposal.category}
                    </span>
                  )}
                  {proposal.status === 'active' && (
                    <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 flex items-center gap-1">
                      <Zap className="h-3 w-3" />
                      Active
                    </span>
                  )}
                  {proposal.status === 'passed' && (
                    <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full border border-green-500/30 flex items-center gap-1">
                      <CheckCircle className="h-3 w-3" />
                      Passed
                    </span>
                  )}
                  {proposal.status === 'rejected' && (
                    <span className="px-2 py-1 text-xs bg-red-500/20 text-red-400 rounded-full border border-red-500/30 flex items-center gap-1">
                      <XCircle className="h-3 w-3" />
                      Rejected
                    </span>
                  )}
                </div>

                {/* Title and description */}
                <h4 className="font-semibold text-gray-100 text-lg font-nasalization mb-2">{proposal.title}</h4>
                {proposal.description && (
                  <p className="text-gray-400 text-sm font-exo mb-4">{proposal.description}</p>
                )}

                {/* Votes and progress */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                      <span className="flex items-center gap-1">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="font-semibold text-green-400">{proposal.votesFor.toLocaleString()}</span> For
                      </span>
                      <span className="flex items-center gap-1">
                        <XCircle className="h-4 w-4 text-red-400" />
                        <span className="font-semibold text-red-400">{proposal.votesAgainst.toLocaleString()}</span> Against
                      </span>
                      {proposal.status === 'active' && (
                        <span className="flex items-center gap-1 text-gray-500">
                          <Clock className="h-4 w-4" />
                          Ends {new Date(proposal.deadline).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                    {/* Progress bar */}
                    <div className="w-full bg-gray-700/50 rounded-full h-2.5 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${(proposal.votesFor / (proposal.votesFor + proposal.votesAgainst)) * 100}%` }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        className="bg-gradient-to-r from-green-500 to-alien-green h-full rounded-full"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1 font-exo">
                      {Math.round((proposal.votesFor / (proposal.votesFor + proposal.votesAgainst)) * 100)}% approval
                    </p>
                  </div>
                  {proposal.status === 'active' && (
                    <div className="flex gap-2">
                      <Button 
                        size="sm"
                        className="bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/50"
                      >
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Vote For
                      </Button>
                      <Button 
                        size="sm"
                        className="bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/50"
                      >
                        <XCircle className="h-4 w-4 mr-1" />
                        Against
                      </Button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* View more link */}
          <div className="mt-6 text-center">
            <Button
              onClick={() => window.open('https://app.aragon.org/dao/polygon-mainnet/0xCA497d631DB260ebFFF4bA71AEAc3201ae972a77/governance', '_blank')}
              variant="outline"
              className="border-alien-gold/50 text-alien-gold hover:bg-alien-gold/10"
            >
              View All Proposals on Aragon
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DAODashboard;
