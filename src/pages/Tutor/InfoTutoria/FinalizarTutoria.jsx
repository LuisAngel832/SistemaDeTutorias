const FinalizarTutoria = () => {
  return (
    <section className="finalizar-tutoria-content">
      <div className="finalizar-tutoria">
        <h1>¿Finalizar Tutoria?</h1>
        <div className="buttons">
          <ButtonTrue text="Cancelar Tutoria" type={false} />
          <ButtonTrue
            text="Regresar"
            type={true}
            onClick={() => {
              setCancelarTutoria(!cancelarTutoria);
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default FinalizarTutoria;