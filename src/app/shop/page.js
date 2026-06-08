import Link from 'next/link';

export default function Shop() {
  // Mock data for shop
  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Premium Product ${i + 1}`,
    price: `$${(Math.random() * 500 + 50).toFixed(2)}`,
    image: `https://placehold.co/400x400/111111/d4af37?text=Product+${i + 1}`
  }));

  return (
    <div className="container section-padding animate-fade-in">
      <div className="section-header">
        <h2>All Products</h2>
        <div className="underline"></div>
        <p style={{ marginTop: '15px', color: 'var(--text-muted)' }}>Browse our exclusive collection of luxury items.</p>
      </div>

      <div className="grid grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-overlay">
                <button className="btn">Add to Cart</button>
              </div>
            </div>
            <div className="product-details">
              <h3 className="product-title">{product.name}</h3>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
