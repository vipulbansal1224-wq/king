"use client";
import React, { useState, useEffect } from 'react';
import { siteData } from './data';

export default function HomePage() {
  const { products, menus } = siteData;
  
  // Clean products (filter out empty ones and clean HTML tags from content)
  const cleanProducts = products.filter(p => p.title && p.image).map(p => ({
    ...p,
    content: p.content.replace(/<[^>]+>/g, '').trim() || 'High performance industrial machinery designed for efficiency and durability.'
  }));

  // Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideImages = cleanProducts.slice(0, 4); // Use first 4 products for slider

  useEffect(() => {
    if (slideImages.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slideImages.length]);

  // Extract PDF Downloads
  const downloads = menus.filter(m => m.url && m.url.endsWith('.pdf'));

  return (
    <>
      {/* Hero Slider Section */}
      <section id="home" style={{ 
        position: 'relative', 
        height: '85vh', 
        overflow: 'hidden',
        backgroundColor: '#0f172a'
      }}>
        {slideImages.map((slide, index) => (
          <div 
            key={slide.id}
            style={{
              position: 'absolute',
              top: 0, left: 0, width: '100%', height: '100%',
              opacity: currentSlide === index ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              background: `linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.8)), url("/wp-content/uploads/${slide.image}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <div style={{ maxWidth: '800px', color: '#fff' }} className={currentSlide === index ? 'animate-fade-in-up' : ''}>
                <span style={{ 
                  display: 'inline-block', 
                  padding: '6px 16px', 
                  backgroundColor: 'var(--accent)', 
                  borderRadius: '20px',
                  fontSize: '0.875rem',
                  fontWeight: '700',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  marginBottom: '24px'
                }}>Featured Machine</span>
                <h1 style={{ color: '#fff', fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '20px' }}>{slide.title}</h1>
                <p style={{ color: '#cbd5e1', fontSize: '1.25rem', marginBottom: '40px', maxWidth: '600px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {slide.content}
                </p>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                  <a href="#products" className="btn btn-accent">View All Machinery</a>
                  <a href="#contact" className="btn" style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider Controls */}
        <div style={{ position: 'absolute', bottom: '30px', width: '100%', display: 'flex', justifyContent: 'center', gap: '10px' }}>
          {slideImages.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: '12px', height: '12px', borderRadius: '50%', border: 'none', cursor: 'pointer',
                backgroundColor: currentSlide === index ? 'var(--accent)' : 'rgba(255,255,255,0.5)',
                transition: 'background-color 0.3s'
              }}
            />
          ))}
        </div>
      </section>

      {/* What We Do Here Section */}
      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'center' }}>
            <div className="animate-fade-in-up">
              <h4 style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '1rem', marginBottom: '8px' }}>Our Values</h4>
              <h2>What we do here</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '24px' }}>
                Some of the causes that deliver apart from others are mentioned below:
              </p>
              <ul style={{ fontSize: '1.1rem', lineHeight: '2', listStyleType: 'none', padding: 0 }}>
                <li><strong style={{ color: 'var(--accent)' }}>»</strong> Creative product range</li>
                <li><strong style={{ color: 'var(--accent)' }}>»</strong> Commitment for quality</li>
                <li><strong style={{ color: 'var(--accent)' }}>»</strong> Great value price</li>
                <li><strong style={{ color: 'var(--accent)' }}>»</strong> Experienced team of hardworkers</li>
                <li><strong style={{ color: 'var(--accent)' }}>»</strong> Timely deliveries makes us unique</li>
                <li><strong style={{ color: 'var(--accent)' }}>»</strong> Ethical business approach</li>
              </ul>
            </div>
            <div style={{ position: 'relative', borderRadius: 'var(--border-radius)', overflow: 'hidden', boxShadow: 'var(--shadow-deep)' }} className="animate-fade-in-up delay-1">
              <img src="/wp-content/uploads/2022/07/Machine-720x325-v2.jpg" alt="Industrial Manufacturing" style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '300px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Deals In Section */}
      <section className="section" style={{ backgroundColor: '#fff', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: '40px' }}>Deals In</h2>
          <div className="grid grid-cols-2" style={{ gap: '40px' }}>
            <div style={{ padding: '40px', backgroundColor: 'var(--bg-color)', borderRadius: '12px', boxShadow: 'var(--shadow)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '16px' }}>Textile Machinery</h3>
              <p style={{ fontSize: '1.1rem' }}>Used Computerized Flat Knitting Machines, Circular Knitting Machine</p>
            </div>
            <div style={{ padding: '40px', backgroundColor: 'var(--bg-color)', borderRadius: '12px', boxShadow: 'var(--shadow)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '16px' }}>Disposable Products</h3>
              <p style={{ fontSize: '1.1rem' }}>Disposable POD Devices & Barret Caps</p>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      {downloads.length > 0 && (
        <section id="downloads" className="section" style={{ backgroundColor: 'var(--primary)', color: '#fff' }}>
          <div className="container animate-fade-in-up">
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h4 style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '1rem', marginBottom: '8px' }}>Resources</h4>
              <h2 style={{ color: '#fff' }}>Official Catalogues & Downloads</h2>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
              {downloads.map((dl, i) => (
                <a key={i} href={dl.url} target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  📄 {dl.title || 'Download PDF'}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section id="products" className="section" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px', maxWidth: '700px', margin: '0 auto 60px' }} className="animate-fade-in-up">
            <h4 style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '1rem', marginBottom: '8px' }}>Our Machinery</h4>
            <h2>Engineered for High Performance</h2>
            <p>Explore our wide range of automatic and semi-automatic industrial machines designed for maximum efficiency and unparalleled durability.</p>
          </div>

          <div className="grid grid-cols-4 animate-fade-in-up delay-2">
            {cleanProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-img-wrapper">
                  <img src={`/wp-content/uploads/${product.image}`} alt={product.title} onError={(e)=>{e.target.src="/wp-content/uploads/woocommerce-placeholder.png"}} />
                </div>
                <div className="product-content">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-desc" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {product.content}
                  </p>
                  <a href={`/product/${product.id}`} style={{ color: 'var(--accent)', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    Inquire Now <span style={{ fontSize: '1.2rem' }}>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ backgroundColor: '#fff', textAlign: 'center' }}>
        <div className="container animate-fade-in-up">
          <h2 style={{ color: 'var(--primary)', marginBottom: '24px' }}>Ready to Upgrade Your Production?</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 40px' }}>
            Contact our engineering team today for custom machinery solutions tailored to your specific manufacturing needs.
          </p>
          <a href="#contact" className="btn btn-accent" style={{ padding: '16px 40px', fontSize: '1.25rem' }}>Request a Consultation</a>
        </div>
      </section>
    </>
  );
}