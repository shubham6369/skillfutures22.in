'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Search, 
  Filter, 
  PlayCircle,
  Clock,
  BookOpen,
  CheckCircle2,
  Lock
} from 'lucide-react';

// Mock data
const categories = ['All', 'Development', 'Design', 'Marketing', 'Business'];

const courses = [
  {
    id: '1',
    title: 'Advanced Full Stack Development',
    category: 'Development',
    modules: 12,
    duration: '32h 15m',
    enrolled: true,
    progress: 65,
    thumbnail: '/hero-person.png',
  },
  {
    id: '2',
    title: 'UI/UX Design Masterclass',
    category: 'Design',
    modules: 8,
    duration: '18h 45m',
    enrolled: true,
    progress: 30,
    thumbnail: '/hero-person.png',
  },
  {
    id: '3',
    title: 'Digital Marketing Deep Dive',
    category: 'Marketing',
    modules: 10,
    duration: '22h 30m',
    enrolled: false,
    progress: 0,
    thumbnail: '/hero-person.png',
  },
  {
    id: '4',
    title: 'Business Analytics Fundamentals',
    category: 'Business',
    modules: 6,
    duration: '12h 00m',
    enrolled: false,
    progress: 0,
    thumbnail: '/hero-person.png',
  }
];

export default function MyCoursesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = courses.filter(course => {
    const matchesCategory = activeCategory === 'All' || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black font-outfit text-white mb-2">My Courses</h1>
          <p className="text-muted-foreground">Access your enrolled programs and discover new skills.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 bg-white/5 border border-white/10 rounded-xl py-2 px-4 text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#00D2FF] text-sm"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-colors text-sm font-semibold">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
              activeCategory === cat 
                ? 'bg-[#00D2FF]/20 text-[#00D2FF] border border-[#00D2FF]/30' 
                : 'bg-white/5 text-muted-foreground border border-transparent hover:bg-white/10 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course, i) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`glass-card group flex flex-col overflow-hidden transition-all ${
              course.enrolled ? 'border-[#00D2FF]/20 hover:border-[#00D2FF]/40' : 'border-white/5 opacity-80 hover:opacity-100'
            }`}
          >
            {/* Thumbnail */}
            <div className="h-40 bg-gradient-to-br from-[#1E1E21] to-[#0A0A0B] relative overflow-hidden flex-shrink-0">
              <div className="w-full h-full opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                 {course.enrolled ? (
                    <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                       <PlayCircle className="w-6 h-6 text-[#FFD700] ml-1" />
                    </div>
                 ) : (
                    <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10">
                       <Lock className="w-5 h-5 text-muted-foreground" />
                    </div>
                 )}
              </div>
              
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs font-bold text-white uppercase tracking-wider">
                {course.category}
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 min-h-[56px]">
                {course.title}
              </h3>
              
              <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground mb-6 mt-auto">
                <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> {course.modules} Modules</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {course.duration}</span>
              </div>

              {course.enrolled ? (
                <div>
                  <div className="flex justify-between text-xs font-semibold text-white mb-2">
                    <span className="flex items-center gap-1 text-[#00D2FF]">
                      {course.progress === 100 ? <CheckCircle2 className="w-3.5 h-3.5" /> : null}
                      {course.progress === 100 ? 'Completed' : 'In Progress'}
                    </span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-4">
                    <div 
                      className="h-full bg-gradient-to-r from-[#00D2FF] to-[#0072FF]" 
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <Link 
                    href={`/dashboard/courses/${course.id}`}
                    className="block w-full py-2.5 text-center bg-[#00D2FF]/10 text-[#00D2FF] border border-[#00D2FF]/20 rounded-lg text-sm font-bold hover:bg-[#00D2FF] hover:text-white transition-colors"
                  >
                    Resume Course
                  </Link>
                </div>
              ) : (
                <div className="mt-auto">
                  <div className="w-full h-[2px] bg-white/5 mb-4"></div>
                  <Link 
                    href={`/dashboard/packages`}
                    className="block w-full py-2.5 text-center bg-white/5 text-white border border-white/10 rounded-lg text-sm font-bold hover:bg-white/10 transition-colors"
                  >
                    Unlock Course
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      {filteredCourses.length === 0 && (
         <div className="text-center py-12 glass-card border-dashed">
            <p className="text-muted-foreground">No courses found matching your criteria.</p>
         </div>
      )}
    </div>
  );
}
