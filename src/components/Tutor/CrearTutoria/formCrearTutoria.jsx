const FormCrearTutoria = () => {
    return (
      <form className="crear-tutoria-form">
        <label htmlFor="" className="crear-tutoria-label">
          Nrc de Materia:
          <input
            type="text"
            className="crear-tutoria-input"
            placeholder="Nrc de Materia"
            name="nrc-materia"
            required
          />
        </label>
  
        <label htmlFor="descripcion" className="crear-tutoria-label">
          Descrición
          <input
            type="text"
            className="crear-tutoria-input"
            name="descripcion"
            placeholder="Descripcion"
            required
          />
        </label>
  
        <label htmlFor="fecha" className="crear-tutoria-label">
          Fecha
          <input
            type="date"
            className="crear-tutoria-input"
            name="fecha"
            required
          />
        </label>
        <label htmlFor="descripcion" className="crear-tutoria-label">
          Lugar
          <input
            type="text"
            className="crear-tutoria-input"
            name="Lugar"
            placeholder="Lugar"
            required
          />
        </label>
      </form>
    );
  };

  export default FormCrearTutoria