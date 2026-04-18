import { motion } from 'framer-motion';
import { 
  Award, 
  ExternalLink, 
  ShieldCheck, 
  Share2,
  Download,
  Calendar,
  Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';

const certificates = [
  { 
    id: 1, 
    courseName: 'Advanced Blockchain Architecture', 
    issueDate: '2025-11-15', 
    nftId: '#8842', 
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832&ixlib=rb-4.0.3',
    verifyUrl: 'https://sepolia.etherscan.io/'
  },
  { 
    id: 2, 
    courseName: 'Solidity Masterclass', 
    issueDate: '2025-10-20', 
    nftId: '#4122', 
    image: 'https://images.unsplash.com/photo-1642713368225-837130f6e72b?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3',
    verifyUrl: 'https://sepolia.etherscan.io/'
  },
];

const Certificates = () => {
  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-['Outfit'] font-bold">Your Credentials</h1>
          <p className="text-slate-500 mt-2 font-medium">Verifiable on-chain certifications stored as NFTs.</p>
        </div>
        <button className="btn-primary">
          Verify External Certificate
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {certificates.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card flex flex-col md:flex-row overflow-hidden border-white/5"
          >
            <div className="w-full md:w-48 h-48 md:h-auto relative">
              <img 
                src={cert.image} 
                className="w-full h-full object-cover" 
                alt="Certificate NFT"
              />
              <div className="absolute inset-0 bg-primary-600/20 backdrop-blur-[2px] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Share2 className="text-white" size={24} />
              </div>
            </div>
            
            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1 text-emerald-400">
                    <ShieldCheck size={16} />
                    <span className="text-[10px] uppercase font-bold tracking-widest">Verified on Ethereum</span>
                  </div>
                  <h3 className="text-xl font-bold">{cert.courseName}</h3>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-500 uppercase font-bold block mb-1">Token ID</span>
                  <span className="text-sm font-mono text-primary-400">{cert.nftId}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 my-6">
                <div>
                  <div className="flex items-center gap-2 mb-1 text-slate-500">
                    <Calendar size={12} />
                    <span className="text-[10px] uppercase font-bold tracking-widest">Issued On</span>
                  </div>
                  <p className="text-sm font-medium">{cert.issueDate}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1 text-slate-500">
                    <Layers size={12} />
                    <span className="text-[10px] uppercase font-bold tracking-widest">Network</span>
                  </div>
                  <p className="text-sm font-medium">Sepolia Testnet</p>
                </div>
              </div>

              <div className="mt-auto flex items-center gap-3">
                <a 
                  href={cert.verifyUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold transition-all"
                >
                  <ExternalLink size={14} />
                  View on Explorer
                </a>
                <button className="p-2 bg-primary-500/10 hover:bg-primary-500/20 text-primary-400 rounded-xl border border-primary-500/20 transition-all">
                  <Download size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="glass-card p-12 border-dashed border-white/10 bg-white/[0.02] flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10">
          <Award size={32} className="text-slate-600" />
        </div>
        <h3 className="text-2xl font-bold mb-2 text-slate-400">Complete more courses to earn NFTs</h3>
        <p className="text-slate-500 max-w-sm">Every completed course governed by the DAO grants you a permanent, cryptographic credential on the blockchain.</p>
        <Link to="/courses" className="mt-8 btn-primary">
          Explore Courses
        </Link>
      </div>
    </div>
  );
};

export default Certificates;
