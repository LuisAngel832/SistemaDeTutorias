import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import InfoTutoria from "./InfoTutoria";
import Buttons from "./Buttons";
import VentanaEmerjente from "../../../components/Tutor/VentanaEmerjente";

const MainContent = () => {
  const { id } = useParams();
  const [tutoria, setTutoria] = useState(null);
  const [tutoradoInscrito, setTutoradoInscrito] = useState(false);
  const [modalText, setModalText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showModalCancel, setShowModalCancel] = useState(false);

  const fetchTutoria = async () => {
    try {
      const response = await fetch(`https://backtutorias.onrender.com/tutorias/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) throw new Error("Error al obtener tutoría");
      const data = await response.json();
      setTutoria(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTutoria();
  }, []);

  useEffect(() => {
    if (tutoria?.tutorados) {
      const matricula = localStorage.getItem("matricula");
      setTutoradoInscrito(tutoria.tutorados.some(t => t.matricula === matricula));
    }
  }, [tutoria]);

  const handleClickInscribirse = async () => {
    try {
      const response = await fetch(`https://backtutorias.onrender.com/tutorado/inscribirse/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await response.json();
      setModalText(data.message);
      fetchTutoria();
      setShowModal(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickCancelarInscripcion = async () => {
    try {
      const response = await fetch(`https://backtutorias.onrender.com/tutorado/cancelar/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await response.json();
      setModalText(data.message);
      fetchTutoria();
      setShowModalCancel(false);
      setShowModal(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="main-content">
      {tutoria ? (
        <>
          {showModal && (
            <VentanaEmerjente
              handleClickBtn1={() => setShowModal(false)}
              text={modalText}
              textBtn1="Aceptar"
            />
          )}

          {showModalCancel && (
            <VentanaEmerjente
              handleClickBtn1={() => setShowModalCancel(false)}
              handleClickBtn2={handleClickCancelarInscripcion}
              text="¿Cancelar inscripción?"
              textBtn1="Cancelar"
              textBtn2="Aceptar"
            />
          )}

          <InfoTutoria tutoria={tutoria} />
          <Buttons
            tutoradoInscrito={tutoradoInscrito}
            handleClick={handleClickInscribirse}
            handleClick2={() => setShowModalCancel(true)}
          />
        </>
      ) : (
        <p>Cargando tutoría...</p>
      )}
    </div>
  );
};

export default MainContent;
