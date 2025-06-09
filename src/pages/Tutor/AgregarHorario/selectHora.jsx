import React from "react";

const SelectHora = ({
  title,
  value, // "inicio" o "fin"
  horaInicio,
  setHoraInicio,
  minutosInicio,
  setMinutosInicio,
  horaFin,
  setHoraFin,
  minutosFin,
  setMinutosFin,
}) => {


  const setters = {
    inicio:{
      setHora: setHoraInicio,
      setMin: setMinutosInicio,
      hora: horaInicio,
      minutos: minutosInicio,
    },
    fin:{
      setHora: setHoraFin,
      setMin: setMinutosFin,
      hora: horaFin,
      minutos: minutosFin,
    }
  }

  const {setHora, setMin, hora, minutos} = setters[value] || {};

  const handleHoraChange = (e) => {
    const val = Math.max(0, Math.min(23, parseInt(e.target.value) || 0));
    setHora(val);
  };

  const handleMinutosChange = (e) => {
    const val = Math.max(0, Math.min(59, parseInt(e.target.value) || 0));
    setMin(val);
  };

  return (
    <section className="select-hora">
      <h2 className="select-hora-title">{title}</h2>

      <div className="select-hora-content">
        <div className="select-hora-input-content">
          <input
            type="number"
            className="select-hora-input"
            min={0}
            max={23}
            value={hora ?? ""}
            onChange={handleHoraChange}
            name={`${value}-hora`}
          />
          <p className="select-hora-input-text">hora</p>
        </div>

        <p className="select-hora-puntos">:</p>

        <div className="select-hora-input-content">
          <input
            type="number"
            className="select-hora-input"
            min={0}
            max={59}
            value={minutos ?? ""}
            onChange={handleMinutosChange}
            name={`${value}-minutos`}
          />
          <p className="select-hora-input-text">minutos</p>
        </div>

        <div className="select-hora-am-pm">
          <p>HRS</p>
        </div>
      </div>
    </section>
  );
};

export default SelectHora;
