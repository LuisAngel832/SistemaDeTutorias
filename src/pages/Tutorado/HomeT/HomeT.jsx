import MainContent from "./MainContent";
import HeaderT from "../../../components/Tutorado/HeaderT";
import HeaderTR from "../../../components/Tutorado/HeaderTR";
import useResponsive from "../../../hooks/useResponsive";

const HomeT = () => {
  const isMobile = useResponsive(780);

  return (
    <div className="home-t">
      {isMobile ? <HeaderTR /> : <HeaderT search={false}/>}
      <MainContent />
    </div>
  );
};

export default HomeT;
