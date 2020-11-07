import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import React, { useState, useEffect } from "react";
import Navbar from './Nav/Navbar';
import People from './Components/People';
import Planets from './Components/Planets';





function App() {
  return (
    <div>
      <Navbar />
      <Router>
      <People path="/people"/>
      <Planets path="/planets"/>
      </Router> 
    </div>
  );
}

export default App;
