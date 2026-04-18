import { motion } from 'framer-motion';
import { 
  UserCheck, 
  Users, 
  Calendar as CalendarIcon, 
  BarChart, 
  ChevronRight,
  MoreVertical,
  ArrowUpRight,
  ArrowDownRight,
  FileSpreadsheet
} from 'lucide-react';

const students = [
  { id: 'STU-001', name: 'Alex Rivera', course: 'Blockchain v4', status: 'Present', time: '09:02 AM', attendance: 98 },
  { id: 'STU-002', name: 'Sarah Chen', course: 'Blockchain v4', status: 'Present', time: '08:58 AM', attendance: 94 },
  { id: 'STU-003', name: 'James Wilson', course: 'Blockchain v4', status: 'Late', time: '09:15 AM', attendance: 82 },
  { id: 'STU-004', name: 'Elena Petrova', course: 'Blockchain v4', status: 'Absent', time: '--', attendance: 76 },
  { id: 'STU-005', name: 'David Kim', course: 'Blockchain v4', status: 'Present', time: '09:01 AM', attendance: 99 },
];

const Attendance = () => {
  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-['Outfit'] font-bold">Attendance Tracking</h1>
          <p className="text-slate-500 mt-2 font-medium">Real-time attendance management for institutional compliance.</p>
        </div>
        <div className="flex gap-3">
          <button className="btn-secondary">
            <FileSpreadsheet size={18} />
            Export Report
          </button>
          <button className="btn-primary">
            <UserCheck size={18} />
            Mark Today's Attendance
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
          label="Total Students" 
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

      <div className="glass-card border-white/5">
        <div className="p-8 border-b border-white/5 flex items-center justify-between">
          <h3 className="text-xl font-bold">Daily Roll Call - April 18, 2026</h3>
          <div className="flex gap-2">
            <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50">
              <option>All Sections</option>
              <option>Section A</option>
              <option>Section B</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/[0.02] text-slate-500 text-[10px] uppercase font-bold tracking-widest border-b border-white/5">
                <th className="px-8 py-5">Student / ID</th>
                <th className="px-8 py-5">Course</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5">Entry Time</th>
                <th className="px-8 py-5">Cumulative %</th>
                <th className="px-8 py-5">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {students.map((student, idx) => (
                <motion.tr 
                  key={student.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group hover:bg-white/[0.02] transition-colors"
                >
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center font-bold text-primary-400 border border-primary-500/20">
                        {student.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white mb-0.5">{student.name}</p>
                        <p className="text-[10px] text-slate-500">{student.id}</p>
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
                    <span className="text-sm text-slate-400">{student.time}</span>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-white/5 h-1.5 rounded-full overflow-hidden min-w-[100px]">
                        <div 
                          className={`h-full rounded-full ${student.attendance > 90 ? 'bg-emerald-500' : student.attendance > 80 ? 'bg-amber-500' : 'bg-rose-500'}`}
                          style={{ width: `${student.attendance}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-bold">{student.attendance}%</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-slate-600">
                    <button className="hover:text-white transition-colors">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </motion.tr>
              ))}
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
      <h3 className="text-3xl font-bold mt-1">{value}</h3>
    </div>
  </div>
);

export default Attendance;
