import React, {useContext} from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn,MDBInput } from 'mdb-react-ui-kit';
import Title from '../Title'
import { Link, useNavigate } from 'react-router-dom';
import { createdatacontext } from '../../../App';


export default function App() {
  const {jobs, setjobs} = useContext(createdatacontext)
  let navigate = useNavigate()

  const handleregister = async (e) => {
    e.preventDefault()
    try {
    console.log('registering the user')
      
        const name = document.getElementById('username').value
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        console.log(name, email, password)
        const response = await fetch(`http://localhost:5000/api/v1/auth/register`, {
          method: 'POST',
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
          })
        })
        const data = await response.json()
        const token = data.token
        console.log(data)
        console.log(token)
        if(token){
          localStorage.setItem('token', `Bearer ${token}`)
          const response = await fetch(`http://localhost:5000/api/v1/jobs`, {
            method: 'GET',
            headers: {
              "Content-type": "application/json",
              Authorization: localStorage.getItem('token')
            },
          })
          const res = await response.json()
          await setjobs({count:res.count, jobs: res.job})
          setjobs((state) => {
            console.log(state); 
            return state;
          });
          // console.log(jobs)
          navigate('/api/v1/jobs')
        }
        
      } catch (error) {
        console.log(error)
      }
      
  }

  return (
    
    <div>
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid me-5" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

          
{/* <div style={{objectFit:'inherit', height:'30%', width:'30%'}}> */}
        <Title imgstyle={{height:'20%', width:'45%', marginLeft: '-3%', marginBottom:'-20px'}}/>
{/* </div> */}
          <MDBInput wrapperClass='mb-4 w-50'  label='Name' id='username' type='text' size="lg"/>
          <MDBInput wrapperClass='mb-4 w-50'  label='Email address' id='email' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4 w-50' label='Password' id='password' type='password' size="lg"/>

          

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg' onClick={handleregister}>Register</MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2">Already have an account? <Link to="/api/v1/auth/login" className="link-primary">Login</Link></p>
          </div>

        </MDBCol>

      </MDBRow>

      

    </MDBContainer>
    </div>
  );
}

