'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Education() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/education-bg.jpg"
            alt="Education Background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Education
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">Bachelor of Computing with Distinction</p>
        </motion.div>
      </section>

      {/* University Section */}
      <section className="py-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden group">
              <Image
                src="/images/uog-campus.jpg"
                alt="University of Guelph Campus"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                  University of Guelph
                </h2>
                <p className="text-xl text-gray-400">Bachelor of Computing with distinction | Aug. 2019 - Aug. 2023</p>
              </div>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-white">Academic Excellence</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start group">
                      <span className="text-blue-500 mr-3 mt-1">•</span>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        Scored a 86% average
                      </span>
                    </li>
                    <li className="flex items-start group">
                      <span className="text-blue-500 mr-3 mt-1">•</span>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        Dean's Honours List, 5 semesters
                      </span>
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-white">Activities & Involvement</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start group">
                      <span className="text-purple-500 mr-3 mt-1">•</span>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        GSIC (Participating Analyst)
                      </span>
                    </li>
                    <li className="flex items-start group">
                      <span className="text-purple-500 mr-3 mt-1">•</span>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        Hack the North
                      </span>
                    </li>
                    <li className="flex items-start group">
                      <span className="text-purple-500 mr-3 mt-1">•</span>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        ISO (Student Volunteer)
                      </span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-4 md:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive expertise in modern technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">Languages</h3>
              <ul className="space-y-3">
                <li className="flex items-center group">
                  <span className="text-blue-500 mr-3">•</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">C</span>
                </li>
                <li className="flex items-center group">
                  <span className="text-blue-500 mr-3">•</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Java</span>
                </li>
                <li className="flex items-center group">
                  <span className="text-blue-500 mr-3">•</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Swift & SwiftUI</span>
                </li>
                <li className="flex items-center group">
                  <span className="text-blue-500 mr-3">•</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Node.js</span>
                </li>
                <li className="flex items-center group">
                  <span className="text-blue-500 mr-3">•</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">MySQL</span>
                </li>
                <li className="flex items-center group">
                  <span className="text-blue-500 mr-3">•</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">HTML/CSS</span>
                </li>
                <li className="flex items-center group">
                  <span className="text-blue-500 mr-3">•</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">JavaScript</span>
                </li>
                <li className="flex items-center group">
                  <span className="text-blue-500 mr-3">•</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">YAML</span>
                </li>
                <li className="flex items-center group">
                  <span className="text-blue-500 mr-3">•</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">68k assembly</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">Tools & Technologies</h3>
              <ul className="space-y-3">
                <li className="flex items-center group">
                  <span className="text-purple-500 mr-3">•</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">VS Code, Eclipse, Atom, IntelliJ</span>
                </li>
                <li className="flex items-center group">
                  <span className="text-purple-500 mr-3">•</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Git & GitHub</span>
                </li>
                <li className="flex items-center group">
                  <span className="text-purple-500 mr-3">•</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">JIRA</span>
                </li>
                <li className="flex items-center group">
                  <span className="text-purple-500 mr-3">•</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Selenium Webdriver</span>
                </li>
                <li className="flex items-center group">
                  <span className="text-purple-500 mr-3">•</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">JMeter</span>
                </li>
                <li className="flex items-center group">
                  <span className="text-purple-500 mr-3">•</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Kubernetes</span>
                </li>
                <li className="flex items-center group">
                  <span className="text-purple-500 mr-3">•</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Docker</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">Operating Systems</h3>
              <ul className="space-y-3">
                <li className="flex items-center group">
                  <span className="text-green-500 mr-3">•</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Linux</span>
                </li>
                <li className="flex items-center group">
                  <span className="text-green-500 mr-3">•</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Mac OS</span>
                </li>
                <li className="flex items-center group">
                  <span className="text-green-500 mr-3">•</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Windows</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 