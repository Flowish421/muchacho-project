import './index.css';

function Tapas() {
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
          🏠 Hem
        </a>
      </nav>

      <header style={{ backgroundColor: '#a31f1f', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1>Muchacho - Tapas</h1>
        <h2 style={{ fontStyle: 'italic', fontWeight: 'lighter', fontSize: '20px' }}>Spanska tapas med en twist från det orientaliska köket</h2>
        <h2 style={{ fontStyle: 'italic', fontWeight: 'lighter', fontSize: '20px' }}>Spanish tapas with a twist from oriental cuisine</h2>
      </header>

      <main style={{ padding: '30px', maxWidth: '800px', margin: 'auto', textAlign: 'center' }}>
        <h2 style={{ color: '#ffffff' }}>Tapasmeny</h2>
        <ul style={{ listStyleType: 'none', padding: 0, color: '#fffdfd' }}>
          {[
            ['Calamares a la romana', 'Fired Calamares with Aioli – 79 kr'], //1
            ['Gambas al ajillo', 'Garlic Tiger Prawns – 99 kr'], //2
            ['Queso feta Batido con ricotta', 'Whipped feta with recotta with fired bread – 89 kr'],//3
            ['Alitas de pollo', 'Chicken wings with salsa sauce – 75 kr'], //4
            ['Enchilada de pollo', 'Tortilla With Chicken, Guacamole, Aioli, Salsa, Cheese, Garlic, Rice – 89 kr'], //5
            ['Trozos de cordero', 'Fried lamb chunks With Tzatziki– 89 kr'], //6
            ['Chorizo con Vino Tinto', 'Chorizo Boiled in Red Wine and Honey– 85 kr'], //7
            ['Dátiles envueltos en bacon', 'Dates wrapped in bacon, With Honey And Marmalde – 75 kr'], //8
            ['Enchilada de carne', 'Tortilla With Rice, Mainced Meat, Guacamole, Salsa, Chipotle, Cheese, Garlic, Rice – 89 kr'], //9
            ['Patatas bravas', 'Homemade Fried, Patato Wedges With Aioli and Chipotle – 69 kr'], //10
            ['Patatas dulces', 'Fried Sweet Potato With Aioli – 75 kr'], //11
            ['Pan con ajo', 'Garlic bread With Tzatziki – 65 kr'], //12
            ['Champiñones al ajillo', 'Garlic-fried mushrooms – 75 kr'], //13
            ['Hummus y Aguacate', 'Hummus and Avocado Salad With Fired Bread – 85 kr'], //14
            ['Halloumi queso a la Parilla con Mermelada', 'Grilled Halloumi  Cheese With Marmalde N Honey – 75 kr'], // 15
            ['Manchego frito', 'Fried manchego with Honey and Marmalde – 85 kr'], //16
            ['Queso a la parrilla con miel', 'Grilled chevre with Honey Marmalde – 85 kr'],  //17
            ['Nachos con queso y Guacamole', 'Nachos with cheese and Guacamole & salsa – 79 kr'], //18
            ['Nachos con Carne Y Guacamole, Salsa & Jalapenos', 'Nachos With Cheese And Meat, Guacamole, Salsa and Jalapenos  – 99 kr'], //19
            ['Pimientos De Padron', 'Fired peppers in olive oil With Flake Salt – 85 kr'] //20
          ].map(([title, desc], i) => (
            <li key={i} style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid #ffffff' }}>
              <strong style={{ display: 'block', fontSize: '18px' }}>{title}</strong>
              {desc}
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

export default Tapas;
