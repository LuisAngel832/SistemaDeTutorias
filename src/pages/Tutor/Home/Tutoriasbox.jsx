import TutoriaCard from "./TutoriaCard";
import { useState, useEffect } from "react";

const TutoriasBox = () => {
    const [Tutorias, setTutorias] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Estado para controlar la carga

    useEffect(() => {
        const fetchTutorias = async () => {
            try {
                const response = await fetch('https://backtutorias.onrender.com/tutor/misTutorias', {
                    method: "GET", // Usando GET en mayúsculas
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`,
                    }
                });

                if (!response.ok) {
                    const errorText = await response.text(); 
                    return;
                }

                const data = await response.json();
                setTutorias(data.data); 
            } catch (error) {
                console.error('Error fetching tutorias:', error);
            } finally {
                setIsLoading(false); 
            }
        };

        fetchTutorias();
    }, []);

    return (
        <section className="tutorias-box">
            <h3 className="tutoria-title">Tutorías</h3>
            {isLoading ? (
                <p>Cargando tutorías...</p> // Puedes mostrar un spinner en lugar de esto
            ) : (
                <div className="contenedorTarjetasTotorias">
                    {Tutorias.length > 0 ? (
                        Tutorias.map((tutoria) => (
                            <TutoriaCard key={tutoria.id} tutoriaData={tutoria} />
                        ))
                    ) : (
                        <p>No hay tutorías disponibles.</p> 
                    )}
                </div>
            )}
        </section>
    );
};

export default TutoriasBox;
