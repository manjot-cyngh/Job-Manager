import React, {useContext, useEffect} from 'react'
import edit from '../../Assets/edit.svg'
import trash from '../../Assets/trash.svg'
import Delete from './Delete'
import { createdatacontext } from '../../App'
import { Link, useNavigate } from 'react-router-dom'
import { createcompanycontext, createpositioncontext, createstatuscontext, createidcontext } from '../../App';

const params = window.location.search
const id = new URLSearchParams(params).get('id')


export default function Body() {
  const {jobs, setjobs} = useContext(createdatacontext)
  const {position, setposition} = useContext(createpositioncontext)
    const {company, setcompany} = useContext(createcompanycontext)
    const {status, setstatus} = useContext(createstatuscontext)
    const {id, setid} = useContext(createidcontext)
  
  

  let navigate = useNavigate()
  const getalljobs = async () => {
    // e.preventDefault()
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
  useEffect(()=>{

    getalljobs()
  }, [])

  const addJob = async (e) => {
    e.preventDefault()
    try {
    const company = encodeURIComponent(document.getElementById('inlineFormInputName2').value)
    const position = encodeURIComponent(document.getElementById('inlineFormInputGroupUsername2').value)
    console.log(company, position)
      
      const response = await fetch('http://localhost:5000/api/v1/jobs', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
        body: JSON.stringify({
          company: company,
          position: position,
        }),
      })
      const data = await response.json()
      getalljobs()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  const editJob = async (position, company, status, noteID) => {
    try {
      const response = await fetch(`http://localhost:5000/api/v1/jobs/${noteID}`, {
        method: 'GET',
        headers: {
          "Content-type": "application/json",
          Authorization: localStorage.getItem('token')
        },
      })
      navigate(`/api/v1/jobs/:id`)
      const data = await response.json()
      setposition(data.job.position)
      setcompany(data.job.company)
      setstatus(data.job.status)
      setid(noteID)
      console.log(data.job)
      
    } catch (error) {
      console.log(error)
    }
    }
  return (
    <>
    <Delete/>

    <div style={{marginLeft: '280px'}}>
                <form className="form-inline">
                    <div className='row'>
                        <div className='col-6 col-md-4'>
                            <label className="sr-only" htmlFor="inlineFormInputName2">Name</label>
                            <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Company" />
                        </div>
                        <div className='col-6 col-md-4'>
                            <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Username</label>
                            <div className="input-group mb-2 mr-sm-2">

                                <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Position" />
                            </div>
                        </div>
                        <div className='col-6 col-md-4'>
                            <button type='button' onClick={addJob} className="btn btn-primary mb-2 w-25">Add</button>
                        </div>
                    </div>
                </form>
            </div>
    {jobs.count == 0 ? <h3 style={{textAlign: 'center', marginTop: '40px'}}>You have no jobs to display currently</h3>: 
    <div style={{ marginLeft: '100px', marginRight: '100px', marginTop: '40px' }} className='
      shadow-lg p-3 bg-body-tertiary rounded table-responsive'>

      <table className="table table-striped table-hover">

        <thead className='primary'>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Position</th>
            <th scope="col">Company</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className='table-group-divider'>
          {/* {jobs.count == '0' ? <div>You have no jobs to display currently</div>:   */}
          {jobs.jobs.map((item)=>{
              
            return <tr key={item._id}>
            <th scope="row">1</th>
            <td>{decodeURIComponent(item.position)}</td>
            <td>{decodeURIComponent(item.company)}</td>
            <td>{item.createdAt}</td>
            <td>{item.status}</td>
            <td><Link onClick={()=>editJob(item.position, item.company, item.status, item._id)} ><img src={edit} /></Link><a style={{marginLeft:'50px'}} data-bs-toggle="modal" data-bs-target="#staticBackdrop" ><img src={trash} /></a></td>
          </tr>
          })
          }
          
        </tbody>
      </table>
    </div>}
    </>
  )
}
