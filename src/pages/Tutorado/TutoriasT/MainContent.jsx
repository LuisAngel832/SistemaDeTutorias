import { useEffect, useState } from "react";
import CardTutoria from "./CardTutoria";

const MainContent = () => {
    const [tutorias, setTutorias] = useState([]);


    const featchTutorias = async () => {
        try {
            const response = await fetch("https://backtutorias.onrender.com/tutorias/all",{
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            if (!response.ok) throw new Error("Error al obtener tutorias");
            const data = await response.json();

            setTutorias(data.data);
            console.log(data.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        featchTutorias();
    }, [])

    return (
        <div className="main-content-tutorias">
            {tutorias.map((tutoria) => (
                <CardTutoria key={tutoria.id} tutoria={tutoria} />
            ))}

        </div>
    )
}

export default MainContent;