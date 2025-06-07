import ButtonTrue from "../../../components/Tutor/ButtonTrue";
import FormCrearTutoria from "./formCrearTutoria";
import VentanaEmerjente from "../../../components/Tutor/VentanaEmerjente";
import { useState, useEffect } from "react";

const MainCrearT = () => {
  const [nrcMateria, setNrcMateria] = useState("");
  const [horario, setHorario] = useState(1);
  const [fecha, setFecha] = useState("");
  const [edificio, setEdificio] = useState("");
  const [aula, setAula] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async () => {
    const fechaISO =
      fecha instanceof Date ? fecha.toISOString().split("T")[0] : fecha;

    const tutoria = {
      idHorario: parseInt(horario),
      fecha: fechaISO,
      edificio: parseInt(edificio),
      aula: parseInt(aula),
      nrcMateria: parseInt(nrcMateria),
    };

    try {
      console.log(localStorage.getItem("token"));
      const response = await fetch(
        "https://backtutorias.onrender.com/tutorias/genera-tutoria",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(tutoria),
        }
      );

      const responseBody = await response.json();

      if (!response.ok) {
        setMensaje(responseBody.message);
        console.log(responseBody);
        setShowModal(true);
        return;
      }

      setMensaje("Tutoría creada correctamente");
      setShowModal(true);
    } catch (error) {
      console.error("Error de red:", error);
      setMensaje("Error al conectar con el servidor");
      setShowModal(true);
    }
  };
  const fetchMaterias = async () => {
    try {
      const response = await fetch(
        "https://backtutorias.onrender.com/materias/all",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        return;
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error al hacer fetch:", error);
    }
  };

  useEffect(() => {
    fetchMaterias();
  }, []);

  const handleClick = () => {
    setShowModal(false); // Cerrar modal al hacer clic en Aceptar
  };

  return (
    <>
      {showModal && (
        <VentanaEmerjente
          handleClick={handleClick}
          text={mensaje}
          textBtn1={"Aceptar"}
          textBtn2={""}
        />
      )}

      <div className="crear-tutoria-container">
        <h2 className="crear-tutoria-title">Crear Tutoria</h2>
        <div className="crear-tutoria-content">
          <FormCrearTutoria
            nrcMateria={nrcMateria}
            setNrcMateria={setNrcMateria}
            horario={horario}
            setHorario={setHorario}
            fecha={fecha}
            setFecha={setFecha}
            edificio={edificio}
            setEdificio={setEdificio}
            aula={aula}
            setAula={setAula}
          />
          <div className="button-crear-tutoria">
            <button className="btn-aceptar" onClick={handleSubmit}>
              Crear
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCrearT;
