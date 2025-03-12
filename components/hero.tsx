"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { ChevronDown } from "lucide-react"
import ParticleBackground from "./particle-background"
import Image from "next/image"

export default function Hero() {
  const router = useRouter()
  const [text, setText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "Hi, I'm Pasindu Madushan 👋"

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [text])

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            {text}
            {showCursor ? "|" : ""}
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-xl md:text-2xl text-blue-300 font-light mt-4"
          >
            <span className="inline-block px-2 py-1 mx-1 rounded bg-blue-900/30 border border-blue-500/20">
              Software Engineer
            </span>{" "}
            |
            <span className="inline-block px-2 py-1 mx-1 rounded bg-purple-900/30 border border-purple-500/20">
              Full-stack Developer
            </span>{" "}
            |
            <span className="inline-block px-2 py-1 mx-1 rounded bg-cyan-900/30 border border-cyan-500/20">
              Innovator
            </span>
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="relative w-48 h-48 md:w-64 md:h-64 mb-8 rounded-full overflow-hidden border-2 border-blue-500/50"
          style={{
            boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10" />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p%20%281%29-OctH8zs0eXzFkuQUR7UQESaaM01kxI.png"
            alt="Pasindu Madushan"
            width={400}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mt-6"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full text-white font-medium 
                      hover:from-blue-500 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/20
                      border border-blue-400/20 flex items-center justify-center group"
          >
            Explore My Work
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="ml-2"
            >
              🚀
            </motion.span>
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 bg-transparent border border-purple-500 rounded-full text-white font-medium 
                      hover:bg-purple-900/30 transition-all duration-300 shadow-lg shadow-purple-500/10
                      flex items-center justify-center group"
          >
            Let&apos;s Connect
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="ml-2"
            >
              💬
            </motion.span>
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
          <ChevronDown className="w-8 h-8 text-blue-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}

