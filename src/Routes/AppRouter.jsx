import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Tutor/Home/Home';
import Login from '../pages/LogIn/LogIn';
import Registro from '../pages/Registro/Registro';
import CrearTutoria from '../pages/Tutor/CrearTutoria/CrearTutoria';
import Tutoria from '../pages/Tutor/Tutoria/Tutoria';
import InfoTutoria from '../pages/Tutor/InfoTutoria/InfoTutoria';

const AppRouter = () => {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />

      {/* Rutas de la app */}
      <Route path="/" element={<Home />} />
      <Route path="/crear-tutoria" element={<CrearTutoria />} />
      <Route path="/tutoria" element={<Tutoria />} /> 
      <Route path="/info-tutoria/" element={<InfoTutoria />} />

      <Route path="/" element={<InfoTutoria />} />

      {/* Redirección en caso de ruta no válida */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;
