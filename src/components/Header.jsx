import logo from '../assets/img/logo-header.png';
import '../assets/css/components/header.css';

const Header  = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="logo" className="header-logo" />
        <div className='header-buttons'>
            <button>Tutorias</button>
            <button>Crear Tutoria</button>
            <button>Historial</button>
        </div>
      </div>
    </header>
  );
}

export default Header;