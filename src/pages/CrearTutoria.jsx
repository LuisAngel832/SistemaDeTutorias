import './../assets/css/crearTutoria.css';
import Buttontrue from './../components/Buttontrue';

const CrearTutoria = () => {
    return (
        <div className="crear-tutoria">
            <h2 className="crear-tutoria-title">Crear Tutoria</h2>
            <form className="crear-tutoria-form">

                <label htmlFor="" className="crear-tutoria-label">Nrc de Materia:
                    <input type="text" className="crear-tutoria-input" placeholder="Nrc de Materia" name='nrc-materia' required />
                </label>

                <label htmlFor="descripcion" className='crear-tutoria-label'>Descrición
                    <input type="text" className='crear-tutoria-input' name='descripcion' placeholder='Descripcion' required />
                </label>

                <label htmlFor="fecha" className='crear-tutoria-label'>Fecha
                    <input type="date" className='crear-tutoria-input' name='fecha' required />
                </label>
                <label htmlFor="descripcion" className='crear-tutoria-label'>Lugar
                    <input type="text" className='crear-tutoria-input' name='Lugar' placeholder='Lugar' required />
                </label>


            </form>
            <div className='button-crear-tutoria'>
                <Buttontrue text="Crear" />
            </div>
        </div>
    );
}

export default CrearTutoria;