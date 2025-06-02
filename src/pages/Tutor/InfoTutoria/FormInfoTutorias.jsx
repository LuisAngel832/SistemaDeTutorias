const   FormInfoTutorias = ({tutoriaData}) => {
  if (!tutoriaData || !tutoriaData.materia) {
    return <p>Cargando información de la tutoría...</p>;
  }
  return (
    <form className="info-tutoria-form">
      <label className="info-tutoria-label" htmlFor="fecha">
        Fecha
      </label>
      <input className="info-tutoria-input" type="text" name="fecha" value={tutoriaData.fecha} />

      <label className="info-tutoria-label" htmlFor="materia">
        Materia
      </label>
      <input className="info-tutoria-input" type="text" name="materia"  value={tutoriaData.materia.nombreMateria}/>

      <label className="info-tutoria-label" htmlFor="tutor">
        Tutor
      </label>
      <input className="info-tutoria-input" type="text" name="tutor"  value={tutoriaData.horario.tutor.nombre}/>

      <label className="info-tutoria-label" htmlFor="estado">
        Estado
      </label>
      <input className="info-tutoria-input" type="text" name="estado"  value={tutoriaData.estado}/>

      <label className="info-tutoria-label" htmlFor="nrc">
        Nrc
      </label>
      <input className="info-tutoria-input" type="text" name="nrc"  value={tutoriaData.materia.nrc}/>

      <label className="info-tutoria-label" htmlFor="edificio">
        Edificio
      </label>
      <input className="info-tutoria-input" type="text" name="edificio" value={tutoriaData.edificio}/>

      <label className="info-tutoria-label" htmlFor="salon">
        Salon
      </label>
      <input className="info-tutoria-input" type="text" name="salon" value={tutoriaData.aula}/>
    </form>
  );
};

export default FormInfoTutorias;
