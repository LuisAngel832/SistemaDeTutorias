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

  export default CardAlumno;