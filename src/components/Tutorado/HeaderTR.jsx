import { useState, useEffect } from 'react';
import './HeaderTR.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
  
    useEffect(() => {
      const handleEscape = (e) => {
        if (e.key === 'Escape') setMenuOpen(false);
      };
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, []);
  
    return (
      <>
        <header className="header">
          <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Abrir menú">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="page-name">Panel de Control</div>
        </header>
  
        {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
  
        <aside className={`sidebar left ${menuOpen ? 'open' : ''}`}>
          <nav>
            <button onClick={() => setMenuOpen(false)}>Detalles de tutorías</button>
            <button onClick={() => setMenuOpen(false)}>Tutorías</button>
            <button onClick={() => setMenuOpen(false)}>Mi Perfil</button>
          </nav>
        </aside>
      </>
    );
  }
  
  export default Header;
