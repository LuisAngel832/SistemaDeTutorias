const FormCrearTutoria = ({nrcMateria, setNrcMateria, horario, setHorario, fecha, setFecha, edificio, setEdificio, aula, setAula,  }) => {
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
            value={nrcMateria}
            onChange={(e) => setNrcMateria(e.target.value)}
          />
        </label>
  
        <label htmlFor="horario" className="crear-tutoria-label">
          Horario
          <input
            type="text"
            className="crear-tutoria-input"
            name="horario"
            placeholder="Descripcion"
            required
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
          />
        </label>
  
        <label htmlFor="fecha" className="crear-tutoria-label">
          Fecha
          <input
            type="date"
            className="crear-tutoria-input"
            name="fecha"
            required
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </label>
        <label htmlFor="edificio" className="crear-tutoria-label">
          Edificio
          <input
            type="text"
            className="crear-tutoria-input"
            name="edificio"
            placeholder="edificio"
            required
            value={edificio}
            onChange={(e) => setEdificio(e.target.value)}
          />
        </label>
        <label htmlFor="aula" className="crear-tutoria-label">
          Aula
          <input
            type="text"
            className="crear-tutoria-input"
            name="aula"
            placeholder="aula"
            required
            value={aula}
            onChange={(e) => setAula(e.target.value)}
          />
        </label>
      </form>
    );
  };

  export default FormCrearTutoria