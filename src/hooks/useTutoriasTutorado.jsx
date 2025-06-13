
import { useEffect, useState } from "react";

export const useTutoriasTutorado = () => {
  const [tutorias, setTutorias] = useState([]);
  const [error, setError] = useState(null);

  const fetchTutorias = async () => {
    try {
      const response = await fetch("https://backtutorias.onrender.com/tutorado/mis-tutorias", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Error al obtener tutorías");
      setTutorias(data.data || []);
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTutorias();
  }, []);

  return { tutorias, error };
};
