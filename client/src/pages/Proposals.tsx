import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Filter, 
  CheckCircle2, 
  Clock, 
  XCircle,
  ArrowRight,
  User,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const INITIAL_PROPOSALS = [
  { 
    id: 1, 
    title: 'Upgrading Salem Hub with High-Efficiency Block Nodes', 
    status: 'Active', 
    type: 'Infrastructure', 
    author: 'Admin Ramesh', 
    votesFor: 240, 
    votesAgainst: 40, 
    endsIn: '2d 4h',
    quorum: '84%'
  },
  { 
    id: 2, 
    title: 'New Scholarship Program for Coimbatore Engineering Cohort', 
    status: 'Active', 
    type: 'Education', 
    author: 'Dr. Sarah', 
    votesFor: 480, 
    votesAgainst: 20, 
    endsIn: '5d 12h',
    quorum: '92%'
  },
  { 
    id: 3, 
    title: 'Partnership with Tamil Nadu Tech Hub for Internship Connect', 
    status: 'Passed', 
    type: 'Partnership', 
    author: 'Governing Council', 
    votesFor: 1200, 
    votesAgainst: 100, 
    endsIn: 'Closed',
    quorum: '100%'
  },
  { 
    id: 4, 
    title: 'Modify DAO Quorum from 15% to 20% for Security', 
    status: 'Defeated', 
    type: 'Governance', 
    author: 'Security Lead', 
    votesFor: 80, 
    votesAgainst: 520, 
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
  const [proposalsList, setProposalsList] = useState(INITIAL_PROPOSALS);
  const [votedIds, setVotedIds] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProposals = proposalsList.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleVote = (id: number, type: 'FOR' | 'AGAINST') => {
    if (votedIds.includes(id)) return;
    
    setProposalsList(prev => prev.map(p => {
      if (p.id === id) {
        return {
          ...p,
          votesFor: type === 'FOR' ? p.votesFor + 1 : p.votesFor,
          votesAgainst: type === 'AGAINST' ? p.votesAgainst + 1 : p.votesAgainst
        };
      }
      return p;
    }));
    setVotedIds([...votedIds, id]);
  };

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-['Outfit'] font-bold underline italic">Decision Center</h1>
          <p className="text-slate-500 mt-2 font-medium italic underline">Vote on institutional policies and community-driven initiatives.</p>
        </div>
        <Link to="/proposals/create" className="btn-primary">
          <Plus size={20} />
          Propose Initiative
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input 
            type="text" 
            placeholder="Search by ID, title, or author..." 
            className="input-field pl-12"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button className="btn-secondary">
          <Filter size={18} />
          Filter
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProposals.map((proposal) => {
            const StatusIcon = statusConfig[proposal.status].icon;
            const hasVoted = votedIds.includes(proposal.id);
            const totalVotes = proposal.votesFor + proposal.votesAgainst;
            const forPercentage = (proposal.votesFor / totalVotes) * 100;

            return (
              <motion.div
                key={proposal.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className={`glass-card group hover:bg-white/[0.03] transition-all border-white/5 ${hasVoted ? 'border-primary-500/20' : ''}`}
              >
                <div className="p-6 md:p-8 flex flex-col xl:flex-row items-start xl:items-center gap-8">
                  <div className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-2xl border border-white/10 w-full xl:w-24 shrink-0 transition-all group-hover:bg-primary-500/5 group-hover:border-primary-500/20">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Init</span>
                    <span className="text-2xl font-bold">#{proposal.id}</span>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1.5 ${statusConfig[proposal.status].bg} ${statusConfig[proposal.status].color}`}>
                        <StatusIcon size={12} />
                        {proposal.status}
                      </span>
                      <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-400 font-bold tracking-widest uppercase">
                        {proposal.type}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium italic">
                        <User size={12} />
                        {proposal.author}
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-['Outfit'] font-bold group-hover:text-primary-400 transition-colors leading-snug underline-offset-4 decoration-primary-500/20">
                      {proposal.title}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 w-full xl:w-auto">
                    <div className="flex-1 min-w-[200px] space-y-3">
                      <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-1.5">
                         <span className="text-emerald-400">{proposal.votesFor} For</span>
                         <span className="text-rose-400">{proposal.votesAgainst} Against</span>
                      </div>
                      <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden flex shadow-inner">
                        <div className="bg-emerald-500 h-full transition-all duration-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]" style={{ width: `${forPercentage}%` }}></div>
                        <div className="bg-rose-500 h-full transition-all duration-500" style={{ width: `${100 - forPercentage}%` }}></div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                       {proposal.status === 'Active' && !hasVoted ? (
                         <>
                           <button 
                            onClick={() => handleVote(proposal.id, 'FOR')}
                            className="p-3 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 rounded-xl text-emerald-400 transition-all flex items-center gap-2 group/btn"
                           >
                             <ThumbsUp size={18} className="group-hover/btn:-translate-y-1 transition-transform" />
                             <span className="text-xs font-bold sm:hidden">Vote For</span>
                           </button>
                           <button 
                            onClick={() => handleVote(proposal.id, 'AGAINST')}
                            className="p-3 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 rounded-xl text-rose-400 transition-all flex items-center gap-2 group/btn"
                           >
                             <ThumbsDown size={18} className="group-hover/btn:translate-y-1 transition-transform" />
                             <span className="text-xs font-bold sm:hidden">Vote Against</span>
                           </button>
                         </>
                       ) : (
                         <div className="flex items-center gap-2 px-4 py-2.5 bg-white/5 rounded-xl border border-white/10 text-slate-500 text-xs font-bold">
                            {hasVoted ? 'Voted ✅' : 'Governance Closed'}
                         </div>
                       )}
                    </div>

                    <div className="hidden sm:block w-[1px] h-10 bg-white/5"></div>

                    <div className="flex flex-col items-end justify-center">
                      <p className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-1">{proposal.endsIn.includes('d') ? 'Deadline' : 'Status'}</p>
                      <p className="text-sm font-bold text-primary-400 italic">{proposal.endsIn}</p>
                    </div>

                    <ArrowRight size={20} className="text-slate-700 group-hover:text-primary-500 transition-all group-hover:translate-x-1 hidden xl:block" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Proposals;
