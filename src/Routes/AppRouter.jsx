import { Routes, Route, Navigate } from 'react-router-dom';

import Login from '../pages/LogIn/LogIn';
import Registro from '../pages/Registro/Registro';


import HomeTutor from '../pages/Tutor/Home/Home';
import CrearTutoria from '../pages/Tutor/CrearTutoria/CrearTutoria';
import Tutoria from '../pages/Tutor/Tutoria/Tutoria';
import InfoTutoria from '../pages/Tutor/InfoTutoria/InfoTutoria';


import HomeTutorado from '../pages/Tutorado/HomeT/HomeT';
import MiPerfil from '../pages/Tutorado/Perfil/PerfilInfo';
import MisTutorias from '../pages/Tutorado/Perfil/MisTutorias';

const getUserRole = () => {
  return localStorage.getItem("rol"); 
};

const AppRouter = () => {
  return (
    <Routes>

      {/* Rutas públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />

      {/* Redirección inteligente según rol */}
      <Route path="/" element={
        getUserRole() === "tutor"
          ? <Navigate to="/tutor/home" />
          : getUserRole() === "tutorado"
          ? <Navigate to="/tutorado/home" />
          : <Navigate to="/login" />
      } />

      {/* Rutas para TUTOR */}
      {getUserRole() === "tutor" && (
        <>
          <Route path="/tutor/home" element={<HomeTutor />} />
          <Route path="/tutor/crear" element={<CrearTutoria />} />
          <Route path="/tutor/tutoria" element={<Tutoria />} />
          <Route path="/tutor/info-tutoria" element={<InfoTutoria />} />
        </>
      )}

      {/* Rutas para TUTORADO */}
      {getUserRole() === "tutorado" && (
        <>
          <Route path="/tutorado/home" element={<HomeTutorado />} />
          <Route path="/tutorado/perfil" element={<MiPerfil />} />
          <Route path="/tutorado/tutorias" element={<MisTutorias />} />
        </>
      )}

      {/* Redirección genérica */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;
