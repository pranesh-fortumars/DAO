import { 
  Users, 
  Vote, 
  Zap,
  ShieldCheck,
  CreditCard,
  GraduationCap,
  Calendar,
  AlertCircle,
  MapPin,
  Flame,
  Globe
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../AuthContext';

const Dashboard = () => {
  const { role } = useAuth();

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-500 mb-3 block">Institutional Command Center</span>
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
          value="98.4" 
          change="+2.4%" 
          icon={<ShieldCheck className="text-emerald-400" />} 
          description="Community Governed"
        />
        <StatCard 
          label="Active Mentors" 
          value="156" 
          change="+12" 
          icon={<Users className="text-primary-400" />} 
          description="Expert Staff"
        />
        <StatCard 
          label="Institutional Treasury" 
          value="1.2M GDAO" 
          change="+$45k" 
          icon={<CreditCard className="text-accent-400" />} 
          description="DAO Assets"
        />
        <StatCard 
          label="Governance Active" 
          value="84%" 
          change="+5%" 
          icon={<Vote className="text-rose-400" />} 
          description="Active Quorum"
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
          {role === 'SCHOOL' && (
            <RoleSpecificCard 
              title="School Management"
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
           <div className="glass-card p-8 border-white/5 relative bg-accent-950/20">
              <div className="absolute top-4 right-4 text-[10px] font-bold text-accent-500 italic">Thirukkural Insight</div>
              <p className="text-base font-bold italic text-white mb-2 mt-4">"Karka Kasadara Karpavai Katrapin Nirkka Atharku Thaga"</p>
              <p className="text-[10px] text-slate-500 italic">Learn clearly; after learning, stand by it.</p>
           </div>

           <div className="glass-card p-8 border-white/5">
              <h4 className="font-bold text-lg mb-6 flex items-center gap-2 font-['Outfit']">
                <GraduationCap className="text-primary-400" size={20} />
                Recent Student Activity
              </h4>
              <div className="space-y-6">
                <StudentActivity name="Vignesh Kumar" action="Minted Certificate" time="2h ago" />
                <StudentActivity name="Lakshmi Priya" action="Joined DAO" time="4h ago" />
                <StudentActivity name="Abhishek Raj" action="Submitted Grant" time="6h ago" />
              </div>
           </div>

           <div className="glass-card p-8 bg-rose-500/5 border-rose-500/10">
              <div className="flex items-center gap-3 text-rose-400 mb-4 font-['Outfit']">
                 <AlertCircle size={20} />
                 <h4 className="font-bold">Pending Actions</h4>
              </div>
              <ul className="space-y-4">
                 <PendingAction label="Library Audit" time="Salem Center" />
                 <PendingAction label="Grant Disbursement" time="Madurai Center" />
                 <PendingAction label="Vote on Proposal #88" time="Expiring" red />
              </ul>
           </div>
        </div>
      </div>
    </div>
  );
};

const StudentActivity = ({ name, action, time }: any) => (
  <div className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
    <div>
      <p className="text-sm font-bold text-white">{name}</p>
      <p className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">{action}</p>
    </div>
    <span className="text-[10px] text-slate-600 font-bold">{time}</span>
  </div>
);

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

const StatCard = ({ label, value, change, icon, description }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass-card p-6 border-white/5 relative overflow-hidden"
  >
    <div className="relative z-10 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="p-2.5 bg-white/5 rounded-xl border border-white/10">
          {icon}
        </div>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${change.startsWith('+') ? 'bg-emerald-500/10 text-emerald-400' : 'bg-primary-500/10 text-primary-400'}`}>
          {change}
        </span>
      </div>
      <div>
        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{label}</p>
        <h3 className="text-2xl font-bold font-['Outfit'] mt-1">{value}</h3>
      </div>
      <p className="text-[10px] text-slate-600 font-medium italic">{description}</p>
    </div>
  </motion.div>
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

const PendingAction = ({ label, time, red }: any) => (
  <li className="flex items-center justify-between text-[11px] transition-transform hover:translate-x-1 duration-300 cursor-pointer">
    <span className="text-slate-400 font-medium">{label}</span>
    <span className={`font-bold ${red ? 'text-rose-400' : 'text-slate-500'}`}>{time}</span>
  </li>
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

export default Dashboard;
