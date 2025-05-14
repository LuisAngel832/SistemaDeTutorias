const FormInfoTutorias = () => {
  return (
    <form className="info-tutoria-form">
      <label className="info-tutoria-label" htmlFor="fecha">
        Fecha
      </label>
      <input className="info-tutoria-input" type="text" name="fecha" />

      <label className="info-tutoria-label" htmlFor="materia">
        Materia
      </label>
      <input className="info-tutoria-input" type="text" name="materia" />

      <label className="info-tutoria-label" htmlFor="tutor">
        Tutor
      </label>
      <input className="info-tutoria-input" type="text" name="tutor" />

      <label className="info-tutoria-label" htmlFor="estado">
        Estado
      </label>
      <input className="info-tutoria-input" type="text" name="estado" />

      <label className="info-tutoria-label" htmlFor="nrc">
        Nrc
      </label>
      <input className="info-tutoria-input" type="text" name="nrc" />

      <label className="info-tutoria-label" htmlFor="edificio">
        Edificio
      </label>
      <input className="info-tutoria-input" type="text" name="edificio" />

      <label className="info-tutoria-label" htmlFor="salon">
        Salon
      </label>
      <input className="info-tutoria-input" type="text" name="salon" />
    </form>
  );
};

export default FormInfoTutorias;
