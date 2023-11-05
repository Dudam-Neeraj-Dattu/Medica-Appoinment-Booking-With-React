import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../src/components/Navbar/Navbar';
import Sign_Up from './components/Sign_Up/Sign_Up';
import Landing_Page from './components/Landing_Page/Landing_Page';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <Sign_Up /> */}
        <Routes>
          {/* <Route path='/' element={<Landing_Page />}> */}
          <Route path='/' element={<Landing_Page/>}></Route>
          <Route path='/Sign_Up' element={<Sign_Up/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
