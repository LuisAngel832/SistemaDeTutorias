import HeaderT from './../../../components/Tutorado/HeaderT'
import MainContentPerfil from './MainContentPerfil'
import './perfil.css'

const Perfil  = ()=>{

    

    return (
        <div className="perfil">
            <HeaderT search={false}/>
            <MainContentPerfil  />
        </div>
    )
}


export default Perfil