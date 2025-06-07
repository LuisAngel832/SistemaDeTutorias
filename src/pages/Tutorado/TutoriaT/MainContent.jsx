import InfoTutoria from "./InfoTutoria"
import Buttons from "./Buttons"
import {useParams} from "react-router-dom"
import {useEffect, useState} from "react"

const MainContent = () => {
    const [tutoria, setTutoria] = useState([]);
    const id = useParams().id


    const fetchTutoria = async () => {
        try {
            const response = await fetch(`https://backtutorias.onrender.com/tutorias/${id}`,{
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            if (!response.ok) throw new Error("Error al obtener tutorias");
            const data = await response.json();
            console.log(data.data);
            setTutoria(data.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        fetchTutoria();
    },[id])


    return (
       <div className="main-content">
        
        <InfoTutoria tutoria={tutoria}/>
        <Buttons />
        
       </div> 
    )
}

export default MainContent