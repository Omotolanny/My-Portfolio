'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, Linkedin, Twitter, ArrowRight, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-[90vh] w-full flex flex-col justify-center items-center p-4">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for work
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Hi, I'm <span className="text-violet-700">Zeliahu</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted mb-6">
            A Front-end Web Developer
          </h2>
          
          <div className="w-40 h-1 bg-violet-600 mb-8 mx-auto lg:mx-0 rounded-full" />

          <p className="text-lg text-muted max-w-lg mb-10 leading-relaxed mx-auto lg:mx-0">
            I'm a web developer who turns ideas into fast, visually stunning and functional digital experience. 
            I specialize in building modern, responsive 
            web applications that delivers outstanding user experience.
          </p>

          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10">
            <a href='#Projects' className="flex items-center gap-2 px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-bold transition-all group">
              View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/CV (2).pdf" download="CV (2).pdf" className="flex items-center gap-2 px-8 py-3 border-2 border-violet-600/20 dark:border-violet-600/40 hover:bg-violet-50 dark:hover:bg-violet-900/20 text-violet-600 dark:text-violet-400 rounded-xl font-bold transition-all">
              <Download size={18} /> Download CV
            </a>
          </div>

          
          <div className="flex gap-4 justify-center lg:justify-start">
            {[
              { Icon: Github, href: "https://github.com/Omotolanny" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/zeliahu-onifade-a8a943253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
              { Icon: Twitter, href: "https://x.com/tomiwa_84?s=11" }
            ].map(({ Icon, href }, i) => (
              <a 
                key={i} 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-card border border-card-border shadow-sm hover:text-violet-600 transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
          
        </motion.div>

        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 flex justify-center items-center"
        >  
          <div className="relative">
            <div className="absolute inset-0 bg-violet-600/20 blur-[120px] rounded-full hidden dark:block" />
            <div className="absolute inset-0 bg-violet-400/10 blur-[80px] rounded-full scale-125 hidden dark:block" />

            <div className="relative w-64 h-64 p-3 md:p-4 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-1 border-zinc-200 dark:border-zinc-800/50 shadow-xl dark:shadow-violet-900/20">
              <Image 
                src="/profile.jpeg" 
                alt="Zeliahu" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
        </motion.div>

      </div>
    </section>
  )
}