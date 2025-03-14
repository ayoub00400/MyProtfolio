import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import type { Project } from '../types';

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
      {
        title: "Quick Cargoo client app / Driver App",
        description: "Fixed critical bugs, optimized performance for faster loading, added new features like advanced scheduling, and refactored code for better maintainability.",
        image: "https://play-lh.googleusercontent.com/BrojKBFtvD2LTeCtyPezts7aD7a5zLkQ15f9LG-BN1eLYEDRGzhTrdXDOtZXzrsV1y4=w480-h960-rw",
        technologies: ["Flutter", "Getx", "Firebase", "Local Storage"],
        githubUrl: "https://play.google.com/store/apps/details?id=com.dcsec.quickcargoo&hl=en",
      },
];

export const ProjectsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 relative" id="projects">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl font-bold mb-4 gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            Featured Projects
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore some of my recent Flutter projects that showcase my expertise in mobile app development,
            state management, and creating engaging user experiences.
          </p>
        </motion.div>
        
        <div className="relative group">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-lg backdrop-blur-sm z-10 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => scroll('left')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </motion.button>
          
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {projects.map((project, index) => (
              <div key={index} className="min-w-[400px] snap-center">
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-lg backdrop-blur-sm z-10 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => scroll('right')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};