import "./registro.css";
import logo from "../../assets/img/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registro = () => {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [rol, setRol] = useState("alumno");
  const [matricula, setMatricula] = useState("");

  const handleRegistro = async (e) => {
    e.preventDefault();

    const usuario = {
      nombre,
      correo,
      contraseña,
    };

    const url =
      rol === "profesor"
        ? "http://localhost:8082/tutor/registro"
        : "http://localhost:8082/tutorado/registro";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });

      if (response.ok) {
        alert("Registro exitoso");
        navigate("/login");
      } else {
        alert("Error al registrar. Verifica los datos.");
      }
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("No se pudo conectar al servidor.");
    }
  };

  return (
    <div className="registro">
      <div className="registro-content">
        <img src={logo} alt="logo" className="registro-img" />

        <form className="registro-form" onSubmit={handleRegistro}>
          <h2 className="content-title">Registro</h2>

          <label htmlFor="nombreCompleto">Nombre completo</label>
          <input
            className="registro-input"
            type="text"
            id="nombreCompleto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

          <label htmlFor="matricula">Matricula</label>
          <input
            className="registro-input"
            type="text"
            id="matricula"
            value={matricula}
            onChange={(e) => setMatricula(e.target.value)}
            required
          />

          <label htmlFor="correo">Correo electrónico</label>
          <input
            className="registro-input"
            type="email"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />

          <label htmlFor="contraseña">Contraseña</label>
          <input
            className="registro-input"
            type="password"
            id="contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
          />

          <label htmlFor="rol">Rol</label>
          <select
            id="rol"
            className="registro-input"
            value={rol}
            onChange={(e) => setRol(e.target.value)}
            required
          >
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
            <button
              type="button"
              className="registro-login"
              onClick={() => navigate("/login")}
            >
              LogIn
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default Registro;
