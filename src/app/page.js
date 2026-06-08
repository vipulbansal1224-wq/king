import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const featuredProducts = [
    { id: 1, name: 'Premium Gold Watch', price: '$299.00', image: 'https://placehold.co/400x400/111111/d4af37?text=Watch' },
    { id: 2, name: 'Luxury Leather Bag', price: '$189.00', image: 'https://placehold.co/400x400/111111/d4af37?text=Bag' },
    { id: 3, name: 'Diamond Necklace', price: '$899.00', image: 'https://placehold.co/400x400/111111/d4af37?text=Necklace' },
    { id: 4, name: 'Classic Sunglasses', price: '$129.00', image: 'https://placehold.co/400x400/111111/d4af37?text=Sunglasses' },
  ];

  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <h1>Experience True <span className="text-primary">Luxury</span></h1>
          <p>Discover our exclusive collection of premium products designed for kings.</p>
          <div className="hero-buttons">
            <Link href="/shop" className="btn">Shop Now</Link>
            <Link href="/about" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="categories container section-padding">
        <div className="section-header">
          <h2>Shop by Category</h2>
          <div className="underline"></div>
        </div>
        <div className="grid grid-cols-3">
          {['Accessories', 'Jewelry', 'Apparel'].map((category) => (
            <div key={category} className="category-card">
              <div className="category-image">
                {/* Using a placeholder for categories */}
                <div style={{ width: '100%', height: '300px', backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: '#888' }}>
                  {category} Image
                </div>
              </div>
              <div className="category-info">
                <h3>{category}</h3>
                <Link href={`/category/${category.toLowerCase()}`} className="category-link">View Collection &rarr;</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="products container section-padding">
        <div className="section-header">
          <h2>Featured Products</h2>
          <div className="underline"></div>
        </div>
        <div className="grid grid-cols-4">
          {featuredProducts.map((product) => (
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
        <div className="view-all-container">
          <Link href="/shop" className="btn btn-secondary">View All Products</Link>
        </div>
      </section>
    </div>
  );
}
