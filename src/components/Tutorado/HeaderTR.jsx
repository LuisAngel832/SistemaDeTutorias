import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
          <p className='header-title'>Panel de control</p>
        </header>
  
        {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
  
        <aside className={`sidebar left ${menuOpen ? 'open' : ''}`}>
          <nav>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
            <span></span>
            <span></span>
            <span></span>
          </button>
            <Link to='/tutorado/home'><button onClick={() => setMenuOpen(false)}>Home</button></Link>
            <Link to='/tutorado/tutorias'><button onClick={() => setMenuOpen(false)}>Tutorías</button></Link>
            <Link to='/tutorado/perfil'><button onClick={() => setMenuOpen(false)}>Mi Perfil</button></Link>
          </nav>
        </aside>
      </>
    );
  }
  
  export default Header;
