import React, {useContext} from 'react'
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import Title from '../Loggedout/Title'
import { useNavigate } from 'react-router-dom';
import { createusercontext } from '../../App';


export default function Navbar() {
    const {user, setuser} = useContext(createusercontext)
    let naivgate = useNavigate()
    const loggout = () => {
        localStorage.removeItem('token')
        naivgate('/')
    }
    return (
        <>
            <div style={{ display: 'inline-block' }}>
                <Title imgstyle={{ height: '30%', width: '30%', marginLeft: '25%' }} />
            </div>
            <MDBDropdown style={{ display: 'inline-block', }}>
                <MDBDropdownToggle tag='a' className='btn btn-primary' style={{ width: '180%' }}>
                    {user}
                </MDBDropdownToggle>
                <MDBDropdownMenu  >
                    <MDBDropdownItem link onClick={loggout}>Loggout</MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown>
            
        </>

    )
}

