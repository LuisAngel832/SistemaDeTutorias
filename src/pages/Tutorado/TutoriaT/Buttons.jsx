


const Buttons = ({ handleClick, handleClick2 }) => {
  return (
    <div className="buttons-content">
      <button
        onClick={handleClick}
        className="btn-inscribirse"
      >
        Inscribirse
      </button>
      <button
        onClick={handleClick2}
        className="btn-cancelar"
      >
        Cancelar <br/>Inscripcion
      </button>

        <button className="btn-notificaciones">
          Activar Recordatorio
        </button>
    </div>
  );
}

export default Buttons;