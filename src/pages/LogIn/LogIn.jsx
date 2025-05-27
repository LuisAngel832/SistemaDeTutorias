  import "./login.css";
  import logo from "../../assets/img/logo.png";

  import { useNavigate } from "react-router-dom";
  import "./Login_respon.css";
  import { use, useState } from "react";
  import { Link } from "react-router-dom";



  const LogIn = () => {
    const navigate = useNavigate();
    const [matricula, setMatricula] = useState("");
    const [contraseña, setContrasenia] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
      e.preventDefault();

      try {
        const response = await fetch("https://backtutorias.onrender.com/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            matricula: matricula,
            password: contraseña
          })
        });

        if (!response.ok) {
          const errorText = await response.text();
          setError(errorText);
          return;
        }

        const data = await response.json();
        localStorage.setItem("token", data.token);
        localStorage.setItem("rol", data.rol);
        localStorage.setItem("matricula", matricula);

        
        if (data.rol === "tutor") {
          navigate("/tutor/home");
        } else if (data.rol === "tutorado") {
          navigate("/tutorado/home");
        }

      } catch (err) {
        console.error(err);
        setError("Error al conectar con el servidor");
      }
    };

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
              value={contraseña}
              onChange={(e) => setContrasenia(e.target.value)}
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
