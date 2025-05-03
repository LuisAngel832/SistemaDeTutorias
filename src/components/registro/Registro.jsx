import "../../assets/css/registro.css";
import logo from "../../assets/img/logo.png"

const Registro = () => {
    console.log("Registro");
    return(
        <div className="registro-content">
            <img src={logo} alt="logo" />
            <form className="registro-form">
                <label htmlFor="nombreCompleto" >Nombre completo</label>
                <input className="registro-input" type="text" id="nombreCompleto"/>

                <label htmlFor="correo">Correo electronico</label>
                <input className="registro-input" type="email"  id="correo" />

                <label htmlFor="contraseña">Contraseña</label>
                <input className="registro-input" type="password"  id="contraseña" />

                <label htmlFor="rol">Rol</label>
                <select id="rol">
                    <option value="alumno">Alumno</option>
                    <option value="profesor">Profesor</option>
                </select>

                <button type="submit" className="button-confirm">Registrar</button>
                <section className="registro-buttons">
                    <button type="button" className="registro-recuperarContraseña">Recuperar Contraseña</button>
                    <button type="button" className="registro-registrarse">Registrarse</button>
                </section>
                
                
            </form>
        </div>
    )
}

export default Registro;