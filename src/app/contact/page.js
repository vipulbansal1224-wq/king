export default function Contact() {
  return (
    <div className="container section-padding animate-fade-in">
      <div className="section-header">
        <h2>Contact Us</h2>
        <div className="underline"></div>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--primary)' }}>Get In Touch</h3>
          <p style={{ marginBottom: '20px', color: 'var(--text-muted)' }}>Have any question about our machinery? Call us now or drop an email.</p>
          <div style={{ marginBottom: '15px' }}><strong>📞 Phone:</strong> +91 [Insert Phone]</div>
          <div style={{ marginBottom: '15px' }}><strong>✉️ Email:</strong> [Insert Email]</div>
          <div style={{ marginBottom: '15px' }}><strong>📍 China Office:</strong> [Insert Address]</div>
          <div style={{ marginBottom: '15px' }}><strong>📍 India Office:</strong> [Insert Address]</div>
        </div>
        <div>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px', background: 'white', padding: '30px', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Name</label>
              <input type="text" style={{ width: '100%', padding: '12px', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius)' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Email / Phone</label>
              <input type="text" style={{ width: '100%', padding: '12px', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius)' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Machine Inquiry</label>
              <textarea rows="4" style={{ width: '100%', padding: '12px', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius)' }} placeholder="E.g., Shima Seiki or Stoll machine availability..."></textarea>
            </div>
            <button type="button" className="btn btn-accent">Send Inquiry</button>
          </form>
        </div>
      </div>
    </div>
  );
}
