
import Calendario from "./Calendario";
import { useState,useEffect } from "react";

const MainContent = () => {

  const [tutorias, setTutorias] = useState([]);
  
  
      const featchTutorias = async () => {
          try {
              const response = await fetch("https://backtutorias.onrender.com/tutorado/mis-tutorias",{
                  method: "GET",
                  headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
              });
              
           
  
            const data = await response.json();
  
            if (!response.ok){
              console.log(data)
              console.log(data.message)
              throw new Error(data.message)
            }
  
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
    <div className="main-contnent-home-tutorado">
      <div className="home-tutorado">
        <Calendario mes={6} anio={2025} tutorias={tutorias} />

      </div>
    </div>
  );
};


export default MainContent  