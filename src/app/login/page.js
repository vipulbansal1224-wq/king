export default function Login() {
  return (
    <div className="container section-padding animate-fade-in">
      <div className="section-header">
        <h2>Student Login</h2>
        <div className="underline"></div>
      </div>
      <div style={{ maxWidth: '400px', margin: '0 auto', background: 'white', padding: '40px', borderRadius: 'var(--border-radius)', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Username / Email</label>
            <input type="text" style={{ width: '100%', padding: '12px', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius)' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Password</label>
            <input type="password" style={{ width: '100%', padding: '12px', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius)' }} />
          </div>
          <button type="button" className="btn btn-accent" style={{ width: '100%', marginTop: '10px' }}>Login</button>
        </form>
      </div>
    </div>
  );
}
