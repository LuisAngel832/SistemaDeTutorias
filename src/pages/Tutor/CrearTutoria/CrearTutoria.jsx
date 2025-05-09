import FormCrearTutoria from "./formCrearTutoria";
import "./crearTutoria.css";
import Buttontrue from "../../../components/Tutor/ButtonTrue";
import Header from "../../../components/Tutor/Header";

const CrearTutoria = () => {
  return (
    <div className="crear-tutoria-container">
    <Header />
    <div className="crear-tutoria">
      <h2 className="crear-tutoria-title">Crear Tutoria</h2>
      <div className="crear-tutoria-content">
        <FormCrearTutoria />
        <div className="button-crear-tutoria">
          <Buttontrue text="Crear" type={true} />
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default CrearTutoria;
