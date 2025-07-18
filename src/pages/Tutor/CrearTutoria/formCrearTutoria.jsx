import { useEffect, useState } from "react";

const FormCrearTutoria = ({
  nrcMateria,
  setNrcMateria,
  horario,
  setHorario,
  fecha,
  setFecha,
  edificio,
  setEdificio,
  aula,
  setAula,
}) => {
  const [horariosDisponibles, setHorariosDisponibles] = useState([]);

  useEffect(() => {
    const obtenerHorarios = async () => {
      try {
        const response = await fetch(
          "https://backtutorias.onrender.com/tutor/misHorarios",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (!response.ok) {
          console.error("Error al obtener horarios");
          return;
        }

        const data = await response.json();
        setHorariosDisponibles(data.data || []);
      } catch (error) {
        console.error("Error de red al cargar horarios:", error);
      }
    };

    obtenerHorarios();
  }, []);

  return (
    <form className="crear-tutoria-form">
      <div className="input-group">
        <label htmlFor="nrc-materia" className="crear-tutoria-label">
          NRC de Materia
        </label>
        <input
          type="number"
          className="crear-tutoria-input"
          name="nrc-materia"
          placeholder="NRC"
          required
          value={nrcMateria}
          onChange={(e) => setNrcMateria(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="horario" className="crear-tutoria-label">
          Horario
        </label>
        <select
          className="crear-tutoria-input select"
          name="horario"
          onChange={(e) => setHorario(e.target.value)}
          value={horario}
          required
        >
          <option value="">Selecciona tu horario</option>
          {horariosDisponibles.map((h) => (
            <option key={h.idHorario} value={h.idHorario}>
              {h.horaInicio} - {h.horaFin} - {h.dia}
            </option>
          ))}
        </select>
      </div>

      <div className="input-group">
        <label htmlFor="fecha" className="crear-tutoria-label">
          Fecha
        </label>
        <input
          type="date"
          className="crear-tutoria-input"
          name="fecha"
          required
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="edificio" className="crear-tutoria-label">
          Edificio
        </label>
        <select
          className="crear-tutoria-input select"
          name="edificio"
          value={edificio}
          onChange={(e) => setEdificio(e.target.value)}
          required
        >
          <option value="">Selecciona el edificio</option>
          <option value="1">Edificio 1</option>
          <option value="2">Edificio 2</option>
        </select>
      </div>

      <div className="input-group">
        <label htmlFor="aula" className="crear-tutoria-label">
          Aula
        </label>
        <select
          className="crear-tutoria-input select"
          name="aula"
          value={aula}
          onChange={(e) => setAula(e.target.value)}
          required
        >
          <option value="">Selecciona el aula</option>
          {Array.from({ length: 16 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              Aula {i + 1}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default FormCrearTutoria;
