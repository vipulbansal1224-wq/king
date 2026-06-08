export default function Contact() {
  return (
    <div className="container section-padding animate-fade-in">
      <div className="section-header">
        <h2>Contact Us</h2>
        <div className="underline"></div>
      </div>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px' }}>Name</label>
            <input type="text" style={{ width: '100%', padding: '12px', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius)' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px' }}>Email</label>
            <input type="email" style={{ width: '100%', padding: '12px', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius)' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px' }}>Message</label>
            <textarea rows="5" style={{ width: '100%', padding: '12px', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius)' }}></textarea>
          </div>
          <button type="button" className="btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}
