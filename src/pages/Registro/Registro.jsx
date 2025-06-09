import "./registro.css";
import logo from "../../assets/img/logo.png";
import "./Registro_respon.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAutentificacion from "../../hooks/useAutentificacion";

const Registro = () => {
  const {registro} = useAutentificacion();
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [apellidoP, setApellidoP] = useState("");
  const [apellidoM, setApellidoM] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setpassword] = useState("");
  const [rol, setRol] = useState("alumno");
  const [matricula, setMatricula] = useState("");

  const handleRegistro = async (e) => {
    e.preventDefault();
    const usuario = {
      matricula,
      nombre,
      apellidoP,
      apellidoM,
      correo,
      password,
    };

    registro(rol, usuario, setError);
  }

  return (
    <div className="registro">
      <div className="registro-content">
        <img src={logo} alt="logo" className="registro-img" />

        <form className="registro-form" onSubmit={handleRegistro}>
          <h2 className="content-title">Registro</h2>

          <label htmlFor="nombre">Nombre</label>
          <input
            className="registro-input"
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

          <label htmlFor="apellidoP">Apellido Paterno</label>
          <input
            className="registro-input"
            type="text"
            id="apellidoP"
            value={apellidoP}
            onChange={(e) => setApellidoP(e.target.value)}
            required
          />

          <label htmlFor="apellidoM">Apelldio Materno</label>
          <input
            className="registro-input"
            type="text"
            id="apellidoM"
            value={apellidoM}
            onChange={(e) => setApellidoM(e.target.value)}
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

          <label htmlFor="password">Contraseña</label>
          <input
            className="registro-input"
            type="password"
            id="conpasswordtraseña"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
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
