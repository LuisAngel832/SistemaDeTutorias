import React from "react";

const FormInfoTutorias = ({
  fecha,
  setFecha,
  estado,
  nrc,
  setNrc,
  edificio,
  setEdificio,
  aula,
  setAula,
  horariosDisponibles = [],
  setHorario,
  materias = [],
}) => {
  return (
    <form className="info-tutoria-form">
      <label className="info-tutoria-label">Fecha</label>
      <input
        className="info-tutoria-input"
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />

      <label className="info-tutoria-label">Horario</label>
      <select
        className="info-tutoria-input select"
        onChange={(e) => setHorario(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled>
          Selecciona un horario
        </option>
        {horariosDisponibles.map((horario) => (
          <option key={horario.idHorario} value={horario.idHorario}>
            {horario.dia} - {horario.horaInicio} - {horario.horaFin}
          </option>
        ))}
      </select>

      <label className="info-tutoria-label">Estado</label>
      <input
        className="info-tutoria-input"
        type="text"
        value={estado}
        readOnly
      />

      <label className="info-tutoria-label">NRC</label>
      <select
        className="info-tutoria-input select"
        value={nrc}
        onChange={(e) => setNrc(e.target.value)}
      >
        <option value="">Selecciona la materia</option>
        {materias.map((materia) => (
          <option key={materia.nrc} value={materia.nrc}>
            {materia.nrc} - {materia.nombreMateria}
          </option>
        ))}
      </select>

      <label className="info-tutoria-label">Edificio</label>
      <input
        className="info-tutoria-input"
        type="text"
        value={edificio}
        onChange={(e) => setEdificio(e.target.value)}
      />

      <label className="info-tutoria-label">Aula</label>
      <input
        className="info-tutoria-input"
        type="text"
        value={aula}
        onChange={(e) => setAula(e.target.value)}
      />
    </form>
  );
};

export default FormInfoTutorias;
