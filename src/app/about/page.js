import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | King International',
};

export default function AboutPage() {
  return (
    <>
      <section className="section" style={{ backgroundColor: '#0f172a', color: '#fff', paddingTop: '120px', paddingBottom: '60px' }}>
        <div className="container">
          <h1 style={{ color: '#fff', fontSize: '3rem', marginBottom: '16px' }}>About King International</h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.25rem', maxWidth: '600px' }}>
            VARIETY OF DESIGNS
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'flex-start' }}>
            <div>
              <h2 style={{ color: 'var(--primary)', marginBottom: '24px' }}>Legacy of Quality & Innovation</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '24px', lineHeight: '1.8', textAlign: 'justify' }}>
                <strong>King International</strong> is a professionally managed company serving the textile and knitting industry in India. 
                In a very short span of Time Company Has Built Its Reputation due to its Quality products and unmatched after sales Services.
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '24px', lineHeight: '1.8', textAlign: 'justify' }}>
                The company is having positive attitude in all fields to establish professional and efficient working system there by contributing to flawless result and efficiency. 
                KING INTERNATIONAL has further set its targets to achieve hundred percent efficiency in all its ventures. The company believes in quality, economy, reliability and efficiency.
              </p>
            </div>
            <div style={{ position: 'relative', borderRadius: 'var(--border-radius)', overflow: 'hidden', boxShadow: 'var(--shadow-deep)' }}>
              <img src="/wp-content/uploads/2022/07/Banner02.jpg" alt="About King International" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '40px' }}>Shoes Upper Machine Gallery</h2>
          <div className="grid grid-cols-3" style={{ gap: '30px' }}>
            <div style={{ textAlign: 'center' }}>
              <img src="/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-05-at-12.11.23-PM.jpeg" alt="Machine Gallery" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px' }} />
              <Link href="/contact" className="btn btn-accent" style={{ display: 'inline-block', padding: '10px 24px' }}>Enquire Now</Link>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img src="/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-05-at-12.11.24-PM.jpeg" alt="Machine Gallery" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px' }} />
              <Link href="/contact" className="btn btn-accent" style={{ display: 'inline-block', padding: '10px 24px' }}>Enquire Now</Link>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img src="/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-05-at-12.11.25-PM.jpeg" alt="Machine Gallery" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px' }} />
              <Link href="/contact" className="btn btn-accent" style={{ display: 'inline-block', padding: '10px 24px' }}>Enquire Now</Link>
            </div>
          </div>
          
          <div style={{ marginTop: '60px' }}>
            <h3 style={{ marginBottom: '20px' }}>See Our Machines in Action</h3>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://youtu.be/xqJHMfzVGYU" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Watch Video 1</a>
              <a href="https://youtu.be/HkerJ6OXZDk" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Watch Video 2</a>
              <a href="https://youtu.be/wDUc88MgN7o" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Watch Video 3</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}