import Calendario from "./Calendario";
import { useTutoriasTutorado } from "../../../hooks/useTutoriaTutorado";

const MainContent = () => {
  const { tutorias, error } = useTutoriasTutorado();

  return (
    <div className="main-content-home-tutorado">
      <div className="home-tutorado">
        {error ? (
          <p className="error-text">Ocurrió un error: {error}</p>
        ) : (
          <Calendario mes={6} anio={2025} tutorias={tutorias} />
        )}
      </div>
    </div>
  );
};

export default MainContent;
