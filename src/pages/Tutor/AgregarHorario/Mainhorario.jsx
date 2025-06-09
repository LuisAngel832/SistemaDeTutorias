import Caledario from "./Calendario";
import { useState } from "react";
import SelectHora from "./selectHora";
import { format, set } from "date-fns";
import { es, se } from "date-fns/locale";
import VentanaEmerjente from "../../../components/Tutor/VentanaEmerjente";

const MainHorario = () => {
  const [fecha, setFecha] = useState("");
  const [horaInicio, setHoraInicio] = useState("");
  const [minutosInicio, setMinutosInicio] = useState("");
  const [horaFin, setHoraFin] = useState("");
  const [minutosFin, setMinutosFin] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");

  const camposIncompletos = () => {
    return (
      !fecha ||
      horaInicio === "" ||
      minutosInicio === "" ||
      horaFin === "" ||
      minutosFin === ""
    );
  };

  const isHorarioValido = () => {
    const inicioMinutos = parseInt(horaInicio) * 60 + parseInt(minutosInicio);
    const finMinutos = parseInt(horaFin) * 60 + parseInt(minutosFin);

    return finMinutos > inicioMinutos;
  };

  const handleAgregarHorario = async () => {
    if (camposIncompletos()) {
      setModalText("Completa todos los campos");
      setShowModal(true);
      return;
    }

    if (!isHorarioValido()) {
      setModalText("La hora final debe ser mayor que la hora de inicio");
      setShowModal(true);
      return;
    }

    const horario = {
      dia: format(fecha, "EEEE", { locale: es }).toUpperCase(),
      horaInicio: `${horaInicio.toString().padStart(2, "0")}:${minutosInicio
        .toString()
        .padStart(2, "0")}`,
      horaFin: `${horaFin.toString().padStart(2, "0")}:${minutosFin
        .toString()
        .padStart(2, "0")}`,
    };

    try {
      const response = await fetch(
        "https://backtutorias.onrender.com/horarios/crear-horario",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(horario),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setModalText("Horario agregado con éxito ✅");
        setShowModal(true);
        setFecha("");
        setHoraInicio("");
        setMinutosInicio("");
        setHoraFin("");
        setMinutosFin("");
      } else {
        setModalText("Error al agregar horario: " + data.message);
        setShowModal(true);
      }
    } catch (error) {
      console.error("Error de red:", error);
      setModalText(
        "Error al conectar con el servidor, intentalo de nuevo mas tarde"
      );
      setShowModal(true);
    }
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const propsHora = {
    horaInicio,
    setHoraInicio,
    minutosInicio,
    setMinutosInicio,
    horaFin,
    setHoraFin,
    minutosFin,
    setMinutosFin,
  };

  return (
    <>
      {showModal && (
        <VentanaEmerjente
          text={modalText}
          textBtn1="Aceptar"
          handleClickBtn1={handleShowModal}
        />
      )}

      <section className="main-horario">
        <h2>Agregar Horario</h2>
        <div className="main-horario-content">
          <div className="select-fecha">
            <Caledario fecha={fecha} setFecha={setFecha} />
          </div>
          <div className="select-hora-min">
            <SelectHora title="Hora de Inicio" value="inicio" {...propsHora} />

            <SelectHora title="Hora Final" value="fin" {...propsHora} />
          </div>
        </div>
        <div className="button-content">
          <button className="btn-aceptar" onClick={handleAgregarHorario}>
            Agregar Horario
          </button>
        </div>
      </section>
    </>
  );
};

export default MainHorario;
