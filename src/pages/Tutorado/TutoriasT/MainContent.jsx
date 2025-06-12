import "../../Tutorado/HomeT/home.css";
import "../../Tutorado/TutoriasT/tutorias.css";
import { useNavigate } from "react-router-dom";
import { useTutoriasTutorado } from "../../../hooks/useTutoriasTutorado";

const MainContent = () => {
  const { tutorias } = useTutoriasTutorado();
  const navigate = useNavigate();

  const handleClick = (idTutoria) => {
    navigate(`/info-tutoria/${idTutoria}`);
  };

  return (
    <div className="main-content">
      <h2 className="titulo">📚 Mis tutorías</h2>
      <div className="contenedor-tarjetas">
        {tutorias.length > 0 ? (
          tutorias.map((tutoria) => (
            <div className="tarjeta-tutoria" key={tutoria.id}>
              <h3 className="titulo-tutoria">{tutoria.tema}</h3>
              <p><strong>Materia:</strong> {tutoria.materia}</p>
              <p><strong>Fecha:</strong> {tutoria.fecha}</p>
              <p><strong>Hora:</strong> {tutoria.hora}</p>
              <p><strong>Tutor:</strong> {tutoria.nombreTutor}</p>
              <button className="boton-vermas" onClick={() => handleClick(tutoria.id)}>Ver más</button>
            </div>
          ))
        ) : (
          <p className="mensaje-vacio">No tienes tutorías registradas.</p>
        )}
      </div>
    </div>
  );
};

export default MainContent;
