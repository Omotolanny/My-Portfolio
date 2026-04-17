'use client'
import { motion } from 'framer-motion'
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiPostman } from 'react-icons/si'

const skills = [
  { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-black dark:text-orange-600' },
  { name: 'React.js', icon: <FaReact />, color: 'text-blue-400' },
  { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-600' },
  { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-cyan-400' },
  { name: 'Postman', icon: <SiPostman />, color: 'text-orange-500' },
  { name: 'CSS', icon: <FaCss3Alt />, color: 'text-blue-500' },
  { name: 'JavaScript', icon: <FaJsSquare />, color: 'text-yellow-500' },
  { name: 'HTML', icon: <FaHtml5 />, color: 'text-orange-600' },
  
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
}



export default function Skills() {
  const radiusX = typeof window !== 'undefined' ? window.innerWidth < 768 ? 120 :  180 : 180; 
  const radiusY = typeof window !== 'undefined' ? window.innerWidth < 768 ? 160 : 180 : 180; 
  return (
    <section id="skills" className="overflow-x-hidden py-20 px-6 bg-zinc-50/50 dark:bg-zinc-900/20">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-violet-600">Tech Stack</span></h2>
          <div className="w-20 h-1 bg-violet-600 mx-auto rounded-full" />
          <p className="mt-6 text-muted  max-w-2xl mx-auto">
            I specialize in building responsive web applications using modern technologies 
            that prioritize performance and user experience.
          </p>
        </div>

        
        <div className="relative w-full h-96 flex justify-center items-center">
          {skills.map((skill, index) => {
           
            const angle = (index / skills.length) * (2 * Math.PI);
        
            return (
              <motion.div
                key={index}
                  className="absolute flex items-center gap-2 md:px-8 md:py-5 px-4 py-4 rounded-xl bg-card border border-card-border shadow-sm"
                  animate={{
                  
                    x: [
                      Math.cos(angle) * radiusX, 
                      Math.cos(angle + Math.PI) * radiusX, 
                      Math.cos(angle + 2 * Math.PI) * radiusX
                   ],
                   y: [
                       Math.sin(angle) * radiusY, 
                      Math.sin(angle + Math.PI) * radiusY, 
                      Math.sin(angle + 2 * Math.PI) * radiusY
                   ],
                  }}
                    transition={{
                      duration: 20, 
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  whileHover={{ scale: 1.2, zIndex: 50 }} 
                >
                <span className={`text-xl ${skill.color}`}>{skill.icon}</span>
                <span className="text-xs font-bold whitespace-nowrap">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}