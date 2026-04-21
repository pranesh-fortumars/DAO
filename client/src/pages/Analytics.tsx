import { 
  BarChart3, 
  Users, 
  Activity, 
  Zap,
  TrendingUp,
  Globe,
  Share2
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const data = [
  { name: 'Jan', participation: 45, proposals: 12 },
  { name: 'Feb', participation: 52, proposals: 15 },
  { name: 'Mar', participation: 48, proposals: 22 },
  { name: 'Apr', participation: 61, proposals: 18 },
  { name: 'May', participation: 55, proposals: 25 },
  { name: 'Jun', participation: 67, proposals: 30 },
];

const distributionData = [
  { name: 'Trustees', value: 40, color: '#3b82f6' },
  { name: 'Mentors', value: 30, color: '#10b981' },
  { name: 'Students', value: 20, color: '#f59e0b' },
  { name: 'Alumni', value: 10, color: '#ec4899' },
];

const HubStatus = ({ city, status, health, warning }: any) => (
  <div className="flex items-center gap-6 group cursor-pointer">
    <div className={`p-3 rounded-2xl border ${warning ? 'bg-rose-500/10 border-rose-500/20 text-rose-400' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'}`}>
      <Activity size={18} />
    </div>
    <div className="flex-1">
       <div className="flex justify-between items-end mb-2">
          <p className="text-sm font-bold text-white tracking-tight">{city}</p>
          <span className={`text-[10px] font-black uppercase tracking-widest ${warning ? 'text-rose-400' : 'text-emerald-400'}`}>{status}</span>
       </div>
       <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-1000 ${warning ? 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.4)]' : 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]'}`} 
            style={{ width: `${health}%` }}
          />
       </div>
    </div>
  </div>
);

const Analytics = () => {
  return (
    <div className="space-y-10 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl text-gradient-primary font-bold font-['Outfit']">Governance Analytics</h1>
          <p className="text-slate-500 mt-2 font-medium">Deep insights into ecosystem health and member engagement</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary">
            <Share2 size={18} />
            Share Report
          </button>
          <button className="btn-primary">
            Download PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 border-white/5 space-y-2">
          <div className="flex items-center justify-between mb-4">
            <span className="p-2 bg-primary-500/10 rounded-lg"><Users size={20} className="text-primary-400" /></span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Growth Rate</span>
          </div>
          <h4 className="text-slate-400 text-sm font-medium">Total Delegates</h4>
          <p className="text-3xl font-bold">8,240</p>
          <div className="pt-4 flex items-center gap-2 text-emerald-400 text-xs font-bold">
            <TrendingUp size={14} />
            <span>+15.2% vs last month</span>
          </div>
        </div>
        <div className="glass-card p-6 border-white/5 space-y-2">
          <div className="flex items-center justify-between mb-4">
            <span className="p-2 bg-emerald-500/10 rounded-lg"><Activity size={20} className="text-emerald-400" /></span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Efficiency</span>
          </div>
          <h4 className="text-slate-400 text-sm font-medium">Pass Rate</h4>
          <p className="text-3xl font-bold">78.4%</p>
          <div className="pt-4 flex items-center gap-2 text-emerald-400 text-xs font-bold">
            <TrendingUp size={14} />
            <span>+2.1% improvement</span>
          </div>
        </div>
        <div className="glass-card p-6 border-white/5 space-y-2">
          <div className="flex items-center justify-between mb-4">
            <span className="p-2 bg-accent-500/10 rounded-lg"><Zap size={20} className="text-accent-400" /></span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Speed</span>
          </div>
          <h4 className="text-slate-400 text-sm font-medium">Avg. Execution Time</h4>
          <p className="text-3xl font-bold">4.2 Days</p>
          <div className="pt-4 flex items-center gap-2 text-rose-400 text-xs font-bold">
            <Activity size={14} />
            <span>-0.5 days slower</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card p-8 border-white/5">
          <h3 className="text-2xl mb-8 flex items-center gap-3 font-bold font-['Outfit']">
            <BarChart3 size={24} className="text-primary-400" />
            Participation Trends
          </h3>
          <div className="h-[300px] w-full min-h-[300px] overflow-hidden">
            <ResponsiveContainer width="99%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                />
                <Bar dataKey="participation" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card p-10 border-white/5 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-10 transition-opacity">
             <Share2 size={120} />
           </div>
           <h3 className="text-2xl font-bold font-['Outfit'] mb-10 flex items-center gap-3">
             <Share2 size={24} className="text-primary-400" />
             Voting Power Mandala
           </h3>
           <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="h-[240px] w-[240px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={distributionData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={8}
                      dataKey="value"
                    >
                      {distributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex-1 space-y-4">
                 {distributionData.map((item) => (
                    <div key={item.name} className="flex items-center justify-between group cursor-help">
                       <div className="flex items-center gap-3">
                         <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                         <span className="text-sm font-bold text-slate-400 group-hover:text-white transition-colors">{item.name}</span>
                       </div>
                       <span className="text-sm font-mono font-bold">{item.value}%</span>
                    </div>
                 ))}
                 <div className="pt-6 border-t border-white/5">
                    <p className="text-[10px] text-slate-500 italic leading-relaxed">
                      "Power is delegated based on institutional reputation points (IRP) verified on-chain."
                    </p>
                 </div>
              </div>
           </div>
        </div>

        <div className="glass-card p-10 border-white/5 relative bg-emerald-950/5 lg:col-span-2">
           <h3 className="text-2xl font-bold font-['Outfit'] mb-10 flex items-center gap-3">
             <Globe size={24} className="text-emerald-400" />
             State Hub Resilience
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <HubStatus city="Chennai Central" status="Optimal" health={100} />
              <HubStatus city="Salem Tech Hub" status="Syncing" health={84} />
              <HubStatus city="Madurai Regional" status="Optimal" health={98} />
              <HubStatus city="Trichy Gate" status="Degraded" health={42} warning />
           </div>
           <button className="w-full mt-10 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-all">
             Initialize State-Wide Re-Sync
           </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
