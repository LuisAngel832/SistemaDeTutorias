import MainContent from "./MainContent";
import HeaderT from "../../../components/Tutorado/HeaderT";
import HeaderTR from "../../../components/Tutorado/HeaderTR";

import useResponsive from "../../../hooks/useResponsive";
const HomeT = () => {

  const isMovile = useResponsive(780);
  return (
    <div className="home-T">
      {isMovile ? <HeaderTR /> : <HeaderT />}
      <MainContent />
    </div>
  );
};

export default HomeT;
