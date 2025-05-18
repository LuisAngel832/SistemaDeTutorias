import logo from '../../assets/img/logo-header.png';
import '../../assets/css/components/header.css';
import { Link } from 'react-router-dom';

const Header  = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to='/tutor/home'><img src={logo} alt="logo" className="header-logo" /></Link>
        <div className='header-buttons'>
            <Link to='/tutor/home'><button>Tutorias</button></Link>
            <Link to='/tutor/crear'><button>Crear Tutoria</button></Link>
            <button>Estadisticas</button>
        </div>
      </div>
    </header>
  );
}

export default Header;