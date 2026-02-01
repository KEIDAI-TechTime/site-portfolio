import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PortfolioIndex from './pages/index';
import SalonLP from './pages/salon';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioIndex />} />
        <Route path="/salon" element={<SalonLP />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
