
import { useEffect, useState } from "react";

const fetchWithToken = async (url, options = {}) => {
  return await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      ...options.headers,
    },
  });
};

export const useTutoriaDetail = (id) => {
  const [tutoria, setTutoria] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchTutoria = async () => {
    try {
      const res = await fetchWithToken(`https://backtutorias.onrender.com/tutorias/${id}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error al obtener tutoría");
      setTutoria(data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const finalizarTutoria = async () => {
    try {
      const res = await fetchWithToken(`https://backtutorias.onrender.com/tutorias/completa/${id}`, {
        method: "PUT",
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "Error al finalizar tutoría");
      return result;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTutoria();
  }, [id]);

  return {
    tutoria,
    loading,
    finalizarTutoria,
  };
};
