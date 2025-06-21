'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronUp } from 'lucide-react'

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/jaime-rosales',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/jaime-rosales',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:jaime.rosales@example.com',
      icon: Mail,
    },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary-400 mb-4">Jaime Rosales</h3>
            <p className="text-gray-300 mb-4">
              Full-stack developer passionate about creating innovative web solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gray-800 hover:bg-primary-600 rounded-lg transition-colors duration-200"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Jaime Rosales. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-50"
        >
          <ChevronUp size={24} />
        </motion.button>
      )}
    </footer>
  )
} 