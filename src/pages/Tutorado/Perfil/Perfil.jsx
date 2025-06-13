import HeaderT from './../../../components/Tutorado/HeaderT'
import MainContentPerfil from './MainContentPerfil'
import HeaderTR from './../../../components/Tutorado/HeaderTR'
import useResponsive from '../../../hooks/useResponsive'
import './perfil.css'

const Perfil  = ()=>{
    const isMobile = useResponsive(780);
    

    return (
        <div className="perfil">
            {isMobile ? <HeaderTR /> : <HeaderT search={false}/>}
            <MainContentPerfil  />
        </div>
    )
}


export default Perfil