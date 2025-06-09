import ButtonTrue from "../../components/Tutor/ButtonTrue";

const VentanaEmerjente = ({ handleClickBtn1, handleClickBtn2, text, textBtn1, textBtn2 }) => {
  return (
    <section className="finalizar-tutoria-content">
      <div className="finalizar-tutoria">
        <h1>{text}</h1>
        <div className="buttons">
          {(!textBtn1 || !textBtn2) ? (
            <ButtonTrue
              text={textBtn1}
              type={true}
              onClick={handleClickBtn1}
            />
          ) : (
            <>
              <ButtonTrue
                text={textBtn1}
                type={false}
                onClick={handleClickBtn1}
              />
              <ButtonTrue
                text={textBtn2}
                type={true}
                onClick={handleClickBtn2}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default VentanaEmerjente;