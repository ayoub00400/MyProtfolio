import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="glass-card rounded-2xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
    >
      <motion.div 
        className="relative overflow-hidden h-48"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-blue-600/20 backdrop-blur-sm flex items-center justify-center"
        >
          <span className="text-white text-lg font-medium">View Details</span>
        </motion.div>
      </motion.div>
      <div className="p-8">
        <motion.h3 
          className="text-2xl font-semibold mb-3 gradient-text"
          whileHover={{ x: 10 }}
          transition={{ duration: 0.2 }}
        >
          {project.title}
        </motion.h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
          {project.description}
        </p>
        <motion.div 
          className="flex flex-wrap gap-2 mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {project.technologies.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
        <div className="flex space-x-4">
          {project.githubUrl && (
            <motion.a
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Github className="w-5 h-5 mr-2" />
              View Code
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};