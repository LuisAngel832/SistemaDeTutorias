import "../assets/css/login.css";
import logo from "../assets/img/logo.png";

const LogIn = () => {
  return (
    <div className="login-content">
      <img src={logo} alt="logo" className="login-img" />
      <form className="login-form">
        <label htmlFor="matricula">Matrícula</label>
        <input type="text" id="matricula" className="login-input" />

        <label htmlFor="contraseña">Contraseña</label>
        <input type="password" id="contraseña" className="login-input" />

        <button type="submit" className="login-button-confirm">
          Iniciar Sesión
        </button>

        <section className="login-buttons">
          <button type="button">Recuperar Contraseña</button>
          <button type="button">Registrarse</button>
        </section>
      </form>
    </div>
  );
};

export default LogIn;
