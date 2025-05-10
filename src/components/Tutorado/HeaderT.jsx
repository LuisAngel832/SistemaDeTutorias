import logo from '../../assets/img/logo-header.png';
import icon from './../../assets/img/icon-perfil.png'
import '../../assets/css/components/header.css';
import { Link } from 'react-router-dom';
import Search from './search';

const HeaderT = () => {
  return (
    <header className="header">

      <div className="header-content">
        <div className="img-container">
          <Link to='/'><img src={logo} alt="logo" className="header-logo" /></Link>
          <img src={icon} alt="" />
        </div>

        <Search />

        <div className='header-buttons'>
          <Link to=''><button>INICIO</button></Link>
          <Link to=''><button>TUTORIAS</button></Link>
          <button>MI PERFIL</button>
        </div>
      </div>
    </header>
  );
}

export default HeaderT;