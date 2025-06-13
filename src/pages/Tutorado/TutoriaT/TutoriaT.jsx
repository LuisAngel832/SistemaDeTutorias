import HeaderT from "../../../components/Tutorado/HeaderT"
import MainContentT from "./MainContent"
import "./tutoria.css"
import useResponsive from "../../../hooks/useResponsive"
import HeaderTR from "../../../components/Tutorado/HeaderTR"
const TutoriaT = () => {
    const isMobile = useResponsive(780);

    return (
        <section className="tutoria-tutorados">

           {isMobile ? <HeaderTR /> : <HeaderT search={false}/>}
            <MainContentT />
        </section>
    )
}

export default TutoriaT