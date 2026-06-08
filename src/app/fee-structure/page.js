export default function FeeStructure() {
  return (
    <div className="container section-padding animate-fade-in">
      <div className="section-header">
        <h2>Fee Structure</h2>
        <div className="underline"></div>
      </div>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
          Please find our detailed fee structure below. We believe in transparent pricing to help you plan your educational journey.
        </p>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
              <th style={{ padding: '15px', border: '1px solid var(--border-color)' }}>Course Name</th>
              <th style={{ padding: '15px', border: '1px solid var(--border-color)' }}>Duration</th>
              <th style={{ padding: '15px', border: '1px solid var(--border-color)' }}>Fee (INR)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '15px', border: '1px solid var(--border-color)' }}>Demo Classes</td>
              <td style={{ padding: '15px', border: '1px solid var(--border-color)' }}>1 Week</td>
              <td style={{ padding: '15px', border: '1px solid var(--border-color)', fontWeight: 'bold', color: 'var(--accent)' }}>Free</td>
            </tr>
            <tr>
              <td style={{ padding: '15px', border: '1px solid var(--border-color)' }}>Standard Course Package</td>
              <td style={{ padding: '15px', border: '1px solid var(--border-color)' }}>6 Months</td>
              <td style={{ padding: '15px', border: '1px solid var(--border-color)' }}>₹ 15,000</td>
            </tr>
            <tr>
              <td style={{ padding: '15px', border: '1px solid var(--border-color)' }}>Premium Course Package</td>
              <td style={{ padding: '15px', border: '1px solid var(--border-color)' }}>1 Year</td>
              <td style={{ padding: '15px', border: '1px solid var(--border-color)' }}>₹ 25,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
