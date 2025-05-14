import "./registro.css";
import logo from "../../assets/img/logo.png";

const Registro = () => {
  return (
    <div className="registro">
      <div className="registro-content">
        <img src={logo} alt="logo" className="registro-img" />

        <form className="registro-form">
          <h2 className="content-title">Registro</h2>
          <label htmlFor="nombreCompleto">Nombre completo</label>
          <input className="registro-input" type="text" id="nombreCompleto" />

          <label htmlFor="correo">Correo electrónico</label>
          <input className="registro-input" type="email" id="correo" />

          <label htmlFor="contraseña">Contraseña</label>
          <input className="registro-input" type="password" id="contraseña" />

          <label htmlFor="rol">Rol</label>
          <select id="rol" className="registro-input">
            <option value="alumno">Alumno</option>
            <option value="profesor">Profesor</option>
          </select>

          <button type="submit" className="button-confirm">
            Registrar
          </button>

          <section className="registro-buttons">
            <button type="button" className="registro-recuperarContraseña">
              Recuperar Contraseña
            </button>
            <button type="button" className="registro-login">
              LogIn
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default Registro;
