import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container grid grid-cols-4 footer-content">
        <div className="footer-col">
          <h3>KING <span className="logo-accent">INTERNATIONAL</span></h3>
          <p>Where knowledge meets innovation. We are dedicated to providing a transformative learning experience.</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/fee-structure">Fee Structure</Link></li>
            <li><Link href="/apply">Apply Now</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><Link href="/terms">Terms & Conditions</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/cancellation">Cancellation Policy</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact Details</h4>
          <p>📞 +91-7306846860</p>
          <p>📞 +91-8848170248</p>
          <p>✉️ mail@domain.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} King International Academy. All Rights Reserved. Designed by AiMSoft Solutions.</p>
      </div>
    </footer>
  );
}
