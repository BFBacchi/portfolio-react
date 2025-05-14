import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoScreen from './components/logoScreen/LogoScreen';
import StartDesktop from './components/startDesktop/StartDesktop.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirige a "/start" después de 6 segundos
    const timer = setTimeout(() => {
      navigate('/start');
    }, 6000);

    // Limpia el temporizador si el componente se desmonta
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<LogoScreen />} />
      <Route path="/start" element={<StartDesktop />} />
    </Routes>
  );
}

export default App;