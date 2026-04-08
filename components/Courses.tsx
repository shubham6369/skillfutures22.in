'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Palette, 
  Code, 
  BarChart3, 
  Megaphone, 
  Briefcase, 
  ShieldAlert, 
  Cloud, 
  Layers,
  ArrowRight
} from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Graphic Designing",
    desc: "Master visual storytelling, UI/UX principles, and industry-standard design tools.",
    icon: <Palette className="w-8 h-8" />,
    color: "bg-orange-50",
    iconColor: "text-orange-600"
  },
  {
    id: 2,
    title: "Web Development",
    desc: "Build responsive, modern websites using HTML, CSS, JavaScript, and React.",
    icon: <Code className="w-8 h-8" />,
    color: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    id: 3,
    title: "Data Science & Analytics",
    desc: "Extract insights from complex data sets using Python, R, and machine learning.",
    icon: <BarChart3 className="w-8 h-8" />,
    color: "bg-purple-50",
    iconColor: "text-purple-600"
  },
  {
    id: 4,
    title: "Digital Marketing",
    desc: "Grow brands with SEO, Social Media, Content Marketing, and PPC strategies.",
    icon: <Megaphone className="w-8 h-8" />,
    color: "bg-green-50",
    iconColor: "text-green-600"
  },
  {
    id: 5,
    title: "Business Analytics",
    desc: "Drive strategic decisions through data-driven business intelligence and modeling.",
    icon: <Briefcase className="w-8 h-8" />,
    color: "bg-indigo-50",
    iconColor: "text-indigo-600"
  },
  {
    id: 6,
    title: "Cyber Security",
    desc: "Protect networks and data from digital attacks with advanced security protocols.",
    icon: <ShieldAlert className="w-8 h-8" />,
    color: "bg-red-50",
    iconColor: "text-red-600"
  },
  {
    id: 7,
    title: "Cloud Computing",
    desc: "Deploy and manage scalable infrastructure on AWS, Azure, and Google Cloud.",
    icon: <Cloud className="w-8 h-8" />,
    color: "bg-cyan-50",
    iconColor: "text-cyan-600"
  },
  {
    id: 8,
    title: "Full Stack Development",
    desc: "Become a versatile developer mastering both frontend and backend technologies.",
    icon: <Layers className="w-8 h-8" />,
    color: "bg-emerald-50",
    iconColor: "text-emerald-600"
  }
];

export default function Courses() {
  return (
    <section id="courses" className="py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Elite <span className="gradient-text">Certification</span> Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Accelerate your career with industry-defining skills. Our curriculum is engineered for high-performance results in the global digital economy.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card group flex flex-col h-full hover:border-[#00D2FF]/30 transition-all border-white/5"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 bg-white/5 text-[#00D2FF] group-hover:bg-[#00D2FF] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(0,210,255,0.4)]`}>
                {course.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00D2FF] transition-colors">
                {course.title}
              </h3>
              
              <p className="text-muted-foreground mb-8 flex-grow leading-relaxed text-sm">
                {course.desc}
              </p>
              
              <Link href={`#enroll-${course.id}`} className="inline-flex items-center text-sm font-bold text-[#FFD700] hover:text-[#FFB800] transition-all group/link">
                Enroll Now
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <button className="btn btn-secondary px-10 py-4 text-lg font-bold shadow-2xl">
            Explore All Programs
          </button>
        </div>
      </div>
    </section>
  );
}
