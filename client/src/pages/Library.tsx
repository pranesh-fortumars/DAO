import { motion } from 'framer-motion';
import { 
  Library as LibraryIcon, 
  Search, 
  Book, 
  FileText, 
  Video, 
  Download,
  Bookmark,
  ExternalLink,
  Filter
} from 'lucide-react';

const resources = [
  { id: 'LIB-01', title: 'Ethereum Whitepaper 2026', author: 'Vitalik Buterin', type: 'PDF', category: 'Blockchain', size: '2.4 MB' },
  { id: 'LIB-02', title: 'Smart Contract Security Patterns', author: 'OpenZeppelin', type: 'E-Book', category: 'Security', size: '14.8 MB' },
  { id: 'LIB-03', title: 'DAO Governance Models', author: 'EduMentor Research', type: 'Video', category: 'Governance', size: '45 mins' },
  { id: 'LIB-04', title: 'Institutional DeFi Analysis', author: 'Goldman Sachs', type: 'PDF', category: 'Finance', size: '5.2 MB' },
];

const Library = () => {
  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-['Outfit'] font-bold underline italic">Digital Institutional Library</h1>
          <p className="text-slate-500 mt-2 font-medium italic">Access curated research, textbooks, and multimedia learning assets.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input type="text" placeholder="Search archive..." className="input-field pl-12 w-64 h-11" />
          </div>
          <button className="btn-primary h-11">
            <Bookmark size={18} />
            My Bookshelf
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="space-y-6">
          <div className="glass-card p-6 border-white/5">
             <h3 className="font-bold flex items-center gap-2 mb-6">
               <Filter size={18} className="text-primary-400" />
               Filter Archive
             </h3>
             <div className="space-y-4">
                <FilterToggle label="All Assets" count={1240} active />
                <FilterToggle label="Textbooks" count={450} />
                <FilterToggle label="Research Papers" count={320} />
                <FilterToggle label="Video Lectures" count={280} />
                <FilterToggle label="Interactive Labs" count={190} />
             </div>
          </div>

          <div className="glass-card p-6 border-primary-500/10 bg-primary-950/20">
             <h4 className="font-bold text-sm text-white mb-2">Institution Librarian</h4>
             <p className="text-xs text-slate-500 leading-relaxed mb-4">Need help finding a specific research paper? Chat with our AI-powered librarian.</p>
             <button className="w-full py-2.5 bg-primary-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-primary-400 transition-all">Start Librarian AI</button>
          </div>
        </div>

        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((res, idx) => (
            <motion.div
              key={res.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 border-white/5 glass-card-hover group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={16} className="text-slate-500" />
              </div>
              <div className="flex gap-5">
                <div className="w-16 h-20 bg-white/5 rounded-lg border border-white/10 flex flex-col items-center justify-center">
                  {res.type === 'PDF' ? <FileText className="text-rose-400" size={24} /> : res.type === 'Video' ? <Video className="text-amber-400" size={24} /> : <Book className="text-primary-400" size={24} />}
                  <span className="text-[8px] font-bold mt-2 uppercase text-slate-500 tracking-tighter">{res.type}</span>
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-bold text-primary-400 uppercase tracking-widest">{res.category}</span>
                  <h4 className="text-lg font-bold text-white mt-1 group-hover:text-primary-400 transition-colors">{res.title}</h4>
                  <p className="text-xs text-slate-500 mt-1">Author: <span className="text-slate-400">{res.author}</span></p>
                  
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-[10px] font-bold text-slate-600 uppercase">{res.size}</span>
                    <button className="flex items-center gap-2 text-xs font-bold text-primary-400 hover:text-primary-300 transition-colors">
                      <Download size={14} />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          <div className="md:col-span-2 py-10 flex flex-col items-center justify-center border-2 border-dashed border-white/5 rounded-3xl group cursor-pointer hover:border-primary-500/20 transition-all">
             <div className="p-4 bg-white/5 rounded-full mb-4 group-hover:scale-110 transition-transform">
               <LibraryIcon size={32} className="text-slate-600 group-hover:text-primary-400" />
             </div>
             <p className="text-slate-400 font-bold">Access Complete Institutional Archive</p>
             <p className="text-[10px] text-slate-600 uppercase tracking-widest mt-2">12,450+ Digital Assets Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FilterToggle = ({ label, count, active }: any) => (
  <button className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${active ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20' : 'text-slate-500 hover:text-white hover:bg-white/5 border border-transparent'}`}>
    <span className="text-xs font-bold">{label}</span>
    <span className="text-[10px] font-medium opacity-50">{count}</span>
  </button>
);

export default Library;
