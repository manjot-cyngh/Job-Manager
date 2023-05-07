
// import Login from "./Components/Loggedout/Auth/Login";
import Dashboard from './Components/Loggedin/Dashboard';
import React from 'react';
import Delete from './Components/Loggedin/Delete';
import Edit from './Components/Loggedin/Edit';
import Navbar from './Components/Loggedin/Navbar';


// import Register from './Components/Loggedout/Auth/Register';

import Body from "./Components/Loggedout/Body";
import Title from "./Components/Loggedout/Title";


function App() {
  return (
    <>

    <Title imgstyle={{height:'20%', width:'20%', marginLeft: '5%'}}/>
    <Body/>
    {/* <Login/> */}
    {/* <Register/> */}
    {/* <Navbar/> */}
    {/* <Dashboard/> */}
       {/* <Edit/> */}

      {/* <Delete/> */}
    </>
  );
}

export default App;
