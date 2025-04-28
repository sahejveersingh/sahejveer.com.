'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Work() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-300 to-gray-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            Work Experience
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">Building the future of banking software</p>
        </motion.div>
      </section>

      {/* Work Timeline */}
      <section className="py-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-32">
            {/* Candescent */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden group bg-gray-900">
                <Image
                  src="/images/candescent.jpeg"
                  alt="Candescent Logo"
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-gray-300">
                    Software Engineer
                  </h2>
                  <p className="text-xl text-gray-400">Candescent · Permanent Full-time | Oct 2024 - Present</p>
                  <p className="text-lg text-gray-500">Waterloo, Ontario, Canada · Hybrid</p>
                </div>
              </div>
            </motion.div>

            {/* NCR Voyix */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden group bg-gray-900">
                <Image
                  src="/images/ncr-voyix.png"
                  alt="NCR Voyix Logo"
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-blue-400">
                    Software Engineer I
                  </h2>
                  <p className="text-xl text-gray-400">NCR Voyix Canada | Sept. 2023 - Present</p>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start group">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      Orchestrating the development of banking teller software using Java, YAML, and Cassandra
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      Implementing sleek and responsive user interfaces with React and MaterialUI
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      Streamlining deployment processes with Jenkins, Docker, and Kubernetes
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Front-End Developer */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 md:order-1 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-gray-300">
                    Front-End Software Developer
                  </h2>
                  <p className="text-xl text-gray-400">NCR Canada Corp. | Jan. 2023 - Aug. 2023</p>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start group">
                    <span className="text-purple-500 mr-3 mt-1">•</span>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      Spearheaded the development of multiple innovative features for the bank teller user interface
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-purple-500 mr-3 mt-1">•</span>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      Enhanced the interface's functionality to meet transactional requirements
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-purple-500 mr-3 mt-1">•</span>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      Utilized expertise in micro-service API design for Cassandra database implementation
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden group order-1 md:order-2">
                <Image
                  src="/images/ncr.png"
                  alt="NCR Logo or Frontend Development"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>

            {/* Back-End Developer */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden group">
                <Image
                  src="/images/backend-dev.jpg"
                  alt="Backend Development"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-blue-400">
                    Back-End Software Developer
                  </h2>
                  <p className="text-xl text-gray-400">NCR Canada Corp. | May 2022 - Sept. 2022</p>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start group">
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      Implemented Banking Software using Docker, Kubernetes, and Micro-services
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      Developed micro-service API features for Cassandra database
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      Integrated YAML configurations for REST API and upgraded Spring Boot dependencies
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Jr. Software Engineer */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 md:order-1 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-gray-300">
                    Jr. Software Engineer
                  </h2>
                  <p className="text-xl text-gray-400">Ministry of Children, Community and Social Services | May 2021 - Dec. 2021</p>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start group">
                    <span className="text-pink-500 mr-3 mt-1">•</span>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      Pioneered an on-boarding web application using Node.js, JavaScript, and MySQL
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-pink-500 mr-3 mt-1">•</span>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      Developed automation testing framework for OW/ODSP cases
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-pink-500 mr-3 mt-1">•</span>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      Performed R&D on new tools and technologies including Selenium and JMeter
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden group order-1 md:order-2">
                <Image
                  src="/images/govt-office.jpg"
                  alt="Government Office"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 