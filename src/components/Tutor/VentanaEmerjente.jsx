import ButtonTrue from "../../components/Tutor/ButtonTrue";

const VentanaEmerjente = ({ handleClick, text, textBtn1, textBtn2 }) => {
  return (
    <section className="finalizar-tutoria-content">
      <div className="finalizar-tutoria">
        <h1>{text}</h1>
        <div className="buttons">
          {(!textBtn1 || !textBtn2) ? (
            <ButtonTrue
              text={textBtn1}
              type={true}
              onClick={handleClick}
            />
          ) : (
            <>
              <ButtonTrue
                text={textBtn1}
                type={false}
                onClick={handleClick}
              />
              <ButtonTrue
                text={textBtn2}
                type={true}
                onClick={handleClick}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default VentanaEmerjente;
