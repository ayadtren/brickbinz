import React, {Component} from 'react';
import './App.css';
import Message from './components/message';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
function App() {
  return (
    <div className="App">
        <Message/>
        <Navbar/>
        <AboutUs/>
    </div>
  ); 
}

export default App;
