const Buttons = ({ handleClick, handleClick2, handleClick3, tutoradoInscrito }) => {
  return (
    <div className="buttons-content">
      <button onClick={handleClick} className="btn-inscribirse">
        Inscribirse
      </button>

      {tutoradoInscrito && (
        <button onClick={handleClick2} className="btn-cancelar">
          Cancelar <br /> Inscripción
        </button>
      )}

      <button onClick={handleClick3} className="btn-notificaciones">
        Activar Recordatorio
      </button>
    </div>
  );
};

export default Buttons;
