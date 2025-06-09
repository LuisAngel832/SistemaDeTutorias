import {useState, useEffect} from 'react';

const useCrearTutoria = () =>{
    const [nrcMateria, setNrcMateria] = useState("");
    const [horario, setHorario] = useState(1);
    const [fecha, setFecha] = useState("");
    const [edificio, setEdificio] = useState("");
    const [aula, setAula] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async () => {
        const fechaISO =
          fecha instanceof Date ? fecha.toISOString().split("T")[0] : fecha;
    
        const tutoria = {
          idHorario: parseInt(horario),
          fecha: fechaISO,
          edificio: parseInt(edificio),
          aula: parseInt(aula),
          nrcMateria: parseInt(nrcMateria),
        };
    
        try {
          console.log(localStorage.getItem("token"));
          const response = await fetch(
            "https://backtutorias.onrender.com/tutorias/genera-tutoria",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
              body: JSON.stringify(tutoria),
            }
          );
    
          const responseBody = await response.json();
    
          if (!response.ok) {
            setMensaje(responseBody.message);
            console.log(responseBody);
            setShowModal(true);
            return;
          }
    
          setMensaje("Tutoría creada correctamente");
          setShowModal(true);
        } catch (error) {
          console.error("Error de red:", error);
          setMensaje("Error al conectar con el servidor");
          setShowModal(true);
        }
      };

      const fetchMaterias = async () => {
        try {
          const response = await fetch(
            "https://backtutorias.onrender.com/materias/all",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
    
          if (!response.ok) {
            const errorText = await response.text();
            return;
          }
    
          const data = await response.json();
        } catch (error) {
          console.error("Error al hacer fetch:", error);
        }
      };


  useEffect(() => {
    fetchMaterias();
  }, []);

      return {
        nrcMateria,
        setNrcMateria,
        horario,
        setHorario,
        fecha,
        setFecha,
        edificio,
        setEdificio,
        aula,
        setAula,
        mensaje,
        showModal,
        setShowModal,
        handleSubmit,
      };
}

export default useCrearTutoria