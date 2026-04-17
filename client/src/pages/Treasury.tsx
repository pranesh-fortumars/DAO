import { motion } from 'framer-motion';
import { 
  ArrowDownLeft, 
  ArrowUpRight, 
  History, 
  PieChart as PieChartIcon,
  Plus
} from 'lucide-react';

const assets = [
  { name: 'Ethereum', symbol: 'ETH', balance: '1,420.50', value: '$3,551,250', change: '+2.4%', color: 'bg-indigo-500' },
  { name: 'USD Coin', symbol: 'USDC', balance: '2,000,000.00', value: '$2,000,000', change: '0.0%', color: 'bg-blue-500' },
  { name: 'Rocket Pool ETH', symbol: 'rETH', balance: '450.25', value: '$1,215,675', change: '+1.8%', color: 'bg-orange-500' },
  { name: 'Governanace DAO', symbol: 'GDAO', balance: '5,000,000', value: '$500,000', change: '-5.2%', color: 'bg-primary-500' },
];

const transactions = [
  { id: '0x3a...4f5', type: 'Inflow', amount: '+450.00 ETH', from: '0x71...f2', date: '2h ago', status: 'Confirmed' },
  { id: '0x8b...1e2', type: 'Outflow', amount: '-12,000 USDC', to: 'Security Audit v1', date: '1d ago', status: 'Confirmed' },
  { id: '0xfe...9a0', type: 'Inflow', amount: '+1,200.50 USDC', from: 'Swap Fee #4', date: '3d ago', status: 'Confirmed' },
  { id: '0x21...c3d', type: 'Outflow', amount: '-5.20 ETH', to: 'Contributor #24', date: '5d ago', status: 'Confirmed' },
];

const Treasury = () => {
  return (
    <div className="space-y-10 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl">DAO Treasury</h1>
          <p className="text-slate-500 mt-2 font-medium">Transparent management of community-owned assets</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary">Buy Assets</button>
          <button className="btn-primary">
            <Plus size={20} />
            Initialize Transfer
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="glass-card p-10 bg-gradient-to-br from-primary-950/40 to-slate-900/40 relative overflow-hidden border-primary-500/10">
            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-primary-500/10 rounded-full blur-[100px]"></div>
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <p className="text-sm font-bold text-primary-400 uppercase tracking-widest mb-2">Total Treasury Balance</p>
                <h2 className="text-6xl">$7,266,925</h2>
                <div className="flex items-center gap-2 mt-4 text-emerald-400 font-bold">
                  <TrendingUpIcon size={18} />
                  <span>+4.2% in last 30 days</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Staked Assets</p>
                  <p className="text-xl font-bold">$1,215,675</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Liquid Capital</p>
                  <p className="text-xl font-bold">$6,051,250</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <PieChartIcon size={24} className="text-primary-400" />
              Asset Allocation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {assets.map((asset, idx) => (
                <motion.div 
                  key={asset.symbol}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-6 flex items-center justify-between border-white/5 hover:bg-white/10 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${asset.color} rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-black/20`}>
                      {asset.symbol[0]}
                    </div>
                    <div>
                      <h4 className="font-bold">{asset.name}</h4>
                      <p className="text-xs text-slate-500 font-medium">{asset.balance} {asset.symbol}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">{asset.value}</p>
                    <p className={`text-xs font-bold ${asset.change.startsWith('+') ? 'text-emerald-400' : asset.change.startsWith('0') ? 'text-slate-500' : 'text-rose-400'}`}>
                      {asset.change}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="glass-card flex flex-col border-white/5">
          <div className="p-8 border-b border-white/5 flex items-center justify-between">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <History size={20} className="text-slate-400" />
              Recent Flows
            </h3>
            <button className="text-xs font-bold text-primary-400 uppercase tracking-widest hover:text-primary-300 transition-colors">
              View All
            </button>
          </div>
          <div className="flex-1 p-6 space-y-6 overflow-y-auto max-h-[600px]">
            {transactions.map((tx) => (
              <div key={tx.id} className="flex items-center gap-4 group">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${tx.type === 'Inflow' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/20' : 'bg-rose-500/10 border-rose-500/20 text-rose-400 group-hover:bg-rose-500/20'}`}>
                  {tx.type === 'Inflow' ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold">{tx.type}</span>
                    <span className="text-xs text-slate-500">{tx.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-bold ${tx.type === 'Inflow' ? 'text-emerald-400' : 'text-rose-400'}`}>{tx.amount}</span>
                    <span className="text-[10px] text-slate-600 font-mono tracking-tighter truncate max-w-[80px]">{tx.id}</span>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest font-bold">
                    {tx.type === 'Inflow' ? `From: ${tx.from}` : `To: ${tx.to}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-8 bg-white/5">
            <button className="w-full btn-secondary text-xs font-bold uppercase tracking-widest flex items-center justify-center">
              Reconcile Ledgers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TrendingUpIcon = ({ size, className }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
);

export default Treasury;
