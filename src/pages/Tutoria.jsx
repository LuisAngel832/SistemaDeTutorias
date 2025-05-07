import "./../assets/css/tutoria.css";
import Button from "../components/ButtonTrue";
import { useState } from "react";

const CardAlumno = ({ matricula, nombre }) => {
  return (
    <li className="list-item">
      <div className="alumno-matricula-content">
        <h4>Matricula</h4>
        <p>{matricula}</p>
      </div>
      <div className="alumno-nombre-content">
        <h4>Nombre</h4>
        <p>{nombre}</p>
      </div>
    </li>
  );
};

const Tutoria = () => {
  const [FinalizarTutoria, setFinalizarTutoria] = useState(false);
  return (
    <>
      <section className="ventana-finalizr-tutoria"></section>
      <section className="tutoria-content">
        <div className="tutoria">
          <h2>Tutoria</h2>
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
          <div className="buttons">
            <Button text="Finalizar" type={true} />
            <Button text="Editar" type={true} />
          </div>
        </div>

        <div className="tutoria-alumnos">
          <h2>Tutorados</h2>

          <ul className="alumno-list">
            <CardAlumno matricula="123456" nombre="Juan Carlos Manzanillo" />
            <CardAlumno matricula="123456" nombre="Juan Carlos Manzanillo" />
            <CardAlumno matricula="123456" nombre="Juan Carlos Manzanillo" />
          </ul>
        </div>
      </section>
    </>
  );
};

export default Tutoria;
