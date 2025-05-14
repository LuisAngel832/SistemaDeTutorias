import FormInfoTutorias from "./FormInfoTutorias";
import ButtonsInfo from "./ButtonsInfo";
import { useState } from "react";

const MainContentInfoTutoria = () => {
  const [cancelarTutoria, setCancelarTutoria] = useState(false);

  return (
    <div className="info-tutoria-tutor  ">
      {cancelarTutoria ? <FinalizarTutoria /> : <></>}
      <FormInfoTutorias />
      <ButtonsInfo />
    </div>
  );
};

export default MainContentInfoTutoria;
