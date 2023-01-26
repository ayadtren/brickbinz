import React, {Component} from 'react';
import './App.css';
import Hello from './components/Hello'
import Message from './components/message';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
        <Message/>
        <Navbar/>
    </div>
  ); 
}

export default App;
