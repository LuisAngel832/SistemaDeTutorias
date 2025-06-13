import { useNavigate } from "react-router-dom";

const useAutentificacion = () => {
  const navigate = useNavigate();

  const login = async (matricula, password, setError) => {
    console.log(matricula, password);
    try {
      const response = await fetch(
        "https://backtutorias.onrender.com/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            matricula: matricula,
            password: password,
            
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        setError(errorText);
        return;
      }

      const data = await response.json();
      console.log("data", data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("rol", data.rol);
      localStorage.setItem("matricula", matricula);
      localStorage.setItem("nombre", data.nombre);
      localStorage.setItem("correo", data.correo);

      if (data.rol === "tutor") {
        navigate("/tutor/home");
      } else if (data.rol === "tutorado") {
        navigate("/tutorado/home");
      }
    } catch (err) {
      console.error(err);
      setError("Error al conectar con el servidor");
    }
  };

  const registro = async (rol, usuario, serError) => {
    const url =
      rol === "profesor"
        ? "https://backtutorias.onrender.com/tutor/registro"
        : "https://backtutorias.onrender.com/tutorado/registro";


    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });

      if (response.ok) {
        alert("Registro exitoso");
        navigate("/login");
      } else {
        const errorText = await response.text();
        console.log(errorText);
      }
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("No se pudo conectar al servidor.");
    }

    
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("rol");
    localStorage.removeItem("matricula");
    localStorage.removeItem("nombre");
    localStorage.removeItem("correo");
    navigate("/login");
  }
  return { login, registro, logout };
};

export default useAutentificacion;
