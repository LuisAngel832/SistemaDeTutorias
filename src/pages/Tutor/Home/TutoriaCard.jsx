import { Link } from "react-router-dom";
const TutoriaCard = ({ tutoriaData }) => {
  console.log(tutoriaData);
  return (
    <Link
      to={`/tutor/info-tutoria/${tutoriaData.idTutoria}`}
      className="link"
      key={tutoriaData.idTutoria}
    >
      <div className="card">
        <div className="card-item">
          <h4 className="card-item-title">Hora</h4>
          <p className="card-item-text-important">
            {tutoriaData.horario.horaInicio}
          </p>
        </div>

        <div className="card-item">
          <h4 className="card-item-title">Estado</h4>
          <p className="card-item-text-important">{tutoriaData.estado}</p>
        </div>
        <div className="card-item">
          <h4 className="card-item-title">Materia</h4>
          <p className="card-item-text">{tutoriaData.materia.nombreMateria}</p>
        </div>
        <div className="card-item">
          <h4 className="card-item-title">Nrc</h4>
          <p className="card-item-text">{tutoriaData.materia.nrc}</p>
        </div>
        <div className="card-item">
          <h4 className="card-item-title">tutor</h4>
          <p className="card-item-text">{tutoriaData.horario.tutor.nombre}</p>
        </div>
        <div className="card-item">
          <h4 className="card-item-title">Aula</h4>
          <p className="card-item-text">{tutoriaData.aula}</p>
        </div>
        <div className="card-item">
          <h4 className="card-item-title">Edificio</h4>
          <p className="card-item-text">{tutoriaData.edificio}</p>
        </div>
      </div>
    </Link>
  );
};

export default TutoriaCard;
