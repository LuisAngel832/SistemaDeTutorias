import HeaderT from "../../../components/Tutorado/HeaderT";
import HeaderTR from "../../../components/Tutorado/HeaderTR";
import CalendarioTutorado from "../../../components/CalendarioTutorado/CalendarioTutorado";
import useResponsive from "../../../hooks/useResponsive";

const HomeT = () => {
  const isMovile = useResponsive(780);

  return (
    <div className="home-tutorado">
      {isMovile ? <HeaderTR /> : <HeaderT />}
      <CalendarioTutorado />
    </div>
  );
};

export default HomeT;
