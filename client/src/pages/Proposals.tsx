import { motion } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Filter, 
  CheckCircle2, 
  Clock, 
  XCircle,
  ArrowRight,
  User,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';

const proposals = [
  { 
    id: 1, 
    title: 'Allocating 500 ETH to Liquidity Incentive Program', 
    status: 'Active', 
    type: 'Treasury', 
    author: 'vitalik.eth', 
    votesFor: '2.4M', 
    votesAgainst: '400K', 
    endsIn: '2d 4h',
    quorum: '84%'
  },
  { 
    id: 2, 
    title: 'Upgrade Governance Contract to V2 (Multi-chain support)', 
    status: 'Queued', 
    type: 'Upgrade', 
    author: '0x71C...4f2', 
    votesFor: '4.8M', 
    votesAgainst: '20K', 
    endsIn: 'Execution Ready',
    quorum: '92%'
  },
  { 
    id: 3, 
    title: 'Partnership with StarkNet for Layer 2 scaling integrations', 
    status: 'Passed', 
    type: 'Partnership', 
    author: 'foundation.eth', 
    votesFor: '1.2M', 
    votesAgainst: '100K', 
    endsIn: 'Closed',
    quorum: '100%'
  },
  { 
    id: 4, 
    title: 'Decrease Voting Delay from 2 days to 1 day', 
    status: 'Defeated', 
    type: 'Parameter', 
    author: 'chaoslabs.eth', 
    votesFor: '800K', 
    votesAgainst: '5.2M', 
    endsIn: 'Closed',
    quorum: '34%'
  },
];

const statusConfig: any = {
  Active: { color: 'text-emerald-400', bg: 'bg-emerald-500/10', icon: Clock },
  Queued: { color: 'text-primary-400', bg: 'bg-primary-500/10', icon: CheckCircle2 },
  Passed: { color: 'text-emerald-400', bg: 'bg-emerald-500/10', icon: CheckCircle2 },
  Defeated: { color: 'text-rose-400', bg: 'bg-rose-500/10', icon: XCircle },
};

const Proposals = () => {
  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl">Governance Proposals</h1>
          <p className="text-slate-500 mt-2 font-medium">Community-driven initiatives and decision making</p>
        </div>
        <Link to="/proposals/create" className="btn-primary">
          <Plus size={20} />
          Create New Proposal
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input 
            type="text" 
            placeholder="Search by ID, title, or author..." 
            className="input-field pl-12"
          />
        </div>
        <button className="btn-secondary">
          <Filter size={18} />
          Filter
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {proposals.map((proposal, idx) => {
          const StatusIcon = statusConfig[proposal.status].icon;
          return (
            <motion.div
              key={proposal.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="glass-card group hover:bg-white/10 transition-all border-white/5"
            >
              <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-2xl border border-white/10 w-full md:w-24">
                  <span className="text-xs font-bold text-slate-500 uppercase">Prop</span>
                  <span className="text-2xl font-bold">#{proposal.id}</span>
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 ${statusConfig[proposal.status].bg} ${statusConfig[proposal.status].color}`}>
                      <StatusIcon size={12} />
                      {proposal.status}
                    </span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-400 font-medium tracking-wide first-letter:uppercase">
                      {proposal.type}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      <User size={12} />
                      {proposal.author}
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl group-hover:text-primary-400 transition-colors leading-snug">
                    {proposal.title}
                  </h3>
                </div>

                <div className="w-full md:w-auto h-[1px] md:h-12 md:w-[1px] bg-white/10"></div>

                <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-4 w-full md:w-auto min-w-[140px]">
                  <div className="text-right">
                    <p className="text-sm font-semibold text-white">{proposal.votesFor} For</p>
                    <div className="w-24 bg-white/5 h-1.5 rounded-full mt-1.5 overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">{proposal.endsIn.includes('d') ? 'Ends in' : 'Stage'}</p>
                    <p className="text-sm font-bold text-slate-300">{proposal.endsIn}</p>
                  </div>
                </div>

                <div className="self-stretch flex items-center">
                  <ArrowRight size={20} className="text-slate-700 group-hover:text-primary-500 transition-all group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Proposals;
