import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserHome from './pages/UserHome';
import ReportHome from './pages/Reportes';
import PremiosHome from './pages/PremiosHome';
// import PreguntaVehiculos from './pages/VehiculoDeseado';

// import NosotrosPages from './pages/Nosotros';


const AppRoutes = () => {
  return (
    <Routes> 
      <Route path="/" element={<Home />} index />
      <Route path="/cuenta" element={<UserHome />} />
      <Route path="/reportes" element={<ReportHome />} />
      <Route path="/premios" element={<PremiosHome />} />
    </Routes>
  );
};

export default AppRoutes;