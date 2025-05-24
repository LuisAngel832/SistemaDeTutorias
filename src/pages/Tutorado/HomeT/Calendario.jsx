import React from 'react';
import './home.css';

const Calendario = ({ mes, anio }) => {
  // Obtener la cantidad de días del mes
  const obtenerDiasDelMes = (mes, anio) => {
    return new Date(anio, mes, 0).getDate();
  };

  const diasDelMes = obtenerDiasDelMes(mes, anio);
  const dias = Array.from({ length: diasDelMes }, (_, i) => i + 1);

  return (
    <div className="calendario-grid">
      {dias.map((dia, index) => (
        <div
          key={dia}
          className={`calendario-dia ${index % 2 === 0 ? 'verde' : 'azul'}`}
        >
          {dia}
        </div>
      ))}
    </div> 
  );
};

export default Calendario;
