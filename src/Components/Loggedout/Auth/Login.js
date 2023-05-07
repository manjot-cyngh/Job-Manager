import React from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import Title from '../Title'
import { Link, useNavigate } from 'react-router-dom';


export default function App() {
  
  const host = 'http//localhost:5000'
  let navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('log in')
    try {
      const email = document.getElementById('email').value
      const password = document.getElementById('password').value
      console.log(email, password)
      const response = await fetch(`http://localhost:5000/api/v1/auth/login`, {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
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
        const data = await response.json()
        console.log(data)
        navigate('/api/v1/jobs')
      }
      
    } catch (error) {
      console.log(error)
    }
    
  }
  return (

    <div>
      <MDBContainer fluid className="p-3 my-5 h-custom" >

        <MDBRow>

          <MDBCol col='10' md='6'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid me-5" alt="Sample image" />
          </MDBCol>

          <MDBCol col='4' md='6'>


            {/* <div style={{objectFit:'inherit', height:'30%', width:'30%'}}> */}
            <Title imgstyle={{ height: '20%', width: '45%', marginLeft: '-3%', marginBottom: '-20px' }} />
            {/* </div> */}
            <MDBInput wrapperClass='mb-4 w-50' label='Email address' id='email' type='email' size="lg" />
            <MDBInput wrapperClass='mb-4 w-50' label='Password' id='password' type='password' size="lg" />



            <div className='text-center text-md-start mt-4 pt-2'>
              <MDBBtn className="mb-0 px-5" size='lg' onClick={handleSubmit} >Login</MDBBtn>
              <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <Link to="/api/v1/auth/register" className="link-primary">Register</Link></p>
            </div>

          </MDBCol>

        </MDBRow>



      </MDBContainer>
    </div>
  );
}

