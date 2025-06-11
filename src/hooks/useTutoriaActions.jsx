
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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

export const useTutoriaActions = (tutoria) => {
  const navigate = useNavigate();
  const [cancelarTutoria, setCancelarTutoria] = useState(false);
  const [actualizarTutoria, setActualizarTutoria] = useState(false);

  const handleCancelarTutoria = () => setCancelarTutoria(!cancelarTutoria);

  const handleShowModal = () => setActualizarTutoria(!actualizarTutoria);

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

  const handleSubmitActualizacion = async () => {
    const formattedFecha =
      tutoria.fecha instanceof Date
        ? tutoria.fecha.toISOString().split("T")[0]
        : tutoria.fecha;

    const updated = {
      idHorario: parseInt(tutoria.idHorario),
      fecha: formattedFecha,
      edificio: parseInt(tutoria.edificio),
      aula: parseInt(tutoria.aula),
      estado: tutoria.estado,
      nrcMateria: parseInt(tutoria.nrc),
    };

    try {
      const response = await fetchWithToken(
        `https://backtutorias.onrender.com/tutorias/editar/${tutoria.idTutoria}`,
        {
          method: "PUT",
          body: JSON.stringify(updated),
        }
      );
      if (!response.ok) throw new Error(await response.text());
      alert("Tutoría actualizada correctamente");
      navigate("/tutor/home");
    } catch (error) {
      console.error(error);
    }
  };

  return {
    cancelarTutoria,
    actualizarTutoria,
    handleCancelarTutoria,
    handleConfirmCancel,
    handleShowModal,
    handleSubmitActualizacion,
  };
};
