'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, X } from 'lucide-react'
import Image from 'next/image'

const myProjects = [
  {
    title: "TaDa",
    description: "I built a task management application for programmers that provides users with an intuitive interface that helps developers organize and track their tasks efficiently.",
    tags: ["React.js", "TailwindCSS", "Typescript"],
    link: "https://tada-jefs.onrender.com/",
    github: "https://github.com/ProGrowing/TaDa",
    image: "/TaDa.jpeg"
  },
  {
    title: "ConsultingCo",
    description: "I built a consulting website with React.js, TailwindCSS, and Typescript, providing a modern and responsive user experience.",
    tags: ["React.js", "TailwindCSS", "Typescript"],
    link: "https://darling-sfogliatella-9ecf00.netlify.app/",
    github: "https://github.com/Omotolanny/ConsultingCo",
    image: "/Consulting.jpeg" 
  },
  {
    title: "Sako Admin Dashboard",
    description: "A confidential fintech product currently in pre-launch. I designed and built the admin dashboard, integrated the application with its backend services, and helped connect the internal workflows needed to support the product.",
    tags: ["Next.js", "TailwindCSS", 'postman'],
    status: "Confidential pre-launch project"
  }
]


export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof myProjects[number] | null>(null)

  useEffect(() => {
    if (!selectedProject) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedProject(null)
    }

    document.addEventListener('keydown', closeOnEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.body.style.overflow = ''
    }
  }, [selectedProject])

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
              role="button"
              tabIndex={0}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  setSelectedProject(project)
                }
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-background rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:shadow-xl hover:shadow-violet-500/10 transition-all"
            >
             
              <div className="relative h-52 w-full  overflow-hidden">
                <div className="absolute inset-0  group-hover:bg-transparent transition-colors z-10" />
                {project.image ? (
                  <Image src={project.image} alt={project.title} fill className='object-cover h-full'/>
                ) : (
                  <div className="flex h-full items-center justify-center bg-violet-700 px-6 text-center dark:bg-violet-950/30">
                    <span className="text-sm font-semibold text-white dark:text-violet-300">Confidential project preview</span>
                  </div>
                )}
              </div>

             
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold group-hover:text-violet-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    {project.github && <a href={project.github} onClick={(event) => event.stopPropagation()} className="p-1 rounded-full bg-card border border-card-border shadow-sm hover:text-violet-600 transition-colors"><Github size={20} /></a>}
                    {project.link && <a href={project.link} onClick={(event) => event.stopPropagation()} className="text-foreground hover:text-violet-600 transition-colors"><button className="px-3 py-1 text-xs font-semibold cursor-pointer rounded-xl bg-violet-50 dark:bg-violet-900/30 text-foreground">Visit Site</button></a>}
                  </div>
                </div>

                <p className="text-foreground  text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>

                {project.status && <span className="mb-4 inline-block text-xs font-semibold text-violet-800 dark:text-violet-300">{project.status}</span>}

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

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-md"
          role="presentation"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative flex max-h-[calc(100dvh-2rem)] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-background shadow-2xl sm:max-h-[90vh] sm:rounded-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close project details"
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/60 p-2 text-white transition-colors hover:bg-violet-600"
            >
              <X size={20} />
            </button>

            <div className="relative h-36 w-full shrink-0 sm:h-80">
              {selectedProject.image ? (
                <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center bg-violet-700 px-6 text-center dark:bg-violet-950/30">
                  <span className="text-sm font-semibold text-white dark:text-violet-300">Confidential project preview</span>
                </div>
              )}
            </div>

            <div className="overflow-y-auto p-5 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
                <div>
                  <h3 id="project-modal-title" className="text-xl font-bold sm:text-3xl">{selectedProject.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-foreground dark:bg-violet-900/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex shrink-0 gap-2 sm:gap-3">
                  {selectedProject.github && <a href={selectedProject.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-card-border px-3 py-2 text-sm font-semibold transition-colors hover:text-violet-600 sm:px-4">
                    <Github size={17} /> GitHub
                  </a>}
                  {selectedProject.link && <a href={selectedProject.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-violet-700 sm:px-4">
                    Visit Site <ExternalLink size={17} />
                  </a>}
                </div>
              </div>
              {selectedProject.status && <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-violet-800 dark:text-violet-300">{selectedProject.status}</p>}
              <p className="mt-5 text-sm leading-6 text-foreground/80 sm:mt-6 sm:text-base sm:leading-7">{selectedProject.description}</p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}