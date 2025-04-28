'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <section className="relative z-10 flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-300 to-gray-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] leading-[1.2] pb-2">
            Sahejveer Singh Kumar
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300">
            Software Engineer & Problem Solver
          </p>
        </motion.div>
      </section>
    </main>
  );
}
