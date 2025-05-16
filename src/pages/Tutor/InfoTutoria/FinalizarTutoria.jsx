import ButtonTrue from "../../../components/Tutor/ButtonTrue";

const      FinalizarTutoria = ({handleClickCancelarTutoria}) => {
  return (
    <section className="finalizar-tutoria-content">
      <div className="finalizar-tutoria">
        <h1>¿Finalizar Tutoria?</h1>
        <div className="buttons">
          <ButtonTrue text="Cancelar Tutoria" type={false} 
            onClick={()=>{alert("cancelar tutoria"), handleClickCancelarTutoria()}}  
          />
          <ButtonTrue
            text="Regresar"
            type={true}
            onClick={handleClickCancelarTutoria}
          />
        </div>
      </div>
    </section>
  );
};

export default FinalizarTutoria;