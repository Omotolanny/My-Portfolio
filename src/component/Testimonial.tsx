'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    name: "Akolo Jonah K.",
    role: "Software Engineer",
    content: "I Worked with her as a frontend developer for 6 months and I can say that she is a very fast learner and a great team player. she is always willing to learn new things and ready to help her teammates.",
    image: "/ephraim.jpeg", 
    linkedin: "https://www.linkedin.com/in/akolo-jonah-kutsa?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
  },
  {
    name: "Opeyemi Oduyemi",
    role: "Senior Software Engineer",
    content: "A very fast learner and a goal getter, very patient and takes feedbacks positively. I have worked with her and I can say she paid close attention to details and delivered assigned tasks on due time.",
    image: "/yemi.jpeg",
    linkedin: "https://www.linkedin.com/in/opeyemi-oduyemi-bba776124?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
  {
    name: "Munirudeen Akanbi",
    role: "Software Engineer",
    content: "Zeliahu is a goal getter, very patient and takes feedbacks positively. I have worked with her and I can say she paid close attention to details and delivered assigned tasks on due time.",
    image: "/Munir (2).jpeg",
    linkedin: "https://www.linkedin.com/in/munirudeen?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
  {
    name: "Odume Vincent",
    role: "Backend Engineer",
    content: "Omotolani is an amazing colleague to work with. She is thoughtfull, diligent and a great team player. I must say she's a great asset to any team, very active person.",
    image: "/Vee.jpeg",
    linkedin: "https://www.linkedin.com/in/vincent-odume-74a28a243/"
  }
]

export default function Testimonial() {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      next();
    }, 8000); 

    return () => clearInterval(timer);
  }, [index, isPaused]);

  return (
    <section id="Testimonial" className="py-20 px-6 bg-zinc-50/50 dark:bg-zinc-900/20 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-200/20 blur-[100px] rounded-full -z-10" />
      
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
          <div className="w-20 mb-4 h-1 bg-violet-600 mx-auto rounded-full" />
          <p className="text-xl mb-4">Testimonials from colleagues who have worked with me.</p>
        </div>

        <div className="relative min-h-[400px] md:min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="absolute inset-0 p-8 md:p-12 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl flex flex-col"
            >
              <Quote className="absolute top-6 right-8 text-violet-600/10" size={80} />
              
              <p className="text-lg md:text-xl italic text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed relative z-10">
                "{testimonials[index].content}"
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-between mt-auto gap-6">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-violet-600/20 shadow-inner">
                    <Image 
                      src={testimonials[index].image} 
                      alt={testimonials[index].name} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 dark:text-white leading-tight">{testimonials[index].name}</h4>
                    <h4 className="text-sm text-violet-600 flex items-center gap-3 hover:underline group">{testimonials[index].role}</h4>
                    <a 
                      href={testimonials[index].linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-violet-600 flex items-center gap-1.5 hover:underline group"
                    >
                      <Linkedin size={12} className="group-hover:scale-110 transition-transform" /> 
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="flex justify-center mt-4 gap-5">
          <button 
            onClick={prev} 
            className="w-12 h-12 rounded-full  bg-white border border-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 flex items-center justify-center hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all active:scale-90"
            aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
          </button>
          <button 
            onClick={next} 
            className="w-12 h-12 rounded-full  bg-white border border-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 flex items-center justify-center hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all active:scale-90"
            aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? 'w-8 bg-violet-600' : 'w-2 bg-zinc-300 dark:bg-zinc-700'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}










