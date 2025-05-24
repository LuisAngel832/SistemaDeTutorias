import HeaderT from "../../../components/Tutorado/HeaderT";
import HeaderTR from "../../../components/Tutorado/HeaderTR";
import Calendario from "./Calendario";

const HomeT = () => {
  return (
    <div className="home-tutorado">
      <HeaderTR/>
      <Calendario mes={5} anio={2025} />
    </div>
  );
}

export default HomeT; 