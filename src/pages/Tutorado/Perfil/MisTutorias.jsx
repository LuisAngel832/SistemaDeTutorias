import { useTutoriasTutorado } from "../../../hooks/useTutoriasTutorado.jsx";
const MisTutorias = () => {
  const { tutorias, tutoriasCanceladas } = useTutoriasTutorado();
  const tutoriasFinalizadas = tutorias.filter(
    (tutoria) => tutoria.estado === "Finalizada"
  );
  console.log(tutorias);
  return (
    <div className="mistutorias-content">
      <div className="title">
        <p>Mis Tutorias</p>
      </div>
      <div className="mistutorias-completadas">
        <p>Completadas</p>
        <ul>
          {tutoriasFinalizadas && <p>No hay tutorias completadas</p>}
          {tutoriasFinalizadas.map((tutoria) => (
            <li key={tutoria.idTutoria}>{tutoria.materia.nombreMateria}</li>
          ))}
        </ul>
      </div>

      <div className="mistutorias-canceladas">
        <p>Canceladas</p>
        <ul>
          {tutoriasCanceladas && <p>No hay tutorias Canceladas</p>}
          {tutoriasCanceladas.map((tutoria) => (
            <li key={tutoria.idTutoria}>{tutoria.materia.nombreMateria}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MisTutorias;
