import { 
  User, 
  Shield, 
  Bell, 
  Database,
  ChevronRight,
  LogOut
} from 'lucide-react';

const Settings = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-20">
      <div>
        <h1 className="text-4xl">Platform Settings</h1>
        <p className="text-slate-500 mt-2 font-medium">Manage your personal preferences and DAO configurations</p>
      </div>

      <div className="space-y-6">
        <section className="space-y-4">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] px-2">Account Configuration</h3>
          <div className="glass-card overflow-hidden border-white/5">
            <div className="p-6 flex items-center justify-between hover:bg-white/5 transition-all cursor-pointer border-b border-white/5 group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400">
                  <User size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Profile Identity</h4>
                  <p className="text-xs text-slate-500 text-slate-500 mt-0.5">Manage your ENS name and avatar visibility</p>
                </div>
              </div>
              <ChevronRight size={18} className="text-slate-700 group-hover:text-white transition-all" />
            </div>
            <div className="p-6 flex items-center justify-between hover:bg-white/5 transition-all cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-400">
                  <Bell size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Notification Protocols</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Configure email and on-chain alerts for proposals</p>
                </div>
              </div>
              <ChevronRight size={18} className="text-slate-700 group-hover:text-white transition-all" />
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] px-2">Governance Parameters</h3>
          <div className="glass-card overflow-hidden border-white/5">
            <div className="p-6 flex items-center justify-between hover:bg-white/5 transition-all cursor-pointer border-b border-white/5 group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <Shield size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Security & Multi-sig</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Configure backup owners and threshold signatures</p>
                </div>
              </div>
              <ChevronRight size={18} className="text-slate-700 group-hover:text-white transition-all" />
            </div>
            <div className="p-6 flex items-center justify-between hover:bg-white/5 transition-all cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                  <Database size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Indexing & Nodes</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Manage RPC providers and data source synchronization</p>
                </div>
              </div>
              <ChevronRight size={18} className="text-slate-700 group-hover:text-white transition-all" />
            </div>
          </div>
        </section>

        <div className="pt-6">
          <button className="flex items-center gap-2 text-rose-500 font-bold text-sm hover:text-rose-400 transition-colors px-2">
            <LogOut size={18} />
            Disconnect Enterprise Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
