import Header from "../../../components/Tutor/Header"
import MainHorario from "./Mainhorario"
import './agregarHorario.css'
import './agregarHorarioR.css'
const AgregarHorario = () =>{
    return(
        <div className="agregar-horario">
            <Header search={false}/>  
            <MainHorario/>
        </div>
    )
}

export default AgregarHorario