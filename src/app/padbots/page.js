"use client";
import React from 'react';

export default function PadbotsPage() {
  const presentationImages = [
    "/wp-content/uploads/2025/03/PadBot-Robots-202412_pages-to-jpg-0001.jpg",
    "/wp-content/uploads/2025/03/PadBot-Robots-202412_pages-to-jpg-0002-1024x645.jpg",
    "/wp-content/uploads/2025/03/PadBot-Robots-202412_pages-to-jpg-0003-1024x645.jpg",
    "/wp-content/uploads/2025/03/PadBot-Robots-202412_pages-to-jpg-0004-1024x645.jpg",
    "/wp-content/uploads/2025/03/PadBot-Robots-202412_pages-to-jpg-0005.jpg",
    "/wp-content/uploads/2025/03/PadBot-Robots-202412_pages-to-jpg-0006-1-1024x645.jpg",
    "/wp-content/uploads/2025/03/PadBot-Robots-202412_pages-to-jpg-0007-1024x645.jpg",
    "/wp-content/uploads/2025/03/PadBot-Robots-202412_pages-to-jpg-0008-1024x645.jpg",
    "/wp-content/uploads/2025/03/PadBot-Robots-202412_pages-to-jpg-0009.jpg",
    "/wp-content/uploads/2025/03/PadBot-Robots-202412_pages-to-jpg-0010-1024x645.jpg",
    "/wp-content/uploads/2025/03/PadBot-Robots-202412_pages-to-jpg-0011-1024x645.jpg",
    "/wp-content/uploads/2025/03/PadBot-Robots-202412_pages-to-jpg-0012-1024x645.jpg",
    "/wp-content/uploads/2025/03/PadBot-Robots-202412_pages-to-jpg-0013.jpg",
    "/wp-content/uploads/2025/03/PadBot-Robots-202412_pages-to-jpg-0014-1024x645.jpg",
    "/wp-content/uploads/2025/03/PadBot-Robots-202412_pages-to-jpg-0015-1024x645.jpg",
    "/wp-content/uploads/2025/03/PadBot-Robots-202412_pages-to-jpg-0016-1024x645.jpg",
    "/wp-content/uploads/2025/03/PadBot-Robots-202412_pages-to-jpg-0017.jpg",
    "/wp-content/uploads/2025/03/PadBot-Robots-202412_pages-to-jpg-0018-1024x645.jpg",
    "/wp-content/uploads/2025/03/PadBot-Robots-202412_pages-to-jpg-0019-1024x645.jpg",
    "/wp-content/uploads/2025/03/PadBot-Robots-202412_pages-to-jpg-0020-1-1024x645.jpg"
  ];

  return (
    <>
      <section className="section" style={{ backgroundColor: '#0f172a', color: '#fff', paddingTop: '120px', paddingBottom: '60px' }}>
        <div className="container">
          <h1 style={{ color: '#fff', fontSize: '3rem', marginBottom: '16px' }}>PadBots Series</h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.25rem', maxWidth: '600px' }}>
            Explore our advanced telepresence and commercial service robots. P3, X3, W2, W3, and C3.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#e2e8f0', padding: '40px 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', backgroundColor: '#fff', padding: '24px', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
            {presentationImages.map((src, i) => (
              <img 
                key={i}
                src={src} 
                alt={`PadBot Presentation Slide ${i + 1}`} 
                style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #e2e8f0' }} 
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
