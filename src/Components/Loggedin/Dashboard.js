import React from 'react'
import edit from '../../Assets/edit.svg'
import trash from '../../Assets/trash.svg'
import Delete from './Delete'

export default function Body() {

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
                            <button type="submit" className="btn btn-primary mb-2 w-25">Add</button>
                        </div>
                    </div>
                </form>
            </div>
    
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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td><a  href='/api/v1/jobs/:id'><img src={edit} /></a><a style={{marginLeft:'50px'}} data-bs-toggle="modal" data-bs-target="#staticBackdrop" ><img src={trash} /></a></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td><a  href='/edit'><img src={edit} /></a><a style={{marginLeft:'50px'}} href='/delete'><img src={trash} /></a></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td><a  href='/edit'><img src={edit} /></a><a style={{marginLeft:'50px'}} href='/delete'><img src={trash} /></a></td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  )
}
