import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const Calendario = ({ mes, anio, tutorias }) => {
  const obtenerDiasDelMes = (mes, anio) => {
    return new Date(anio, mes, 0).getDate();
  };

  const diasDelMes = obtenerDiasDelMes(mes, anio);
  const dias = Array.from({ length: diasDelMes }, (_, i) => i + 1);

  const nombreMes = new Date(anio, mes - 1).toLocaleString('es-MX', { month: 'long' });

  const diasConTutorias = {};
  tutorias.forEach((tutoria) => {
    const fecha = new Date(tutoria.fecha);
    if (fecha.getMonth() + 1 === mes && fecha.getFullYear() === anio) {
      const dia = fecha.getDate();
      if (!diasConTutorias[dia]) diasConTutorias[dia] = [];
      diasConTutorias[dia].push(tutoria);
    }
  });

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
              key={dia}
              className={`calendario-dia ${
                tutoriasDelDia.length > 0 ? 'tutoria' : index % 2 === 0 ? 'verde' : 'azul'
              }`}
            >
              <strong>{dia}</strong>
              {tutoriasDelDia.map((tutoria, idx) => (
                <div key={idx} className="tutoria-info">
                  {tutoria.materia?.nombreMateria || `NRC: ${tutoria.materia?.nrc}`}
                </div>
              ))}
            </div>
          );

          return tutoriasDelDia.length > 0 ? (
            <Link
              key={dia}
              to={`/tutorado/infoTutoria/${tutoriasDelDia[0].idTutoria}`}
              className="link"
            >
              {contenido}
            </Link>
          ) : (
            contenido
          );
        })}
      </div>
    </div>
  );
};

export default Calendario;
