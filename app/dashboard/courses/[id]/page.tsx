'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Play,
  Lock,
  CheckCircle2,
  ListVideo,
  FileText,
  Download,
  ChevronDown,
  ArrowLeft
} from 'lucide-react';
// import { useParams } from 'next/navigation'; // Would be used in real fetch

// Mock Data
const courseDetails = {
  id: '1',
  title: 'Advanced Full Stack Development',
  instructor: 'Sarah Jenkins, Principal Engineer at FutureTech',
  progress: 65,
  description: 'Master the complete MERN stack with advanced architecture patterns, real-time data handling, and deployment strategies for enterprise scale.',
  modules: [
    {
      id: 'm1',
      title: 'Module 1: Server Architecture & Node.js Deep Dive',
      duration: '4h 15m',
      lessons: [
        { id: 'l1', title: 'Understanding Event Loop & V8', duration: '45m', type: 'video', completed: true },
        { id: 'l2', title: 'Advanced Express Patterns', duration: '55m', type: 'video', completed: true },
        { id: 'l3', title: 'Module 1 Handout', duration: '5m', type: 'resource', completed: true },
      ]
    },
    {
      id: 'm2',
      title: 'Module 2: React State Management At Scale',
      duration: '6h 30m',
      lessons: [
        { id: 'l4', title: 'Context API vs Redux Toolkit', duration: '60m', type: 'video', completed: true },
        { id: 'l5', title: 'Zustand & Jotai Micro-state', duration: '1h 15m', type: 'video', completed: false, isCurrent: true },
        { id: 'l6', title: 'Server State with React Query', duration: '50m', type: 'video', completed: false, locked: true },
        { id: 'l7', title: 'Module 2 Project Specs', duration: '10m', type: 'document', completed: false, locked: true },
      ]
    },
    {
      id: 'm3',
      title: 'Module 3: Enterprise Database Design',
      duration: '5h 00m',
      lessons: [
        { id: 'l8', title: 'PostgreSQL Advanced Modeling', duration: '1h 30m', type: 'video', completed: false, locked: true },
        { id: 'l9', title: 'Redis Caching Strategies', duration: '45m', type: 'video', completed: false, locked: true },
      ]
    }
  ]
};

export default function CourseDetailPage() {
  // const params = useParams(); // { id: '1' }
  const [expandedModules, setExpandedModules] = useState<string[]>(['m2']); // Open module 2 by default

  const toggleModule = (id: string) => {
    setExpandedModules(prev => 
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Back navigation & Title */}
      <div>
        <Link href="/dashboard/courses" className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-white transition-colors mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to My Courses
        </Link>
        <h1 className="text-2xl md:text-3xl font-black font-outfit text-white mb-2">{courseDetails.title}</h1>
        <p className="text-sm font-medium text-[#00D2FF]">{courseDetails.instructor}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Player & Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Main Video Player Placeholder */}
          <div className="aspect-video bg-[#0A0A0B] rounded-2xl border border-white/10 overflow-hidden relative group shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>
            
            {/* Fake video background */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#161618]">
               {/* In a real scenario, this would be an iframe or a video tag */}
               <div className="text-center space-y-4 relative z-20">
                  <button className="w-20 h-20 bg-[#00D2FF]/20 hover:bg-[#00D2FF]/30 backdrop-blur-md rounded-full flex items-center justify-center mx-auto transition-transform hover:scale-110 border border-[#00D2FF]/40">
                    <Play className="w-8 h-8 text-white ml-2" fill="currentColor" />
                  </button>
               </div>
            </div>

            {/* Fake player controls */}
            <div className="absolute bottom-0 left-0 right-0 p-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <div className="flex items-center gap-4 text-xs font-semibold text-white">
                 <button className="hover:text-[#00D2FF]"><Play className="w-5 h-5" fill="currentColor" /></button>
                 <span>14:32 / 1:15:00</span>
                 <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer">
                    <div className="h-full bg-[#00D2FF] w-1/5 relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
                    </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Description & Details */}
          <div className="glass-card p-6">
            <h2 className="text-xl font-bold font-outfit text-white mb-4">About this lesson</h2>
            <h3 className="text-lg font-semibold text-[#FFD700] mb-2">Zustand & Jotai Micro-state</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              In this lesson, we transition away from boilerplate-heavy Redux setups and explore modern atomic and flux-based micro-state management using Zustand and Jotai. We will build a complex multi-step form to demonstrate performance benefits.
            </p>
          </div>
        </div>

        {/* Right Column: Syllabus/Curriculum */}
        <div className="space-y-4">
          <div className="glass-card p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold font-outfit text-white flex items-center gap-2">
                <ListVideo className="w-5 h-5 text-[#00D2FF]" />
                Course Content
              </h3>
              <span className="text-xs font-bold bg-white/10 px-2 py-1 rounded text-white">
                {courseDetails.progress}%
              </span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-6">
              <div 
                className="h-full bg-gradient-to-r from-[#00D2FF] to-[#0072FF]" 
                style={{ width: `${courseDetails.progress}%` }}
              />
            </div>

            {/* Modules Accordion */}
            <div className="space-y-3">
              {courseDetails.modules.map((module) => {
                const isExpanded = expandedModules.includes(module.id);
                
                return (
                  <div key={module.id} className="border border-white/5 bg-white/[0.02] rounded-xl overflow-hidden">
                    <button 
                      onClick={() => toggleModule(module.id)}
                      className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-white/5 transition-colors"
                    >
                      <div>
                        <h4 className="text-sm font-semibold text-white leading-tight">{module.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{module.duration}</p>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-300 shrink-0 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-2 pt-0 space-y-1">
                            {module.lessons.map(lesson => (
                              <button 
                                key={lesson.id}
                                disabled={lesson.locked}
                                className={`w-full flex items-start p-3 rounded-lg text-left transition-all ${
                                  lesson.isCurrent 
                                    ? 'bg-[#00D2FF]/10 border border-[#00D2FF]/20' 
                                    : lesson.locked 
                                      ? 'opacity-50 cursor-not-allowed' 
                                      : 'hover:bg-white/5'
                                }`}
                              >
                                <div className="shrink-0 mr-3 mt-0.5">
                                  {lesson.completed ? (
                                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                                  ) : lesson.locked ? (
                                    <Lock className="w-4 h-4 text-muted-foreground" />
                                  ) : lesson.type === 'video' ? (
                                    <Play className={`w-4 h-4 ${lesson.isCurrent ? 'text-[#00D2FF]' : 'text-muted-foreground'}`} />
                                  ) : lesson.type === 'resource' ? (
                                    <Download className="w-4 h-4 text-[#FFD700]" />
                                  ) : (
                                    <FileText className="w-4 h-4 text-muted-foreground" />
                                  )}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className={`text-sm truncate ${lesson.isCurrent ? 'text-[#00D2FF] font-semibold' : 'text-white'}`}>
                                    {lesson.title}
                                  </p>
                                  <p className="text-xs text-muted-foreground mt-1">{lesson.duration}</p>
                                </div>
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
