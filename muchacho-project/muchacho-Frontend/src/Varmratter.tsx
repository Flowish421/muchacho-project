import './index.css';

function Varmratter() {
  return (
    <>
      <nav style={{ textAlign: 'center', marginTop: '10px' }}>
        <a href="/" style={{
          display: 'inline-block',
          backgroundColor: '#a31f1f',
          color: 'white',
          padding: '10px 20px',
          textDecoration: 'none',
          borderRadius: '5px',
          fontWeight: 'bold'
        }}>
          🏠 Home
        </a>
      </nav>

      <header style={{ backgroundColor: '#a31f1f', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1>Muchacho - Comidas Calientes</h1>
        <h2 style={{ fontStyle: 'italic', fontWeight: 'lighter', fontSize: '20px' }}>
          A mix of Spanish and Oriental Kitchen
        </h2>
      </header>

      <main style={{
        padding: '30px',
        maxWidth: '800px',
        margin: 'auto',
        color: '#fffdfd',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#ffffff' }}>Comidas calientes / Hot Dishes</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {[
            {
              num: 21,
              title: 'Salmón al horno',
              price: '279:-',
              descEn: 'Oven-baked salmon fillet with potato Wedges and homemade sauce, salad'
            },
            {
              num: 22,
              title: 'Pollo al ajillo con arroz',
              price: '245:-',
              descEn: 'Chicken stew with rice and tzatziki'
            },
            {
              num: 23,
              title: 'Hamburguesa de la casa 180g',
              price: '189:-',
              descEn: 'The house’s own burger. Served with lettuce, tomato, onion, cheese, homemade dressing and french fries'
            },
            {
              num: 24,
              title: 'Paella con gambas y pollo',
              price: '279:-',
              descEn: 'Paella with tiger prawns and chicken'
            },
            {
              num: 25,
              title: 'Entrecôte',
              price: '289:-',
              descEn: 'Entrecôte with potatoes, salad, grated manchego cheese and mushroom sauce'
            },
            {
              num: 26,
              title: 'Plato de parrillada mixta',
              price: '289:-',
              descEn: 'Grill mix (Chicken, Lamb bits and Ox fillet) with pepper sauce and potato wedges'
            },
            {
              num: 27,
              title: 'Pinch de cordero (Kobide)',
              price: '279:-',
              descEn: 'Lamb skewers grilled on lava grill with Persian rice, Red Cabbage, salad Served with tzatziki'
            }
          ].map((item, i) => (
            <li key={i} style={{
              marginBottom: '25px',
              paddingBottom: '15px',
              borderBottom: '1px solid #ffffff'
            }}>
              <strong style={{ fontSize: '18px' }}>({item.num}). {item.title}</strong><br />
              <strong>{item.price}</strong><br />
              <div style={{ fontStyle: 'italic' }}>{item.descEn}</div>
            </li>
          ))}

          <h3 style={{ color: '#ffffff', marginTop: '40px', textAlign: 'center' }}>Vegetariano / Vegetarian</h3>

          {[
            {
              num: 28,
              title: 'Estofado vegetariano',
              price: '189:-',
              descEn: 'Vegetarian stew with rice and tzatziki'
            },
            {
              num: 29,
              title: 'Hamburguesa de halloumi',
              price: '199:-',
              descEn: 'Served with lettuce, tomato, fried onion, cheese, chipotle dressing and french fries'
            }
          ].map((item, i) => (
            <li key={`veg-${i}`} style={{
              marginBottom: '25px',
              paddingBottom: '15px',
              borderBottom: '1px solid #ffffff'
            }}>
              <strong style={{ fontSize: '18px' }}>({item.num}). {item.title}</strong><br />
              <strong>{item.price}</strong><br />
              <div style={{ fontStyle: 'italic' }}>{item.descEn}</div>
            </li>
          ))}
        </ul>
      </main>

      <footer style={{ backgroundColor: '#9c2020', textAlign: 'center', padding: '10px', marginTop: '40px' }}>
        <p>&copy; @2025 Muchacho | FlowTec</p>
      </footer>
    </>
  );
}

export default Varmratter;
