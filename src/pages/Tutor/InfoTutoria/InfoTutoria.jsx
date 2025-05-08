import './infoTutoria.css';
import ButtonTrue from '../../../components/Tutor/ButtonTrue';
import { useState } from 'react';

const InfoTutoria = () =>{
    const [cancelarTutoria, setCancelarTutoria] = useState(true);
    return(
        <div className="info-tutoria">

        {cancelarTutoria ?(
            <section className="finalizar-tutoria-content">
            <div className="finalizar-tutoria">
                <h1>¿Finalizar Tutoria?</h1>
                <div className="buttons">
                <ButtonTrue text='Cancelar Tutoria'  type={false} />
                <ButtonTrue text='Regresar' type={true}  />
                </div>
            </div>
            </section>
            ):(<></>)
        }
            <form className='info-tutoria-form'>
                <label className='info-tutoria-label' htmlFor="fecha">Fecha</label>
                <input className='info-tutoria-input' type="text" name="fecha" />

                <label className='info-tutoria-label' htmlFor="materia">Materia</label>
                <input className='info-tutoria-input' type="text" name="materia" />

                <label className='info-tutoria-label'htmlFor="tutor">Tutor</label>
                <input className='info-tutoria-input' type="text" name="tutor" />

                <label className='info-tutoria-label'htmlFor="estado">Estado</label>
                <input className='info-tutoria-input' type="text" name="estado" />

                <label className='info-tutoria-label' htmlFor="nrc">Nrc</label>
                <input className='info-tutoria-input' type="text" name="nrc" />

                <label className='info-tutoria-label' htmlFor="edificio">Edificio</label>
                <input className='info-tutoria-input' type="text" name="edificio" />

                <label className='info-tutoria-label' htmlFor="salon">Salon</label>
                <input className='info-tutoria-input' type="text" name="salon" />
            </form>
            <div className="info-tutoria-buttons">
                <ButtonTrue type={false} text="Cancelar Tutoria"/>
                <ButtonTrue type={true} text='Actualizar' />
            </div>
        </div>
    )
}

export default InfoTutoria