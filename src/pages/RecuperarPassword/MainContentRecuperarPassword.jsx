import RecuperarPasswordForm from "./RecuperarPasswordForm";
import { useState } from "react";
const MainRecuperarPassword = () => {
  const [correo, setCorreo] = useState('');

  const handleSubmit = async (e) => {

    e.preventDefault();
    try{
      const response = await fetch('https://backtutorias.onrender.com/auth/correoRecuperacion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          correo: correo
        })
        
      })

      const data = await response.json();
      if(!response.ok){
        console.log('Error al enviar el correo', data);
        return
      }

      console.log(data);
    }catch(error){
      console.log(error);
    }
  }
  return (
    <section className="main-recuperar">
      <div className="recuperar-content">
        <h2>Ingresa el correo para restablecer tu contraseña</h2>
        <input type="email" placeholder="example@gmail.com"  onChange={(e) => setCorreo(e.target.value)}/>
        <button onClick={handleSubmit}>continuar</button>
      </div>
    </section>
  );
};

export default MainRecuperarPassword;
