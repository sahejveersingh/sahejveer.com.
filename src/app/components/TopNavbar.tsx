'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TopNavbar() {
  const pathname = usePathname();

  return (
    // Apply custom class for positioning
    <nav className="navbar-container">
      {/* Apply custom class for container styling */}
      <div className="navbar-inner">
        {/* Home Link */}
        <Link 
          href="/" 
          className={`navbar-link ${pathname === '/' ? 'navbar-link-active' : ''}`}
        >
          Home
        </Link>

        {/* Work Link */}
        <Link 
          href="/work" 
          className={`navbar-link ${pathname === '/work' ? 'navbar-link-active' : ''}`}
        >
          Work
        </Link>

        {/* Education Link */}
        <Link 
          href="/education" 
          className={`navbar-link ${pathname === '/education' ? 'navbar-link-active' : ''}`}
        >
          Education
        </Link>

        {/* Contact Link */}
        <a 
          href="mailto:sahejveers@gmail.com" 
          className="navbar-link-contact"
        >
          Contact
        </a>
      </div>
    </nav>
  );
} 