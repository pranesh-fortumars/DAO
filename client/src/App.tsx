import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Proposals from './pages/Proposals';
import Treasury from './pages/Treasury';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Courses from './pages/Courses';
import Attendance from './pages/Attendance';
import Finance from './pages/Finance';
import Library from './pages/Library';
import Examinations from './pages/Examinations';
import CreateProposal from './pages/CreateProposal';
import Certificates from './pages/Certificates';
import { useAuth } from './AuthContext';

const App = () => {
  const { user, loading } = useAuth();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <AppContent 
        user={user} 
        loading={loading} 
        isSidebarOpen={isSidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
      />
    </Router>
  );
};

const AppContent = ({ user, loading, isSidebarOpen, setSidebarOpen }: any) => {
  const location = useLocation();

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="flex min-h-screen transition-colors duration-300 overflow-hidden" style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }}>
      {/* Background Gradients */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-500/10 dark:bg-primary-900/20 rounded-full blur-[120px] animate-glow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-500/5 dark:bg-accent-950/20 rounded-full blur-[120px] animate-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      {user && (
        <>
          {/* Mobile Overlay */}
          {isSidebarOpen && (
            <div 
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-30 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            ></div>
          )}
          <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
        </>
      )}

      <div className="flex-1 flex flex-col min-h-screen relative overflow-y-auto">
        {user && <Header onMenuClick={() => setSidebarOpen(true)} />}
        <main className="flex-1 p-6 md:p-8 max-w-7xl mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Routes location={location}>
                <Route path="/" element={<Navigate to={user ? "/dashboard" : "/login"} replace />} />
                <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" replace />} />
                <Route path="/courses" element={user ? <Courses /> : <Navigate to="/login" replace />} />
                <Route path="/attendance" element={user ? <Attendance /> : <Navigate to="/login" replace />} />
                <Route path="/exams" element={user ? <Examinations /> : <Navigate to="/login" replace />} />
                <Route path="/finance" element={user ? <Finance /> : <Navigate to="/login" replace />} />
                <Route path="/library" element={user ? <Library /> : <Navigate to="/login" replace />} />
                <Route path="/proposals" element={user ? <Proposals /> : <Navigate to="/login" replace />} />
                <Route path="/proposals/create" element={user ? <CreateProposal /> : <Navigate to="/login" replace />} />
                <Route path="/certificates" element={user ? <Certificates /> : <Navigate to="/login" replace />} />
                <Route path="/treasury" element={user ? <Treasury /> : <Navigate to="/login" replace />} />
                <Route path="/analytics" element={user ? <Analytics /> : <Navigate to="/login" replace />} />
                <Route path="/settings" element={user ? <Settings /> : <Navigate to="/login" replace />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default App;
