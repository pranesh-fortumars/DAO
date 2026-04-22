import { Bell, Search, Globe, ChevronDown, LogOut, Sun, Moon, Menu, Zap, TrendingUp } from 'lucide-react';
// Optimized Institutional Header Component - v2.4.1
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAuth } from '../AuthContext';
import { useTheme } from '../ThemeContext';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = ({ onMenuClick }: { onMenuClick: () => void }) => {
  const { logout, user, role } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const getPageTitle = () => {
    const path = location.pathname.split('/')[1];
    if (!path) return 'Command Center';
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <header 
      style={{ backgroundColor: 'var(--bg-header)', borderColor: 'var(--border-main)' }}
      className="h-24 px-4 md:px-8 border-b flex items-center justify-between sticky top-0 backdrop-blur-xl z-20 transition-colors duration-300"
    >
      <div className="flex items-center gap-4 md:gap-10 flex-1">
        <button onClick={onMenuClick} className="lg:hidden p-2.5 hover:bg-white/5 rounded-2xl text-slate-400 border border-white/5 shadow-sm">
          <Menu size={24} />
        </button>
        
        <div className="hidden lg:flex flex-col">
          <h2 className="text-xl font-bold font-['Outfit'] tracking-tight">{getPageTitle()}</h2>
          <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold tracking-widest uppercase">
            <span>Kalam DAO</span>
            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
            <span>{getPageTitle()}</span>
          </div>
        </div>

        <div className="relative group max-w-sm w-full hidden xl:block">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary-400 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search institution records..." 
            className="w-full bg-slate-900/50 border border-white/5 rounded-2xl py-2.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500/20 transition-all font-medium text-xs text-[var(--text-main)]"
          />
        </div>

        <div className="hidden sm:flex items-center gap-6 px-5 py-2.5 bg-white/[0.03] rounded-2xl border border-white/5">
             <div className="flex items-center gap-2 group cursor-help">
                <Zap size={14} className="text-amber-500 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                   <span className="text-[8px] font-black text-slate-500 uppercase tracking-tighter">Gas Price</span>
                   <span className="text-[10px] font-black font-mono text-[var(--text-main)]">12 Gwei</span>
                </div>
             </div>
             <div className="w-[1px] h-4 bg-white/10"></div>
             <div className="flex items-center gap-2 group cursor-help">
                <TrendingUp size={14} className="text-emerald-500 group-hover:translate-y-[-2px] transition-transform" />
                <div className="flex flex-col">
                   <span className="text-[8px] font-black text-slate-500 uppercase tracking-tighter">TPS</span>
                   <span className="text-[10px] font-black font-mono text-[var(--text-main)]">4.2k</span>
                </div>
             </div>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <button 
          onClick={toggleTheme}
          className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-slate-400 hover:text-[var(--text-main)] transition-all"
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {theme === 'dark' ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-primary-600" />}
        </button>

        <button className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-slate-400 hover:text-[var(--text-main)] transition-all relative">
          <Bell size={20} />
          <span className="absolute top-2.5 right-2.5 w-3 h-3 bg-accent-500 border-2 border-slate-950 rounded-full"></span>
        </button>

        <button className="flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all">
          <Globe size={18} className="text-primary-400" />
          <span className="text-sm font-semibold">Ethereum</span>
          <ChevronDown size={14} className="text-slate-500" />
        </button>

        <div className="h-10 w-[1px] bg-white/5 mx-2"></div>

        <div className="hidden sm:flex flex-col items-end mr-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary-500">Security Access</span>
          <span className="text-xs font-bold text-slate-400 capitalize">{role?.toLowerCase() || 'Verified Account'}</span>
        </div>

        <ConnectButton />

        {user && (
          <button 
            onClick={handleLogout}
            className="p-3 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 rounded-xl text-rose-400 hover:text-rose-300 transition-all flex items-center gap-2 group"
            title="Log Out"
          >
            <LogOut size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
