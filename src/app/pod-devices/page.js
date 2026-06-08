import React from 'react';

export const metadata = {
  title: 'POD Devices | King International',
};

export default function PodDevicesPage() {
  const images = [
    "/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-08-at-11.04.04.jpeg",
    "/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-08-at-11.04.14.jpeg",
    "/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-08-at-11.04.24.jpeg",
    "/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-08-at-11.04.35.jpeg",
    "/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-08-at-11.04.52.jpeg",
    "/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-08-at-11.05.00.jpeg",
    "/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-08-at-11.03.56.jpeg",
    "/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-08-at-11.03.48.jpeg",
    "/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-08-at-11.03.35.jpeg",
    "/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-08-at-11.03.29.jpeg",
    "/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-08-at-11.03.19.jpeg",
    "/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-08-at-11.03.11.jpeg",
    "/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-08-at-11.02.55.jpeg",
    "/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-08-at-11.02.44.jpeg",
    "/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-08-at-11.02.39.jpeg"
  ];

  return (
    <>
      <section className="section" style={{ backgroundColor: '#0f172a', color: '#fff', paddingTop: '120px', paddingBottom: '60px' }}>
        <div className="container">
          <h1 style={{ color: '#fff', fontSize: '3rem', marginBottom: '16px' }}>POD Devices</h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.25rem', maxWidth: '600px' }}>
            High-quality Disposable POD Devices & Barret Caps.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="container">
          <div className="grid grid-cols-4" style={{ gap: '20px' }}>
            {images.map((src, i) => (
              <div key={i} style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                <img src={src} alt="POD Device" style={{ width: '100%', display: 'block' }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
