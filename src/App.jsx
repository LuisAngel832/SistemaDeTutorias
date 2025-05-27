import AppRouter from './Routes/AppRouter';
const App = () => {
  return (   
    <AppRouter />
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
