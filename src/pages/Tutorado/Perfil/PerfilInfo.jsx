import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useAutentificacion from '../../../hooks/useAutentificacion';

const PerfilInfo = () => {
  const {logout} = useAutentificacion();
  return (
    <section className="perfil-info-content">
      <div className="perfil-saludo">
        <p>Hola, {localStorage.getItem("nombre")}</p>
      </div>
      <div className="perfil-correo">
        <p>Correo: {localStorage.getItem("correo")}</p>
      </div>
      
      <Link to="/reset-password/" className='link'><div className="perfil-cambiar-contrasena">
        Cambiar Contraseña
      </div>
      </Link>
      <div className="perfil-cerrar-sesion" onClick={logout}>
        Cerrar Sesión
      </div>
    </section>
  );
};

PerfilInfo.propTypes = {
  nombre: PropTypes.string.isRequired,
  correo: PropTypes.string.isRequired,
};


export default PerfilInfo