import { 
  BookOpen, 
  Search, 
  Filter, 
  CheckCircle2, 
  Clock, 
  User,
  ExternalLink,
  GraduationCap,
  ShieldCheck,
  Users
} from 'lucide-react';
import { motion } from 'framer-motion';

const courses = [
  { 
    id: 1, 
    title: 'Advanced Blockchain Architecture', 
    status: 'Approved', 
    instructor: '0x71C...4f2', 
    students: 1240, 
    difficulty: 'Advanced',
    category: 'Engineering',
    governanceScore: 98
  },
  { 
    id: 2, 
    title: 'Decentralized Finance (DeFi) Deep Dive', 
    status: 'In Voting', 
    instructor: 'edu-expert.eth', 
    students: 850, 
    difficulty: 'Intermediate',
    category: 'Finance',
    governanceScore: 72
  },
  { 
    id: 3, 
    title: 'Smart Contract Security Audit', 
    status: 'Approved', 
    instructor: 'security-pro.eth', 
    students: 2100, 
    difficulty: 'Expert',
    category: 'Security',
    governanceScore: 100
  },
  { 
    id: 4, 
    title: 'Zero Knowledge Proofs (ZKP) Basics', 
    status: 'In Voting', 
    instructor: 'vitalik.eth', 
    students: 560, 
    difficulty: 'Advanced',
    category: 'Cryptography',
    governanceScore: 88
  },
];

const statusStyles: any = {
  Approved: { color: 'text-emerald-400', bg: 'bg-emerald-500/10', icon: CheckCircle2 },
  'In Voting': { color: 'text-amber-400', bg: 'bg-amber-500/10', icon: Clock },
};

const Courses = () => {
  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-['Outfit'] font-bold">EduConnect Courses</h1>
          <p className="text-slate-500 mt-2 font-medium">Community-curated curriculum powered by DAO governance.</p>
        </div>
        <div className="flex gap-3">
          <button className="btn-secondary">
             My Enrolled Courses
          </button>
          <button className="btn-primary">
            Propose New Course
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input 
            type="text" 
            placeholder="Search courses, instructors, or topics..." 
            className="input-field pl-12"
          />
        </div>
        <div className="flex gap-2">
          <button className="btn-secondary !py-2">
            <Filter size={18} />
            Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {courses.map((course, idx) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card group hover:bg-white/10 transition-all border-white/5 flex flex-col h-full"
          >
            <div className="p-8 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary-500/10 flex items-center justify-center border border-primary-500/20">
                    <BookOpen className="text-primary-400" size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{course.category}</span>
                    <h3 className="text-xl font-bold group-hover:text-primary-400 transition-colors">{course.title}</h3>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1.5 ${statusStyles[course.status].bg} ${statusStyles[course.status].color}`}>
                  {course.status === 'Approved' ? <ShieldCheck size={12} /> : <Clock size={12} />}
                  {course.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                  <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Students</p>
                  <div className="flex items-center gap-2">
                    <Users size={14} className="text-primary-400" />
                    <span className="text-sm font-semibold">{course.students.toLocaleString()}</span>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                  <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Governance Score</p>
                  <div className="flex items-center gap-2">
                    <GraduationCap size={14} className="text-emerald-400" />
                    <span className="text-sm font-semibold text-emerald-400">{course.governanceScore}%</span>
                  </div>
                </div>
              </div>

              <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <User size={14} className="text-slate-400" />
                  </div>
                  <span className="text-xs text-slate-400 font-medium">{course.instructor}</span>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-slate-500 hover:text-white">
                    <ExternalLink size={18} />
                  </button>
                  <button className="btn-primary !py-2 !px-4 text-xs">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
