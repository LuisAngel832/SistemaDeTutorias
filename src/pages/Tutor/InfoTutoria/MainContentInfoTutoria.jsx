import FormInfoTutorias from "./FormInfoTutorias";
import ButtonsInfo from "./ButtonsInfo";
import FinalizarTutoria from "./FinalizarTutoria";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MainContentInfoTutoria = () => {
  const { id } = useParams();
  const [tutoriaData, setTutoriaData] = useState({});
  const navigate = useNavigate();
  const [cancelarTutoria, setCancelarTutoria] = useState(false);
  

  useEffect(() => {
    const fetchTutoria = async () => {
      try {
        const response = await fetch(`https://backtutorias.onrender.com/tutorias/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) {
          console.error("Error al obtener la tutoría:", response.status);
          return;
        }

        const data = await response.json();
        setTutoriaData(data.data);
      } catch (error) {
        console.error("Error al hacer fetch:", error);
      }
    };

    fetchTutoria();
  }, [id]);

  const handleClickCancelarTutoria = () => {
    setCancelarTutoria(!cancelarTutoria);
  };

  const handleOnConfirm = async () => {
    try {
      const response = await fetch(`https://backtutorias.onrender.com/tutorias/eliminar/${tutoriaData.idTutoria}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        console.error("Error al eliminar la tutoría:", response.status);
        return;
      }

      const data = await response.json();
      console.log("Tutoria eliminada:", data);
      setCancelarTutoria(false);
      navigate("/tutor/home");
    } catch (error) {
      console.error("Error al hacer fetch:", error);
    }
  };

  return (
    <div className="info-tutoria-tutor">
      {cancelarTutoria && (
        <FinalizarTutoria
          handleClickCancelarTutoria={handleClickCancelarTutoria}
          handleOnConfirm={handleOnConfirm}
        />
      )}
      <FormInfoTutorias tutoriaData={tutoriaData} />
      <ButtonsInfo handleClickCancelarTutoria={handleClickCancelarTutoria} />
    </div>
  );
};

export default MainContentInfoTutoria;
