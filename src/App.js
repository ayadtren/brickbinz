import React, {Component} from 'react';
import './App.css';
import Navbar from './components/ui/Navbar';
import Home from './pages/Home';



function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
      
    </div>
  ); 
}

export default App;
