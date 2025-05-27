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

  const handleHoraChange = (e) => {
    const val = parseInt(e.target.value);
    if (value === "inicio") {
      setHoraInicio(Math.min(val, 23));
    } else {
      setHoraFin(Math.min(val, 23));
    }
  };

  const handleMinutosChange = (e) => {
    const val = parseInt(e.target.value);
    if (value === "inicio") {
      setMinutosInicio(Math.min(val, 59));
    } else {
      setMinutosFin(Math.min(val, 59));
    }
  };

 

  const horaActual = value === "inicio" ? horaInicio : horaFin;
  const minutosActual = value === "inicio" ? minutosInicio : minutosFin;

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
            value={horaActual ?? ""}
            onChange={handleHoraChange}
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
            value={minutosActual ?? ""}
            onChange={handleMinutosChange}
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
