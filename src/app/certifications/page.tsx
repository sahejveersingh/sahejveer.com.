'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Certifications() {
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
            Certifications & Licenses
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">Professional Certifications and Achievements</p>
        </motion.div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {/* Banking & Finance Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
            >
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-gray-300">
                Banking & Finance
              </h2>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="relative w-12 h-12 mr-4 flex-shrink-0">
                    <Image
                      src="/images/logos/jpmorgan.png"
                      alt="JPMorgan Chase Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">JPMorgan Chase Virtual Experience Program</h3>
                    <p className="text-gray-400">JPMorgan Chase · Issued Feb 2022</p>
                    <p className="text-gray-300 mt-2">Credential ID: uMpT8c3dKeC5ZqPP9</p>
                    <a
                      href="https://insidesherpa.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_JPMorgan%20Chase_N5mkAar8jcfurpC4g_1645523596648_completion_certificate.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-1.5 border-2 border-black rounded-full bg-gray-100 text-black font-semibold hover:bg-gray-200 transition-colors duration-200 mt-2"
                    >
                      Show credential
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7m0 0v7m0-7L10 14m-7 7h7a2 2 0 002-2v-7" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="relative w-12 h-12 mr-4 flex-shrink-0">
                    <Image
                      src="/images/logos/goldman-sachs.png"
                      alt="Goldman Sachs Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Goldman Sachs Engineering Virtual Program</h3>
                    <p className="text-gray-400">Goldman Sachs · Issued Feb 2022</p>
                    <p className="text-gray-300 mt-2">Credential ID: k6FEkdJPSK3humof9</p>
                    <a
                      href="https://insidesherpa.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_N5mkAar8jcfurpC4g_1645524910481_completion_certificate.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-1.5 border-2 border-black rounded-full bg-gray-100 text-black font-semibold hover:bg-gray-200 transition-colors duration-200 mt-2"
                    >
                      Show credential
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7m0 0v7m0-7L10 14m-7 7h7a2 2 0 002-2v-7" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="relative w-12 h-20 mr-4 flex-shrink-0">
                    <Image
                      src="/images/logos/bloomberg.png"
                      alt="Bloomberg Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Bloomberg Market Concepts</h3>
                    <p className="text-gray-400">Bloomberg · Issued Aug 2021</p>
                    <p className="text-gray-300 mt-2">Credential ID: 162799403069</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Educational Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
            >
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-gray-300">
                Educational
              </h2>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="relative w-12 h-12 mr-4 flex-shrink-0">
                    <Image
                      src="/images/logos/mit.png"
                      alt="MIT Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">14.01x: AP® Microeconomics</h3>
                    <p className="text-gray-400">MIT Sloan School of Management · Issued Jun 2020</p>
                    <p className="text-gray-300 mt-2">Credential ID: 924eb50728dc441d98a2a3c8dde074fc</p>
                    <a
                      href="https://courses.edx.org/certificates/924eb50728dc441d98a2a3c8dde074fc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-1.5 border-2 border-black rounded-full bg-gray-100 text-black font-semibold hover:bg-gray-200 transition-colors duration-200 mt-2"
                    >
                      Show credential
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7m0 0v7m0-7L10 14m-7 7h7a2 2 0 002-2v-7" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="relative w-12 h-12 mr-4 flex-shrink-0">
                    <Image
                      src="/images/logos/mit.png"
                      alt="MIT Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Introductory Python</h3>
                    <p className="text-gray-400">Massachusetts Institute of Technology · Issued Aug 2018</p>
                    <p className="text-gray-300 mt-2">Credential ID: f1d786db999349548158b86357a3d474</p>
                    <a
                      href="https://courses.edx.org/certificates/f1d786db999349548158b86357a3d474"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-1.5 border-2 border-black rounded-full bg-gray-100 text-black font-semibold hover:bg-gray-200 transition-colors duration-200 mt-2"
                    >
                      Show credential
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7m0 0v7m0-7L10 14m-7 7h7a2 2 0 002-2v-7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Music Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-300"
            >
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-gray-300">
                Music
              </h2>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="relative w-12 h-12 mr-4 flex-shrink-0">
                    <Image
                      src="/images/logos/trinity.png"
                      alt="Trinity College London Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Professional Piano Foundation</h3>
                    <p className="text-gray-400">Trinity College London · Issued May 2016</p>
                    <p className="text-gray-300 mt-2">Credential ID: 501/2041/4</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 