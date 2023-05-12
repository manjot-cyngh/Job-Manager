import React, {useContext} from 'react'
import { createdatacontext, createidcontext } from '../../App'
// import { useNavigate } from 'react-router-dom'




export default function Delete() {
  // const navigate = useNavigate()
  const {jobs, setjobs} = useContext(createdatacontext)
  const {id, setid} = useContext(createidcontext)
  const getalljobs = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/v1/jobs`, {
          method: 'GET',
          headers: {
            "Content-type": "application/json",
            Authorization: localStorage.getItem('token')
          },
        
      })
      const data = await response.json()
    
      await setjobs({count: data.count, jobs: data.job})
      setjobs((state) => {
         console.log(state); 
         return state;
        });

    } catch (error) {
      console.log(error)
    }
  }
  const deleteJob = async () => {
    try {
      
      // console.log("deleting a job...")
      
      const response = await fetch(`http://localhost:5000/api/v1/jobs/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      const data = await response.json()
      getalljobs()
      console.log(data)
      // navigate('/api/v1/jobs')
    } catch (error) {
      console.log(error)
    }
  }

  return (

    <div>
    
{/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button> */}

<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Delete a job?</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {/* You are about to delete your job data for {}. Do you still wish to proceed? */}
        You are about to delete your job application data. Do you still wish to proceed?
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" onClick={deleteJob} className="btn btn-primary" data-bs-dismiss="modal">Delete</button>
      </div>
    </div>
  </div>
</div>
 </div>
    
  );
}


