import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: 'var(--primary)', color: '#fff' }}>
      <div className="container grid grid-cols-4 footer-content" style={{ padding: '60px 0' }}>
        <div className="footer-col">
          <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#fff' }}>KING <span style={{ color: 'var(--accent)' }}>INTERNATIONAL</span></h3>
          <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
            "Experience counts everytime" – Since 1986 King International has been involved as a well-known importer, supplier and distributor of circular knitting and flat knitting machines in India.
          </p>
        </div>
        <div className="footer-col">
          <h4 style={{ color: '#fff', marginBottom: '20px' }}>Our Machines</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}><Link href="/shop" style={{ color: '#9ca3af' }}>Used Flat Knitting Machines</Link></li>
            <li style={{ marginBottom: '10px' }}><Link href="/shop" style={{ color: '#9ca3af' }}>Circular Knitting Machines</Link></li>
            <li style={{ marginBottom: '10px' }}><Link href="/shop" style={{ color: '#9ca3af' }}>Socks Knitting Machines</Link></li>
            <li style={{ marginBottom: '10px' }}><Link href="/shop" style={{ color: '#9ca3af' }}>Shoe Upper Machines</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 style={{ color: '#fff', marginBottom: '20px' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}><Link href="/about" style={{ color: '#9ca3af' }}>About the Company</Link></li>
            <li style={{ marginBottom: '10px' }}><Link href="/shop" style={{ color: '#9ca3af' }}>Product Catalog</Link></li>
            <li style={{ marginBottom: '10px' }}><Link href="/contact" style={{ color: '#9ca3af' }}>Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 style={{ color: '#fff', marginBottom: '20px' }}>Contact</h4>
          <p style={{ color: '#9ca3af', marginBottom: '10px' }}>📍 CHINA OFFICE: [Address Details]</p>
          <p style={{ color: '#9ca3af', marginBottom: '10px' }}>📞 Call Us Now</p>
          <p style={{ color: '#9ca3af', marginBottom: '10px' }}>✉️ Drop an email</p>
        </div>
      </div>
      <div className="footer-bottom" style={{ backgroundColor: '#0f172a', padding: '20px 0', textAlign: 'center', color: '#6b7280' }}>
        <p>&copy; {new Date().getFullYear()} King International. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
