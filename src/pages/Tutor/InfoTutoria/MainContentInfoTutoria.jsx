import { useParams } from "react-router-dom";
import FormInfoTutorias from "./FormInfoTutorias";
import ButtonsInfo from "./ButtonsInfo";
import FinalizarTutoria from "./FinalizarTutoria";
import VentanaEmerjente from "../../../components/Tutor/VentanaEmerjente";
import { useTutoriaDetail } from "../../../hooks/useTutoriaDetail";
import { useTutoriaActions } from "../../../hooks/useTutoriaActions";

const MainContentInfoTutoria = () => {
  const { id } = useParams();
  const { tutoria, setTutoria, horariosDisponibles, materias } =
    useTutoriaDetail(id);
  const {
    cancelarTutoria,
    actualizarTutoria,
    handleCancelarTutoria,
    handleConfirmCancel,
    handleShowModal,
    handleSubmitActualizacion,
  } = useTutoriaActions(tutoria);

  return (
    <div className="main-content-info-tutoria">
      <div className="info-tutoria-tutor">
        {cancelarTutoria && (
          <FinalizarTutoria
            handleClickCancelarTutoria={handleCancelarTutoria}
            handleOnConfirm={handleConfirmCancel}
          />
        )}
        {actualizarTutoria && (
          <VentanaEmerjente
            text={"Actualizar Tutoria"}
            textBtn1={"Cancelar"}
            textBtn2={"Actualizar"}
            handleClickBtn1={handleShowModal}
            handleClickBtn2={handleSubmitActualizacion}
          />
        )}
        <FormInfoTutorias
          fecha={tutoria.fecha}
          setFecha={(fecha) => setTutoria((prev) => ({ ...prev, fecha }))}
          estado={tutoria.estado}
          setEstado={(estado) => setTutoria((prev) => ({ ...prev, estado }))}
          nrc={tutoria.nrc}
          setNrc={(nrc) => setTutoria((prev) => ({ ...prev, nrc }))}
          edificio={tutoria.edificio}
          setEdificio={(edificio) =>
            setTutoria((prev) => ({ ...prev, edificio }))
          }
          aula={tutoria.aula}
          setAula={(aula) => setTutoria((prev) => ({ ...prev, aula }))}
          horariosDisponibles={horariosDisponibles}
          materias={materias}
          idTutoria={tutoria.idTutoria}
          horario={tutoria.idHorario}
          setHorario={(horario) =>
            setTutoria((prev) => ({ ...prev, idHorario: horario }))
          }
        />
        <ButtonsInfo
          handleClickCancelarTutoria={handleCancelarTutoria}
          handleSubmitActualizacion={handleSubmitActualizacion}
          handleShowModal={handleShowModal}
        />
      </div>
    </div>
  );
};

export default MainContentInfoTutoria;
