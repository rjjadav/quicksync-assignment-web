
import './App.css';
import Navbar from './components/navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import RevenueTrends from './pages/RevenueTrends/RevenueTrends';
import SalesByRegion from './pages/SalesByRegion/SalesByRegion';
import ProductPerformance from './pages/ProductPerformance/ProductPerformance';
import SalesPerformace from './pages/SalesPerformance/SalesPerformance';
import ProductsByRevenue from './pages/ProductsByRevenue/ProductsByRevenue';

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="w-full p-6">
        <div className="border max-w-7xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<RevenueTrends />} />
            <Route path="/sales-by-region" element={<SalesByRegion />} />
            <Route path="/product-performance" element={<ProductPerformance />} />
            <Route path="/sales-rep-performance" element={<SalesPerformace />} />
            <Route path="/top-products" element={<ProductsByRevenue />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
