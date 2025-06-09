
import { useEffect, useState } from "react";

export const useTutorias = () => {
  const [tutorias, setTutorias] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTutorias = async () => {
      try {
        const response = await fetch('https://backtutorias.onrender.com/tutor/misTutorias', {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) return;

        const data = await response.json();
        setTutorias(data.data || []);
      } catch (error) {
        console.error('Error fetching tutorias:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTutorias();
  }, []);

  return { tutorias, isLoading };
};
