import React from 'react'
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import Title from '../Loggedout/Title'

export default function Navbar() {
    return (
        <>
            <div style={{ display: 'inline-block' }}>
                <Title imgstyle={{ height: '30%', width: '30%', marginLeft: '25%' }} />
            </div>
            <MDBDropdown style={{ display: 'inline-block', }}>
                <MDBDropdownToggle tag='a' className='btn btn-primary' style={{ width: '180%' }}>
                    user
                </MDBDropdownToggle>
                <MDBDropdownMenu  >
                    <MDBDropdownItem link>Loggout</MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown>
            
        </>

    )
}

