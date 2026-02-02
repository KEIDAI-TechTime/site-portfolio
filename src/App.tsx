import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PortfolioIndex from './pages/index';
import SalonLP from './pages/salon';
import IceCreamLP from './pages/ice-cream';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioIndex />} />
        <Route path="/salon" element={<SalonLP />} />
        <Route path="/ice-cream" element={<IceCreamLP />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
