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
  LineChart,
  Line
} from 'recharts';

const data = [
  { name: 'Jan', participation: 45, proposals: 12 },
  { name: 'Feb', participation: 52, proposals: 15 },
  { name: 'Mar', participation: 48, proposals: 22 },
  { name: 'Apr', participation: 61, proposals: 18 },
  { name: 'May', participation: 55, proposals: 25 },
  { name: 'Jun', participation: 67, proposals: 30 },
];

const Analytics = () => {
  return (
    <div className="space-y-10 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl">Governance Analytics</h1>
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
          <h3 className="text-2xl mb-8 flex items-center gap-3">
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

        <div className="glass-card p-8 border-white/5">
          <h3 className="text-2xl mb-8 flex items-center gap-3">
            <Globe size={24} className="text-accent-400" />
            Voter Distribution
          </h3>
          <div className="h-[300px] w-full min-h-[300px] overflow-hidden">
            <ResponsiveContainer width="99%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                   contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                />
                <Line type="monotone" dataKey="proposals" stroke="#ec4899" strokeWidth={3} dot={{ fill: '#ec4899' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
