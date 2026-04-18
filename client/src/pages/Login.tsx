import { useState } from 'react';
import { motion } from 'framer-motion';
import { auth } from '../firebase';
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Shield, GraduationCap, School, LogIn, Mail, Lock } from 'lucide-react';
import { useAuth } from '../AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const { setRole } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async (selectedRole: 'ADMIN' | 'MENTOR' | 'SCHOOL') => {
    setIsAuthLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      await setRole(selectedRole);
      navigate('/dashboard');
    } catch (error) {
      console.error("Auth Error:", error);
    } finally {
      setIsAuthLoading(false);
    }
  };

  const handleEmailAuth = async (e: React.FormEvent, selectedRole: 'ADMIN' | 'MENTOR' | 'SCHOOL') => {
    e.preventDefault();
    setIsAuthLoading(true);
    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      await setRole(selectedRole);
      navigate('/dashboard');
    } catch (error) {
      console.error("Auth Error:", error);
    } finally {
      setIsAuthLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden border-primary-500/10"
      >
        <div className="p-10 bg-primary-500/5 flex flex-col justify-center border-r border-slate-500/10">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-500 mb-3 block">Tamil Nadu Educational Trust</span>
          <h2 className="text-4xl font-['Outfit'] font-bold mb-4 tracking-tighter leading-tight">KALAM EDUCATION DAO</h2>
          <p className="text-slate-400 mb-10 leading-relaxed font-medium text-sm">
            Empowering the students of Tamil Nadu through decentralized transparency. Select your gateway to enter the Mandram.
          </p>
          
          <div className="space-y-4">
            <RoleButton 
              icon={<Shield size={20} />} 
              label="Trustee Portal" 
              onClick={() => handleGoogleSignIn('ADMIN')} 
              loading={isAuthLoading}
              className="hover:border-primary-500/30"
            />
            <RoleButton 
              icon={<GraduationCap size={20} />} 
              label="Mentor Access" 
              onClick={() => handleGoogleSignIn('MENTOR')} 
              loading={isAuthLoading}
              className="hover:border-primary-500/30"
            />
            <RoleButton 
              icon={<School size={20} />} 
              label="Institutional Board" 
              onClick={() => handleGoogleSignIn('SCHOOL')} 
              loading={isAuthLoading}
              className="hover:border-emerald-500/30"
            />
          </div>
        </div>

        <div className="p-10 flex flex-col justify-center">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold">{isRegister ? 'Create Account' : 'Welcome Back'}</h3>
            <p className="text-slate-500 text-sm mt-2 font-bold">Sign in with your organization email</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => handleEmailAuth(e, 'MENTOR')}>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="input-field pl-12"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input 
                type="password" 
                placeholder="Password" 
                className="input-field pl-12"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn-primary w-full py-3 mt-4">
              {isRegister ? 'Register' : 'Login'} 
              <LogIn size={20} className="ml-2" />
            </button>
          </form>

          <p className="text-slate-500 text-sm text-center mt-6">
            {isRegister ? 'Already have an account?' : "Don't have an account?"}
            <button 
              onClick={() => setIsRegister(!isRegister)}
              className="ml-2 text-primary-400 hover:text-primary-300 font-bold transition-colors"
            >
              {isRegister ? 'Sign In' : 'Create One'}
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const RoleButton = ({ icon, label, onClick, className, loading }: any) => (
  <button 
    onClick={onClick}
    disabled={loading}
    className={`w-full flex items-center gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.02] transition-all hover:bg-primary-500/5 hover:translate-x-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group ${className}`}
  >
    <div className="p-3 rounded-xl bg-primary-500/10 text-primary-500 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <span className="font-bold tracking-tight text-sm uppercase">{label}</span>
  </button>
);

export default Login;
