import { 
  CreditCard, 
  ArrowUpRight, 
  ArrowDownLeft, 
  CheckCircle2,
  FileText,
  TrendingUp,
  Landmark
} from 'lucide-react';

const transactions = [
  { id: 'TX-9921', category: 'Tuition Fee', amount: '-$4,200.00', date: 'April 12, 2026', status: 'Completed', method: 'MetaMask' },
  { id: 'TX-9920', category: 'Research Grant', amount: '+$1,500.00', date: 'April 10, 2026', status: 'Completed', method: 'Governance Sync' },
  { id: 'TX-9919', category: 'Library Fine', amount: '-$12.50', date: 'April 05, 2026', status: 'Pending', method: 'Wallet Connect' },
  { id: 'TX-9918', category: 'Stipend', amount: '+$800.00', date: 'March 28, 2026', status: 'Completed', method: 'Direct Deposit' },
];

const Finance = () => {
  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-['Outfit'] font-bold">Financial Operations</h1>
          <p className="text-slate-500 mt-2 font-medium">Transparent institutional economy powered by DAO Treasury.</p>
        </div>
        <div className="flex gap-3">
          <button className="btn-secondary">
            <FileText size={18} />
            History
          </button>
          <button className="btn-primary">
            <CreditCard size={18} />
            Pay Balance
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="glass-card p-8 bg-gradient-to-br from-primary-600/20 to-transparent border-primary-500/20">
               <div className="flex items-center gap-3 mb-6">
                 <div className="p-3 bg-primary-500/20 rounded-xl">
                   <Landmark className="text-primary-400" size={24} />
                 </div>
                 <div>
                   <h3 className="text-lg font-bold">Wallet Balance</h3>
                   <p className="text-xs text-slate-500">Available for institutional services</p>
                 </div>
               </div>
               <div className="flex flex-col gap-1">
                 <span className="text-4xl font-bold font-['Outfit']">24,500 GDAO</span>
                 <span className="text-sm text-primary-400 font-bold">~ $12,250.00 USD</span>
               </div>
               <div className="flex gap-4 mt-8">
                 <button className="flex-1 py-3 px-4 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-bold transition-all border border-white/10">Deposit</button>
                 <button className="flex-1 py-3 px-4 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-bold transition-all border border-white/10">Transfer</button>
               </div>
             </div>

             <div className="glass-card p-8 flex flex-col justify-between border-white/5">
                <div>
                   <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold">Next Fee Term</h4>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">In 12 Days</span>
                   </div>
                   <p className="text-2xl font-bold font-['Outfit']">$1,250.00</p>
                </div>
                <div className="space-y-3 mt-6">
                   <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                      <div className="bg-primary-500 h-full w-[65%]" />
                   </div>
                   <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      <span>Funded: $812.50</span>
                      <span>Target: $1,250.00</span>
                   </div>
                </div>
                <button className="w-full py-3 bg-primary-500/10 hover:bg-primary-500/20 text-primary-400 text-sm font-bold rounded-xl border border-primary-500/20 mt-6 transition-all">
                   Setup Auto-Pay
                </button>
             </div>
          </div>

          <div className="glass-card border-white/5 overflow-hidden">
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <h3 className="text-xl font-bold">Transaction Ledger</h3>
              <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50">
                <option>All Transactions</option>
                <option>Fees</option>
                <option>Grants</option>
              </select>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <tbody className="divide-y divide-white/5">
                  {transactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className={`p-2.5 rounded-xl ${tx.amount.startsWith('+') ? 'bg-emerald-500/10' : 'bg-rose-500/10'}`}>
                            {tx.amount.startsWith('+') ? <ArrowDownLeft size={18} className="text-emerald-400" /> : <ArrowUpRight size={18} className="text-rose-400" />}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-white">{tx.category}</p>
                            <p className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">{tx.date}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-mono text-slate-400">{tx.id}</td>
                      <td className="px-6 py-4 text-sm font-bold">{tx.amount}</td>
                      <td className="px-6 py-4 text-right">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${tx.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>
                          {tx.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-6">
           <div className="glass-card p-6 border-white/5">
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                <TrendingUp size={20} className="text-primary-400" />
                Spending Analysis
              </h4>
              <div className="space-y-4">
                 <ExpenseChannel label="Academic Fees" percentage={75} color="bg-primary-500" />
                 <ExpenseChannel label="Laboratory Credits" percentage={15} color="bg-accent-500" />
                 <ExpenseChannel label="Governance Fees" percentage={5} color="bg-emerald-500" />
                 <ExpenseChannel label="Digital Assets" percentage={5} color="bg-amber-500" />
              </div>
           </div>

           <div className="glass-card p-6 border-primary-500/10 bg-primary-950/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-transparent"></div>
              <h4 className="font-bold text-white flex items-center gap-2 mb-4">
                 <CheckCircle2 size={18} className="text-primary-400" />
                 Grant Eligibility
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                 Your academic performance and DAO participation score qualify you for a **15% Scholarship Grant** this semester.
              </p>
              <button className="w-full py-3 bg-primary-500 text-white text-xs font-bold rounded-xl hover:bg-primary-400 transition-all shadow-lg shadow-primary-500/20">
                 Claim Governance Grant
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

const ExpenseChannel = ({ label, percentage, color }: any) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between text-xs font-bold">
      <span className="text-slate-400">{label}</span>
      <span className="text-white">{percentage}%</span>
    </div>
    <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
      <div className={`${color} h-full rounded-full transition-all duration-1000`} style={{ width: `${percentage}%` }} />
    </div>
  </div>
);

export default Finance;
