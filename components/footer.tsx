"use client"

import { motion } from "framer-motion"
import { ChevronUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="py-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-900/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Pasindu Madushan. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center hover:bg-blue-800/50 transition-colors border border-blue-500/30"
            >
              <ChevronUp className="h-5 w-5 text-blue-400" />
            </motion.button>

            <p className="text-gray-400 text-sm">
              Built with <span className="text-blue-400">💙</span> by Pasindu Madushan
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

