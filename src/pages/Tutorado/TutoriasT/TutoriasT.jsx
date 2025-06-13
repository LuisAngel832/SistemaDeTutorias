import HeaderT from "../../../components/Tutorado/HeaderT";
import MainContent from "./MainContent";
import "./tutorias.css";
import useResponsive from "../../../hooks/useResponsive";
import HeaderTR from "../../../components/Tutorado/HeaderTR";



const TutoriasT = () => {
  const isMobile = useResponsive(780);
  return (
    <div className="tutorias-tutorados">
      
      {isMobile ? <HeaderTR /> : <HeaderT search={false}/>}
      <MainContent />
    </div>
  );
}

export default TutoriasT;