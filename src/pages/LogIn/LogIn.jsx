import "./login.css";
import logo from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import "./Login_respon.css";


const LogIn = () => {
  const navigate = useNavigate();  

  const handleLogin = (e) => {
    e.preventDefault();
  
    // Simula login de tutor (cámbialo si es tutorado)
    localStorage.setItem("rol", "tutor"); // o "tutorado"
    localStorage.setItem("matricula", "zs23004692");
  
    // Redirige a home según rol
    if (localStorage.getItem("rol") === "tutor") {
      navigate("/tutor/home");
    } else {
      navigate("/tutorado/home");
    }
  };
  
  return (
    <div className="Login">
      <div className="login-content">
        <img src={logo} alt="logo" className="login-img" />
        <form className="login-form">
          <label htmlFor="matricula">Matrícula</label>
          <input type="text" id="matricula" className="login-input" />

          <label htmlFor="contraseña">Contraseña</label>
          <input type="password" id="contraseña" className="login-input" />

          <button type="submit" className="login-button-confirm" onClick={handleLogin}>
            Iniciar Sesión
          </button>

          <section className="login-buttons">
            <button type="button">Recuperar Contraseña</button>
            <button type="button">Registrarse</button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
