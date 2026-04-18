import { 
  Wallet, 
  TrendingUp, 
  ArrowUpRight,
  Filter,
  Users,
  Briefcase,
  Target
} from 'lucide-react';

const SchoolPortal = () => {
  return (
    <div className="space-y-8 pb-20">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold font-['Outfit']">Associate School Portal</h1>
          <p className="text-slate-500 mt-2">Manage institutional sponsorships, hire top talent, and drive curriculum.</p>
        </div>
        <button className="btn-primary">
          <Wallet size={20} />
          Fund Department
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="glass-card p-6 bg-emerald-500/5 border-emerald-500/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-emerald-500/20 rounded-xl">
              <TrendingUp className="text-emerald-400" size={24} />
            </div>
            <h4 className="font-bold">Total Sponsorship</h4>
          </div>
          <p className="text-3xl font-bold uppercase tracking-tight">45,000 GDAO</p>
          <p className="text-xs text-slate-500 mt-2">Active in 12 departments</p>
        </div>

        <div className="glass-card p-6 bg-primary-500/5 border-primary-500/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary-500/20 rounded-xl">
              <Briefcase className="text-primary-400" size={24} />
            </div>
            <h4 className="font-bold">Internship Leads</h4>
          </div>
          <p className="text-3xl font-bold uppercase tracking-tight">24 Active</p>
          <p className="text-xs text-slate-500 mt-2">Based on certification criteria</p>
        </div>

        <div className="glass-card p-6 bg-accent-500/5 border-accent-500/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-accent-500/20 rounded-xl">
              <Target className="text-accent-400" size={24} />
            </div>
            <h4 className="font-bold">Voting Weight</h4>
          </div>
          <p className="text-3xl font-bold uppercase tracking-tight">1.2%</p>
          <p className="text-xs text-slate-500 mt-2">Delegated to 4 Mentors</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 glass-card p-8 border-white/5">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl">Talent Pipeline</h2>
            <div className="flex gap-2">
              <button className="p-2 bg-white/5 border border-white/10 rounded-lg text-slate-400 hover:text-white transition-all">
                <Filter size={18} />
              </button>
            </div>
          </div>
          
          <div className="space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 transition-all group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/10">
                    <Users size={20} className="text-slate-500" />
                  </div>
                  <div>
                    <h5 className="font-bold underline italic text-primary-400">Scholar #889{i}</h5>
                    <p className="text-sm text-slate-400">Specialization: DeFi Engineering</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 bg-primary-500/10 text-primary-400 rounded-xl text-xs font-bold border border-primary-500/10 group-hover:bg-primary-500/20 transition-all">
                  View NFT Certs
                  <ArrowUpRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="glass-card p-8 border-white/5">
          <h2 className="text-2xl mb-8">Department ROI</h2>
          <div className="space-y-4">
            <DepartmentProgress label="Computer Science" value={92} color="bg-emerald-500" />
            <DepartmentProgress label="Digital Finance" value={78} color="bg-primary-500" />
            <DepartmentProgress label="Cyber Security" value={64} color="bg-accent-500" />
            <DepartmentProgress label="Web3 Design" value={45} color="bg-indigo-500" />
            <div className="mt-8 p-4 bg-primary-500/5 border border-primary-500/20 rounded-2xl">
              <p className="text-xs text-slate-400 italic">"Your sponsorship has funded 42 scholarship certifications this quarter."</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const DepartmentProgress = ({ label, value, color }: any) => (
  <div className="space-y-2">
    <div className="flex justify-between text-xs font-bold">
      <span className="text-slate-400">{label}</span>
      <span className="text-white">{value}% Impact</span>
    </div>
    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
      <div className={`h-full ${color} rounded-full`} style={{ width: `${value}%` }}></div>
    </div>
  </div>
);

export default SchoolPortal;
