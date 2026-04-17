import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Proposals from './pages/Proposals';
import CreateProposal from './pages/CreateProposal';
import Treasury from './pages/Treasury';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
        {/* Background Gradients */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-900/20 rounded-full blur-[120px] animate-glow"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-900/10 rounded-full blur-[120px] animate-glow" style={{ animationDelay: '2s' }}></div>
        </div>

        <Sidebar />
        
        <div className="flex-1 flex flex-col min-h-screen relative overflow-y-auto">
          <Header />
          <main className="flex-1 p-6 md:p-8 max-w-7xl mx-auto w-full">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/proposals" element={<Proposals />} />
              <Route path="/proposals/create" element={<CreateProposal />} />
              <Route path="/treasury" element={<Treasury />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
