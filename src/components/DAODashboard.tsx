import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, TrendingUp, FileText, Clock, CheckCircle, XCircle, RefreshCw, ExternalLink } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

type Proposal = {
  id: number;
  title: string;
  status: 'active' | 'passed' | 'rejected';
  votesFor: number;
  votesAgainst: number;
  deadline: string;
};

const DAODashboard: React.FC = () => {
  const [lastUpdate, setLastUpdate] = useState(new Date());
  
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

  // Mock data - In production, fetch from blockchain
  const [stats] = useState({
    activeVoters: 1618033,
    totalProposals: 2025,
    votingPower: '3.14M',
    participationRate: 69
  });

  const [treasury] = useState([
    { name: 'MATIC', value: 50000, change: 2.5, color: '#8247E5' },
    { name: '$AFS', value: 1000000, change: 5.2, color: '#22C55E' },
    { name: '$A69F', value: 500000, change: 3.8, color: '#F0D882' },
    { name: 'USDC', value: 25000, change: 0, color: '#2775CA' }
  ]);

  const [proposals] = useState<Proposal[]>([
    { id: 1, title: 'Expand Academy Programs', status: 'active', votesFor: 8450, votesAgainst: 1200, deadline: '2025-12-15' },
    { id: 2, title: 'Partner with ESL Gaming', status: 'active', votesFor: 6800, votesAgainst: 3400, deadline: '2025-12-10' },
    { id: 3, title: 'Launch ReFi Initiative', status: 'passed', votesFor: 9200, votesAgainst: 890, deadline: '2025-11-30' },
    { id: 4, title: 'Increase Treasury APY', status: 'rejected', votesFor: 4100, votesAgainst: 7800, deadline: '2025-11-28' }
  ]);

  const [votingData] = useState([
    { month: 'Aug', proposals: 12, votes: 45000 },
    { month: 'Sep', proposals: 15, votes: 52000 },
    { month: 'Oct', proposals: 18, votes: 61000 },
    { month: 'Nov', proposals: 21, votes: 68000 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdate(new Date());
    }, 30000); // Auto-refresh every 30 seconds

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

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-alien-green font-nasalization mb-2">
            DAO Dashboard
          </h2>
          <p className="text-gray-400 text-sm">
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
              {dao.name}
            </Button>
          ))}
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-alien-space-dark/80 backdrop-blur-md border-alien-gold/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-400 flex items-center gap-2">
              <Users className="h-4 w-4" />
              Active Voters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-alien-gold font-nasalization">
              {stats.activeVoters.toLocaleString()}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {stats.participationRate}% participation rate
            </p>
          </CardContent>
        </Card>

        <Card className="bg-alien-space-dark/80 backdrop-blur-md border-alien-green/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-400 flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Voting Power
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-alien-green font-nasalization">
              {stats.votingPower}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Total governance tokens
            </p>
          </CardContent>
        </Card>

        <Card className="bg-alien-space-dark/80 backdrop-blur-md border-alien-gold/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-400 flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Total Proposals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-alien-gold font-nasalization">
              {stats.totalProposals}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {proposalStats.passed} passed · {proposalStats.rejected} rejected
            </p>
          </CardContent>
        </Card>

        <Card className="bg-alien-space-dark/80 backdrop-blur-md border-alien-green/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-400 flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Active Proposals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-alien-green font-nasalization">
              {proposalStats.pending}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Awaiting community vote
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Treasury & Voting Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Treasury Balance */}
        <Card className="bg-alien-space-dark/80 backdrop-blur-md border-alien-gold/30">
          <CardHeader>
            <CardTitle className="text-alien-gold font-nasalization">
              Treasury Balance
            </CardTitle>
            <p className="text-2xl font-bold text-gray-200 mt-2">
              ${getTotalValue()}
            </p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={treasury}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry) => `${entry.name}: $${entry.value.toLocaleString()}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {treasury.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {treasury.map((token, idx) => (
                <div key={idx} className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">{token.name}</span>
                  <span className={token.change >= 0 ? 'text-green-400' : 'text-red-400'}>
                    {token.change >= 0 ? '+' : ''}{token.change}%
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Voting Activity */}
        <Card className="bg-alien-space-dark/80 backdrop-blur-md border-alien-green/30">
          <CardHeader>
            <CardTitle className="text-alien-green font-nasalization">
              Voting Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={votingData}>
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(17, 17, 25, 0.95)', 
                    border: '1px solid rgba(240, 216, 130, 0.3)',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Bar dataKey="proposals" fill="#F0D882" name="Proposals" />
                <Bar dataKey="votes" fill="#22C55E" name="Total Votes" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Active Proposals */}
      <Card className="bg-alien-space-dark/80 backdrop-blur-md border-alien-gold/30">
        <CardHeader>
          <CardTitle className="text-alien-gold font-nasalization">
            Recent Proposals
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {proposals.map((proposal) => (
              <div 
                key={proposal.id}
                className="border border-alien-gold/20 rounded-lg p-4 hover:border-alien-gold/40 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-semibold text-gray-200">{proposal.title}</h4>
                      {proposal.status === 'active' && (
                        <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
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
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        {proposal.votesFor.toLocaleString()} For
                      </span>
                      <span className="flex items-center gap-1">
                        <XCircle className="h-4 w-4 text-red-400" />
                        {proposal.votesAgainst.toLocaleString()} Against
                      </span>
                      {proposal.status === 'active' && (
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          Ends {new Date(proposal.deadline).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                    {/* Progress bar */}
                    <div className="mt-3 w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-400 to-alien-green h-2 rounded-full"
                        style={{ 
                          width: `${(proposal.votesFor / (proposal.votesFor + proposal.votesAgainst)) * 100}%` 
                        }}
                      />
                    </div>
                  </div>
                  {proposal.status === 'active' && (
                    <div className="flex gap-2">
                      <Button 
                        size="sm"
                        className="bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/50"
                      >
                        Vote For
                      </Button>
                      <Button 
                        size="sm"
                        className="bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/50"
                      >
                        Vote Against
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DAODashboard;
