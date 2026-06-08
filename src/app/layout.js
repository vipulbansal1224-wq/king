import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'King International | Premium Industrial Machinery',
  description: 'Leading manufacturer of industrial machinery, paper cup machines, and corrugated box making machines.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="navbar">
          <div className="container">
            <Link href="/" className="nav-brand" style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/wp-content/uploads/2022/07/logo1.png" alt="King International Logo" style={{ height: '50px', width: 'auto' }} />
            </Link>
            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/#products">Products</Link>
              <Link href="/pod-devices">POD Devices</Link>
              <Link href="/padbots">PadBots</Link>
              <Link href="/#downloads">Downloads</Link>
              <Link href="/contact" className="btn btn-primary" style={{ padding: '8px 16px', marginLeft: '16px', color: 'white' }}>Contact</Link>
            </div>
            <a href="#contact" className="btn btn-accent" style={{ padding: '8px 20px', fontSize: '0.9rem', color: 'white' }}>Get Quote</a>
          </div>
        </nav>
        
        <main style={{ paddingTop: 'var(--nav-height)' }}>
          {children}
        </main>

        <footer className="footer" style={{ backgroundColor: '#0f172a', color: '#cbd5e1', paddingTop: '60px', paddingBottom: '20px' }}>
          <div className="container">
            <div className="grid grid-cols-4" style={{ gap: '40px', marginBottom: '40px' }}>
              <div className="footer-col" style={{ gridColumn: 'span 2' }}>
                <img src="/wp-content/uploads/2022/07/logo2-1.png" alt="King International" style={{ height: '60px', marginBottom: '20px' }} />
                <p style={{ lineHeight: '1.8', maxWidth: '400px', fontSize: '1.05rem' }}>
                  King International is a professionally managed company serving the textile and knitting industry in India. We supply world-class industrial machinery for high-performance manufacturing.
                </p>
              </div>
              <div className="footer-col">
                <h3>Quick Links</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: '2' }}>
                  <li><Link href="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>Home</Link></li>
                  <li><Link href="/about" style={{ color: '#94a3b8', textDecoration: 'none' }}>About King International</Link></li>
                  <li><Link href="/pod-devices" style={{ color: '#94a3b8', textDecoration: 'none' }}>POD Devices</Link></li>
                  <li><Link href="/padbots" style={{ color: '#94a3b8', textDecoration: 'none' }}>PadBots</Link></li>
                  <li><Link href="/contact" style={{ color: '#94a3b8', textDecoration: 'none' }}>Contact Us</Link></li>
                </ul>
              </div>
              <div className="footer-col">
                <h3 style={{ color: '#fff', marginBottom: '20px', fontSize: '1.2rem' }}>Contact Us</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: '2' }}>
                  <li><strong>Mr. Navi:</strong> <a href="tel:+919803915279" style={{ color: '#cbd5e1', textDecoration: 'none' }}>+91-98039-15279</a></li>
                  <li><strong>Mr. Tony:</strong> <a href="tel:+919781982838" style={{ color: '#cbd5e1', textDecoration: 'none' }}>+91-97819-82838</a></li>
                  <li><strong>Mr. Santosh Bhardwaj:</strong> <a href="tel:+919780672092" style={{ color: '#cbd5e1', textDecoration: 'none' }}>+91-97806-72092</a></li>
                  <li style={{ marginTop: '10px' }}><a href="mailto:tonymaster786@gmail.com" style={{ color: 'var(--accent)', textDecoration: 'none' }}>tonymaster786@gmail.com</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              &copy; {new Date().getFullYear()} King International. All Rights Reserved. Designed with modern web aesthetics.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
