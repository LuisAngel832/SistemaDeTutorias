import logo from '../../assets/img/logo-header.png';
import icon from './../../assets/img/icon-perfil.png'
import '../../assets/css/components/header.css';
import { Link } from 'react-router-dom';
import Search from './search';

const HeaderT = ({search = true}) => {
  return (
    <header className="header">

      <div className="header-content">
        <div className="img-container">
          <Link to='/'><img src={logo} alt="logo" className="header-logo" /></Link>
         <Link to="/tutorado/perfil"> <img src={icon} alt="" /></Link>
        </div>

        {search ?<Search/>: <></> }
        

        <div className='header-buttons'>
          <Link to='/tutorado/home'><button>INICIO</button></Link>
          <Link to='/tutorado/tutorias'><button>TUTORIAS</button></Link>
          <Link to='/tutorado/perfil'><button>MI PERFIL</button></Link>
        </div>
      </div>
    </header>
  );
}

export default HeaderT;