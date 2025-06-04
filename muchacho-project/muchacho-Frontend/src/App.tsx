import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import menyImage from './assets/meny.jpg';
import logoImage from './assets/logo2.png';
import tapasImage from './assets/tapas.jpg';
import drinkImage from './assets/drink.jpg';
import brownieImage from './assets/browniee.webp';
import Tapas from './Tapas';
import Varmratter from './Varmratter';
import Desserter from './Desserter';
import BookingForm from './BookingForm';
import Drick from './Drick';
import './tailwind.css';

function HomePage() {
  return (
    <>
      <header className="main-header">
        <div className="sidebar">
          <nav>
            <input type="checkbox" id="toggle-menu" hidden />
            <label htmlFor="toggle-menu" className="hamburger-button">
              <span>Meny</span>
              <img src={menyImage} alt="Meny" />
            </label>
            <ul className="menu-list">
              <li><Link to="/tapas">Tapas</Link></li>
              <li><Link to="/varmratter">Varmrätter</Link></li>
              <li><Link to="/desserter">Desserter</Link></li>
              <li><Link to="/drick">Drycker</Link></li>
            </ul>
          </nav>
        </div>

        <div className="hero-section">
          <img src={logoImage} alt="Muchacho Bar & Grill" className="main-logo" />
        </div>
      </header>

      <section id="gallery" className="section">
        <h2>Galleri</h2>
        <div className="gallery-grid">
          <img src={tapasImage} alt="Tapas" />
          <img src={drinkImage} alt="Drink" />
          <img src={brownieImage} alt="Restaurangen" />
        </div>
      </section>

      <section id="hours" className="section">
        <h2>Öppettider</h2>
        <ul>
          <li>Söndag-Tors: 12:00 - 00:00</li>
          <li>Fre-Lör: 12:00 - 01:30</li>
          <li>Tel: 073-773 53 04</li>
        </ul>
      </section>

      <section id="book" className="section">
        <BookingForm />
      </section>

      <section id="location" className="section">
        <h2>Hitta hit</h2>
        <iframe
          title="Karta till Muchacho Tapas Bar"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2133.511637753519!2d11.960825877104912!3d57.697371973985636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff36c1b84e949%3A0xaca067772a6a65fe!2sMuchacho%20Tapas!5e0!3m2!1ssv!2sse!4v1717346000000"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <footer>
        <p>&copy; @2025 Muchacho | FlowTec | Alla rättigheter reserverade.</p>
      </footer>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tapas" element={<Tapas />} />
      <Route path="/varmratter" element={<Varmratter />} />
      <Route path="/desserter" element={<Desserter />} />
      <Route path="/drick" element={<Drick />} />
    </Routes>
  );
}

export default App;
