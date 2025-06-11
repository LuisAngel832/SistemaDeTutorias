  import "./login.css";
  import logo from "../../assets/img/logo.png";
  import "./Login_respon.css";
  import {  useState } from "react";
  import { Link } from "react-router-dom";
  import useAutentificacion from "../../hooks/useAutentificacion";



  const LogIn = () => {
    const {login} = useAutentificacion();
    const [matricula, setMatricula] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
      e.preventDefault();
      if(!matricula || !contrasena){
        setError("Todos los campos son obligatorios");
        return
      }

      login(matricula, contrasena, setError);
    }

    return (
      <div className="Login">
        <div className="login-content">
          <img src={logo} alt="logo" className="login-img" />
          {error && <p className='error'>Usuario o contraseña incorrectos</p>}
          <form className="login-form" onSubmit={handleLogin}>
            <label htmlFor="matricula">Matrícula</label>
            <input
              type="text"
              id="matricula"
              className="login-input"
              value={matricula}
              onChange={(e) => setMatricula(e.target.value)}
            />

            <label htmlFor="contraseña">Contraseña</label>
            <input
              type="password"
              id="contraseña"
              className="login-input"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />

            <button type="submit" className="login-button-confirm" onClick={handleLogin}>
              Iniciar Sesión
            </button>

            

            <section className="login-buttons">
              <button type="button">Recuperar Contraseña</button>
              <Link to="/registro"><button type="button">Registrarse</button></Link>
            </section>
          </form>
        </div>
      </div>
    );
  };

  export default LogIn;
