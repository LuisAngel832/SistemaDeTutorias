import InfoTutoria from "./InfoTutoria"
import Buttons from "./Buttons"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import VentanaEmerjente from "../../../components/Tutor/VentanaEmerjente"
import { set } from "date-fns"

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
    if (tutoria && tutoria.tutorados) {
      const matricula = localStorage.getItem("matricula");
      const inscrito = tutoria.tutorados.some(t => t.matricula === matricula);
      setTutoradoInscrito(inscrito);
    }
  }, [tutoria]);

  useEffect(() => {
    fetchTutoria();
  }, []);

  const handleClickInscribirse = async () => {
    const response = await fetch(`https://backtutorias.onrender.com/tutorado/inscribirse/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    });

    const data = await response.json();
    console.log(data.message);
    setModalText(data.message);
    fetchTutoria(); 
    handleClickAbrirCerrarModal();
  };

  const handleclickCancelarInscripcion = async () => {
    const response = await fetch(`https://backtutorias.onrender.com/tutorado/cancelar/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    });

    const data = await response.json();
    setModalText(data.message);
    console.log(data.message);
    handleClickAbrirCerrarModalCancel();
    fetchTutoria(); 
  };


  const handleClickAbrirCerrarModal = () => {
    setShowModal(!showModal);
  };

  const handleClickAbrirCerrarModalCancel = () => {
    setShowModalCancel(!showModalCancel);
  };

  return (
    <div className="main-content">
      {tutoria ? (
        <>
        {showModal ? < VentanaEmerjente handleClickBtn1={handleClickAbrirCerrarModal} text={modalText} textBtn1="Aceptar" /> : <></>}
        {showModalCancel ? < VentanaEmerjente handleClickBtn1={handleClickAbrirCerrarModalCancel} text="¿Cancelar inscripción?" textBtn1="Cancelar" textBtn2={"Aceptar"} handleClickBtn2={handleclickCancelarInscripcion} /> : <></>}
          <InfoTutoria tutoria={tutoria} />
          <Buttons
            handleClick={handleClickInscribirse}
            handleClick2={handleClickAbrirCerrarModalCancel}
            tutoradoInscrito={tutoradoInscrito}
          />
        </>
      ) : (
        <p>Cargando tutoría...</p>
      )}
    </div>
  );
};

export default MainContent;
