import { 
  Users, 
  Vote, 
  Zap,
  ShieldCheck,
  CreditCard,
  GraduationCap,
  MapPin,
  Globe,
  Trophy,
  Star
} from 'lucide-react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useAuth } from '../AuthContext';

const Dashboard = () => {
  const { role } = useAuth();

  return (
    <div className="space-y-12 pb-20 relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          <span className="text-[11px] font-black uppercase tracking-[0.6em] text-primary-500 mb-4 block text-gradient-primary">Institutional Strategic Command</span>
          <h1 className="text-6xl font-['Outfit'] font-extrabold tracking-tight leading-[1.1]">Kalam DAO Dashboard</h1>
          <p className="text-slate-400 mt-5 font-medium text-xl max-w-2xl leading-relaxed">Oversee Tamil Nadu's decentralized academic infrastructure and governance consensus with real-time cryptographic audit precision.</p>
        </motion.div>
        
        <div className="flex items-center gap-4">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 px-6 py-3.5 bg-primary-500/5 border border-primary-500/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-primary-400 backdrop-blur-3xl shadow-2xl shadow-primary-500/5"
          >
            <MapPin size={16} className="text-primary-500 animate-bounce" />
            Tamil Nadu • Chennai Hub
          </motion.div>
          <button className="btn-primary !px-10 !py-4 shadow-[0_20px_40px_rgba(59,130,246,0.2)]">Generate Institutional Audit</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <StatCard 
          label="Trust Score" 
          value="99.2" 
          change="+0.8%" 
          icon={<ShieldCheck size={24} className="text-emerald-400" />} 
          description="Institutional consensus verified"
          sparkline={[40, 20, 50, 40, 80, 60, 95]}
          color="emerald"
        />
        <StatCard 
          label="Active Mentors" 
          value="156" 
          change="+12" 
          icon={<Users size={24} className="text-primary-400" />} 
          description="Verified academic staff"
          sparkline={[20, 30, 25, 45, 40, 55, 60]}
          color="blue"
        />
        <StatCard 
          label="Treasury TVL" 
          value="1.2M GDAO" 
          change="+$45k" 
          icon={<CreditCard size={24} className="text-accent-400" />} 
          description="Protocol liquidity depth"
          sparkline={[60, 50, 70, 60, 80, 75, 90]}
          color="indigo"
        />
        <StatCard 
          label="Quorum Active" 
          value="84%" 
          change="+5%" 
          icon={<Vote size={24} className="text-rose-400" />} 
          description="Legislative consensus threshold"
          sparkline={[30, 40, 35, 50, 45, 70, 84]}
          color="rose"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          {/* Enhanced Role Interaction Card */}
          {['ADMIN', 'MENTOR', 'SCHOOL', 'USER', 'STUDENT'].includes(role || '') && (
            <EnhancedRoleCard role={role || 'MEMBER'} />
          )}

          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-card p-12 relative overflow-hidden group border-white/[0.03] bg-gradient-to-br from-primary-950/20 to-transparent"
          >
             <div className="absolute -top-20 -right-20 p-20 opacity-[0.02] group-hover:opacity-10 transition-all duration-1000 group-hover:scale-110 group-hover:rotate-12">
                <Vote className="text-primary-500 w-[400px] h-[400px]" />
             </div>
             <div className="relative z-10">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-4">
                    <span className="bg-primary-500/10 text-primary-500 text-[11px] font-black px-5 py-2 rounded-full border border-primary-500/20 uppercase tracking-[0.3em] shadow-xl">Consensus Required</span>
                    <span className="text-[11px] text-slate-500 font-bold uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full">REF: #GDAO-204</span>
                  </div>
                  <div className="flex items-center gap-3 text-primary-400 font-mono text-sm font-black">
                    <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
                    </div>
                    24:12:04 Remaining
                  </div>
                </div>

                <h2 className="text-4xl font-extrabold leading-[1.2] font-['Outfit'] tracking-tight max-w-3xl text-gradient-primary">Salem Technical Syllabus Upgrade: Blockchain v4 Systems Integration</h2>
                <p className="text-slate-400 mt-6 leading-relaxed font-medium text-lg max-w-3xl">Strategic legislative proposal for state-wide curriculum modernization. Requires 60,000 GDAO quorum for executive protocol execution.</p>

                <div className="mt-12 grid grid-cols-1 xl:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <VotingProgress label="Strategic Approval" value={72} color="bg-emerald-500" tally="842k GDAO" />
                    <VotingProgress label="Dissenting Voice" value={18} color="bg-rose-500" tally="210k GDAO" />
                    <VotingProgress label="Neutral Stand" value={10} color="bg-slate-700" tally="116k GDAO" />
                  </div>
                  <div className="bg-white/[0.02] rounded-[3rem] p-10 border border-white/5 flex flex-col justify-center backdrop-blur-2xl">
                    <p className="text-[11px] text-slate-500 font-black uppercase tracking-[0.3em] mb-6">Quorum Real-time Progress</p>
                    <div className="flex items-end gap-4 mb-3">
                      <span className="text-6xl font-black font-mono tracking-tighter text-[var(--text-main)]">84.2<span className="text-primary-500">%</span></span>
                      <span className="text-xs text-emerald-400 font-black mb-3 px-3 py-1 bg-emerald-500/10 rounded-lg uppercase tracking-widest">Valid</span>
                    </div>
                    <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden shadow-inner">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '84.2%' }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-primary-500 shadow-[0_0_20px_rgba(59,130,246,0.6)]"
                      ></motion.div>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-8 font-medium italic leading-relaxed opacity-60">Consensus threshold: 60.0% • Decentralized identity verification ongoing.</p>
                  </div>
                </div>

                <div className="flex gap-6 mt-14 pt-10 border-t border-white/[0.03]">
                   <button className="btn-primary !px-16 !py-5 text-base">Cast Protocol Vote</button>
                   <button className="btn-secondary !px-10">Audit Full Proposal</button>
                </div>
             </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Interactive Regional Map */}
            <div className="glass-card p-10 border-white/[0.03] bg-primary-950/10 relative overflow-hidden group">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="font-extrabold text-2xl font-['Outfit'] tracking-tight">Regional Treasury</h3>
                  <p className="text-[11px] text-slate-500 font-black uppercase tracking-[0.3em] mt-2">State-Wide Resource Flow</p>
                </div>
                <div className="p-3 bg-primary-500/10 rounded-2xl border border-primary-500/20">
                  <Globe size={24} className="text-primary-500 group-hover:rotate-180 transition-transform duration-1000" />
                </div>
              </div>
              
              <div className="relative h-72 flex items-center justify-center p-4">
                <svg viewBox="0 0 200 300" className="h-full opacity-[0.05] text-primary-400 fill-current group-hover:opacity-[0.08] transition-opacity duration-700">
                   <path d="M50,50 L150,50 L170,150 L130,250 L30,250 L10,150 Z" />
                </svg>
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 cursor-pointer group/pin">
                   <MapPinPoint label="Chennai" value="₹4.2 Cr" delayed />
                </div>
                <div className="absolute top-1/2 left-1/3 cursor-pointer group/pin">
                   <MapPinPoint label="Salem" value="₹1.8 Cr" />
                </div>
                <div className="absolute bottom-1/4 right-1/4 cursor-pointer group/pin">
                   <MapPinPoint label="Madurai" value="₹2.5 Cr" delayed />
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/[0.03] grid grid-cols-2 gap-8">
                 <div className="space-y-2">
                   <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Active State Hubs</p>
                   <p className="text-3xl font-black font-mono text-[var(--text-main)]">24</p>
                 </div>
                 <div className="space-y-2">
                   <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Total Liquidity</p>
                   <p className="text-3xl font-black font-mono text-emerald-400">₹14.8 Cr</p>
                 </div>
              </div>
            </div>

            {/* Terminal Audit Shell */}
            <div className="glass-card p-10 border-white/[0.03] bg-slate-950/40 relative group">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="font-extrabold text-2xl font-['Outfit'] tracking-tight">Ledger Auditor</h3>
                  <p className="text-[11px] text-slate-500 font-black uppercase tracking-[0.3em] mt-2">Instant On-chain Verification</p>
                </div>
                <ShieldCheck className="text-emerald-500 opacity-40 group-hover:opacity-100 transition-opacity" size={28} />
              </div>
              
              <div className="space-y-5 px-1">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Enter TX Hash or ID..." 
                    className="w-full bg-slate-500/10 border border-white/10 rounded-2xl py-4 px-6 text-xs font-mono text-primary-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600 shadow-inner"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-primary-500 text-[var(--text-main)] rounded-xl hover:scale-110 active:scale-95 transition-all shadow-lg shadow-primary-500/20">
                    <Zap size={16} />
                  </button>
                </div>
                
                <div className="bg-slate-500/10 rounded-[1.5rem] p-6 border border-white/5 font-mono text-[10px] space-y-3 opacity-90 h-40 overflow-hidden overflow-y-auto custom-scrollbar shadow-2xl">
                   <p className="text-emerald-500 font-black">{'>'} SYSTEM_READY: AUTHENTICATED</p>
                   <p className="text-slate-500">HANDSHAKE: [0x72...A4] CONNECTED</p>
                   <p className="text-slate-500">BLOCK_HEIGHT: #482,921 [FINALIZED]</p>
                   <p className="text-slate-700">GAS_AUDIT: OPTIMAL / 12.4 GWEI</p>
                   <p className="text-primary-500">{'>'} WAITING_FOR_INPUT...</p>
                </div>
              </div>

              <div className="mt-10 flex gap-4">
                 <button className="flex-1 bg-white/5 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all border border-white/5">Export Audit PDF</button>
                 <button className="flex-1 bg-emerald-500/10 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest text-emerald-400 hover:bg-emerald-500 hover:text-[var(--text-main)] transition-all border border-emerald-500/10">Verify Batch ID</button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
              className="glass-card p-10 border-white/[0.03] relative bg-slate-950/40 overflow-hidden group border-l-4 border-l-primary-500"
            >
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/[0.02] to-transparent"></div>
               <div className="absolute top-6 right-8 text-[11px] font-black uppercase tracking-[0.4em] text-primary-500/60 drop-shadow-lg">அறப்பால் • Learning</div>
               <p className="text-2xl font-extrabold italic text-[var(--text-main)] mb-5 mt-8 leading-relaxed font-['Outfit'] tracking-tight">"கற்க கசடறக் கற்பவை கற்றபின் <br/> நிற்க அதற்குத் தக"</p>
               <div className="flex items-center gap-4">
                 <div className="h-[2px] w-12 bg-primary-500/30"></div>
                 <p className="text-[12px] text-slate-500 font-bold uppercase tracking-widest opacity-80">THIRUKKURAL • CHAPTER 40</p>
               </div>
            </motion.div>

            <div className="glass-card p-10 border-white/[0.03] bg-primary-950/10 shadow-2xl relative overflow-hidden group">
               <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="flex items-center justify-between mb-10">
                  <h4 className="font-extrabold text-xl flex items-center gap-4 font-['Outfit'] tracking-tight text-[var(--text-main)]">
                    <Zap className="text-primary-500 animate-pulse" size={20} />
                    On-chain Ticker
                  </h4>
                  <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest flex items-center gap-2 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    Live
                  </span>
               </div>
               <div className="space-y-8 max-h-[360px] overflow-hidden relative custom-scrollbar pr-2">
                 <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-950/90 to-transparent z-10 pointer-events-none"></div>
                 <TransactionItem type="VOTE" user="0x71...4F2" action="Voted For #GDAO-204" time="JUST NOW" />
                 <TransactionItem type="MINT" user="0x3A...9E1" action="Minted Certificate #1204" time="2M AGO" />
                 <TransactionItem type="PROPOSAL" user="Salem Hub" action="Created Proposal #GDAO-205" time="14M AGO" />
                 <TransactionItem type="STAKE" user="0x9D...2B4" action="Staked 1,500 GDAO" time="2H AGO" />
                 <TransactionItem type="VERIFY" user="Coimbatore" action="Verified 12 Users" time="5H AGO" />
               </div>
            </div>

             <div className="glass-card p-10 border-white/[0.03] bg-amber-950/5 relative overflow-hidden group border-t-2 border-amber-500/10 shadow-2xl">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 group-hover:rotate-12 transition-all duration-700">
                   <Trophy size={120} />
                </div>
                <div className="flex items-center justify-between mb-10 relative z-10">
                   <h4 className="font-extrabold text-xl flex items-center gap-4 font-['Outfit'] tracking-tight text-[var(--text-main)]">
                     <Trophy className="text-amber-500" size={20} />
                     Legacy Hall of Fame
                   </h4>
                   <button className="text-[11px] font-black text-slate-500 hover:text-[var(--text-main)] transition-colors uppercase tracking-[0.2em] bg-white/5 px-4 py-1.5 rounded-full border border-white/5">Global Rank</button>
                </div>
                <div className="space-y-6 relative z-10">
                   <LeaderboardItem name="Arjun M." role="Lead Mentor" points={12400} rank={1} avatar="AM" color="bg-amber-500 shadow-amber-500/20" />
                   <LeaderboardItem name="Deepika K." role="Blockchain Dev" points={10200} rank={2} avatar="DK" color="bg-slate-400 shadow-slate-400/20" />
                   <LeaderboardItem name="Senthil R." role="Governance Tech" points={9800} rank={3} avatar="SR" color="bg-amber-700 shadow-amber-700/20" />
                   <LeaderboardItem name="Meera G." role="Senior Scholar" points={8500} rank={4} avatar="MG" color="bg-primary-500/20" />
                </div>
                <button className="w-full mt-10 py-4 bg-white/5 border border-white/10 rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] hover:bg-white/10 transition-all relative z-10 shadow-xl">Audit Your Portfolio</button>
             </div>

            <div className="glass-card p-12 bg-gradient-to-br from-primary-500/10 to-transparent border-primary-500/10 relative overflow-hidden group cursor-pointer shadow-institutional">
              <div className="absolute -bottom-16 -right-16 p-12 opacity-5 group-hover:opacity-20 group-hover:scale-125 transition-all duration-1000">
                <ShieldCheck className="text-primary-500 w-64 h-64" />
              </div>
              <h4 className="text-3xl font-extrabold font-['Outfit'] mb-3 tracking-tight">Institutional Audit</h4>
              <p className="text-slate-400 text-sm mb-10 leading-relaxed font-medium">Synchronize local hardware with state verification nodes across the Ethereum ecosystem.</p>
              <button className="btn-primary w-full !py-5 uppercase tracking-[0.3em] text-[12px] font-black group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]">Initialize Ledger Audit</button>
            </div>
         </div>
      </div>
    </div>
  );
};

/* --- Specialized Dashboard Sub-Components --- */

const EnhancedRoleCard = ({ role }: { role: string }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div 
      onMouseMove={onMouseMove}
      className="glass-card p-12 border-primary-500/20 bg-primary-950/5 relative overflow-hidden group mb-4 hover:border-primary-500/40 transition-colors"
    >
      <motion.div 
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.1), transparent 40%)`
          )
        }}
      />
      
      <div className="flex flex-col md:flex-row md:items-center gap-10 relative z-10">
        <div className="p-6 bg-primary-500/10 rounded-[2rem] border border-primary-500/20 shadow-2xl shadow-primary-500/5 group-hover:rotate-3 transition-transform duration-700 w-fit">
          {role === 'ADMIN' ? <Zap size={32} className="text-amber-400" /> : <GraduationCap size={32} className="text-primary-400" />}
        </div>
        <div>
          <h3 className="text-4xl font-black font-['Outfit'] tracking-tighter text-[var(--text-main)]">
            {role.charAt(0) + role.slice(1).toLowerCase()} Control Terminal
          </h3>
          <p className="text-base text-slate-500 font-bold mt-2 uppercase tracking-[0.3em] text-[12px]">Authorization Level: {role === 'ADMIN' ? 'ALPHA' : 'IDENTIFIED'}</p>
        </div>
        <button className="md:ml-auto btn-primary !px-12 !py-4 shadow-institutional group-hover:scale-105">
          Access Advanced Config
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-12 pt-12 border-t border-white/[0.03]">
        <RoleStat label="Active Nodes" value="24" />
        <RoleStat label="Uptime Health" value="99.9%" />
        <RoleStat label="TX Throughput" value="1.2k" />
        <RoleStat label="Auth Index" value="0.84" />
      </div>
    </motion.div>
  );
};

const RoleStat = ({ label, value }: any) => (
  <div className="group/stat">
    <p className="text-[11px] text-slate-500 font-black uppercase tracking-[0.2em] mb-3 group-hover/stat:text-primary-500 transition-colors">{label}</p>
    <p className="text-3xl font-black font-mono tracking-tighter text-[var(--text-main)] group-hover/stat:scale-105 transition-transform origin-left">{value}</p>
  </div>
);

const StatCard = ({ label, value, change, icon, description, sparkline, color }: any) => {
  const colors: any = {
    emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20 shadow-emerald-500/5",
    blue: "text-primary-400 bg-primary-500/10 border-primary-500/20 shadow-primary-500/5",
    indigo: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20 shadow-indigo-500/5",
    rose: "text-rose-400 bg-rose-500/10 border-rose-500/20 shadow-rose-500/5"
  };

  return (
    <motion.div 
      whileHover={{ y: -10, scale: 1.02 }}
      className="glass-card p-10 border-white/[0.03] relative overflow-hidden group shadow-institutional"
    >
      <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:scale-150 group-hover:rotate-12 transition-all duration-1000 grayscale group-hover:grayscale-0">
        {icon}
      </div>
      
      <div className="relative z-10 flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <div className={`p-4 rounded-[1.5rem] border shadow-2xl transition-all duration-500 ${colors[color]}`}>
            {icon}
          </div>
          <motion.span 
            whileHover={{ scale: 1.1 }}
            className={`text-[11px] font-black px-4 py-1.5 rounded-full border ${change.startsWith('+') ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-primary-500/10 text-primary-400 border-primary-500/20'}`}
          >
            {change}
          </motion.span>
        </div>
        
        <div>
          <p className="text-slate-500 text-[11px] font-black uppercase tracking-[0.3em] mb-2">{label}</p>
          <h3 className="text-4xl font-extrabold font-['Outfit'] tracking-tighter text-[var(--text-main)]">{value}</h3>
        </div>
        
        <div className="h-12 w-full flex items-end gap-1.5 px-1">
          {sparkline.map((h: number, i: number) => (
            <motion.div 
              key={i} 
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: i * 0.1, duration: 1, ease: "easeOut" }}
              className={`flex-1 rounded-t-lg transition-all duration-500 opacity-20 group-hover:opacity-60 ${change.startsWith('+') ? 'bg-emerald-500' : 'bg-primary-500'}`} 
            />
          ))}
        </div>

        <p className="text-[11px] text-slate-500 font-bold tracking-[0.1em] opacity-80">{description}</p>
      </div>
    </motion.div>
  );
};

const TransactionItem = ({ type, user, action, time }: any) => (
  <div className="flex items-center gap-6 group cursor-pointer py-3 hover:translate-x-3 transition-all duration-500">
    <div className={`p-3 rounded-xl border text-[11px] font-black w-20 text-center shadow-lg transition-all duration-500 group-hover:scale-110 ${
      type === 'VOTE' ? 'bg-rose-500/5 text-rose-400 border-rose-500/20 shadow-rose-500/5' :
      type === 'MINT' ? 'bg-emerald-500/5 text-emerald-400 border-emerald-500/20 shadow-emerald-500/5' :
      'bg-primary-500/5 text-primary-400 border-primary-500/20 shadow-primary-500/5'
    }`}>
      {type}
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-sm font-extrabold truncate text-[var(--text-main)] tracking-tight">{action}</p>
      <p className="text-[11px] text-slate-500 font-mono font-bold mt-1 opacity-60 uppercase">{user}</p>
    </div>
    <span className="text-[10px] text-slate-700 font-black whitespace-nowrap bg-white/5 px-3 py-1 rounded-full">{time}</span>
  </div>
);

const LeaderboardItem = ({ name, role, points, rank, avatar, color }: any) => (
  <div className="flex items-center gap-6 group cursor-pointer p-3 rounded-[1.5rem] hover:bg-white/[0.03] transition-all duration-500 border border-transparent hover:border-white/5">
    <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center text-sm font-black border border-white/10 shadow-2xl group-hover:rotate-12 transition-transform`}>
      {avatar}
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-3">
        <p className="text-base font-extrabold truncate text-[var(--text-main)] tracking-tight">{name}</p>
        {rank <= 3 && <Star size={12} className="text-amber-400 fill-amber-400 animate-pulse" />}
      </div>
      <p className="text-[11px] text-slate-500 font-bold tracking-widest uppercase mt-1">{role}</p>
    </div>
    <div className="text-right">
      <p className="text-sm font-black font-mono text-[var(--text-main)] leading-none mb-1">{points.toLocaleString()}</p>
      <p className="text-[9px] text-slate-600 font-black uppercase tracking-widest">GDAO POINTS</p>
    </div>
  </div>
);

const MapPinPoint = ({ label, value, delayed }: any) => (
  <motion.div 
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: delayed ? 1.2 : 0.8, type: "spring", stiffness: 260, damping: 20 }}
    className="flex flex-col items-center group cursor-pointer"
  >
    <div className="w-2.5 h-2.5 rounded-full bg-primary-500 shadow-[0_0_20px_rgba(59,130,246,0.8)] animate-pulse mb-2 group-hover:scale-150 transition-all duration-500"></div>
    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 absolute top-[-45px] bg-slate-900 border border-primary-500/40 px-5 py-2.5 rounded-2xl pointer-events-none z-30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
       <p className="text-[12px] font-black text-[var(--text-main)] whitespace-nowrap tracking-tight">{label}</p>
       <p className="text-[10px] text-primary-500 font-black font-mono mt-1">{value}</p>
    </div>
  </motion.div>
);

const VotingProgress = ({ label, value, color, tally }: any) => (
  <div className="space-y-3 group/progress">
    <div className="flex justify-between items-end">
      <div>
        <p className="text-[11px] text-slate-400 font-black uppercase tracking-[0.2em] mb-2 group-hover/progress:text-white transition-colors">{label}</p>
        <p className="text-lg font-black font-mono tracking-tighter text-white">{tally}</p>
      </div>
      <span className="text-lg font-black font-mono text-white">{value}<span className="text-xs text-slate-500 ml-1">%</span></span>
    </div>
    <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden shadow-inner border border-white/5">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 2, ease: "easeOut" }}
        className={`h-full ${color} shadow-lg transition-all duration-1000 group-hover/progress:brightness-125`}
      ></motion.div>
    </div>
  </div>
);

export default Dashboard;
