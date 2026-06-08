'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link href="/" className="logo">
          KING <span className="logo-accent">INTERNATIONAL</span>
        </Link>
        
        <button 
          className={`mobile-toggle ${isOpen ? 'open' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/fee-structure" onClick={() => setIsOpen(false)}>Fee Structure</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href="/login" className="btn btn-secondary" style={{ padding: '8px 15px' }} onClick={() => setIsOpen(false)}>Login</Link>
          <Link href="/apply" className="btn btn-accent" style={{ padding: '8px 15px' }} onClick={() => setIsOpen(false)}>Apply</Link>
        </nav>
      </div>
    </header>
  );
}
