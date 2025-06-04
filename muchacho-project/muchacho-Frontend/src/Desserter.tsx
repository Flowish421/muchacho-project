import { Link } from 'react-router-dom';
import './index.css';

function Desserter() {
  return (
    <>
      <nav style={{ textAlign: 'center', marginTop: '10px' }}>
        <Link to="/" style={{
          display: 'inline-block',
          backgroundColor: '#a31f1f',
          color: 'white',
          padding: '10px 20px',
          textDecoration: 'none',
          borderRadius: '5px',
          fontWeight: 'bold'
        }}>
          🏠 Hem
        </Link>
      </nav>

      <header style={{ backgroundColor: '#a31f1f', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1>Muchacho - Desserter</h1>
        <h2 style={{ fontStyle: 'italic', fontWeight: 'lighter', fontSize: '20px' }}>Söta avslut på en fantastisk midda</h2>
      </header>

      <main style={{ padding: '30px', maxWidth: '800px', margin: 'auto', textAlign: 'center' }}>
        <h2 style={{ color: '#ffffff' }}>Dessertmeny</h2>
        <ul style={{ listStyleType: 'none', padding: 0, color: '#fffdfd' }}>
          {[
            ['Churros med vaniljglass & chokladsås', 'Churros with vanilla ice cream and chocolate sauce – 99 kr'],
            ['Crèma catalana ', 'Crema catalana with orange & Cinnamon  – 99 kr'],
            ['Enchilada de Marabou', ' Enchilada with Marabou chocolate – 99 kr']
          ].map(([title, desc], i) => (
            <li key={i} style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid #ffffff' }}>
              <strong style={{ display: 'block', fontSize: '18px' }}>{title}</strong>
              {desc}
            </li>
          ))}
        </ul>
      </main>

      <footer style={{ backgroundColor: '#9c2020', textAlign: 'center', padding: '10px', marginTop: '40px' }}>
        <p>&copy; 2025 Muchacho | FlowTec</p>
      </footer>
    </>
  );
}

export default Desserter;
