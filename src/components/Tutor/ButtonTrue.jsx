import './../../assets/css/components/buttonTrue.css';

const ButtonTrue = ({ text, type, onClick, className }) => {
  const baseClass = type ? "btn-aceptar" : "btn-cancelar";
  return (
    <button className={`${baseClass} ${className || ''}`} onClick={onClick}>
      {text}
    </button>
  );
};


export default ButtonTrue;