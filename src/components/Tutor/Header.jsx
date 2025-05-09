import logo from '../../assets/img/logo-header.png';
import '../../assets/css/components/header.css';
import { Link } from 'react-router-dom';

const Header  = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to='/'><img src={logo} alt="logo" className="header-logo" /></Link>
        <div className='header-buttons'>
            <Link to='/'><button>Tutorias</button></Link>
            <Link to='crear-tutoria'><button>Crear Tutoria</button></Link>
            <button>Historial</button>
        </div>
      </div>
    </header>
  );
}

export default Header;