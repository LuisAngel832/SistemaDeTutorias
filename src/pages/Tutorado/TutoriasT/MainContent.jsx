import { useEffect, useState } from "react";
import CardTutoria from "./CardTutoria";

const MainContent = () => {
  const [tutorias, setTutorias] = useState([]);

  const fetchTutorias = async () => {
    try {
      const response = await fetch("https://backtutorias.onrender.com/tutorias/all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) throw new Error("Error al obtener tutorías");

      const data = await response.json();
      const activas = data.data.filter((t) => t.estado === "PENDIENTE");
      setTutorias(activas);
      console.log(data)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTutorias();
  }, []);

  return (
    <div className="main-content-tutorias">
      {tutorias.length > 0 ? tutorias.map((tutoria) => (
        <CardTutoria key={tutoria.idTutoria} tutoria={tutoria} />
      )) : <p>No hay tutorias Activas</p>}
      
    </div>
  );
};

export default MainContent;
