import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Title from '../Loggedout/Title';
import { createcompanycontext, createidcontext, createpositioncontext, createstatuscontext } from '../../App';
import { useNavigate } from 'react-router-dom';



export default function Edit() {
    // const defaul = 'statu'
    let navigate = useNavigate()

    const {position, setposition} = useContext(createpositioncontext)
    const {company, setcompany} = useContext(createcompanycontext)
    const {status, setstatus} = useContext(createstatuscontext)
    const {id, setid} = useContext(createidcontext)

    const onChangeC = (event) => {
            setcompany(event.target.value)   
    }
    const onChangeP = (event) => {
            setposition(event.target.value) 
    }
    const cancel = async () => {
        navigate(-1)
    }
    const update = async () => {
        try {
            const company = encodeURIComponent(document.getElementById('inlineFormInputName2').value)
    const position = encodeURIComponent(document.getElementById('inlineFormInputGroupUsername2').value)
    console.log(company, position)
            const response = await fetch(`http://localhost:5000/api/v1/jobs/${id}` , {
                method: 'PATCH',
                headers: {
                    "Content-type": "application/json",
                    Authorization: localStorage.getItem('token')
                },
                body: JSON.stringify({
                    company: company,
                    position: position,
                })
            })
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Title imgstyle={{ height: '25%', width: '25%', marginLeft: '35%' }} />
            <div
                className="modal show "
                style={{ display: 'inline-block', position: 'initial' }}
            >
                <Modal.Dialog style={{}}>
                    <Modal.Header closeButton style={{}}>
                        <Modal.Title>Update Job Preferences</Modal.Title>
                    </Modal.Header>

                    <Modal.Body style={{}}>
                        {/* <div style={{marginLeft: '280px'}}> */}
                        <div style={{}}>
                            <form className="form-inline">
                                <div className='row'>
                                    <div className='col-6 col-md-4'>
                                        <label className="sr-only" htmlFor="inlineFormInputName2">Name</label>
                                        <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Company" value={company} onChange={onChangeC}/>
                                    </div>
                                    <div className='col-6 col-md-4'>
                                        <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Username</label>
                                        <div className="input-group mb-2 mr-sm-2">

                                            <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Position" value={position} onChange={onChangeP}/>
                                        </div>
                                    </div>
                                    <select className="form-select w-25" aria-label="Default select example" style={{ height: '34px' }}>
                                        {/* <option defaultValue={status}>{status}</option> */}
                                        <option value="1">Pending</option>
                                        <option value="2">Interview</option>
                                        <option value="3">Declined</option>
                                    </select>
                                    {/* <div className='col-6 col-md-4'>
                                    <button type="submit" className="btn btn-primary mb-2 w-75">Add</button>
                                </div> */}
                                </div>
                            </form>

                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={cancel}>Cancel</Button>
                        <Button variant="primary" onClick={update}>Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>

        </>
    );
}

