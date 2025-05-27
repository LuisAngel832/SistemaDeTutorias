import Buttontrue from "../../../components/Tutor/ButtonTrue";
import FormCrearTutoria from "./formCrearTutoria";
import { useState } from "react";
const MainCrearT = () => {
  const [nrcMateria, setNrcMateria] = useState("");
  const [horario, setHorario] = useState("");
  const [fecha, setFecha] = useState("");
  const [edificio, setEdificio] = useState("");
  const [aula, setAula] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(localStorage.getItem("token"))
    try{
        const response =  await fetch("http://localhost:8082/tutorias/genera-tutoria", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                nrcMateria,
                horario,
                fecha,
                edificio,
                aula
            })
        });

        if(!response.ok){
            console.log(await response.text())
        }

        const data = await response.json();
        console.log(data)

    }catch(error){
        console.log(error)
    }
  };


  return (
    <div className="crear-tutoria-container ">
      <h2 className="crear-tutoria-title">Crear Tutoria</h2>
      <div className="crear-tutoria-content">
        <FormCrearTutoria 
            nrcMateria={nrcMateria}
            setNrcMateria={setNrcMateria}
            horario={horario}
            setHorario={setHorario}
            fecha={fecha}
            setFecha={setFecha}
            edificio={edificio}
            setEdificio={setEdificio}
            aula={aula}
            setAula={setAula}
        />
        <div className="button-crear-tutoria">
          <button className="btn-aceptar" onClick={handleSubmit}>Crear</button>
        </div>
      </div>
    </div>
  );
};


export default MainCrearT