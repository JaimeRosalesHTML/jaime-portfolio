'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
    >
      {/* Project Image Placeholder */}
      <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
        <div className="text-white text-4xl font-bold opacity-80">
          {project.title.charAt(0)}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex gap-3">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <Github size={16} />
            <span className="text-sm font-medium">GitHub</span>
          </motion.a>

          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200"
          >
            <ExternalLink size={16} />
            <span className="text-sm font-medium">Live Demo</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
} 