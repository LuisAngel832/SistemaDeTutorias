
import logo from "../../assets/img/logo.png"

const LogIn = () => {
    return(
        <div className="login-content">
            <img src={logo} alt="logo" />
            <form className="login-form">
                <label htmlFor="matricula" >Matricula</label>
                <input type="text" id="matricula"/>

                <label htmlFor="contraseña">Contraseña</label>
                <input type="password" name="contraseña" id="contraseña" />

                <button type="submit" className="button-confirm">Iniciar Sesion</button>
                <section className="registro-buttons">
                    <button type="button" className="login-recuperarContraseña">Recuperar Contraseña</button>
                    <button type="button" className="login-registrarse">Registrarse</button>
                </section>
                
                
            </form>
        </div>
    )
}

export default LogIn;