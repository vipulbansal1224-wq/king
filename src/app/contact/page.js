import React from 'react';

export const metadata = {
  title: 'Contact Us | King International',
};

export default function ContactPage() {
  return (
    <>
      <section className="section" style={{ backgroundColor: '#0f172a', color: '#fff', paddingTop: '120px', paddingBottom: '60px' }}>
        <div className="container">
          <h1 style={{ color: '#fff', fontSize: '3rem', marginBottom: '16px' }}>Get In Touch</h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.25rem', maxWidth: '600px' }}>
            Have any question? Call us now.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'flex-start' }}>
            <div>
              <h2 style={{ color: 'var(--primary)', marginBottom: '24px' }}>Contact Information</h2>
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--accent)' }}>Phone</h3>
                <p style={{ margin: '4px 0', fontSize: '1.1rem' }}><strong>Mr. Navi:</strong> +91-98039-15279</p>
                <p style={{ margin: '4px 0', fontSize: '1.1rem' }}><strong>Mr. Tony:</strong> +91-97819-82838</p>
                <p style={{ margin: '4px 0', fontSize: '1.1rem' }}><strong>Mr. Santosh Bhardwaj:</strong> +91-97806-72092</p>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--accent)' }}>Email</h3>
                <p style={{ margin: '4px 0', fontSize: '1.1rem' }}>
                  <a href="mailto:tonymaster786@gmail.com" style={{ color: 'var(--primary)', textDecoration: 'none' }}>tonymaster786@gmail.com</a>
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--accent)' }}>Addresses</h3>
                <div style={{ marginBottom: '16px' }}>
                  <strong>B.O (Branch Office):</strong><br />
                  #88A, Industrial Area-A, Ludhiana -141003, (PB) INDIA
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <strong>H.O (Head Office):</strong><br />
                  Flat 9-G, M.I.G Flats, Dasmesh Colony, Gill Chowk , Ludhiana -141003
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <strong>CHINA OFFICE:</strong><br />
                  49 NO., Shui Dun Road, Tudian, Tongxiang City, Zhejiang Province, China
                </div>
              </div>
            </div>

            <div>
              <div style={{ position: 'relative', borderRadius: 'var(--border-radius)', overflow: 'hidden', boxShadow: 'var(--shadow-deep)', padding: '24px', backgroundColor: 'var(--bg-color)', marginBottom: '32px' }}>
                <h3 style={{ marginBottom: '20px' }}>Send an Enquiry</h3>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <input type="text" placeholder="Your Name" style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '4px', width: '100%' }} />
                  <input type="email" placeholder="Your Email" style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '4px', width: '100%' }} />
                  <textarea placeholder="Your Message" rows="5" style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '4px', width: '100%' }}></textarea>
                  <button type="button" className="btn btn-accent" style={{ border: 'none', cursor: 'pointer', padding: '14px' }}>Submit Enquiry</button>
                </form>
              </div>

              <div style={{ position: 'relative', borderRadius: 'var(--border-radius)', overflow: 'hidden', boxShadow: 'var(--shadow-deep)', height: '300px' }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.316772718712!2d75.8643801!3d30.8778009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a82914103a3d5%3A0xc47e33dc1b117961!2sIndustrial%20Area-A%2C%20Ludhiana%2C%20Punjab!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}