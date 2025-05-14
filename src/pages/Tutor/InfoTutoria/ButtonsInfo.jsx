import ButtonTrue from "../../../components/Tutor/ButtonTrue";
const ButtonsInfo = () => {
    return (
        <div className="info-tutoria-buttons">
          <ButtonTrue type={false} text="Cancelar Tutoria" onClick={() => setCancelarTutoria(!cancelarTutoria)}/>
          <ButtonTrue type={true} text="Actualizar" />
        </div>
    );
};

export default ButtonsInfo