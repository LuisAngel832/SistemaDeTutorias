
import { useEffect, useState } from "react";

export const useTutoriasTutorado = () => {
  const [tutorias, setTutorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTutorias = async () => {
      try {
        const response = await fetch("http://localhost:8082/tutorado/mis-tutorias", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.message || "Error al obtener tutorías");
        setTutorias(data.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTutorias();
  }, []);

  return { tutorias, loading, error };
};
