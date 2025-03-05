import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ExternalLink, Code2 } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';

import type { Project } from './types';

const projects: Project[] = [
  {
    title: "Ninja's Food (Latest Project – Work in Progress)",
    description: " my latest project, currently in development. It is a multi-restaurant platform that allows users to browse restaurants, explore categorized menus, customize their orders, and place orders for delivery or pickup. The app is designed to offer a seamless and efficient food ordering experience with advanced filtering, real-time order tracking, and secure payment integration.",
    image: "https://raw.githubusercontent.com/ayoub00400/Ninjas_food_client_app/refs/heads/main/assets/images/logo.webp?token=GHSAT0AAAAAAC246B5NM34N72GPCHBI5PL2Z6IFO5A",
    technologies: ["Flutter", "Bloc", "Hive Db", "Socket.io",],
    githubUrl: "https://github.com/ayoub00400/Ninjas_food_client_app",
  },
  {
    title: "CRI (Customer Relation Interaction)",
    description: "A comprehensive mobile application designed to enhance customer satisfaction through efficient mission management, real-time feedback collection, a robust task management system, gather valuable insights, and seamlessly synchronize feedback with the central system. Additionally, it includes a task management system to help users organize, track, and complete assignments efficiently, ensuring a streamlined workflow and improved productivity",
    image: "https://play-lh.googleusercontent.com/vdUFRp5iVwFCKglbET2xVnRvRGzVI1Jh8V8CNQUjOojjgRj1rrrbuJSZA0lf2VY_R05n=w480-h960-rw",
    technologies: ["Flutter", "Bloc", "REST API", "Local Storage","Socket.io"],
    githubUrl: "https://play.google.com/store/apps/details?id=com.mformatik.cri.app&hl=fr",
  },
  {
    title: "MBio-Logistic Driver",
    description: "Logistix is a powerful logistics management tool designed to help distribution companies streamline their delivery operations and maintain a competitive edge in the market. The app enables real-time tracking of prepared packages from the warehouse (\"Makhzoun\") to the final customer. By monitoring every step of the delivery process, Logistix ensures transparency, efficiency, and improved supply chain management. Additionally, it features a mission assignment system for drivers, allowing administrators to efficiently allocate delivery tasks and optimize fleet performance.",
    image: 'https://play-lh.googleusercontent.com/B1Yy_m7DzSKcQnH7mR2Tn87Wf0xPwqsq2le7C4hCwXqC0VGF3GKTfOP3NJCvIyrPuOo=w480-h960-rw',
    technologies: ["Flutter", "Getx", "Firebase", "Local Storage"],
    githubUrl: "https://play.google.com/store/apps/details?id=com.MFormatik.mbiologistic&hl=fr",
  },
  {
    title: "M-Bio Manager",
    description: "M-Bio Manager is a logistics management application designed to streamline supply chain operations by providing real-time updates on shipment statuses and transport planning. The app enables businesses to efficiently track and manage their logistics processes, ensuring better coordination, reduced delays, and improved operational efficiency.",
    image: "https://play-lh.googleusercontent.com/kWlPZoR_lVciAHL_SVEv5k0TcVG42oH0rjoEeMtJZ1s32jBIQ_DHhSzZkOlP_OD2bA=w480-h960-rw",
    technologies: ["Flutter", "Getx", "Firebase", "Local Storage"],
    githubUrl: "https://play.google.com/store/apps/details?id=com.mformatik.logistx_admin_app&hl=fr",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <ThemeToggle />
      
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 to-transparent dark:from-blue-500/5"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545486332-9e0999c535b2?auto=format&fit=crop&q=80&w=1000')] opacity-5 bg-cover bg-center"></div>
        
        <div className="relative flex items-center justify-center px-4 min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Code2 className="w-20 h-20 mx-auto text-blue-600 dark:text-blue-400" />
            </motion.div>
            <h1 className="text-6xl font-bold mb-6 gradient-text">Ayoub Larbaoui</h1>
            <h2 className="text-3xl text-blue-600 dark:text-blue-400 mb-8 font-light">Flutter Developer</h2>
            <p className="text-xl max-w-2xl mx-auto mb-12 text-gray-600 dark:text-gray-300">
              Crafting beautiful and performant mobile applications with Flutter
            </p>
            <div className="flex justify-center space-x-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/ayoub00400"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github className="w-8 h-8" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/ayoub-larbaoui-/"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-8 h-8" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:ayoublarbaoui004@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail className="w-8 h-8" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4" id="about">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center gradient-text"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 glass-card rounded-2xl p-8 shadow-xl"
          >
            <p className="text-lg leading-relaxed">
              With over a year of experience in Flutter development, I specialize in creating responsive and intuitive mobile applications.
              My expertise includes working with state management solutions like GetX and Bloc, implementing complex UI designs,
              and integrating RESTful APIs and much more.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Technical Skills</h3>
                <ul className="space-y-3">
                  {["Dart & Flutter", "State Management(Bloc,Getx,...)", "RESTful API Integration", "Local Database Implementation(Hive,Drift ...)", "Git Version Control"].map((skill) => (
                    <motion.li
                      key={skill}
                      className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                      whileHover={{ x: 10 }}
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Key Strengths</h3>
                <ul className="space-y-3">
                  {["Problem Solving", "Effective Communication", "Independent Work", "UI/UX Design Understanding", "Clean Code (Solid Principles, Clean Architecture ...  )"].map((strength) => (
                    <motion.li
                      key={strength}
                      className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                      whileHover={{ x: 10 }}
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>{strength}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4" id="projects">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center gradient-text"
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card rounded-2xl overflow-hidden shadow-xl group hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.githubUrl && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.githubUrl}
                        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                     
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Visit
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveUrl}
                        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Download */}
      <motion.div
        className="fixed bottom-4 right-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://drive.google.com/file/d/1JZofHeMtZjxRuCP7ZA7Ibxm3b6D8F9Nt/view?usp=sharing"
          className="flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        >
          <Download className="w-5 h-5 mr-2" />
          Download Resume
        </motion.a>
      </motion.div>
    </div>
  );
}

export default App;