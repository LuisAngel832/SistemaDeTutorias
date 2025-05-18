import FormInfoTutorias from "./FormInfoTutorias";
import ButtonsInfo from "./ButtonsInfo";
import FinalizarTutoria from "./FinalizarTutoria";
import { useState } from "react";

const MainContentInfoTutoria = () => {
  const [cancelarTutoria, setCancelarTutoria] = useState(false);

  const handleClickCancelarTutoria = () => {
    setCancelarTutoria(!cancelarTutoria);
  };

  return (
    <div className="info-tutoria-tutor  ">
      {cancelarTutoria ? <FinalizarTutoria handleClickCancelarTutoria={handleClickCancelarTutoria}/> : <></>}
      <FormInfoTutorias />
      <ButtonsInfo handleClickCancelarTutoria={handleClickCancelarTutoria}/>
    </div>
  );
};

export default MainContentInfoTutoria;
