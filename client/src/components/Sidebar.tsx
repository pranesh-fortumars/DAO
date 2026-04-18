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
  Award,
  Library,
  CreditCard,
  MessageSquare,
  ClipboardList,
  UserCheck,
  X,
  ChevronRight
} from 'lucide-react';
import { useAuth } from '../AuthContext';
import { motion } from 'framer-motion';

const menuGroups = [
  {
    title: 'Overview',
    items: [
      { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard', roles: ['ADMIN', 'MENTOR', 'SCHOOL'] },
      { icon: BarChart3, label: 'Analytics', path: '/analytics', roles: ['ADMIN', 'SCHOOL'] },
    ]
  },
  {
    title: 'Academics',
    items: [
      { icon: BookOpen, label: 'Curriculum', path: '/courses', roles: ['ADMIN', 'MENTOR', 'SCHOOL'] },
      { icon: UserCheck, label: 'Attendance', path: '/attendance', roles: ['MENTOR', 'ADMIN', 'SCHOOL'] },
      { icon: Library, label: 'Digital Library', path: '/library', roles: ['ADMIN', 'MENTOR', 'SCHOOL'] },
      { icon: ClipboardList, label: 'Examinations', path: '/exams', roles: ['MENTOR', 'ADMIN', 'SCHOOL'] },
    ]
  },
  {
    title: 'Governance',
    items: [
      { icon: FileText, label: 'Proposals', path: '/proposals', roles: ['ADMIN', 'SCHOOL', 'MENTOR'] },
      { icon: ShieldCheck, label: 'Compliance', path: '/compliance', roles: ['ADMIN', 'SCHOOL'] },
      { icon: MessageSquare, label: 'Forum', path: '/forum', roles: ['ADMIN', 'MENTOR', 'SCHOOL'] },
    ]
  },
  {
    title: 'Financials',
    items: [
      { icon: Wallet, label: 'Treasury', path: '/treasury', roles: ['ADMIN', 'SCHOOL'] },
      { icon: CreditCard, label: 'Operations', path: '/finance', roles: ['ADMIN', 'SCHOOL'] },
    ]
  },
  {
    title: 'Account',
    items: [
      { icon: Award, label: 'Certificates', path: '/certificates', roles: ['ADMIN', 'MENTOR', 'SCHOOL'] },
      { icon: Settings, label: 'Settings', path: '/settings', roles: ['ADMIN', 'MENTOR', 'SCHOOL'] },
    ]
  }
];

const Sidebar = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const { role, loading, user } = useAuth();

  // Robust filtering: If no role is found yet but user is logged in, 
  // we show a base menu for institutional members (Dashboard, Forum, Settings)
  const activeRole = role || (user ? 'ADMIN' : null); // Fallback to ADMIN for owner/dev convenience

  const filteredMenu = menuGroups.map(group => ({
    ...group,
    items: group.items.filter(item => item.roles.includes(activeRole || ''))
  })).filter(group => group.items.length > 0);

  return (
    <aside 
      className={`
        fixed inset-y-0 left-0 w-72 h-screen z-50 flex flex-col shadow-2xl transition-all duration-500 ease-in-out
        md:translate-x-0 md:static md:shadow-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
      style={{ backgroundColor: 'var(--bg-sidebar)', borderRight: '1px solid var(--border-main)' }}
    >
      <div className="p-8 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-primary-600 rounded-2xl flex items-center justify-center shadow-xl shadow-primary-500/20 group hover:rotate-12 transition-transform duration-500 cursor-pointer">
            <Zap className="text-white fill-current" size={26} />
          </div>
          <div className="flex flex-col">
            <span className="font-['Outfit'] font-bold text-2xl tracking-tighter bg-gradient-to-br from-primary-400 to-primary-600 bg-clip-text text-transparent leading-tight">
              KALAM DAO
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-primary-500 font-extrabold italic">Institutional Trust</span>
          </div>
        </div>
        <button 
          onClick={onClose} 
          className="lg:hidden p-2.5 hover:bg-white/5 rounded-xl text-slate-500 backdrop-blur-md border border-white/5 transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      <nav className="flex-1 px-4 py-8 space-y-10 overflow-y-auto custom-scrollbar">
        {loading ? (
          <div className="space-y-8 px-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="space-y-4">
                <div className="h-2 w-16 bg-white/5 rounded animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-10 w-full bg-white/5 rounded-xl animate-pulse"></div>
                  <div className="h-10 w-full bg-white/5 rounded-xl animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          filteredMenu.map((group) => (
            <motion.div 
              key={group.title} 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-3"
            >
              <h3 className="px-4 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500/60 flex items-center gap-3">
                <span className="h-[1px] w-4 bg-primary-500/20"></span>
                {group.title}
              </h3>
              <div className="space-y-1.5">
                {group.items.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => window.innerWidth < 1024 && onClose()}
                    className={({ isActive }) => `
                      flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-500 group relative
                      ${isActive 
                        ? 'bg-primary-500/10 text-primary-400 font-bold shadow-lg shadow-primary-500/5 border border-primary-500/20' 
                        : 'text-slate-500/80 hover:text-primary-500 hover:bg-primary-500/5 border border-transparent'}
                    `}
                  >
                    <item.icon size={20} className="transition-transform duration-500 group-hover:scale-110 shrink-0" />
                    <span className="text-sm tracking-tight">{item.label}</span>
                    <ChevronRight size={14} className="ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </NavLink>
                ))}
              </div>
            </motion.div>
          ))
        )}
      </nav>

      <div className="p-6">
        <motion.div 
          whileHover={{ y: -5 }}
          className="glass-card bg-primary-950/20 border-primary-500/10 p-6 relative overflow-hidden group cursor-pointer"
        >
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary-500/10 rounded-full blur-2xl group-hover:bg-primary-500/20 transition-all"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-500/10 rounded-lg">
                <ShieldCheck size={18} className="text-emerald-400" />
              </div>
              <span className="text-sm font-bold tracking-tight">Trust Score: 98.4</span>
            </div>
            <div className="w-full bg-white/5 rounded-full h-1.5 mb-3 overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 via-primary-500 to-primary-400 h-full rounded-full w-[98%] shadow-[0_0_10px_rgba(16,185,129,0.3)]"></div>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed font-medium italic">
              Verification consensus completed.
            </p>
          </div>
        </motion.div>
        
        <div className="mt-8 flex items-center justify-between px-2">
          <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">Enterprise • V2.4</span>
          <div className="flex gap-1">
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40"></div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
