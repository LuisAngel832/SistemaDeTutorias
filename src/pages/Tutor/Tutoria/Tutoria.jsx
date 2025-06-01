import "./tutoria.css";
import "./tutoriaR.css";
import Button from './../../../components/Tutor/ButtonTrue';
import CardAlumno from './CardAlumno'
import Header from './../../../components/Tutor/Header';
import { useState } from "react";



const Tutoria = () => {
  const [FinalizarTutoria, setFinalizarTutoria] = useState(false  );
  return (
    <>
    <Header />
    {FinalizarTutoria ?(
    <section className="finalizar-tutoria-content">
      <div className="finalizar-tutoria">
        <h1>¿Finalizar Tutoria?</h1>
        <div className="buttons">
          <Button text='Cancelar'  type={false} />
          <Button text='Finalizar' type={true}  />
        </div>
      </div>
    </section>
    ):(<></>)}
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
