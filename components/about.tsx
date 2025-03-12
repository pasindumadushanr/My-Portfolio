"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-black to-blue-950/30">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-blue-500/10 rounded-full blur-xl"
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3,
                animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
              }}
            />
          ))}
        </div>
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p%20%281%29-OctH8zs0eXzFkuQUR7UQESaaM01kxI.png"
                alt="Pasindu Madushan"
                width={600}
                height={600}
                className="w-full h-auto rounded-lg transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
            >
              About Me
            </motion.h2>

            <motion.div variants={itemVariants}>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Enthusiastic and dedicated BSc (Hons) Information Technology student specializing in Information
                Technology, with a strong foundation in programming, software design, and networking.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Passionate about web development and software engineering, with a keen interest in MERN stack
                development. Eager to apply technical skills and knowledge to real-world challenges, while continuously
                learning and growing in the tech industry.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Looking for opportunities to contribute effectively to innovative projects and collaborate within
                dynamic team.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <h3 className="text-xl font-semibold text-blue-300 mb-3">My Expertise</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Web Development",
                  "Mobile Apps",
                  "UI/UX Design",
                  "Cloud Solutions",
                  "API Integration",
                  "Performance Optimization",
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 bg-blue-900/20 border border-blue-500/20 rounded-lg text-center hover:bg-blue-800/30 transition-colors duration-300 hover:border-blue-400/40 group"
                  >
                    <span className="text-sm text-gray-300 group-hover:text-blue-300 transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 pt-2">
              <a
                href="https://drive.google.com/uc?export=download&id=1LMJmEQP1OgC6301fiZdNBe5VAmKz71su"
                download="Pasindu_Madushan_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-blue-600/20 border border-blue-500/30 rounded-lg text-blue-300 hover:bg-blue-600/30 transition-all duration-300 text-sm flex items-center justify-center"
              >
                Download CV
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-5 py-2 bg-purple-600/20 border border-purple-500/30 rounded-lg text-purple-300 hover:bg-purple-600/30 transition-all duration-300 text-sm"
              >
                Contact Me
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

