import { 
  Users, 
  Vote, 
  Zap,
  TrendingUp,
  ShieldCheck,
  CreditCard,
  GraduationCap,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-['Outfit'] font-bold italic underline">EduMentor Command Center</h1>
          <p className="text-slate-500 mt-2 font-medium italic underline">Institutional Governance & Learning Management System</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary">Export Analytics</button>
          <button className="btn-primary">Audit Reports</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard 
          label="Institution Trust Score" 
          value="98.4" 
          change="+2.4%" 
          icon={<ShieldCheck className="text-emerald-400" />} 
          description="Community governed"
        />
        <StatCard 
          label="Active Researchers" 
          value="156" 
          change="+12" 
          icon={<Users className="text-primary-400" />} 
          description="Grant enabled"
        />
        <StatCard 
          label="Treasury TVL" 
          value="1.2M GDAO" 
          change="+$45k" 
          icon={<CreditCard className="text-accent-400" />} 
          description="DAO controlled"
        />
        <StatCard 
          label="Governance Participation" 
          value="84%" 
          change="+5%" 
          icon={<Vote className="text-amber-400" />} 
          description="Quorum reached"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="glass-card p-10 relative overflow-hidden group border-white/5">
             <div className="absolute top-0 right-0 p-8">
               <Zap className="text-primary-500/10 w-32 h-32 rotate-12 transition-all group-hover:scale-110 group-hover:text-primary-500/20" />
             </div>
             <div className="relative z-10 max-w-lg">
                <span className="bg-primary-500/10 text-primary-400 text-[10px] font-bold px-3 py-1 rounded-full border border-primary-500/20 uppercase tracking-widest">Major institutional Grant</span>
                <h2 className="text-3xl font-bold mt-6 leading-tight">Decentralized Syllabus v4.2 is now live for voting.</h2>
                <p className="text-slate-400 mt-4 leading-relaxed font-medium">The Academic Board has proposed 12 new core modules for the Blockchain Engineering curriculum. Participate in the governance vote to earn participation tokens.</p>
                <div className="flex gap-4 mt-8">
                   <button className="btn-primary">View Proposal</button>
                   <button className="btn-secondary">Read Syllabus</button>
                </div>
             </div>
          </div>

          <div className="glass-card border-white/5">
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
               <h3 className="font-bold text-lg flex items-center gap-2 font-['Outfit']">
                 <Calendar className="text-primary-400" size={20} />
                 Academic Timeline
               </h3>
               <button className="text-xs font-bold text-primary-400 hover:text-primary-300 transition-colors">Full Schedule</button>
            </div>
            <div className="p-6 space-y-6">
               <TimelineItem 
                 time="Today, 10:00 AM" 
                 title="DeFi Architecture Seminar" 
                 role="Dr. Sarah Chen" 
                 status="Ongoing" 
                 color="bg-emerald-500" 
               />
               <TimelineItem 
                 time="Tomorrow, 02:00 PM" 
                 title="Quarterly Governance Town Hall" 
                 role="Consensus Council" 
                 status="Upcoming" 
                 color="bg-primary-500" 
               />
               <TimelineItem 
                 time="Apr 25, 2026" 
                 title="Final Project Submission" 
                 role="Self-Managed" 
                 status="Phase 1" 
                 color="bg-amber-500" 
               />
            </div>
          </div>
        </div>

        <div className="space-y-8">
           <div className="glass-card p-8 border-white/5">
              <h4 className="font-bold text-lg mb-6 flex items-center gap-2 font-['Outfit']">
                <GraduationCap className="text-primary-400" size={20} />
                Student Standing
              </h4>
              <div className="space-y-6">
                 <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Current CGPA</p>
                      <p className="text-2xl font-bold">3.94 / 4.0</p>
                    </div>
                    <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                      <TrendingUp size={20} className="text-emerald-400" />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Attendance Intensity</p>
                    <div className="flex items-center gap-4">
                       <div className="flex-1 bg-white/5 h-2 rounded-full overflow-hidden">
                          <div className="bg-primary-500 h-full w-[94%]" />
                       </div>
                       <span className="text-sm font-bold text-white">94%</span>
                    </div>
                 </div>
              </div>
           </div>

           <div className="glass-card p-8 bg-rose-500/5 border-rose-500/10">
              <div className="flex items-center gap-3 text-rose-400 mb-4 font-['Outfit']">
                 <AlertCircle size={20} />
                 <h4 className="font-bold">Pending Institutional Actions</h4>
              </div>
              <ul className="space-y-4">
                 <PendingAction label="Library Fine Due" time="2 days left" />
                 <PendingAction label="Fee Payment Pending" time="12 days left" />
                 <PendingAction label="Vote on Proposal #88" time="Expiring soon" red />
              </ul>
           </div>

           <div className="glass-card p-8 border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-500/5 rounded-full -mr-12 -mt-12 transition-all group-hover:scale-125"></div>
              <h4 className="font-bold text-white mb-2 font-['Outfit']">Certify Competency</h4>
              <p className="text-xs text-slate-500 leading-relaxed mb-6 italic">You have completed 100% of the Blockchain v4 curriculum. You are eligible for an on-chain NFT certificate.</p>
              <button className="w-full py-3 bg-primary-500 hover:bg-primary-400 text-white text-xs font-bold rounded-xl transition-all shadow-lg shadow-primary-500/20">Claim NFT Certificate</button>
           </div>
        </div>
      </div>
    </div>
  );
};

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
      <h4 className="font-bold text-white group-hover:text-primary-400 transition-colors">{title}</h4>
      <div className="flex items-center gap-3 mt-2">
         <span className="text-[10px] text-slate-500 font-medium px-2 py-0.5 bg-white/5 rounded-md">{role}</span>
         <span className={`text-[10px] font-bold ${color.replace('bg-', 'text-')}`}>{status}</span>
      </div>
    </div>
  </div>
);

const PendingAction = ({ label, time, red }: any) => (
  <li className="flex items-center justify-between text-xs transition-transform hover:translate-x-1 duration-300 cursor-pointer">
    <span className="text-slate-400 font-medium">{label}</span>
    <span className={`font-bold ${red ? 'text-rose-400' : 'text-slate-500'}`}>{time}</span>
  </li>
);

export default Dashboard;
