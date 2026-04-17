"use client";

import { useState, useEffect } from 'react';
import {User, Briefcase,Layout, ThumbsUp, Menu, X, PhoneCall, Layers } from 'lucide-react'; 
import Link from 'next/link';
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"


export default function Navbar () {
  const [isOpen, setIsOpen] = useState(false);

  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)


  useEffect(() => setMounted(true), [])

  return (
    <nav className="fixed top-0 inset-x-0 z-100 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between px-4 h-16">
      <div>
        <h2 className='text-violet-600 font-bold text-2xl font-syne'>Zeliahu</h2>
      </div>
       
      <div className='flex'>
        <div className="hidden md:flex items-center gap-8 px-6 py-2">
          <Link href="/" className="text-sm font-semibold flex items-center gap-2 text-white hover:border-b-2 hover:border-violet-600"><User size={16}/><span>About</span></Link>
          <Link href="#skills" className="text-sm font-semibold flex items-center gap-2 text-white hover:border-b-2 hover:border-violet-600"><Briefcase size={16}/><span>Skills</span></Link>
          <a href="#Projects" className="text-sm font-semibold flex items-center gap-2 text-white hover:border-b-2 hover:border-violet-600"><Layout size={16}/><span>Projects</span></a>
          <a href="#Testimonial" className="text-sm font-semibold flex items-center gap-2 text-white hover:border-b-2 hover:border-violet-600"><ThumbsUp size={16}/><span>Testimonials</span></a>
          <a href="#Contact" className="text-sm font-semibold flex items-center gap-2 text-white hover:border-b-2 hover:border-violet-600"><PhoneCall size={16}/><span>Contacts</span></a>
        </div>

        <div className="md:hidden flex items-center gap-5">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className=" text-white hover:border-violet-600/50 hover:text-violet-600 shadow-sm transition-all "
            aria-label="Toggle Theme"
          >
            {mounted && (theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />)}
          </button>
          <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-full w-full left-0  dark:bg-zinc-950 border-b border-gray-200 flex flex-col p-4 gap-4 md:hidden shadow-lg">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-sm font-semibold flex items-center gap-2 text-white hover:border-bottom-violet-600"><User size={16}/><span>About</span></Link>
          <Link href="#skills" onClick={() => setIsOpen(false)} className="text-sm font-semibold flex items-center gap-2 text-white hover:bg-violet-600"><Briefcase size={16}/><span>Skills</span></Link>
          <Link href="#Projects" onClick={() => setIsOpen(false)} className="text-sm font-semibold flex items-center gap-2 text-white hover:bg-violet-600"><Layers size={16}/><span>Projects</span></Link>
          <Link href="#Testimonial" onClick={() => setIsOpen(false)} className="text-sm font-semibold flex items-center gap-2 text-white hover:bg-violet-600"><ThumbsUp size={16}/><span>Testimonials</span></Link>
          <Link href="#Contact" onClick={() => setIsOpen(false)} className="text-sm font-semibold flex items-center gap-2 text-white hover:bg-violet-600"><PhoneCall size={16}/><span>Contacts</span></Link>
          </div>
        )}

        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="md:p-2.5 hidden md:block overflow-hidden text-white hover:border-violet-600/50 hover:text-violet-600 shadow-sm transition-all "
            aria-label="Toggle Theme"
          >
            {mounted && (theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />)}
        </button>
      </div>
    </nav>
  );
}

