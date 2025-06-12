import HeaderT from "../../../components/Tutorado/HeaderT"
import MainContentT from "./MainContent"
import "./tutoria.css"
import { useEffect } from "react";

const TutoriaT = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Para que al redirigir, se muestre desde arriba
    }, []);

    return (
        <section className="tutoria-tutorados redesigned-view">
            <HeaderT />
            <div className="tutoria-header">
                <h2>📘 Mis Tutorías</h2>
            </div>
            <MainContentT />
        </section>
    )
}

export default TutoriaT
