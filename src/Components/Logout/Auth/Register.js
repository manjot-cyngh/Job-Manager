import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn,MDBInput } from 'mdb-react-ui-kit';
import Title from '../Title'

export default function App() {

  return (
    
    <div>
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid me-5" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

          
{/* <div style={{objectFit:'inherit', height:'30%', width:'30%'}}> */}
        <Title imgstyle={{height:'20%', width:'45%', marginLeft: '-3%', marginBottom:'-20px'}}/>
{/* </div> */}
          <MDBInput wrapperClass='mb-4 w-50'  label='Name' id='formControlLg' type='text' size="lg"/>
          <MDBInput wrapperClass='mb-4 w-50'  label='Email address' id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4 w-50' label='Password' id='formControlLg' type='password' size="lg"/>

          

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg'>Register</MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2">Already have an account? <a href="/auth/login" className="link-primary">Login</a></p>
          </div>

        </MDBCol>

      </MDBRow>

      

    </MDBContainer>
    </div>
  );
}

