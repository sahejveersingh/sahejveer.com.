'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TopNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Apply custom class for positioning
    <nav className="navbar-container">
      {/* Apply custom class for container styling */}
      <div className="navbar-inner">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className={`navbar-link ${pathname === '/' ? 'navbar-link-active' : ''}`}
          >
            Home
          </Link>
          <Link 
            href="/work" 
            className={`navbar-link ${pathname === '/work' ? 'navbar-link-active' : ''}`}
          >
            Work
          </Link>
          <Link 
            href="/education" 
            className={`navbar-link ${pathname === '/education' ? 'navbar-link-active' : ''}`}
          >
            Education
          </Link>
          <Link 
            href="/certifications" 
            className={`navbar-link ${pathname === '/certifications' ? 'navbar-link-active' : ''}`}
          >
            Certifications
          </Link>
        </div>

        {/* Contact Button */}
        <a 
          href="mailto:sahejveers@gmail.com" 
          className="navbar-link-contact"
        >
          Contact
        </a>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-gray-800 md:hidden"
            >
              <div className="flex flex-col py-4">
                <Link 
                  href="/" 
                  className={`navbar-link-mobile ${pathname === '/' ? 'navbar-link-active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/work" 
                  className={`navbar-link-mobile ${pathname === '/work' ? 'navbar-link-active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  Work
                </Link>
                <Link 
                  href="/education" 
                  className={`navbar-link-mobile ${pathname === '/education' ? 'navbar-link-active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  Education
                </Link>
                <Link 
                  href="/certifications" 
                  className={`navbar-link-mobile ${pathname === '/certifications' ? 'navbar-link-active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  Certifications
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
} 