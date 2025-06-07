import ButtonTrue from "../../../components/Tutor/ButtonTrue";
const   ButtonsInfo = ( {handleClickCancelarTutoria, handleSubmitActualizacion, handleShowModal} ) => {
    return (
        <div className="info-tutoria-buttons">
          <ButtonTrue type={false} text="Cancelar Tutoria" onClick={handleClickCancelarTutoria}/>
          <ButtonTrue type={true} text="Actualizar" onClick={handleShowModal} />
        </div>
    );
};

export default ButtonsInfo