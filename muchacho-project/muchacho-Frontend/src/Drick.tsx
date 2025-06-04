import './index.css';

function Drinkmeny() {
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
        <h1>Muchacho - Drinkmeny</h1>
        <h2 style={{ fontStyle: 'italic', fontWeight: 'lighter', fontSize: '20px' }}>
          Cocktails, Viner, Öl & Alkoholfritt
        </h2>
      </header>

      <main style={{
        padding: '30px',
        maxWidth: '800px',
        margin: 'auto',
        color: '#fffdfd',
        textAlign: 'center'
      }}>

        {/* Öl */}
        <h2>Fatöl / Draft</h2>
        <p>
          Åbro – 55:- / 65:-<br />
          Bron ljus lager – 58:- / 69:-<br />
          Småland – 58:- / 69:-<br />
          San Miguel – 58:- / 69:-
        </p>

        <h2>Flasköl / Bottle</h2>
        <p>
          Pils Urquell – 69:-<br />
          Newcastle 33cl – 75:-<br />
          Zlatopramen – 79:-<br />
          IPA Bron Ale – 79:-<br />
          Stella Artois – 69:-<br />
          Peroni 33cl – 69:-<br />
          Punk IPA – 75:-<br />
          Sierra Nevada IPA 35cl – 75:-<br />
          Ginger Joe – 75:-<br />
          Weihenstephaner (weissbier) 50cl – 79:-<br />
          Estrella glutenfri – 79:-<br />
          Bryggmästare Mörköl – 79:-<br />
          Bryggmästare Premium Gold – 79:-<br />
          Eriksberg – 75:-
        </p>

        <hr style={{ margin: '30px 0' }} />

        {/* Vin */}
        <h2>Vin</h2>
        <p>
          Husets vin – Glas 59:- / Flaska 265:-<br />
          Rött / Vitt / Rosé
        </p>
        <h2>Prosecco</h2>
        <p>Abbazia extra dry (Italien) – 75:- / 399:-</p>

        <h2>Cava</h2>
        <p>Jaume Serra (Spanien) – 69:- / 385:-</p>
        <hr style={{ margin: '30px 0' }} />

        {/* Rött vin */}
        <h2>Rött vin / Red Wine</h2>
        <p>
          Montgravet (Frankrike) – 79:- / 319:-<br />
          Cape Town (Sydafrika) – 79:- / 319:-<br />
          Valpolicella Ripasso (Italien) – 85:- / 385:-<br />
         Camden Park (Australien) – 85:- / 385:-<br />
          Campo Viejo Rioja Crianza (Spanien) – 79:- / 339:-
        </p>

        <hr style={{ margin: '30px 0' }} />

        {/* Vitt vin */}
        <h2>Vitt vin / White Wine</h2>
        <p>
          Montgravet (Frankrike) – 79:- / 319:-<br />
          Cape Town (Sydafrika) – 79:- / 319:-<br />
          Riesling Kabinett (Tyskland) – 79:- / 319:-<br />
           Camden Park (Australien) – 79:- / 319:-
        </p>

        <hr style={{ margin: '30px 0' }} />

        {/* Sangria */}
        <h2>Sangria</h2>
        <p>Vitt eller rött – Glas 69:- / Kanna 385:-</p>

        <hr style={{ margin: '35px 0' }} />

        {/* Drinkar */}
        <h2>Drinkar / Cocktails</h2>
        <p>
          Alla drinkar – 135:-<br />
          Raspberry Collins, Whisky Sour, Amsterdam, Gin Fizz,<br />
          Muchacho drinken, Frozen Daiquiri, Piña Colada, Mojito,<br />
          Margarita, Wingman, Aperol Spritz, Chiquita,<br />
          Choco Vanilla, Frozen Vanilla, Piggelin, Amaretto Sour
        </p>

        <hr style={{ margin: '30px 0' }} />

        {/* Cider */}
        <h2>Cider</h2>
        <p>
          Cider Päron (Fat) – 33cl 55:- / 50cl 65:-<br />
          Dry Applecider, Passion Cider, Skogsbär Cider,<br />
          Jordgubbs Cider, Breezer – 33cl 75:-
        </p>

        <hr style={{ margin: '30px 0' }} />

        {/* Kaffedrinkar */}
        <h2>Kaffe Drinkar / Coffee Drinks</h2>
        <p>
          Alla kaffedrinkar – 149:-<br />
          Irish Coffee, Kaffe Karlsson, Kaffe Baileys, French Coffee
        </p>

        <hr style={{ margin: '30px 0' }} />

        {/* Alkoholfritt */}
        <h2>Alkoholfritt / Non-Alcoholic</h2>
        <p>
          Kaffe / Te – 39:-<br />
          Läsk (Pepsi, Pepsi Max, Zingo, 7up) – 39:-<br />
          Juice / Soda – 39:-<br />
          Mineralvatten – 39:-<br />
          Alkoholfri öl/cider 33cl – 49:-<br />
          Alkoholfria drinkar – 79:-
        </p>
      </main>

      <footer style={{ backgroundColor: '#9c2020', textAlign: 'center', padding: '10px', marginTop: '40px' }}>
        <p>&copy; @2025 Muchacho | FlowTec</p>
      </footer>
    </>
  );
}

export default Drinkmeny;
