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
  Users,
  Trophy
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const INITIAL_COURSES = [
  { 
    id: 1, 
    title: 'Advanced Blockchain Architecture', 
    status: 'Approved', 
    instructor: 'Mentor Ramesh', 
    students: 1240, 
    difficulty: 'Advanced',
    category: 'Engineering',
    governanceScore: 98
  },
  { 
    id: 2, 
    title: 'Decentralized Finance (DeFi) Deep Dive', 
    status: 'In Voting', 
    instructor: 'Coimbatore Hub', 
    students: 850, 
    difficulty: 'Intermediate',
    category: 'Finance',
    governanceScore: 72
  },
  { 
    id: 3, 
    title: 'Smart Contract Security Audit', 
    status: 'Approved', 
    instructor: 'Security Expert', 
    students: 2100, 
    difficulty: 'Expert',
    category: 'Security',
    governanceScore: 100
  },
  { 
    id: 4, 
    title: 'Zero Knowledge Proofs (ZKP) Basics', 
    status: 'In Voting', 
    instructor: 'Salem Academic Panel', 
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
  const [coursesList] = useState(INITIAL_COURSES);
  const [searchQuery, setSearchQuery] = useState('');
  const [enrolledIds, setEnrolledIds] = useState<number[]>([]);
  const [showEnrolledOnly, setShowEnrolledOnly] = useState(false);

  const filteredCourses = coursesList.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesEnrollment = showEnrolledOnly ? enrolledIds.includes(c.id) : true;
    return matchesSearch && matchesEnrollment;
  });

  const handleEnroll = (id: number) => {
    if (enrolledIds.includes(id)) {
      setEnrolledIds(prev => prev.filter(item => item !== id));
    } else {
      setEnrolledIds(prev => [...prev, id]);
    }
  };

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-['Outfit'] font-bold underline italic">Curriculum Hub</h1>
          <p className="text-slate-500 mt-2 font-medium italic underline">Community-curated curriculum powered by DAO governance.</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => setShowEnrolledOnly(!showEnrolledOnly)}
            className={`btn-secondary ${showEnrolledOnly ? 'border-primary-500 bg-primary-500/10 text-primary-400' : ''}`}
          >
             {showEnrolledOnly ? 'View All Courses' : 'My Enrolled Courses'}
             <Trophy size={14} className="ml-2" />
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <button className="btn-secondary !py-2">
            <Filter size={18} />
            Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              layout
              className={`glass-card group hover:bg-white/10 transition-all border-white/5 flex flex-col h-full ${enrolledIds.includes(course.id) ? 'border-primary-500/40 ring-1 ring-primary-500/20' : ''}`}
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
                    <button 
                      onClick={() => handleEnroll(course.id)}
                      disabled={course.status !== 'Approved'}
                      className={`btn-primary !py-2 !px-4 text-xs ${enrolledIds.includes(course.id) ? '!from-emerald-600 !to-emerald-500' : ''} ${course.status !== 'Approved' ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {enrolledIds.includes(course.id) ? 'Enrolled ✅' : 'Enroll Now'}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {filteredCourses.length === 0 && (
          <div className="col-span-full py-20 text-center glass-card border-dashed border-white/10 bg-transparent">
             <p className="text-slate-500 font-medium italic">No courses found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
