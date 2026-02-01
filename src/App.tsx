import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PortfolioIndex from './pages/index';
import SalonLP from './pages/salon/page';
import IceCreamLP from './pages/icecream/page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioIndex />} />
        <Route path="/salon" element={<SalonLP />} />
        <Route path="/icecream" element={<IceCreamLP />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
