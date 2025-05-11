import HeaderT from "../../../components/Tutorado/HeaderT";
import Calendario from "./Calendario";

const HomeT = () => {
  return (
    <div className="home-tutorado">
      <HeaderT />
      <Calendario mes={5} anio={2025} />
    </div>
  );
}

export default HomeT;