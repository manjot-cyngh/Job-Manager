import React from 'react'
import image from '../../Assets/main.jpg'
import { Link } from 'react-router-dom'

export default function Body() {
  return (
    <div >
        <div style={{display:'inline-block',marginLeft: '7.5%', marginTop: '80px'}}>
            <h1 style={{color:'#3030fe'}}>Introducing Job Management Tool</h1>
            <p style={{fontSize: '150%'}}>Find it difficult to manage and record all the jobs <br/>you have applied for? Look no further and use<br/> this tool to keep track of all the jobs you have applied for.</p>
            <Link to="/api/v1/auth/login">
            <button style={{backgroundColor:'#6c6ced', color:'white',height:'45px', width:'150px', borderRadius: '8px', border: 'none'}}>Login/Register</button>
            </Link>
        </div>
        <img src={image} style={{height:'48%', width:'48%', marginBottom:'120px'}} />
    </div>
  )
}
