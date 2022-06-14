import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/AboutUs' exact component={AboutUs} />
          <Route path='/Campaigns' exact component={Campaigns} />
          <Route path='/Events' exact component={Events} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
export default App;
