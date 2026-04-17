'use client'
import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react'


export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-background border-t border-card-border pt-16 pb-8 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          
          
          <div className="max-w-md">
            <h2 className="text-2xl text-violet-700 font-bold mb-4 tracking-tighter">Zeliahu</h2>
            <p className="text-muted leading-relaxed mb-6">
              I'm Zeliahu, a passionate web developer who loves building, learning and solving problems with code. Thank you for visiting my portfolio!.
            </p>
            
            
            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/Omotolanny" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/zeliahu-onifade-a8a943253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
                { icon: Twitter, href: "https://x.com/tomiwa_84?s=11" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank"
                  className="p-3 rounded-full bg-card border border-card-border shadow-sm hover:text-violet-600 transition-colors"
                  
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

        </div>
        
        <div className="pt-8 border-t border-card-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-xs">
            Copyright © 2026 by Onifade Zeliahu Omotolani. All rights reserved
          </p>
          
          
          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full bg-violet-600 text-white shadow-lg shadow-violet-600/20 hover:-translate-y-1 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  )
}