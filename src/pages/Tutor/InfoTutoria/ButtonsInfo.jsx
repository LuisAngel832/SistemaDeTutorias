import ButtonTrue from "../../../components/Tutor/ButtonTrue";
const ButtonsInfo = ( {handleClickCancelarTutoria}) => {
    return (
        <div className="info-tutoria-buttons">
          <ButtonTrue type={false} text="Cancelar Tutoria" onClick={handleClickCancelarTutoria}/>
          <ButtonTrue type={true} text="Actualizar" />
        </div>
    );
};

export default ButtonsInfo