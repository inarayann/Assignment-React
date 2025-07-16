// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DashboardPage from './pages/DashboardPage'; // Import the new DashboardPage
import Stepper from './pages/Stepper';
import Pricing from './pages/Pricing';

const App: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<DashboardPage />} /> 
          <Route path="/timeline" element={<Stepper />} />
          <Route path="/features" element={<h1 className="text-center mt-5">Features Page</h1>} />
          <Route path="/cards" element={<Pricing/>} />
        </Routes>
      </main>
    </div>
  );
};

export default App;