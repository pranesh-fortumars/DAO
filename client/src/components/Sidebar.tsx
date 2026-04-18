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
  X
} from 'lucide-react';

const menuGroups = [
  {
    title: 'Overview',
    items: [
      { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
      { icon: BarChart3, label: 'Analytics', path: '/analytics' },
    ]
  },
  {
    title: 'Academics',
    items: [
      { icon: BookOpen, label: 'Curriculum', path: '/courses' },
      { icon: UserCheck, label: 'Attendance', path: '/attendance' },
      { icon: Library, label: 'Digital Library', path: '/library' },
      { icon: ClipboardList, label: 'Examinations', path: '/exams' },
    ]
  },
  {
    title: 'Governance',
    items: [
      { icon: FileText, label: 'Proposals', path: '/proposals' },
      { icon: ShieldCheck, label: 'Compliance', path: '/compliance' },
      { icon: MessageSquare, label: 'Forum', path: '/forum' },
    ]
  },
  {
    title: 'Financials',
    items: [
      { icon: Wallet, label: 'Treasury', path: '/treasury' },
      { icon: CreditCard, label: 'Kattanam', path: '/finance' },
    ]
  },
  {
    title: 'Account',
    items: [
      { icon: Award, label: 'Certificates', path: '/certificates' },
      { icon: Settings, label: 'Settings', path: '/settings' },
    ]
  }
];

const Sidebar = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  return (
    <aside 
      style={{ backgroundColor: 'var(--bg-sidebar)', borderColor: 'var(--border-main)' }} 
      className={`
        fixed inset-y-0 left-0 w-72 h-screen glass-card !rounded-none !border-y-0 !border-l-0 border-r flex flex-col z-40 
        transition-transform duration-300 lg:translate-x-0 lg:static lg:h-screen
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      <div className="p-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/30">
            <Zap className="text-white fill-current" size={24} />
          </div>
          <div className="flex flex-col">
            <span className="font-['Outfit'] font-bold text-xl tracking-tight bg-gradient-to-br from-primary-400 to-primary-600 bg-clip-text text-transparent">
              KALAM DAO
            </span>
            <span className="text-[10px] uppercase tracking-widest text-primary-500 font-bold italic">Tamil Nadu Trust</span>
          </div>
        </div>
        <button onClick={onClose} className="lg:hidden p-2 hover:bg-white/5 rounded-lg text-slate-500">
          <X size={20} />
        </button>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-8 overflow-y-auto custom-scrollbar">
        {menuGroups.map((group) => (
          <div key={group.title} className="space-y-2">
            <h3 className="px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">
              {group.title}
            </h3>
            <div className="space-y-1">
              {group.items.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `
                    flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group
                    ${isActive 
                      ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20' 
                      : 'text-slate-500 hover:text-primary-500 hover:bg-primary-500/5 border border-transparent'}
                  `}
                >
                  <item.icon size={18} className="transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-semibold text-sm">{item.label}</span>
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="p-6">
        <div className="glass-card bg-primary-950/20 border-primary-500/10 p-5 relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary-500/10 rounded-full blur-2xl group-hover:bg-primary-500/20 transition-all"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck size={18} className="text-emerald-400" />
              <span className="text-sm font-semibold">Trust Score: 98.4</span>
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
