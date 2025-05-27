import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AOS from 'aos';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <Navbar />
      <AppRoutes />
    </Router>
  );
}

export default App;
