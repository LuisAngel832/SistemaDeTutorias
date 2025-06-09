import ButtonTrue from "../../../components/Tutor/ButtonTrue";

const ButtonsInfo = ({
  handleClickCancelarTutoria,
  handleShowModal,
}) => {
  return (
    <div className="info-tutoria-buttons">
      <ButtonTrue type={false} text="Cancelar Tutoría" onClick={handleClickCancelarTutoria} />
      <ButtonTrue type={true} text="Actualizar" onClick={handleShowModal} />
    </div>
  );
};

export default ButtonsInfo;
