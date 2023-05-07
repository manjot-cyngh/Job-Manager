import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function Edit() {
    return (
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
                                    <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Company" />
                                </div>
                                <div className='col-6 col-md-4'>
                                    <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Username</label>
                                    <div className="input-group mb-2 mr-sm-2">

                                        <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Position" />
                                    </div>
                                </div>
                                <select className="form-select w-25" aria-label="Default select example" style={{height:'34px'}}>
                                    <option selected>Status</option>
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
                    <Button variant="secondary">Cancel</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

