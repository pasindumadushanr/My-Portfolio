"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const skills = [
  { name: "OOP", category: "Programming", experience: "3+ years", icon: "🧩" },
  { name: "MERN Stack", category: "Web Development", experience: "2+ years", icon: "🌐" },
  { name: "Linux", category: "Operating System", experience: "2+ years", icon: "🐧" },
  { name: "GitHub", category: "Version Control", experience: "3+ years", icon: "🔄" },
  { name: "DSA", category: "Programming", experience: "3+ years", icon: "🧮" },
  { name: "Java", category: "Language", experience: "3+ years", icon: "☕" },
  { name: "JavaScript", category: "Language", experience: "3+ years", icon: "📜" },
  { name: "PHP", category: "Language", experience: "2+ years", icon: "🐘" },
  { name: "Firebase", category: "Backend", experience: "2+ years", icon: "🔥" },
  { name: "SQL", category: "Database", experience: "3+ years", icon: "🗃️" },
  { name: "R", category: "Language", experience: "1+ years", icon: "📊" },
  { name: "Node.js", category: "Backend", experience: "2+ years", icon: "🟢" },
  { name: "HTML", category: "Frontend", experience: "4+ years", icon: "📄" },
  { name: "CSS", category: "Frontend", experience: "4+ years", icon: "🎨" },
  { name: "Python", category: "Language", experience: "2+ years", icon: "🐍" },
  { name: "Kotlin", category: "Mobile", experience: "1+ years", icon: "📱" },
  { name: "MongoDB", category: "Database", experience: "2+ years", icon: "🍃" },
  { name: "MySQL", category: "Database", experience: "3+ years", icon: "🐬" },
  { name: "AWS", category: "Cloud", experience: "1+ years", icon: "☁️" },
  { name: "C#", category: "Language", experience: "2+ years", icon: "🔷" },
  { name: "C", category: "Language", experience: "3+ years", icon: "©️" },
  { name: "C++", category: "Language", experience: "2+ years", icon: "➕" },
  { name: "Flutter", category: "Mobile", experience: "1+ years", icon: "📱" },
  { name: "ASP.NET Core", category: "Backend", experience: "1+ years", icon: "🌐" },
  { name: "DevOps", category: "Operations", experience: "1+ years", icon: "⚙️" },
  { name: "Next.js", category: "Frontend", experience: "2+ years", icon: "▲" },
  { name: "Docker", category: "DevOps", experience: "1+ years", icon: "🐳" },
  { name: "Figma", category: "Design", experience: "2+ years", icon: "🎭" },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-blue-950/30 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4"
          >
            Technologies & Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            A collection of technologies and tools I work with to bring ideas to life
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                transition: { duration: 0.2 },
              }}
              className="relative group bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur"></div>

              <div className="flex flex-col items-center text-center">
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h3 className="text-lg font-medium text-white mb-1">{skill.name}</h3>
                <p className="text-sm text-blue-300 mb-2">{skill.category}</p>
                <div className="mt-2 px-3 py-1 bg-blue-900/30 rounded-full text-xs text-gray-300">
                  {skill.experience}
                </div>
              </div>

              <div className="absolute inset-0 rounded-xl border border-blue-500/0 group-hover:border-blue-500/50 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

