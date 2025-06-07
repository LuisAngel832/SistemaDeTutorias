const CardTutoria = ({ tutoria }) => {
    return (
      <div className="card-tutoria-content">
        <h2>{tutoria.materia.nombreMateria}</h2>
        <div className="card-info-tutoria">
          <p>Nombre Tutor: {tutoria.horario.tutor.nombre}</p>
          <p>
            {tutoria.fecha},{" "}
            <span>{tutoria.horario.horaInicio.slice(0, 5)}</span> -{" "}
            <span>{tutoria.horario.horaFin.slice(0, 5)}</span> hrs
          </p>
          <p>Cupos Disponibles: {5 -tutoria.tutorados.length}</p>
        </div>
        <button>Inscribirse</button>
      </div>
    );
  };
  
  export default CardTutoria;
  