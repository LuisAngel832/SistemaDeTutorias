import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import VentanaEmerjente from "../../components/Tutor/VentanaEmerjente";
import { useNavigate } from "react-router-dom";

export default function RecuperarPassword() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [passwordNueva, setPasswordNueva] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");
  const navigator = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://backtutorias.onrender.com/auth/newPassword",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token,
            passwordNueva,
          }),
        }
      );

      const data = await res.json(); 

      if (res.ok) {
        setModalText("Contraseña cambiada con éxito");
        setShowModal(true);
      } else {
        alert("Error al cambiar la contraseña, intente nuevamente");
      }
    } catch (error) {
      console.error("Error inesperado: " + error.message);
    }
  };

  const handleClickBtn1 = () => {
    navigator("/login");
  };

  return (
    <>
    {showModal && <VentanaEmerjente text={modalText} textBtn1={"Aceptar"} handleClickBtn1={handleClickBtn1} />}
      <div className="recuperar-password">
        <section className="main-recuperar">
          <form onSubmit={handleSubmit} className="recuperar-content">
            <h2>Restablecer contraseña</h2>
            <input
              type="password"
              placeholder="Nueva contraseña"
              value={passwordNueva}
              onChange={(e) => setPasswordNueva(e.target.value)}
              required
            />
            <button type="submit">Cambiar contraseña</button>
          </form>
        </section>
      </div>
    </>
  );
}
