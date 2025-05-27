import HeaderT from "../../../components/Tutorado/HeaderT";
import HeaderTR from "../../../components/Tutorado/HeaderTR";
import Calendario from "./Calendario";
import useResponsive from "../../../hooks/useResponsive";
const HomeT = () => {

  const isMovile = useResponsive(780);
  return (
    <div className="home-tutorado">
      {isMovile ? <HeaderTR /> : <HeaderT />}
      <Calendario mes={5} anio={2025} />
    </div>
  );
}

export default HomeT; 