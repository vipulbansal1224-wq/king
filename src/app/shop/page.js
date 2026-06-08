import Link from 'next/link';

export default function Shop() {
  const products = [
    { id: 1, name: 'Used Flat Knitting Machines', category: 'Flat Knitting' },
    { id: 2, name: 'Shima Seiki', category: 'Flat Knitting' },
    { id: 3, name: 'CMS 530 K STOLL', category: 'Flat Knitting' },
    { id: 4, name: 'All Type Used Circular Knitting Machines', category: 'Circular Knitting' },
    { id: 5, name: 'Shoe Upper Machine', category: 'Specialty Machines' },
    { id: 6, name: 'Beret cap knitting machine', category: 'Specialty Machines' },
    { id: 7, name: 'Itema R9500', category: 'Weaving' },
    { id: 8, name: 'Socks Knitting Machine', category: 'Sock Knitting' }
  ];

  return (
    <div className="container section-padding animate-fade-in">
      <div className="section-header">
        <h2>Industrial Machinery Catalog</h2>
        <div className="underline"></div>
      </div>
      
      <div className="grid grid-cols-4">
        {products.map(product => (
          <div key={product.id} style={{
            background: 'white',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--border-radius)',
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
          }}>
            <div style={{
              height: '200px',
              backgroundColor: '#e5e7eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-muted)'
            }}>
              [ Machine Image ]
            </div>
            <div style={{ padding: '20px' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 'bold', textTransform: 'uppercase' }}>{product.category}</span>
              <h3 style={{ fontSize: '1.1rem', margin: '10px 0', color: 'var(--primary)' }}>{product.name}</h3>
              <button className="btn btn-primary" style={{ width: '100%', padding: '10px', marginTop: '10px' }}>Inquire Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
