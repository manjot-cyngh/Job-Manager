
import Login from "./Components/Loggedout/Auth/Login";
import Dashboard from './Components/Loggedin/Dashboard';
import Register from './Components/Loggedout/Auth/Register';
import Delete from './Components/Loggedin/Delete';
import Edit from './Components/Loggedin/Edit';
// import Navbar from './Components/Loggedin/Navbar';
import React, { createContext, useState } from 'react';

import { BrowserRouter, Router, Route, Link, Routes } from 'react-router-dom'

// import Body from "./Components/Loggedout/Body";
// import Title from "./Components/Loggedout/Title";
import Home from "./Components/Loggedout/Home";
import Data from "./Components/Loggedin/Data";

export const createdatacontext = createContext(null)

export const createpositioncontext = createContext(null)
export const createcompanycontext = createContext(null)
export const createstatuscontext = createContext(null)
export const createidcontext = createContext(null)

export const createusercontext = createContext(null)

// export const create

function App() {
  const [jobs, setjobs] = useState({ count: 0, jobs: [] })

  const [position, setposition] = useState(0)
  const [company, setcompany] = useState(0)
  const [status, setstatus] = useState(0)
  const [id, setid] = useState(0)

  const [user, setuser] = useState('')

  return (

    <createdatacontext.Provider value={{ jobs, setjobs }}>
      <createpositioncontext.Provider value={{ position, setposition }}>
        <createcompanycontext.Provider value={{ company, setcompany }}>
          <createstatuscontext.Provider value={{ status, setstatus }}>
          <createidcontext.Provider value={{ id, setid }}>
          <createusercontext.Provider value={{ user, setuser }}>


            <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<Home />} />
                {/* <Route  path="/" element={ <Body />}/> */}
                <Route exact path="/api/v1/auth/login" element={<Login />} />
                <Route exact path="/api/v1/auth/register" element={<Register />} />
                {/*  */}
                <Route exact path="/api/v1/jobs" element={<Data />} />
                {/* */}
                <Route exact path="/api/v1/jobs/:id" element={<Edit />} />
                {/* <Delete/> */}
              </Routes>
            </BrowserRouter>
            </createusercontext.Provider>
            </createidcontext.Provider>
          </createstatuscontext.Provider>
        </createcompanycontext.Provider>
      </createpositioncontext.Provider>
    </createdatacontext.Provider>

  )

}

export default App;
