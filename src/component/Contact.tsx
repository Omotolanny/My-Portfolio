'use client'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, MessageSquare } from 'lucide-react'
import Footer from './Footer'
import Link from 'next/link'

export default function Contact() {
  const contactInfo = [
    { icon: MapPin, label: "Address", value: "Abuja, Nigeria" },
    { icon: Phone, label: "Phone", value: "+234 814 863 5784" },
    { icon: Mail, label: "Email", value: "zeliahuonifade@outlook.com" },
  ]

  return (
    <section id="Contact" className="py-20 px-6 bg-background text-foreground transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        
        
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In <span className="text-violet-600">Touch</span></h2>
          <div className="w-24 h-1 bg-violet-600 mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Have a project in mind? Let's build something that stands out.
          </p>
        </div>

        
        <div className="relative px-3.5 py-4 md:px-5 md:py-15 rounded-[2.5rem] bg-card border border-card-border shadow-2xl overflow-hidden text-center">
          
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-violet-600/10 blur-[100px] rounded-full" />
          
          <h3 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Let's create something <br />
            <span className="text-violet-600">the world will notice.</span>
          </h3>
          <p className="text-muted mb-12">
            I'm open to freelance work, collaborations, and full-time opportunities.
          </p>

          
          <div className="flex mb-12 gap-4 md:gap-25 justify-center">
            {contactInfo.slice(0, 2). map((item, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-14 h-14 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 mb-4 group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <span className="font-bold text-sm uppercase tracking-widest text-zinc-500 mb-1">{item.label}</span>
                <span className="font-medium">{item.value}</span>
              </div>
            ))}
          </div>  
          <div className="flex mb-12 justify-center">
            {contactInfo.slice(2). map((item, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-14 h-14 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 mb-4 group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <span className="font-bold text-sm uppercase tracking-widest text-zinc-500 mb-1">{item.label}</span>
                <span className="font-medium">{item.value}</span>
              </div>
            ))}
          </div> 


          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={"mailto:zeliahuonifade@outlook.com"} className="w-full sm:w-auto px-10 py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-full flex items-center justify-center gap-2 transition-all shadow-lg shadow-violet-600/20 active:scale-95">
              Send Quick Email <Send size={18} />
            </Link>
            <Link href={"https://wa.me/2348148635784"} className="w-full sm:w-auto px-15 py-4 border border-violet-600 text-violet-800 dark:text-violet-400 font-bold rounded-full hover:bg-violet-600/5 transition-all active:scale-95">
              Let's Talk 
            </Link>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </section>
  )
}