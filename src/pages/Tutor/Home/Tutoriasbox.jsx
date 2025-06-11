import TutoriaCard from "./TutoriaCard";
import { useTutorias } from "../../../hooks/useTutorias";

const TutoriasBox = () => {
  const { tutorias, isLoading } = useTutorias();

  return (
    <section className="tutorias-box">
      <h3 className="tutoria-title">Tutorías</h3>
      {isLoading ? (
        <p>Cargando tutorías...</p>
      ) : (
        <div className="contenedorTarjetasTotorias">
          {tutorias.length > 0 ? (
            tutorias.map((tutoria) => (
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
