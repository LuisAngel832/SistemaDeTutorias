import AppRouter from './Routes/AppRouter';
 import  HomeT  from './pages/Tutorado/HomeT/HomeT';
import TutoriaT from './pages/Tutorado/TutoriaT/TutoriaT';
import TutoriasT from './pages/Tutorado/TutoriasT/TutoriasT';
import Perfil from './pages/Tutorado/Perfil/Perfil'
import Registro from './pages/Registro/Registro';
import LogIn from './pages/LogIn/LogIn';

const App = () => {
  return (    
    <HomeT/>
  );
};


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginTutor from './pages/LoginTutor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login-tutor" element={<LoginTutor />} />
      </Routes>
    </Router>
  );
}

export default App;
