export default function Apply() {
  return (
    <div className="container section-padding animate-fade-in">
      <div className="section-header">
        <h2>Apply Now</h2>
        <div className="underline"></div>
      </div>
      <div style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '40px', borderRadius: 'var(--border-radius)', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Full Name</label>
            <input type="text" style={{ width: '100%', padding: '12px', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius)' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Email Address</label>
            <input type="email" style={{ width: '100%', padding: '12px', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius)' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Phone Number</label>
            <input type="tel" style={{ width: '100%', padding: '12px', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius)' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Course of Interest</label>
            <select style={{ width: '100%', padding: '12px', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius)', background: 'white' }}>
              <option>Demo Exams</option>
              <option>Study Materials</option>
              <option>Demo Classes</option>
              <option>Full Course Enrollment</option>
            </select>
          </div>
          <button type="button" className="btn btn-accent" style={{ width: '100%', marginTop: '10px' }}>Submit Application</button>
        </form>
      </div>
    </div>
  );
}
