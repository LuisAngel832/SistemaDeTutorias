import "./tutoria.css";
import Button from './../../../components/Tutor/ButtonTrue';
import CardAlumno from './CardAlumno';
import Header from './../../../components/Tutor/Header';
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Tutoria = () => {
  const { id } = useParams();
  const [FinalizarTutoria, setFinalizarTutoria] = useState(false);
  const [tutoria, setTutoria] = useState({});
  const [showModal, setShowModal] = useState(false);

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

  const fetchTutoria = async () => {
    try {
      const response = await fetchWithToken(`https://backtutorias.onrender.com/tutorias/${id}`);
      if (!response.ok) throw new Error("Error al obtener tutoría");
      const data = await response.json();
      console.log(data.data)
      setTutoria(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTutoria();
  }, []);

  const handleClickEditar = () =>{
    
  }

  const handleClickFinalizar = () => {
    setFinalizarTutoria(!FinalizarTutoria);
  };

  const finalizarTutoriaRequest = async()  =>{
    const response = await fetch(`https://backtutorias.onrender.com/tutorias/completa/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: id,

    });
    
    response.json();
    console.log(response);
  }
  return (
    <>
      <Header />

      {FinalizarTutoria && (
        <section className="finalizar-tutoria-content">
          <div className="finalizar-tutoria">
            <h1>¿Finalizar Tutoria?</h1>
            <div className="buttons">
              <Button text="Cancelar" type={false} onClick={handleClickFinalizar}/>
              <Button text="Finalizar" type={true} onClick={finalizarTutoriaRequest} />
            </div>
          </div>
        </section>
      )}

      {tutoria.horario ? (
        <section className="tutoria-content">
          <div className="tutoria">
            <h2>Tutoría</h2>
            <div className="card">
              <div className="card-item">
                <h4 className="card-item-title">Hora</h4>
                <p className="card-item-text-important">{tutoria.horario?.horaInicio}</p>
              </div>
              <div className="card-item">
                <h4 className="card-item-title">Estado</h4>
                <p className="card-item-text-important">{tutoria.estado || "..."}</p>
              </div>
              <div className="card-item">
                <h4 className="card-item-title">Materia</h4>
                <p className="card-item-text">{tutoria.materia?.nombreMateria || "Sin materia"}</p>
              </div>
              <div className="card-item">
                <h4 className="card-item-title">NRC</h4>
                <p className="card-item-text">{tutoria.materia?.nrc || "..."}</p>
              </div>
              <div className="card-item">
                <h4 className="card-item-title">Tutor</h4>
                <p className="card-item-text">{tutoria.horario?.tutor.nombre || "Sin nombre"}</p>
              </div>
              <div className="card-item">
                <h4 className="card-item-title">Salón</h4>
                <p className="card-item-text">{tutoria.aula || "..."}</p>
              </div>
              <div className="card-item">
                <h4 className="card-item-title">Edificio</h4>
                <p className="card-item-text">{tutoria.edificio || "..."}</p>
              </div>
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
              {/* Aquí deberías mapear los alumnos reales si vienen en tutoria.tutorados */}
              <CardAlumno matricula="123456" nombre="Juan Carlos Manzanillo" />
              <CardAlumno matricula="654321" nombre="Ana López" />
              <CardAlumno matricula="987654" nombre="Carlos Martínez" />
            </ul>
          </div>
        </section>
      ) : (
        <p className="cargando">Cargando tutoría...</p>
      )}
    </>
  );
};

export default Tutoria;
