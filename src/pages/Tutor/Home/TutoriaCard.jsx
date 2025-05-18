import { Link } from "react-router-dom";
const TutoriaCard = ({tutoriaData}) => {
  return (
    <Link to="/tutor/info-tutoria" className="link">
      <div className="card">
        <div className="card-item">
          <h4 className="card-item-title">Hora</h4>
          <p className="card-item-text-important">8:00</p>
        </div>

        <div className="card-item">
          <h4 className="card-item-title">Estado</h4>
          <p className="card-item-text-important">programada</p>
        </div>
        <div className="card-item">
          <h4 className="card-item-title">Materia</h4>
          <p className="card-item-text">Base de datos</p>
        </div>
        <div className="card-item">
          <h4 className="card-item-title">Nrc</h4>
          <p className="card-item-text">30892</p>
        </div>
        <div className="card-item">
          <h4 className="card-item-title">tutor</h4>
          <p className="card-item-text">Juan Carlos Manzanillo</p>
        </div>
        <div className="card-item">
          <h4 className="card-item-title">salon</h4>
          <p className="card-item-text">16</p>
        </div>
        <div className="card-item">
          <h4 className="card-item-title">Edificio</h4>
          <p className="card-item-text">Edificio 2</p>
        </div>
      </div>
    </Link>
  );
};

export default TutoriaCard;
