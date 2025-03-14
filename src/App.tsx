import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Code2, ChevronDown } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';

import { ProjectsSection } from './components/ProjectsSection';

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/yourusername",
    label: "GitHub",
    color: "hover:text-[#333] dark:hover:text-white",
    delay: 0
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
    color: "hover:text-[#0077b5] dark:hover:text-[#0077b5]",
    delay: 0.1
  },
  {
    icon: Mail,
    href: "mailto:mohsen@ranwip.com",
    label: "Email",
    color: "hover:text-[#ea4335] dark:hover:text-[#ea4335]",
    delay: 0.2
  }
];

const iconVariants = {
  hover: {
    rotate: [0, -10, 10, -10, 0],
    transition: {
      duration: 0.4
    }
  }
};

const linkVariants = {
  initial: {
    scale: 0,
    opacity: 0
  },
  animate: (delay: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 1.2 + delay
    }
  }),
  hover: {
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: {
    scale: 0.9
  }
};

function App() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <ThemeToggle />
      
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 to-transparent dark:from-blue-500/5"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545486332-9e0999c535b2?auto=format&fit=crop&q=80&w=1000')] opacity-5 bg-cover bg-center"></div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-grid-pattern"
          ></motion.div>
        </div>
        
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
              className="mb-8 relative"
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-30"
              />
              <Code2 className="w-20 h-20 mx-auto text-blue-600 dark:text-blue-400 relative" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <motion.span
                className="absolute -inset-x-4 -inset-y-2 bg-blue-500/10 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
              <h1 className="text-6xl font-bold mb-6 gradient-text relative">Ayoub Larbaoui</h1>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-3xl text-blue-600 dark:text-blue-400 mb-8 font-light"
            >
              Flutter Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xl max-w-2xl mx-auto mb-12 text-gray-600 dark:text-gray-300"
            >
              Crafting beautiful and performant mobile applications with Flutter
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center items-center space-x-8"
            >
              {socialLinks.map(({ icon: Icon, href, label, color, delay }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative group flex items-center justify-center ${color}`}
                  variants={linkVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  whileTap="tap"
                  custom={delay}
                >
                  <motion.div
                    className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                  <motion.div
                    className="relative bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <Icon className="w-6 h-6 transition-colors duration-300" />
                    <motion.div
                      className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity"
                      initial={false}
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </motion.div>
                  <motion.span
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ y: 10, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    {label}
                  </motion.span>
                </motion.a>
              ))}
            </motion.div>

            <motion.button
              onClick={scrollToProjects}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{
                delay: 1.2,
                y: {
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut"
                }
              }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-400 hover:text-blue-500 transition-colors"
            >
              <ChevronDown className="w-10 h-10" />
            </motion.button>
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
            className="space-y-8 glass-card rounded-2xl p-8 shadow-xl relative group"
          >
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur-xl"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
            <p className="text-lg leading-relaxed">
              With over a year of experience in Flutter development, I specialize in creating responsive and intuitive mobile applications.
              My expertise includes working with state management solutions like GetX and Bloc, implementing complex UI designs,
              and integrating RESTful APIs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Technical Skills</h3>
                <ul className="space-y-3">
                  {["Dart & Flutter", "GetX / Bloc State Management", "RESTful API Integration", "Local Database Implementation", "Git Version Control"].map((skill) => (
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
                  {["Problem Solving", "Effective Communication", "Independent Work", "UI/UX Design Understanding", "Clean Code Practices"].map((strength) => (
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
      <ProjectsSection />

    
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
          href="/path-to-your-resume.pdf"
          className="flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow relative group"
        >
          <motion.span
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-md opacity-50 group-hover:opacity-75 transition-opacity"
          />
          <Download className="w-5 h-5 mr-2 relative" />
          <span className="relative">Download Resume</span>
        </motion.a>
      </motion.div>
    </div>
  );
}

export default App;