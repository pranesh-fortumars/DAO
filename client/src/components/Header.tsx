import { Bell, Search, Globe, ChevronDown, LogOut, Sun, Moon } from 'lucide-react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAuth } from '../AuthContext';
import { useTheme } from '../ThemeContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { logout, user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <header 
      style={{ backgroundColor: 'var(--bg-header)', borderColor: 'var(--border-main)' }}
      className="h-24 px-8 border-b flex items-center justify-between sticky top-0 backdrop-blur-xl z-20 transition-colors duration-300"
    >
      <div className="flex items-center gap-6 flex-1">
        <div className="relative group max-w-md w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary-400 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search proposals, members, or transactions..." 
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all font-medium text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-5">
        <button 
          onClick={toggleTheme}
          className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-slate-400 hover:text-white transition-all"
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {theme === 'dark' ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-primary-600" />}
        </button>

        <button className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-slate-400 hover:text-white transition-all relative">
          <Bell size={20} />
          <span className="absolute top-2.5 right-2.5 w-3 h-3 bg-accent-500 border-2 border-slate-950 rounded-full"></span>
        </button>

        <button className="flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all">
          <Globe size={18} className="text-primary-400" />
          <span className="text-sm font-semibold">Ethereum</span>
          <ChevronDown size={14} className="text-slate-500" />
        </button>

        <div className="h-10 w-[1px] bg-white/5 mx-2"></div>

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
