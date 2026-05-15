'use client'
import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import Image from 'next/image'

const myProjects = [
  {
    title: "ConsultingCo",
    description: "I utilized React.js to create a dynamic frontend and TailwindCSS for a sleek design, while Typescript ensured type safety and maintainable code.",
    tags: ["React.js", "TailwindCSS", "Typescript"],
    link: "https://darling-sfogliatella-9ecf00.netlify.app/",
    github: "https://github.com/Omotolanny/ConsultingCo",
    image: "/Consulting.jpeg" 
  },
  {
    title: "E-commerce",
    description: "A modern e-commerce solution with a focus on user experience and seamless checkout processes.",
    tags: ["HTML", "Tailwind CSS", "JS"],
    link: "https://eqsh.netlify.app/",
    github: "https://github.com/Omotolanny/Quick-Shop",
    image: "/Quickshop.jpeg"
  },
  {
    title: "Landing Page",
    description: "A visually appealing landing page for Tolzz, showcasing the product's features and benefits with a clean design.",
    tags: ["HTML", "CSS", "TailwindCSS"],
    link: "https://tolzz.netlify.app/",
    github: "https://github.com/Omotolanny/TailwindTolzz",
    image: "/Tolzz.png"
  }
]


export default function Projects() {
  return (
    <section id="Projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected <span className="text-violet-600">Work</span></h2>
            <div className="w-20 h-1 bg-violet-600 rounded-full" />
          </div>
          <p className="text-foreground max-w-md">
            A glimpse into the applications I've built, focusing on clean code and prioritizing user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-background rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:shadow-xl hover:shadow-violet-500/10 transition-all"
            >
             
              <div className="relative h-52 w-full  overflow-hidden">
                <div className="absolute inset-0  group-hover:bg-transparent transition-colors z-10" />
                <Image src={project.image} alt={project.title} fill className='object-cover h-full'/>
              </div>

             
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold group-hover:text-violet-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a href={project.github} className="p-1 rounded-full bg-card border border-card-border shadow-sm hover:text-violet-600 transition-colors"><Github size={20} /></a>
                    <a href={project.link} className="text-foreground hover:text-violet-600 transition-colors"><button className="px-3 py-1 text-xs font-semibold cursor-pointer rounded-xl bg-violet-50 dark:bg-violet-900/30 text-foreground">Visit Site</button></a>
                  </div>
                </div>

                <p className="text-foreground  text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-semibold rounded-full bg-violet-50 dark:bg-violet-900/30 text-foreground ">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}