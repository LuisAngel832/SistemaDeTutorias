import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import FormInfoTutorias from "./FormInfoTutorias";
import ButtonsInfo from "./ButtonsInfo";
import FinalizarTutoria from "./FinalizarTutoria";
import VentanaEmerjente from "../../../components/Tutor/VentanaEmerjente";

const MainContentInfoTutoria = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [cancelarTutoria, setCancelarTutoria] = useState(false);
  const [actualizarTutoria, setActualizarTutoria] = useState(false);

  const [horariosDisponibles, setHorariosDisponibles] = useState([]);
  const [materias, setMaterias] = useState([]);

  const [tutoria, setTutoria] = useState({
    idHorario: "",
    fecha: "",
    edificio: "",
    aula: "",
    estado: "",
    nrc: "",
  });

    const fetchWithToken = async (url, options = {}) => {
      return await fetch(url, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          ...options.headers,
        },
      });
    };

  const fetchHorarios = async () => {
    try {
      const response = await fetchWithToken(
        "https://backtutorias.onrender.com/tutor/misHorarios"
      );
      if (!response.ok) throw new Error(await response.text());
      const data = await response.json();
      setHorariosDisponibles(data.data);
    } catch (error) {
      console.error("Error al obtener horarios:", error);
    }
  };

  const fetchTutoria = async () => {
    try {
      const response = await fetchWithToken(
        `https://backtutorias.onrender.com/tutorias/${id}`
      );
      if (!response.ok) throw new Error("Error al obtener tutoría");
      const data = await response.json();
      const t = data.data;
      setTutoria({
        idTutoria: t.idTutoria, 
        fecha: t.fecha,
        edificio: t.edificio,
        aula: t.aula,
        estado: t.estado,
        nrc: t.materia?.nrc || "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const fetchMaterias = async () => {
    try {
      const response = await fetchWithToken(
        "https://backtutorias.onrender.com/materias/all"
      );
      if (!response.ok) throw new Error("Error al obtener materias");
      const data = await response.json();
      setMaterias(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCancelarTutoria = () => setCancelarTutoria(!cancelarTutoria);

  const handleConfirmCancel = async () => {
    try {
      const response = await fetchWithToken(
        `https://backtutorias.onrender.com/tutorias/eliminar/${tutoria.idTutoria}`,
        { method: "DELETE" }
      );
      if (!response.ok) throw new Error("Error al eliminar la tutoría");
      alert("Tutoría eliminada correctamente");
      navigate("/tutor/home");
    } catch (error) {
      console.error(error);
    }
  };

  const handleShowModal = () => {
    setActualizarTutoria(!actualizarTutoria);
    console.log(actualizarTutoria);
  };

  const handleSubmitActualizacion = async () => {
    const formattedFecha =
      tutoria.fecha instanceof Date
        ? fecha.toISOString().split("T")[0]
        : tutoria.fecha;
    const updated = {
      idHorario: parseInt(tutoria.idHorario),
      fecha: formattedFecha,
      edificio: parseInt(tutoria.edificio),
      aula: parseInt(tutoria.aula),
      estado: tutoria.estado,
      nrcMateria: parseInt(tutoria.nrc),
    };

    console.log(updated);

    try {
      const response = await fetchWithToken(
        `https://backtutorias.onrender.com/tutorias/editar/${tutoria.idTutoria}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(updated),
        }
      );
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }
      alert("Tutoría actualizada correctamente");
      navigate("/tutor/home");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchHorarios();
    fetchTutoria();
    fetchMaterias();
  }, []);

  return (
    <div className="info-tutoria-tutor">
      {cancelarTutoria && (
        <FinalizarTutoria
          handleClickCancelarTutoria={handleCancelarTutoria}
          handleOnConfirm={handleConfirmCancel}
        />
      )}
      {actualizarTutoria ? (
        <VentanaEmerjente
          text={"Actualizar Tutoria"}
          textBtn1={"Cancelar"}
          textBtn2={"Actualizar"}
          handleClickBtn1={handleShowModal}
          handleClickBtn2={handleSubmitActualizacion}
        />
      ) : (
        <></>
      )}
      <FormInfoTutorias
        fecha={tutoria.fecha}
        setFecha={(fecha) => setTutoria((prev) => ({ ...prev, fecha }))}
        estado={tutoria.estado}
        setEstado={(estado) => setTutoria((prev) => ({ ...prev, estado }))}
        nrc={tutoria.nrc}
        setNrc={(nrc) => setTutoria((prev) => ({ ...prev, nrc }))}
        edificio={tutoria.edificio}
        setEdificio={(edificio) =>
          setTutoria((prev) => ({ ...prev, edificio }))
        }
        aula={tutoria.aula}
        setAula={(aula) => setTutoria((prev) => ({ ...prev, aula }))}
        horariosDisponibles={horariosDisponibles}
        materias={materias}
        idTutoria={tutoria.idTutoria}
        horario={tutoria.idHorario}
        sertHorario={(horario) =>
          setTutoria((prev) => ({ ...prev, idHorario: horario }))
        }
      />
      <ButtonsInfo
        handleClickCancelarTutoria={handleCancelarTutoria}
        handleSubmitActualizacion={handleSubmitActualizacion}
        handleShowModal={handleShowModal}
      />
    </div>
  );
};

export default MainContentInfoTutoria;
