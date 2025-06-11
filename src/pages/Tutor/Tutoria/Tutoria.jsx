import "./tutoria.css";

import "./tutoriaR.css";
import Button from "./../../../components/Tutor/ButtonTrue";
import CardAlumno from "./CardAlumno";
import Header from "./../../../components/Tutor/Header";
import { useParams, Link } from "react-router-dom";

import { useState } from "react";
import { useTutoriaDetail } from "../../../hooks/useTutoriaDetail";

const Tutoria = () => {
  const { id } = useParams();
  const [finalizar, setFinalizar] = useState(false);
  const { tutoria, loading, finalizarTutoria } = useTutoriaDetail(id);

  const handleClickFinalizar = () => setFinalizar(!finalizar);

  const handleConfirmFinalizar = async () => {
    await finalizarTutoria();
    window.location.reload(); // o redirigir si se prefiere
  };

  if (loading) return <p className="cargando">Cargando tutoría...</p>;

  return (
    <>
      <Header />

      {finalizar && (
        <section className="finalizar-tutoria-content">
          <div className="finalizar-tutoria">
            <h1>¿Finalizar Tutoria?</h1>
            <div className="buttons">
              <Button text="Cancelar" type={false} onClick={handleClickFinalizar} />
              <Button text="Finalizar" type={true} onClick={handleConfirmFinalizar} />
            </div>
          </div>
        </section>
      )}

      {tutoria.horario && (
        <section className="tutoria-content">
          <div className="tutoria">
            <h2>Tutoría</h2>
            <div className="card">
              {[
                { label: "Hora", value: tutoria.horario?.horaInicio },
                { label: "Estado", value: tutoria.estado },
                { label: "Materia", value: tutoria.materia?.nombreMateria },
                { label: "NRC", value: tutoria.materia?.nrc },
                { label: "Tutor", value: tutoria.horario?.tutor?.nombre },
                { label: "Salón", value: tutoria.aula },
                { label: "Edificio", value: tutoria.edificio },
              ].map(({ label, value }) => (
                <div className="card-item" key={label}>
                  <h4 className="card-item-title">{label}</h4>
                  <p className="card-item-text">{value || "..."}</p>
                </div>
              ))}
            </div>

            <div className="buttons">
              <Button text="Finalizar" type={true} onClick={handleClickFinalizar} />
              <Link to={`/tutor/info-tutoria/${id}`}>
                <Button text="Editar" type={true} />
              </Link>
            </div>
          </div>

          <div className="tutoria-alumnos">
            <h2>Tutorados</h2>
            <ul className="alumno-list">
              {tutoria.tutorados?.length > 0 ? (
                tutoria.tutorados.map((al) => (
                  <CardAlumno key={al.matricula} matricula={al.matricula} nombre={al.nombre} />
                ))
              ) : (
                <p>No hay tutorados registrados</p>
              )}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default Tutoria;
