import ButtonTrue from "../../../components/Tutor/ButtonTrue";
import FormCrearTutoria from "./formCrearTutoria";
import VentanaEmerjente from "../../../components/Tutor/VentanaEmerjente";
import useCrearTutoria from "../../../hooks/useCrearTutoria";

const MainCrearT = () => {
  const {
    nrcMateria,
    setNrcMateria,
    horario,
    setHorario,
    fecha,
    setFecha,
    edificio,
    setEdificio,
    aula,
    setAula,
    mensaje,
    showModal,
    setShowModal,
    handleSubmit,
  } = useCrearTutoria();


  const handleClick = () => {
    setShowModal(false);
  };



  return (
    <>
      {showModal && (
        <VentanaEmerjente
          handleClickBtn1={handleClick}
          text={mensaje}
          textBtn1={"Aceptar"}
          textBtn2={""}
        />
      )}

      <div className="crear-tutoria-container">
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
            <button className="btn-aceptar" onClick={handleSubmit}>
              Crear
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCrearT;
