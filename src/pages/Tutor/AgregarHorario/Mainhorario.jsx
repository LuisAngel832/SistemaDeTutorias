import Caledario from "./Calendario";
import { useState } from "react";
import SelectHora from "./selectHora";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const MainHorario = () => {
  const [fecha, setFecha] = useState("");
  const [horaInicio, setHoraInicio] = useState("");
  const [minutosInicio, setMinutosInicio] = useState("");
  const [horaFin, setHoraFin] = useState("");
  const [minutosFin, setMinutosFin] = useState("");

  const handleAgregarHorario = async () => {
    if (!fecha || horaInicio === "" || minutosInicio === "" || horaFin === "" || minutosFin === "") {
      alert("Completa todos los campos");
      return;
    }
  
    const horario = {
      dia: format(fecha, "EEEE", { locale: es }).toUpperCase(),
      horaInicio: `${horaInicio.toString().padStart(2, "0")}:${minutosInicio.toString().padStart(2, "0")}`,
      horaFin: `${horaFin.toString().padStart(2, "0")}:${minutosFin.toString().padStart(2, "0")}`,
    };
  
    console.log("Enviando horario:", horario);
    console.log("Token:", localStorage.getItem("token"));
  
    try {
      const response = await fetch("https://backtutorias.onrender.com/horarios/crear-horario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(horario),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Horario agregado con éxito ✅");
        console.log(data);
      } else {
        alert("Error al agregar horario: " + data.message);
        console.error(data);
      }
    } catch (error) {
      console.error("Error de red:", error);
      alert("Error al conectar con el servidor");
    }

    
    

  };


  
  

  return (
    <section className="main-horario">
      <h2>Agregar Horario</h2>
      <div className="main-horario-content">
        <div className="select-fecha">
          <Caledario fecha={fecha} setFecha={setFecha} />
        </div>
        <div className="select-hora-min">
          <SelectHora
            title="Hora de Inicio"
            value="inicio"
            horaInicio={horaInicio}
            setHoraInicio={setHoraInicio}
            minutosInicio={minutosInicio}
            setMinutosInicio={setMinutosInicio}
            horaFin={horaFin}
            setHoraFin={setHoraFin}
            minutosFin={minutosFin}
            setMinutosFin={setMinutosFin}
          />

          <SelectHora
            title="Hora Final"
            value="fin"
            horaInicio={horaInicio}
            setHoraInicio={setHoraInicio}
            minutosInicio={minutosInicio}
            setMinutosInicio={setMinutosInicio}
            horaFin={horaFin}
            setHoraFin={setHoraFin}
            minutosFin={minutosFin}
            setMinutosFin={setMinutosFin}
          />
        </div>
      </div>
      <div className="button-content">
        <button className="btn-aceptar" onClick={handleAgregarHorario}>
          Agregar Horario
        </button>
      </div>
    </section>
  );
};

export default MainHorario;
