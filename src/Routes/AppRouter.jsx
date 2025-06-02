import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Login from '../pages/LogIn/LogIn';
import Registro from '../pages/Registro/Registro';

import HomeTutor from '../pages/Tutor/Home/Home';
import CrearTutoria from '../pages/Tutor/CrearTutoria/CrearTutoria';
import Tutoria from '../pages/Tutor/Tutoria/Tutoria';
import InfoTutoria from '../pages/Tutor/InfoTutoria/InfoTutoria';
import AgregarHorario from '../pages/Tutor/AgregarHorario/AgregarHorario';

import HomeTutorado from '../pages/Tutorado/HomeT/HomeT';
import MiPerfil from '../pages/Tutorado/Perfil/Perfil';
import MisTutorias from '../pages/Tutorado/TutoriasT/TutoriasT';

const AppRouter = () => {
  const userRole = localStorage.getItem("rol");

  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />

      {/* Redirección inteligente desde raíz */}
      <Route path="/" element={
        userRole === "tutor"
          ? <Navigate to="/tutor/home" />
          : userRole === "tutorado"
          ? <Navigate to="/tutorado/home" />
          : <Navigate to="/login" />
      } />

      {/* Rutas protegidas: TUTOR */}
      <Route path="/tutor/home" element={
        <PrivateRoute allowedRoles={["tutor"]}>
          <HomeTutor />
        </PrivateRoute>
      } />
      <Route path="/tutor/crear" element={
        <PrivateRoute allowedRoles={["tutor"]}>
          <CrearTutoria />
        </PrivateRoute>
      } />
      <Route path="/tutor/tutoria" element={
        <PrivateRoute allowedRoles={["tutor"]}>
          <Tutoria />
        </PrivateRoute>
      } />
      <Route path="/tutor/info-tutoria/:id" element={
        <PrivateRoute allowedRoles={["tutor"]}>
          <InfoTutoria />
        </PrivateRoute>
      } />
      <Route path="/tutor/agregar-horario" element={
        <PrivateRoute allowedRoles={["tutor"]}>
          <AgregarHorario />
        </PrivateRoute>
      } />

      {/* Rutas protegidas: TUTORADO */}
      <Route path="/tutorado/home" element={
        <PrivateRoute allowedRoles={["tutorado"]}>
          <HomeTutorado />
        </PrivateRoute>
      } />
      <Route path="/tutorado/perfil" element={
        <PrivateRoute allowedRoles={["tutorado"]}>
          <MiPerfil />
        </PrivateRoute>
      } />
      <Route path="/tutorado/tutorias" element={
        <PrivateRoute allowedRoles={["tutorado"]}>
          <MisTutorias />
        </PrivateRoute>
      } />

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;
