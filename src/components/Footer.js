import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container grid grid-cols-4 footer-content">
        <div className="footer-col">
          <h3>KING <span className="logo-accent">INTERNATIONAL</span></h3>
          <p>Premium quality products for a global audience. Setting the gold standard in e-commerce.</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Customer Service</h4>
          <ul>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/returns">Returns</Link></li>
            <li><Link href="/shipping">Shipping Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Newsletter</h4>
          <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email address" />
            <button type="button" className="btn">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} King International. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
