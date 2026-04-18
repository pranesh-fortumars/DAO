import { motion, AnimatePresence } from 'framer-motion';
import { 
  UserCheck, 
  Users, 
  Calendar as CalendarIcon, 
  BarChart, 
  ArrowUpRight,
  ArrowDownRight,
  FileSpreadsheet,
  Search,
  Check,
  X,
  Clock
} from 'lucide-react';
import { useState } from 'react';

const INITIAL_STUDENTS = [
  { id: 'STU-001', name: 'Arul Kumar', course: 'Blockchain v4', status: 'Present', time: '09:02 AM', attendance: 98 },
  { id: 'STU-002', name: 'Kavitha Selvam', course: 'Smart Contracts', status: 'Present', time: '08:58 AM', attendance: 94 },
  { id: 'STU-003', name: 'Sathish Raj', course: 'DAO Governance', status: 'Late', time: '09:15 AM', attendance: 82 },
  { id: 'STU-004', name: 'Selvi Mani', course: 'Blockchain v4', status: 'Absent', time: '--', attendance: 76 },
  { id: 'STU-005', name: 'Dhanush Vijay', course: 'DeFi Deep Dive', status: 'Present', time: '09:01 AM', attendance: 99 },
];

const Attendance = () => {
  const [studentsList, setStudentsList] = useState(INITIAL_STUDENTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCourse, setFilterCourse] = useState('All Courses');

  const filteredStudents = studentsList.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCourse = filterCourse === 'All Courses' ? true : s.course === filterCourse;
    return matchesSearch && matchesCourse;
  });

  const updateStatus = (id: string, newStatus: string) => {
    setStudentsList(prev => prev.map(s => {
      if (s.id === id) {
        return { 
          ...s, 
          status: newStatus,
          time: newStatus === 'Present' ? new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--'
        };
      }
      return s;
    }));
  };

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-500 mb-3 block">Operational Monitoring</span>
          <h1 className="text-5xl font-['Outfit'] font-bold tracking-tight">Attendance Record</h1>
          <p className="text-slate-400 mt-3 font-medium text-lg">Legislative roll call and institutional compliance auditing.</p>
        </div>
        <div className="flex gap-3">
          <button className="btn-secondary">
            <FileSpreadsheet size={18} />
            Export Data
          </button>
          <button className="btn-primary">
            <UserCheck size={18} />
            Auto-Sync Anna Univ
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard 
          label="Average Attendance" 
          value="92.4%" 
          trend="+2.1%" 
          trendColor="text-emerald-400"
          icon={<BarChart size={20} className="text-primary-400" />}
        />
        <StatsCard 
          label="Total Enrollments" 
          value="1,245" 
          trend="+14" 
          trendColor="text-primary-400"
          icon={<Users size={20} className="text-emerald-400" />}
        />
        <StatsCard 
          label="Absence Rate" 
          value="4.2%" 
          trend="-0.5%" 
          trendColor="text-rose-400"
          icon={<CalendarIcon size={20} className="text-accent-400" />}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input 
            type="text" 
            placeholder="Search student identity..." 
            className="input-field pl-14"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <select 
          className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/30 transition-all cursor-pointer"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-main)', color: 'var(--text-main)' }}
          value={filterCourse}
          onChange={(e) => setFilterCourse(e.target.value)}
        >
          <option value="All Courses">All Faculty Hubs</option>
          <option value="Blockchain v4">Blockchain Engineering</option>
          <option value="Smart Contracts">Smart Contracts</option>
          <option value="DAO Governance">DAO Governance</option>
        </select>
      </div>

      <div className="glass-card border-white/5">
        <div className="p-8 border-b border-white/5 flex items-center justify-between">
          <h3 className="text-xl font-bold font-['Outfit']">Digital Roll Call - April 18, 2026</h3>
          <span className="text-xs bg-primary-500/10 text-primary-400 px-3 py-1 rounded-full font-bold">Session Active</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/[0.02] text-slate-500 text-[10px] uppercase font-bold tracking-widest border-b border-white/5">
                <th className="px-8 py-5">Student Identity</th>
                <th className="px-8 py-5">Active Hub</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5">Entry Log</th>
                <th className="px-8 py-5">Quick Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <AnimatePresence mode="popLayout">
                {filteredStudents.map((student) => (
                  <motion.tr 
                    key={student.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="group hover:bg-white/[0.01] transition-colors border-b last:border-0"
                    style={{ borderColor: 'var(--border-main)' }}
                  >
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-2xl bg-primary-500/10 flex items-center justify-center font-bold text-primary-500 border border-primary-500/10 shadow-lg shadow-primary-500/5">
                          {student.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-base font-bold tracking-tight mb-0.5" style={{ color: 'var(--text-main)' }}>{student.name}</p>
                          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{student.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className="text-sm text-slate-400">{student.course}</span>
                    </td>
                    <td className="px-8 py-5">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                        student.status === 'Present' ? 'bg-emerald-500/10 text-emerald-400' :
                        student.status === 'Late' ? 'bg-amber-500/10 text-amber-400' :
                        'bg-rose-500/10 text-rose-400'
                      }`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="px-8 py-5">
                      <span className="text-sm text-slate-400 font-mono italic">{student.time}</span>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex gap-2">
                         <button 
                          onClick={() => updateStatus(student.id, 'Present')}
                          className="p-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 rounded-lg text-emerald-400 transition-all"
                          title="Mark Present"
                         >
                            <Check size={16} />
                         </button>
                         <button 
                          onClick={() => updateStatus(student.id, 'Late')}
                          className="p-2 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 rounded-lg text-amber-400 transition-all"
                          title="Mark Late"
                         >
                            <Clock size={16} />
                         </button>
                         <button 
                          onClick={() => updateStatus(student.id, 'Absent')}
                          className="p-2 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 rounded-lg text-rose-400 transition-all"
                          title="Mark Absent"
                         >
                            <X size={16} />
                         </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const StatsCard = ({ label, value, trend, trendColor, icon }: any) => (
  <div className="glass-card p-6 border-white/5 relative overflow-hidden group">
    <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.02] rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
    <div className="relative z-10">
      <div className="flex items-center justify-between mb-4">
        <div className="bg-white/5 p-3 rounded-xl border border-white/10">
          {icon}
        </div>
        <div className={`flex items-center gap-1 text-xs font-bold ${trendColor}`}>
          {trend.startsWith('+') ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {trend}
        </div>
      </div>
      <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{label}</p>
      <h3 className="text-3xl font-bold mt-1 font-['Outfit']">{value}</h3>
    </div>
  </div>
);

export default Attendance;
