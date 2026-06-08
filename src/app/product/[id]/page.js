import React from 'react';
import { siteData } from '../../data';
import Link from 'next/link';

const cleanProducts = siteData.products.filter(p => p.title && p.image).map(p => ({
  ...p,
  content: p.content.replace(/<[^>]+>/g, '').replace(/<!--[\s\S]*?-->/g, '').replace(/\[.*?\]/g, '').trim()
}));

export function generateMetadata({ params }) {
  const product = cleanProducts.find(p => p.id === params.id);
  if (!product) return { title: 'Product Not Found' };
  return { title: `${product.title} | King International` };
}

export default function ProductPage({ params }) {
  const product = cleanProducts.find(p => p.id === params.id);

  if (!product) {
    return (
      <section className="section" style={{ paddingTop: '160px', textAlign: 'center', minHeight: '60vh' }}>
        <h2>Product Not Found</h2>
        <Link href="/" className="btn btn-primary" style={{ marginTop: '20px' }}>Return Home</Link>
      </section>
    );
  }

  return (
    <>
      <section className="section" style={{ backgroundColor: '#0f172a', color: '#fff', paddingTop: '120px', paddingBottom: '60px' }}>
        <div className="container">
          <Link href="/#products" style={{ color: 'var(--accent)', textDecoration: 'none', marginBottom: '16px', display: 'inline-block' }}>
            &larr; Back to Products
          </Link>
          <h1 style={{ color: '#fff', fontSize: '3rem', marginBottom: '16px' }}>{product.title}</h1>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '60px', alignItems: 'flex-start' }}>
            
            {/* Product Details */}
            <div>
              <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-deep)', marginBottom: '30px' }}>
                <img 
                  src={`/wp-content/uploads/${product.image}`} 
                  alt={product.title} 
                  style={{ width: '100%', display: 'block' }} 
                />
              </div>
              <h2 style={{ marginBottom: '20px', color: 'var(--primary)' }}>Description</h2>
              <div style={{ fontSize: '1.1rem', lineHeight: '1.8', whiteSpace: 'pre-wrap', color: '#334155' }}>
                {product.content || "Experience high-performance industrial machinery designed for efficiency and durability."}
              </div>
            </div>

            {/* Enquiry Form */}
            <div style={{ position: 'sticky', top: '100px', backgroundColor: 'var(--bg-color)', padding: '32px', borderRadius: '12px', boxShadow: 'var(--shadow)' }}>
              <h3 style={{ marginBottom: '24px', fontSize: '1.5rem', color: 'var(--primary)' }}>Enquire About This Product</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Your Name</label>
                  <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '6px' }} required />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Your Email</label>
                  <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '6px' }} required />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Phone Number</label>
                  <input type="tel" placeholder="+1 234 567 890" style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '6px' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Message</label>
                  <textarea rows="5" defaultValue={`I am interested in ${product.title}. Please provide more information.`} style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '6px' }} required></textarea>
                </div>
                <button type="button" className="btn btn-accent" style={{ border: 'none', padding: '16px', fontSize: '1.1rem', cursor: 'pointer', borderRadius: '6px' }}>
                  Submit Enquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
