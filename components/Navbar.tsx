'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Rocket, User, LogIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'py-3 bg-midnight/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-midnight border border-gold/30 rounded-xl flex items-center justify-center group-hover:border-gold transition-all duration-500 overflow-hidden shadow-2xl">
                <Rocket className="w-6 h-6 text-gold group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white tracking-tighter leading-none group-hover:text-gold transition-colors">
                SKILL<span className="text-gold">FUTURES</span>
              </span>
              <span className="text-[8px] text-gray-500 uppercase tracking-[0.3em] font-black group-hover:text-gray-400 transition-colors">
                Elite Learning Ecosystem
              </span>
            </div>
          </Link>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {['About', 'Courses', 'Why Us'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`} 
                className="text-sm font-bold text-white/70 hover:text-white transition-all relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              href="#login"
              className="flex items-center gap-2 text-sm font-bold text-white/80 hover:text-gold transition-colors"
            >
              <LogIn className="w-4 h-4" />
              Login
            </Link>
            <Link 
              href="#join"
              className="px-8 py-3 bg-white text-midnight text-sm font-black rounded-xl hover:bg-gold transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-midnight border-b border-white/10 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {['About', 'Courses', 'Why Us'].map((item) => (
                <Link 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className="w-full text-lg font-bold text-white/70 hover:text-gold py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <div className="h-px bg-white/5 my-2" />
              <Link 
                href="#login"
                className="w-full flex items-center justify-center gap-2 py-4 text-white font-bold border border-white/10 rounded-2xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <LogIn className="w-5 h-5" />
                Login
              </Link>
              <Link 
                href="#join"
                className="w-full text-center py-4 bg-gold text-midnight rounded-2xl font-black text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join SkillFutures
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
