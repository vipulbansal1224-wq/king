'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar" style={{ borderBottom: '3px solid var(--accent)' }}>
      <div className="container navbar-container">
        <Link href="/" className="logo" style={{ fontSize: '1.8rem', fontWeight: '900', letterSpacing: '-1px' }}>
          KING <span style={{ color: 'var(--accent)' }}>INTERNATIONAL</span>
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
          <Link href="/shop" onClick={() => setIsOpen(false)}>Products</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href="/contact" className="btn btn-accent" style={{ padding: '8px 20px', marginLeft: '10px' }} onClick={() => setIsOpen(false)}>Get a Quote</Link>
        </nav>
      </div>
    </header>
  );
}
