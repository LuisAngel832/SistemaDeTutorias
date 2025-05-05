import TutoriaCard from "./TutoriaCard"

const TutoriasBox = ()=>{
    return (
        <section className="tutorias-box">
           <h3 className="tutoria-title">Tutorias</h3>
           <div className="contenedorTarjetasTotorias">
              <TutoriaCard/>
              <TutoriaCard/>
              <TutoriaCard/>
              <TutoriaCard/>
              <TutoriaCard/>
              <TutoriaCard/>
              <TutoriaCard/>
              <TutoriaCard/>

           </div>
        </section>
    )
}

export default TutoriasBox