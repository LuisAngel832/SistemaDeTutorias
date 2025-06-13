import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Calendario = ({ mes, anio, tutorias = [] }) => {
  const obtenerDiasDelMes = (mes, anio) => new Date(anio, mes, 0).getDate();

  const diasDelMes = obtenerDiasDelMes(mes, anio);
  const dias = Array.from({ length: diasDelMes }, (_, i) => i + 1);

  const nombreMes = new Date(anio, mes - 1).toLocaleString("es-MX", {
    month: "long",
  });

  const diasConTutorias = tutorias.reduce((acc, tutoria) => {
    const fecha = new Date(tutoria.fecha);
    if (fecha.getMonth() + 1 === mes && fecha.getFullYear() === anio) {
      const dia = fecha.getDate();
      if (!acc[dia]) acc[dia] = [];
      acc[dia].push(tutoria);
    }
    return acc;
  }, {});

  return (
    <div className="calendario-container">
      <h2 className="calendario-header">
        {nombreMes.charAt(0).toUpperCase() + nombreMes.slice(1)} {anio}
      </h2>

      <div className="calendario-grid">
        {dias.map((dia, index) => {
          const tutoriasDelDia = diasConTutorias[dia] || [];

          const contenido = (
            <div
              className={`calendario-dia ${
                tutoriasDelDia.length > 0 ? "tutoria-tutorado" : index % 2 === 0 ? "verde" : "azul"
              }`}
            >
              <strong>{dia}</strong>
              {tutoriasDelDia.map((tutoria) => (
                <div
                  key={tutoria.idTutoria}
                  className="tutoria-info"
                  title={`NRC: ${tutoria.materia?.nrc}`}
                >
                  {tutoria.materia?.nombreMateria || `NRC: ${tutoria.materia?.nrc}`}
                </div>
              ))}
            </div>
          );

          return tutoriasDelDia.length > 0 ? (
            <Link
              key={`link-${dia}`}
              to={`/tutorado/infoTutoria/${tutoriasDelDia[0].idTutoria}`}
              className="link"
            >
              {contenido}
            </Link>
          ) : (
            <div key={`dia-${dia}`}>{contenido}</div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendario;
