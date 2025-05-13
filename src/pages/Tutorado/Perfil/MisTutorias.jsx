const MisTutorias = () =>{
    return (
        <div className="mistutorias-content">
            <div className="title">
                <p>Mis Tutorias</p>
            </div>
            <div className="mistutorias-completadas">
                <p>Completadas</p>
                <ul>
                    <li>Algebra basico(juan perez)</li>
                    <li>fisica (Martin Perez)</li>
                </ul>
            </div>

            <div className="mistutorias-canceladas">
                <p>Canceladas</p>
                <ul>
                    <li>Programacion Orientada a objetos (Adolfo Parada)</li>
                </ul>
            </div>
        </div>
    )
}

export default MisTutorias