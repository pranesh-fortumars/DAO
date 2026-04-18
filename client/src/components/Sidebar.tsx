import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Wallet, 
  BarChart3, 
  Settings, 
  ShieldCheck,
  Zap,
  BookOpen,
  Award
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: BookOpen, label: 'Courses', path: '/courses' },
  { icon: FileText, label: 'Governance', path: '/proposals' },
  { icon: Award, label: 'Certificates', path: '/certificates' },
  { icon: Wallet, label: 'Treasury', path: '/treasury' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

const Sidebar = () => {
  return (
    <aside className="w-72 h-screen glass-card !rounded-none !border-y-0 !border-l-0 border-r-white/10 flex flex-col z-20 sticky top-0">
      <div className="p-8 flex items-center gap-3">
        <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/30">
          <Zap className="text-white fill-current" size={24} />
        </div>
        <div className="flex flex-col">
          <span className="font-['Outfit'] font-bold text-xl tracking-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
            EDU CONNECT
          </span>
          <span className="text-[10px] uppercase tracking-widest text-primary-500 font-bold">DAO Ecosystem</span>
        </div>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 group
              ${isActive 
                ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20' 
                : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'}
            `}
          >
            <item.icon size={22} className="transition-transform duration-300 group-hover:scale-110" />
            <span className="font-medium">{item.label}</span>
            {item.path === '/proposals/create' && (
              <span className="ml-auto bg-primary-500/20 text-primary-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-primary-500/20">
                NEW
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-6">
        <div className="glass-card bg-primary-950/20 border-primary-500/10 p-5 relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary-500/10 rounded-full blur-2xl group-hover:bg-primary-500/20 transition-all"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck size={18} className="text-emerald-400" />
              <span className="text-sm font-semibold text-white">Trust Score: 98.4</span>
            </div>
            <div className="w-full bg-white/5 rounded-full h-1.5 mb-2">
              <div className="bg-gradient-to-r from-emerald-500 to-primary-500 h-full rounded-full w-[98%]"></div>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Governance participation is high. Your reputation is excellent.
            </p>
          </div>
        </div>
        
        <div className="mt-6 flex items-center justify-center">
          <button className="text-slate-500 hover:text-white text-xs font-medium transition-colors flex items-center gap-2">
            System V.2.4.0 • Enterprise
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
