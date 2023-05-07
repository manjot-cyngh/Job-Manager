
import Login from "./Components/Loggedout/Auth/Login";
import Dashboard from './Components/Loggedin/Dashboard';
import Register from './Components/Loggedout/Auth/Register';
import Delete from './Components/Loggedin/Delete';
import Edit from './Components/Loggedin/Edit';
// import Navbar from './Components/Loggedin/Navbar';
import React from 'react';

import { BrowserRouter, Router, Route, Link, Routes } from 'react-router-dom'

// import Body from "./Components/Loggedout/Body";
// import Title from "./Components/Loggedout/Title";
import Home from "./Components/Loggedout/Home";
import Data from "./Components/Loggedin/Data";


function App() {
  return (
    // <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        {/* <Route  path="/" element={ <Body />}/> */}
        <Route exact path="/api/v1/auth/login" element={<Login/>}/>
        <Route exact path="/api/v1/auth/register" element={<Register/>}/>
      {/*  */}
        <Route exact path="/api/v1/jobs" element={<Data/>}/>
      {/* */}
        <Route exact path="/api/v1/jobs/:id" element={<Edit/>}/>
        {/* <Delete/> */}
      </Routes>
    </BrowserRouter>
    // </>
  );
}

export default App;
