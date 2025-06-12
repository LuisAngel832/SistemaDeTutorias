const CardTutoria = ({ tutor, fecha, hora, cuposDisponibles, cuposOcupados, totalCupos }) => {
    return (
        <div className="card-tutoria-content">
            <h2>Tutoría de Programación</h2>
            <div className="card-info-tutoria">
                <p>Tutor: <span>{tutor}</span></p>
                <div className="fecha">
                    <p>Fecha: <span>{fecha}</span></p>
                    <p>Hora: <span>{hora}</span></p>
                </div>
                <div className="cupos">
                    <p>Cupos: <span className="disponibles">{cuposDisponibles}</span> disponibles / 
                    <span className="ocupados">{cuposOcupados}</span> ocupados / 
                    <span className="total">{totalCupos}</span> total</p>
                </div>
            </div>
            <button>Ver Detalles</button>
        </div>
    )
}

export default CardTutoria;