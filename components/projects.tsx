"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { X, ExternalLink, Github } from "lucide-react"

// Project images with colorful backgrounds and text
const projectImages = {
  blog: "https://placehold.co/600x400/3b82f6/ffffff?text=Blog+App",
  shop: "https://placehold.co/600x400/8b5cf6/ffffff?text=Fresh4You",
  music: "https://placehold.co/600x400/ec4899/ffffff?text=Music+Store",
  todo: "https://placehold.co/600x400/10b981/ffffff?text=ToDo+App",
  student: "https://placehold.co/600x400/f59e0b/ffffff?text=Student+Management",
  ecommerce: "https://placehold.co/600x400/6366f1/ffffff?text=eCommerce+Microservices",
}

const projects = [
  {
    id: 1,
    title: "Blog App",
    description:
      "Developed a full-stack shop management system with user authentication, dynamic content management, and full CRUD functionality.",
    image: projectImages.blog,
    tags: ["MERN Stack", "Firebase", "Vite"],
    link: "#",
    github: "https://github.com/pasindumadushanr/Mern-Blog",
    features: ["User authentication system", "Dynamic content management", "Full CRUD operations", "Responsive design"],
  },
  {
    id: 2,
    title: "Fresh4You Shop Management System",
    description:
      "Developed a comprehensive shop management system using the MERN stack to streamline inventory, sales, and customer management.",
    image: projectImages.shop,
    tags: ["MERN Stack", "Firebase", "Payment Gateway"],
    link: "#",
    github: "https://github.com/vidura002/Fresh4You-Shop-Managment-System",
    features: ["Inventory management", "Sales tracking", "Customer management", "Payment gateway integration"],
  },
  {
    id: 3,
    title: "Online Music Store",
    description: "Developed an online music store with dynamic web pages, user authentication, and CRUD operations.",
    image: projectImages.music,
    tags: ["Java", "Servlet", "MySQL"],
    link: "#",
    github: "https://github.com/kaveendimantha/Online-Music-Store",
    features: ["Dynamic web pages", "User authentication", "CRUD operations", "Music catalog management"],
  },
  {
    id: 4,
    title: "ToDo App",
    description: "Developed a mobile ToDo application with task management, reminders, and CRUD functionality.",
    image: projectImages.todo,
    tags: ["Kotlin", "Android Studio", "SQLite"],
    link: "#",
    github: "https://github.com/pasindumadushanr/ToDo-APP",
    features: ["Task management", "Reminders system", "CRUD functionality", "Local data storage"],
  },
  {
    id: 5,
    title: "Student Management",
    description:
      "Developed a full-stack student management system with user authentication, dynamic data management, and full CRUD functionality.",
    image: projectImages.student,
    tags: ["MERN Stack", "MongoDB", "Express", "React"],
    link: "#",
    github: "https://github.com/pasindumadushanr/StudentManagement02",
    features: ["Student data management", "User authentication", "Dynamic data handling", "Full CRUD operations"],
  },
  {
    id: 6,
    title: "eCommerce Microservices Architecture",
    description:
      "A scalable eCommerce application built using .NET microservices architecture, designed with different architectural patterns and technologies to enhance scalability, maintainability, and performance.",
    image: projectImages.ecommerce,
    tags: ["Microservices", ".NET", "Docker", "Kubernetes"],
    link: "#",
    github: "#",
    features: [
      "Microservices architecture",
      "Event-driven design",
      "Cloud-native deployment",
      "CI/CD with Azure DevOps",
    ],
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const openProject = (project) => {
    setSelectedProject(project)
    document.body.style.overflow = "hidden"
  }

  const closeProject = () => {
    setSelectedProject(null)
    document.body.style.overflow = "auto"
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-blue-950/20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-blue-500/5 rounded-full blur-xl"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.2,
                animation: `float ${Math.random() * 10 + 15}s infinite ease-in-out`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            A showcase of my recent work and passion projects
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="group relative bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur"></div>

              <div className="relative">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-900/30 rounded-full text-xs text-blue-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => openProject(project)}
                    className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-lg text-blue-300 hover:bg-blue-600/30 transition-all duration-300 text-sm w-full"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeProject}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-gradient-to-br from-blue-900/90 to-purple-900/90 border border-blue-500/30 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={closeProject}
                  className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="h-64 md:h-80 overflow-hidden">
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{selectedProject.title}</h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-900/50 rounded-full text-sm text-blue-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-300 mb-6">{selectedProject.description}</p>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-blue-300 mb-3">Key Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-white hover:bg-gray-700 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

