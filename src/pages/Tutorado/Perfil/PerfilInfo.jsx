import PropTypes from 'prop-types';

const PerfilInfo = ({ nombre, correo }) => {
  return (
    <section className="perfil-info-content">
      <div className="perfil-saludo">
        <p>Hola, {localStorage.getItem("nombre")}</p>
      </div>
      <div className="perfil-correo">
        <p>Correo: {localStorage.getItem("correo")}</p>
      </div>
      <div className="perfil-cambiar-contrasena">
        Cambiar Contraseña
      </div>
    </section>
  );
};

PerfilInfo.propTypes = {
  nombre: PropTypes.string.isRequired,
  correo: PropTypes.string.isRequired,
};


export default PerfilInfo