import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Campaigns from './components/pages/Campaigns';
import Events from './components/pages/Events';
import Footer from './components/Footer';




function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'  element={<Home/>} />
          <Route path='/AboutUs'  element={<AboutUs/>} />
          <Route path='/Campaigns'  element={<Campaigns/>} />
          <Route path='/Events'  element={<Events/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;
