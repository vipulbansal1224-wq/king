export default function Cart() {
  return (
    <div className="container section-padding animate-fade-in">
      <div className="section-header">
        <h2>Your Cart</h2>
        <div className="underline"></div>
      </div>
      <div style={{ textAlign: 'center', padding: '50px 0', color: 'var(--text-muted)' }}>
        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🛒</div>
        <h3>Your cart is currently empty.</h3>
        <p style={{ marginTop: '15px', marginBottom: '30px' }}>Browse our shop to find premium products.</p>
        <a href="/shop" className="btn">Continue Shopping</a>
      </div>
    </div>
  );
}
