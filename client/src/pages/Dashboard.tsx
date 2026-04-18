import { motion } from 'framer-motion';
import { 
  Users, 
  FileCheck, 
  TrendingUp, 
  Clock, 
  ChevronRight,
  Database
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  { name: 'Mon', value: 4000 },
  { name: 'Tue', value: 3000 },
  { name: 'Wed', value: 5000 },
  { name: 'Thu', value: 4780 },
  { name: 'Fri', value: 5890 },
  { name: 'Sat', value: 5390 },
  { name: 'Sun', value: 6490 },
];

const stats = [
  { label: 'Total Value Locked', value: '$2,480,000', change: '+12.5%', icon: Database, color: 'text-primary-400', bg: 'bg-primary-500/10' },
  { label: 'Active Proposals', value: '14', change: '+2 new', icon: FileCheck, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  { label: 'Total Members', value: '12,450', change: '+450/mo', icon: Users, color: 'text-accent-400', bg: 'bg-accent-500/10' },
  { label: 'Participation Rate', value: '68.2%', change: '+5.4%', icon: TrendingUp, color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
];

const Dashboard = () => {
  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl">Enterprise Overview</h1>
          <p className="text-slate-500 mt-2 font-medium">Welcome back, Admin. Here's what's happening with the DAO today.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary">Export Data</button>
          <button className="btn-primary">Connect Logic</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-6 glass-card-hover border-white/5"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.bg} p-3 rounded-xl`}>
                <stat.icon className={stat.color} size={24} />
              </div>
              <span className={`text-sm font-bold ${stat.change.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider">{stat.label}</h3>
            <p className="text-3xl mt-1">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass-card p-8 border-white/5">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl">Treasury Growth</h2>
              <p className="text-slate-500 text-sm mt-1">Institutional asset flow over the last 7 days</p>
            </div>
            <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-slate-300 focus:outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Year to Date</option>
            </select>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }}
                  dy={10}
                />
                <YAxis 
                  hide={true}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  itemStyle={{ color: '#0ea5e9' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#0ea5e9" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card p-8 border-white/5 flex flex-col">
          <h2 className="text-2xl mb-6">Recent Activity</h2>
          <div className="space-y-6 flex-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary-500/20 transition-colors">
                  <Clock size={18} className="text-slate-400 group-hover:text-primary-400" />
                </div>
                <div className="flex-1 border-b border-white/5 pb-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold">Proposal #240 Passed</span>
                    <span className="text-[10px] text-slate-500">2h ago</span>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-1">Treasury allocation for Infrastructure Upgrade V3</p>
                </div>
                <ChevronRight size={14} className="text-slate-700 self-center" />
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 text-sm font-bold text-primary-400 hover:text-primary-300 transition-colors bg-primary-500/5 rounded-xl border border-primary-500/10">
            View All Historical Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
