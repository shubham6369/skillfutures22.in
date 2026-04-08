'use client';

import { motion } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import { 
  Trophy, 
  Clock, 
  PlayCircle,
  TrendingUp,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import Link from 'next/link';

// Mock data until Firestore is fully linked
const mockStats = [
  { label: 'Courses Enrolled', value: '4', icon: BookOpen, color: 'text-[#00D2FF]', bg: 'bg-[#00D2FF]/10' },
  { label: 'Hours Learned', value: '32.5', icon: Clock, color: 'text-[#FFD700]', bg: 'bg-[#FFD700]/10' },
  { label: 'Certificates Earned', value: '1', icon: Trophy, color: 'text-[#FF00E5]', bg: 'bg-[#FF00E5]/10' },
  { label: 'Current Streak', value: '7 Days', icon: TrendingUp, color: 'text-green-400', bg: 'bg-green-400/10' },
];

const mockCourses = [
  {
    id: 1,
    title: 'Advanced Full Stack Development',
    progress: 65,
    lastAccessed: '2 hours ago',
    thumbnail: '/hero-person.png', // reusing existing asset
  },
  {
    id: 2,
    title: 'UI/UX Design Masterclass',
    progress: 30,
    lastAccessed: '1 day ago',
    thumbnail: '/hero-person.png',
  }
];

export default function DashboardOverview() {
  const { profile } = useAuth();
  const firstName = profile?.name?.split(' ')[0] || 'Elite Student';

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card p-8 border-[#00D2FF]/20 relative overflow-hidden"
      >
        <div className="absolute right-0 top-0 w-64 h-64 bg-[#00D2FF]/10 rounded-full blur-[60px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="relative z-10">
          <h1 className="text-3xl font-black font-outfit text-white mb-2">
            Welcome back, <span className="gradient-text">{firstName}</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            You're in the top 5% of learners this week. Keep up the momentum and crush your technical goals!
          </p>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-6 border-white/5 hover:border-white/20 transition-all"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-semibold uppercase tracking-wider mb-2">
                  {stat.label}
                </p>
                <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
              </div>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Continue Learning Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold font-outfit text-white">Continue Learning</h2>
          <Link href="/dashboard/courses" className="text-sm font-bold text-[#00D2FF] hover:text-white transition-colors flex items-center">
            View All <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mockCourses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
              className="glass-card group flex flex-col sm:flex-row overflow-hidden border-white/5 hover:border-[#00D2FF]/30 transition-all"
            >
              {/* Thumbnail Area - Using subtle gradient block as placeholder since images aren't fully robust yet */}
              <div className="sm:w-48 h-32 sm:h-auto bg-gradient-to-br from-[#1E1E21] to-[#0A0A0B] relative flex-shrink-0">
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 backdrop-blur-sm transition-all duration-300">
                    <PlayCircle className="w-12 h-12 text-[#FFD700]" />
                 </div>
                 {/* Visual placeholder pattern */}
                 <div className="w-full h-full opacity-20" style={{ backgroundImage: 'radial-gradient(#00D2FF 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#00D2FF] transition-colors line-clamp-1">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Last accessed: {course.lastAccessed}
                  </p>
                </div>
                
                <div>
                  <div className="flex justify-between text-xs font-semibold text-white mb-2">
                    <span>Progress</span>
                    <span className="text-[#00D2FF]">{course.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#00D2FF] to-[#0072FF]" 
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
