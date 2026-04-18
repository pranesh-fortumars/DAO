import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Star,
  ArrowRight,
  BookOpen,
  Trophy
} from 'lucide-react';

const upcomingExams = [
  { id: 'EX-101', title: 'Blockchain Fundamentals', date: 'April 25, 2026', time: '10:00 AM', venue: 'Virtual Hall A', quorum: '85% Registered' },
  { id: 'EX-102', title: 'Smart Contract Design', date: 'May 02, 2026', time: '02:00 PM', venue: 'Innovation Lab', quorum: '92% Registered' },
  { id: 'EX-103', title: 'DeFi Protocols', date: 'May 10, 2026', time: '11:30 AM', venue: 'Main Auditorium', quorum: '45% Registered' },
];

const results = [
  { id: 'RES-99', title: 'Layer 2 Solutions', grade: 'A+', percentile: 99, status: 'Verified on DAO', tokens: 150 },
  { id: 'RES-98', title: 'Web3 Identity', grade: 'A', percentile: 94, status: 'Verified on DAO', tokens: 100 },
];

const Examinations = () => {
  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-['Outfit'] font-bold underline italic">Examination Center</h1>
          <p className="text-slate-500 mt-2 font-medium italic underline">Standardized assessments and on-chain verified results from Anna Univ Sync.</p>
        </div>
        <button className="btn-primary">
          <BookOpen size={18} />
          View My Hall Ticket
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Calendar className="text-primary-400" size={24} />
              Upcoming Schedule
            </h2>
          </div>
          <div className="space-y-4">
            {upcomingExams.map((exam, idx) => (
              <motion.div
                key={exam.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 glass-card-hover border-white/5 flex flex-col md:flex-row items-center justify-between gap-6"
              >
                <div className="flex items-center gap-5 w-full md:w-auto">
                  <div className="w-14 h-14 bg-primary-600/10 rounded-2xl flex flex-col items-center justify-center border border-primary-500/20">
                    <span className="text-xs font-bold text-primary-400 uppercase leading-none mb-1">Apr</span>
                    <span className="text-xl font-bold text-white leading-none">25</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">{exam.title}</h4>
                    <div className="flex flex-wrap gap-4 mt-2">
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                        <Clock size={14} />
                        {exam.time}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                        <ShieldCheck size={14} className="text-emerald-500" />
                        {exam.venue}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 w-full md:w-auto justify-between">
                   <div className="text-right">
                     <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Status</p>
                     <p className="text-sm font-bold text-primary-400">{exam.quorum}</p>
                   </div>
                   <button className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-slate-400 hover:text-white transition-all">
                     <ArrowRight size={20} />
                   </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Trophy className="text-accent-400" size={24} />
            Recent Merits
          </h2>
          <div className="space-y-4">
            {results.map((result) => (
              <div key={result.id} className="glass-card p-6 border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-accent-500/10 rounded-full -mr-8 -mt-8"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{result.id}</span>
                    <div className="flex items-center gap-1 text-accent-400">
                      <Star size={14} fill="currentColor" />
                      <span className="text-sm font-bold">{result.grade}</span>
                    </div>
                  </div>
                  <h4 className="font-bold text-lg mb-2">{result.title}</h4>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                      <ShieldCheck size={12} />
                      {result.status}
                    </div>
                    <div className="text-xs font-bold text-primary-400">
                      +{result.tokens} GDAO
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full py-4 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white bg-white/5 hover:bg-white/10 rounded-2xl border border-dashed border-white/10 transition-all mt-4">
            Download Historical Records
          </button>
        </div>
      </div>
    </div>
  );
};

export default Examinations;
