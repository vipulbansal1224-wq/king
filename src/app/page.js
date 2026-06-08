import Link from 'next/link';

export default function Home() {
  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-badge">Since 1986</div>
          <h1>Premium Industrial <br/><span className="text-accent">Knitting Machinery</span></h1>
          <p>
            King International is a well-known importer, supplier and distributor of circular knitting, flat knitting machines, and textile equipment in India.
          </p>
          <div className="hero-buttons">
            <Link href="/shop" className="btn btn-accent">View Catalog</Link>
            <Link href="/contact" className="btn btn-secondary" style={{ borderColor: '#fff', color: '#fff' }}>Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories container section-padding">
        <div className="section-header">
          <h2>Our Core Machinery</h2>
          <div className="underline"></div>
        </div>
        <div className="grid grid-cols-3">
          <div className="category-card">
            <div className="category-icon">⚙️</div>
            <h3>Flat Knitting Machines</h3>
            <p>High quality computerized flat knitting machines including Shima Seiki and STOLL models.</p>
            <Link href="/shop" className="category-link">Explore &rarr;</Link>
          </div>
          <div className="category-card">
            <div className="category-icon">🏭</div>
            <h3>Circular Knitting Machines</h3>
            <p>Reliable and efficient circular knitting machines for high-volume production.</p>
            <Link href="/shop" className="category-link">Explore &rarr;</Link>
          </div>
          <div className="category-card">
            <div className="category-icon">🧦</div>
            <h3>Socks Knitting Machines</h3>
            <p>Advanced machinery for precision sock and specialized garment manufacturing.</p>
            <Link href="/shop" className="category-link">Explore &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-section">
        <div className="container section-padding grid grid-cols-2" style={{ alignItems: 'center' }}>
          <div className="about-image" style={{ background: 'var(--primary)', height: '400px', borderRadius: 'var(--border-radius)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.5rem', fontWeight: 'bold' }}>
            [ Industrial Machine Image ]
          </div>
          <div className="about-text">
            <h2>Experience counts everytime.</h2>
            <div className="underline" style={{ margin: '15px 0 30px 0' }}></div>
            <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontSize: '1.1rem' }}>
              After more than ten years of market test and development, we have always been adhering to the business tenet of "CUSTOMER FIRST".
            </p>
            <ul className="features-list">
              <li>✔️ Creative product range</li>
              <li>✔️ Commitment to quality</li>
              <li>✔️ Great value price</li>
              <li>✔️ Experienced team of hardworkers</li>
              <li>✔️ Timely deliveries makes us unique</li>
              <li>✔️ Ethical business approach</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}
