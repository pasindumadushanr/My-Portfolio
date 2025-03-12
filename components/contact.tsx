"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Send, Github, Linkedin, Twitter } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send email using your preferred method
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          to: "pasindumadushanr04@gmail.com", // Your email address
        }),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        setFormData({ name: "", email: "", message: "" })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      // Handle error state
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-950/20 to-black relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-purple-500/5 rounded-full blur-xl"
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

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4"
          >
            Let&apos;s Build Something Amazing Together 🚀
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Have a project in mind or just want to connect? Feel free to reach out!
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid md:grid-cols-5 gap-8"
          >
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Contact Information</h3>
                <p className="text-gray-400">
                  Feel free to reach out through the form or via my social media profiles.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-300">Email</h4>
                    <p className="text-blue-400">pasindumadushanr04@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-300">Phone</h4>
                    <p className="text-blue-400">+94 712496567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-300">Location</h4>
                    <p className="text-gray-400">Colombo, Sri Lanka</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-xl font-semibold text-white mb-3">Connect With Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/pasindumadushanr"
                    className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-blue-800/70 transition-colors"
                  >
                    <Github className="h-5 w-5 text-blue-400" />
                  </a>
                  <a
                    href="https://www.facebook.com/ha.pasindu?mibextid=ZbWKwL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-blue-800/70 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/%20pasindu-madushan-b5b22a2aa"
                    className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-blue-800/70 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-blue-400" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-blue-800/70 transition-colors"
                  >
                    <Twitter className="h-5 w-5 text-blue-400" />
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Send Me a Message</h3>

                {submitSuccess ? (
                  <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-4 text-green-300">
                    Thank you for your message! I&apos;ll get back to you as soon as possible.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-blue-900/30 border border-blue-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-blue-900/30 border border-blue-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white"
                        placeholder="Your email"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2 bg-blue-900/30 border border-blue-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white resize-none"
                        placeholder="Your message"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-medium flex items-center justify-center gap-2 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

