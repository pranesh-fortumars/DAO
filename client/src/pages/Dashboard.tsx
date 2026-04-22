import { 
  Users, 
  Vote, 
  Zap,
  ShieldCheck,
  CreditCard,
  GraduationCap,
  Calendar,
  MapPin,
  Flame,
  Globe,
  Trophy,
  Star,
  Award
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../AuthContext';

const Dashboard = () => {
  const { role, user } = useAuth();

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-500 mb-3 block text-gradient-primary">Institutional Command Center</span>
          <h1 className="text-5xl font-['Outfit'] font-bold tracking-tight">Kalam DAO Dashboard</h1>
          <p className="text-slate-400 mt-3 font-medium text-lg">Oversee regional academic operations and governance consensus.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2.5 px-5 py-2.5 bg-primary-500/5 border border-primary-500/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-primary-500 backdrop-blur-md">
            <MapPin size={14} className="animate-pulse" />
            Tamil Nadu • Chennai
          </div>
          <button className="btn-primary">Audit Records</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard 
          label="Trust Score" 
          value="99.2" 
          change="+0.8%" 
          icon={<ShieldCheck className="text-emerald-400" />} 
          description="Verification consensus active"
          sparkline={[40, 20, 50, 40, 80, 60, 95]}
        />
        <StatCard 
          label="Active Mentors" 
          value="156" 
          change="+12" 
          icon={<Users className="text-primary-400" />} 
          description="Institutional verified staff"
          sparkline={[20, 30, 25, 45, 40, 55, 60]}
        />
        <StatCard 
          label="Treasury TVL" 
          value="1.2M GDAO" 
          change="+$45k" 
          icon={<CreditCard className="text-accent-400" />} 
          description="Liquidity pool health: 100%"
          sparkline={[60, 50, 70, 60, 80, 75, 90]}
        />
        <StatCard 
          label="Quorum Active" 
          value="84%" 
          change="+5%" 
          icon={<Vote className="text-rose-400" />} 
          description="Proposal consensus limit"
          sparkline={[30, 40, 35, 50, 45, 70, 84]}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Dynamic Role Card */}
          {role === 'ADMIN' && (
            <RoleSpecificCard 
              title="Administrator Control"
              subtitle="Identity & Security Management"
              icon={<Zap className="text-amber-400" />}
              stats={[
                { label: 'Security Level', value: 'Alpha' },
                { label: 'System Nodes', value: '24' }
              ]}
              action="Manage Nodes"
            />
          )}
          {role === 'MENTOR' && (
            <RoleSpecificCard 
              title="Mentor Dashboard"
              subtitle="Student Performance & Grants"
              icon={<GraduationCap className="text-primary-400" />}
              stats={[
                { label: 'Avg Attendance', value: '94.2%' },
                { label: 'Approved Grants', value: '₹12.4L' }
              ]}
              action="Grade Students"
            />
          )}
          {['SCHOOL', 'USER', 'STUDENT'].includes(role || '') && (
            <RoleSpecificCard 
              title="Institutional Portal"
              subtitle="Campus Resources & Voting"
              icon={<Globe className="text-emerald-400" />}
              stats={[
                { label: 'Facility TVL', value: '₹4.2C' },
                { label: 'Dept Weight', value: '1.5k' }
              ]}
              action="Asset Audit"
            />
          )}

          <div className="glass-card p-10 relative overflow-hidden group border-white/5 bg-primary-950/5">
             <div className="absolute -top-10 -right-10 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                <Vote className="text-primary-500 w-64 h-64 rotate-12" />
             </div>
             <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <span className="bg-primary-500/10 text-primary-500 text-[10px] font-black px-4 py-1.5 rounded-full border border-primary-500/20 uppercase tracking-[0.2em] shadow-lg shadow-primary-500/5">Voting Active</span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">ID: #GDAO-204</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary-400 font-mono text-xs font-bold">
                    <Flame size={14} className="animate-pulse" />
                    24h Remaining
                  </div>
                </div>

                <h2 className="text-3xl font-bold leading-tight font-['Outfit'] tracking-tight max-w-2xl">Salem Technical Syllabus Upgrade: Blockchain v4 Integration</h2>
                <p className="text-slate-400 mt-4 leading-relaxed font-medium text-base max-w-2xl">Proposal submitted by the Coimbatore Campus. This legislative update requires a 60% quorum for institutional implementation.</p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <VotingProgress label="For (Success)" value={72} color="bg-emerald-500" tally="842k GDAO" />
                    <VotingProgress label="Against" value={18} color="bg-rose-500" tally="210k GDAO" />
                    <VotingProgress label="Abstain" value={10} color="bg-slate-700" tally="116k GDAO" />
                  </div>
                  <div className="bg-white/[0.02] rounded-[2rem] p-8 border border-white/5 flex flex-col justify-center">
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-4">Quorum Progress</p>
                    <div className="flex items-end gap-3 mb-2">
                      <span className="text-4xl font-bold font-mono tracking-tighter">84.2%</span>
                      <span className="text-xs text-emerald-400 font-bold mb-1.5">Reached</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-primary-500 shadow-lg shadow-primary-500/50" style={{ width: '84.2%' }}></div>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-6 font-medium italic">Minimum 60% required for consensus validity.</p>
                  </div>
                </div>

                <div className="flex gap-4 mt-12 pt-8 border-t border-white/5">
                   <button className="btn-primary !px-12">Cast Your Vote</button>
                   <button className="btn-secondary">Audit Proposal</button>
                </div>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 border-white/5 bg-primary-950/5 relative overflow-hidden group">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="font-bold text-lg font-['Outfit'] tracking-tight">Regional Distribution</h3>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">State-Wide Treasury Allocation</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary-500 animate-ping"></span>
                  <span className="text-[10px] font-black text-primary-500 uppercase tracking-widest">Live Flow</span>
                </div>
              </div>
              
              <div className="relative h-64 flex items-center justify-center">
                <svg viewBox="0 0 200 300" className="h-full opacity-20 text-primary-500 fill-current group-hover:opacity-30 transition-opacity">
                   <path d="M50,50 L150,50 L170,150 L130,250 L30,250 L10,150 Z" />
                </svg>
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2">
                   <MapPinPoint label="Chennai" value="₹4.2 Cr" delayed />
                </div>
                <div className="absolute top-1/2 left-1/3">
                   <MapPinPoint label="Salem" value="₹1.8 Cr" />
                </div>
                <div className="absolute bottom-1/4 right-1/4">
                   <MapPinPoint label="Madurai" value="₹2.5 Cr" delayed />
                </div>
                <div className="absolute top-1/3 right-1/3">
                   <MapPinPoint label="Trichy" value="₹1.1 Cr" />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
                 <div className="space-y-1">
                   <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest">Active Hubs</p>
                   <p className="text-xl font-bold font-mono">24</p>
                 </div>
                 <div className="space-y-1">
                   <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest">Total Distributed</p>
                   <p className="text-xl font-bold font-mono text-emerald-400">₹14.8 Cr</p>
                 </div>
              </div>
            </div>

            <div className="glass-card p-8 border-white/5 bg-slate-950/20 relative group">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="font-bold text-lg font-['Outfit'] tracking-tight">Ledger Verifier</h3>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Instant On-chain Audit</p>
                </div>
                <ShieldCheck className="text-emerald-500 opacity-40" size={24} />
              </div>
              
              <div className="space-y-4">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Enter TX Hash or Identity ID..." 
                    className="w-full bg-slate-900 border border-white/10 rounded-xl py-3 px-4 text-xs font-mono text-primary-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary-500/10 text-primary-400 rounded-lg hover:bg-primary-500 transition-all hover:text-white">
                    <Zap size={14} />
                  </button>
                </div>
                
                <div className="bg-black/40 rounded-xl p-5 border border-white/5 font-mono text-[10px] space-y-2 opacity-80 h-32 overflow-hidden overflow-y-auto custom-scrollbar">
                   <p className="text-emerald-400 animate-pulse">{'>'} Initializing audit terminal...</p>
                   <p className="text-slate-500">Connecting to Sepolia RPC...</p>
                   <p className="text-slate-500">Block height: #482,921</p>
                   <p className="text-slate-500">Gas price: 12.4 gwei</p>
                   <p className="text-primary-500">{'>'} Ready for institutional verification.</p>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                 <button className="flex-1 bg-white/5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Export Report</button>
                 <button className="flex-1 bg-emerald-500/10 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all">Verify Batch</button>
              </div>
            </div>
          </div>

          <div className="glass-card border-white/5">
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
               <h3 className="font-bold text-lg flex items-center gap-2 font-['Outfit']">
                 <Calendar className="text-primary-400" size={20} />
                 Institutional Schedule
               </h3>
               <button className="text-xs font-bold text-primary-400 hover:text-primary-300 transition-colors">See Detailed Calendar</button>
            </div>
            <div className="p-6 space-y-6">
               <TimelineItem 
                 time="10:00 AM" 
                 title="Blockchain Engineering - Anna Univ Sync" 
                 role="Mentor Ramesh" 
                 status="Ongoing" 
                 color="bg-emerald-500" 
               />
               <TimelineItem 
                 time="02:00 PM" 
                 title="State Level DAO Conference" 
                 role="Chairman Panel" 
                 status="Upcoming" 
                 color="bg-primary-500" 
               />
               <TimelineItem 
                 time="Apr 25, 2026" 
                 title="Final Project Verification" 
                 role="Smart Contract" 
                 status="Scheduled" 
                 color="bg-amber-500" 
               />
            </div>
          </div>
        </div>

        <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8 border-white/5 relative bg-accent-950/20 overflow-hidden group"
            >
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-30"></div>
               <div className="absolute top-4 right-4 text-[10px] font-black uppercase tracking-[0.2em] text-accent-500/60">Thirukkural Insight</div>
               <p className="text-xl font-bold italic text-white mb-3 mt-6 leading-relaxed">"Karka Kasadara Karpavai Katrapin Nirkka Atharku Thaga"</p>
               <div className="flex items-center gap-3">
                 <div className="h-[1px] w-8 bg-slate-700"></div>
                 <p className="text-[11px] text-slate-500 font-medium uppercase tracking-widest">Chapter 40: Learning</p>
               </div>
            </motion.div>

            <div className="glass-card p-8 border-white/5 bg-primary-950/10">
                <div className="flex items-center justify-between mb-8">
                   <h4 className="font-bold text-lg flex items-center gap-3 font-['Outfit']">
                     <Zap className="text-primary-500 animate-pulse" size={18} />
                     On-chain Consensus Feed
                   </h4>
                   <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                     Live
                   </span>
                </div>
                <div className="space-y-6 max-h-[320px] overflow-hidden relative">
                  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-950/80 to-transparent z-10 pointer-events-none"></div>
                  <TransactionItem type="VOTE" user="0x71...4F2" action="Voted For #GDAO-204" time="Just Now" />
                  <TransactionItem type="MINT" user="0x3A...9E1" action="Minted Certificate #1204" time="2m ago" />
                  <TransactionItem type="PROPOSAL" user="Salem Hub" action="Created Proposal #GDAO-205" time="14m ago" />
                  <TransactionItem type="STAKE" user="0x9D...2B4" action="Staked 1,500 GDAO" time="2h ago" />
                </div>
             </div>

             <div className="glass-card p-8 border-white/5 bg-amber-950/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:rotate-12 transition-transform">
                   <Trophy size={80} />
                </div>
                <div className="flex items-center justify-between mb-8 relative z-10">
                   <h4 className="font-bold text-lg flex items-center gap-3 font-['Outfit']">
                     <Trophy className="text-amber-500" size={18} />
                     Institutional Hall of Fame
                   </h4>
                   <button className="text-[10px] font-black text-slate-500 hover:text-white transition-colors uppercase tracking-widest">Global Rank</button>
                </div>
                <div className="space-y-4 relative z-10">
                   <LeaderboardItem name="Arjun M." role="Lead Mentor" points={12400} rank={1} avatar="AM" color="bg-amber-500" />
                   <LeaderboardItem name="Deepika K." role="Blockchain Dev" points={10200} rank={2} avatar="DK" color="bg-slate-400" />
                   <LeaderboardItem name="Senthil R." role="Governance Expert" points={9800} rank={3} avatar="SR" color="bg-amber-700" />
                   <LeaderboardItem name="Meera G." role="Senior Student" points={8500} rank={4} avatar="MG" color="bg-primary-500/20" />
                </div>
                <button className="w-full mt-8 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all relative z-10">Submit Portfolio</button>
             </div>

            <div className="glass-card p-10 bg-gradient-to-br from-primary-500/10 to-transparent border-primary-500/10 relative overflow-hidden group cursor-pointer">
              <div className="absolute -bottom-12 -right-12 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
                <ShieldCheck className="text-primary-500 w-48 h-48" />
              </div>
              <h4 className="text-2xl font-bold font-['Outfit'] mb-2">Institutional Audit</h4>
              <p className="text-slate-400 text-sm mb-8">Synchronize with state verification nodes.</p>
              <button className="btn-primary w-full !py-4">Run Ledger Audit</button>
            </div>
         </div>
      </div>
    </div>
  );
};

const RoleSpecificCard = ({ title, subtitle, icon, stats, action }: any) => (
  <div className="glass-card p-10 border-primary-500/10 bg-primary-950/5 relative overflow-hidden group mb-10">
    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
    <div className="flex flex-col md:flex-row md:items-center gap-8 mb-10 relative z-10">
      <div className="p-5 bg-primary-500/10 rounded-[1.5rem] border border-primary-500/20 shadow-2xl shadow-primary-500/5 group-hover:rotate-6 transition-transform duration-500 w-fit">
        {icon}
      </div>
      <div>
        <h3 className="text-3xl font-bold font-['Outfit'] tracking-tight">{title}</h3>
        <p className="text-base text-slate-500 font-medium mt-1 uppercase tracking-widest text-[11px]">{subtitle}</p>
      </div>
      <button className="md:ml-auto btn-primary !px-10">
        {action}
      </button>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 relative z-10 border-t border-slate-500/10 pt-10">
      {stats.map((s: any) => (
        <div key={s.label}>
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-2">{s.label}</p>
          <p className="text-2xl font-bold font-mono tracking-tighter">{s.value}</p>
        </div>
      ))}
    </div>
  </div>
);

const StatCard = ({ label, value, change, icon, description, sparkline }: any) => (
  <motion.div 
    whileHover={{ y: -8, scale: 1.02 }}
    className="glass-card p-8 border-white/5 relative overflow-hidden group"
  >
    <div className="absolute top-0 right-0 p-4 opacity-[0.05] group-hover:scale-125 transition-transform duration-700">
      {icon}
    </div>
    <div className="relative z-10 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="p-3 bg-white/5 rounded-2xl border border-white/10 shadow-inner group-hover:bg-primary-500/10 transition-colors">
          {icon}
        </div>
        <span className={`text-[10px] font-black px-3 py-1 rounded-full ${change.startsWith('+') ? 'bg-emerald-500/10 text-emerald-400' : 'bg-primary-500/10 text-primary-400'}`}>
          {change}
        </span>
      </div>
      <div>
        <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">{label}</p>
        <h3 className="text-3xl font-bold font-['Outfit'] tracking-tight">{value}</h3>
      </div>
      
      <div className="h-10 w-full flex items-end gap-1 px-1">
        {sparkline.map((h: number, i: number) => (
          <div 
            key={i} 
            className="flex-1 bg-primary-500/20 rounded-t-sm group-hover:bg-primary-500/40 transition-all duration-500" 
            style={{ height: `${h}%` }}
          />
        ))}
      </div>

      <p className="text-[10px] text-slate-500 font-bold tracking-wide">{description}</p>
    </div>
  </motion.div>
);

const TransactionItem = ({ type, user, action, time }: any) => (
  <div className="flex items-center gap-4 group cursor-pointer py-2 hover:translate-x-2 transition-transform duration-500">
    <div className={`p-2 rounded-lg border text-[10px] font-black w-14 text-center ${
      type === 'VOTE' ? 'bg-rose-500/5 text-rose-400 border-rose-500/20' :
      type === 'MINT' ? 'bg-emerald-500/5 text-emerald-400 border-emerald-500/20' :
      'bg-primary-500/5 text-primary-400 border-primary-500/20'
    }`}>
      {type}
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-xs font-bold truncate text-white">{action}</p>
      <p className="text-[10px] text-slate-500 font-mono">{user}</p>
    </div>
    <span className="text-[10px] text-slate-600 font-bold whitespace-nowrap">{time}</span>
  </div>
);

const TimelineItem = ({ time, title, role, status, color }: any) => (
  <div className="flex gap-4 relative group">
    <div className="flex flex-col items-center">
      <div className={`w-3 h-3 rounded-full mt-1.5 ${color} shadow-lg shadow-current`} />
      <div className="w-[1px] flex-1 bg-white/5 mt-2" />
    </div>
    <div className="pb-6">
      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">{time}</p>
      <h4 className="font-bold text-white group-hover:text-primary-400 transition-colors text-sm">{title}</h4>
      <div className="flex items-center gap-3 mt-2">
         <span className="text-[10px] text-slate-500 font-medium px-2 py-0.5 bg-white/5 rounded-md">{role}</span>
         <span className={`text-[10px] font-bold ${color.replace('bg-', 'text-')}`}>{status}</span>
      </div>
    </div>
  </div>
);

const MapPinPoint = ({ label, value, delayed }: any) => (
  <motion.div 
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: delayed ? 1 : 0.5 }}
    className="flex flex-col items-center group cursor-pointer"
  >
    <div className="w-1.5 h-1.5 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(217,119,6,0.6)] animate-pulse mb-1 group-hover:scale-150 transition-transform"></div>
    <div className="opacity-0 group-hover:opacity-100 transition-all absolute top-[-30px] bg-slate-900 border border-primary-500/30 px-3 py-1 rounded-lg pointer-events-none z-20 shadow-2xl">
       <p className="text-[10px] font-black text-white whitespace-nowrap">{label}</p>
       <p className="text-[9px] text-primary-500 font-bold">{value}</p>
    </div>
  </motion.div>
);

const VotingProgress = ({ label, value, color, tally }: any) => (
  <div className="space-y-2">
    <div className="flex justify-between items-end">
      <div>
        <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">{label}</p>
        <p className="text-sm font-bold font-mono tracking-tight">{tally}</p>
      </div>
      <span className="text-sm font-bold font-mono">{value}%</span>
    </div>
    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
      <div className={`h-full ${color} transition-all duration-1000`} style={{ width: `${value}%` }}></div>
    </div>
  </div>
);

const LeaderboardItem = ({ name, role, points, rank, avatar, color }: any) => (
  <div className="flex items-center gap-4 group cursor-pointer p-2 rounded-2xl hover:bg-white/[0.02] transition-all">
    <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center text-xs font-black shadow-lg shadow-black/20 group-hover:scale-110 transition-transform`}>
      {avatar}
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2">
        <p className="text-sm font-bold truncate text-white">{name}</p>
        {rank <= 3 && <Star size={10} className="text-amber-500 fill-amber-500" />}
      </div>
      <p className="text-[10px] text-slate-500 font-medium">{role}</p>
    </div>
    <div className="text-right">
      <p className="text-xs font-black font-mono text-white">{points.toLocaleString()}</p>
      <p className="text-[8px] text-slate-600 font-bold uppercase tracking-widest">GDAO Points</p>
    </div>
  </div>
);

export default Dashboard;
