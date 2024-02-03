import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
  MDBNavbarNav,
} from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';

function Header() {
    const [openNavNoTogglerSecond, setOpenNavNoTogglerSecond] = useState(false);
  return (
    <div>
          <MDBNavbar expand='lg' style={{backgroundColor:"rgb(0, 48, 119)",color:"white"}} className='fixed-top'>
        <MDBContainer >
          <MDBNavbarBrand href='#' className='text-white'>MediConnect</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            className='text-white'
            data-target='#navbarTogglerDemo02'
            aria-controls='navbarTogglerDemo02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNavNoTogglerSecond(!openNavNoTogglerSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar open={openNavNoTogglerSecond} >
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 d-flex justify-content-end align-items-center' >
              <MDBNavbarItem >
                <MDBNavbarLink  href='' className='text-white'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem >
                <MDBNavbarLink  href='' className='text-white'>
                  About
                </MDBNavbarLink>
              </MDBNavbarItem>
              
              <MDBNavbarItem >
                <MDBNavbarLink  href='' className='text-white'>
                  Contact
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem >
                <MDBNavbarLink  href='' className='text-white '>
                <Button className='btn-outline-primary text-white'>Login</Button>
                </MDBNavbarLink>
              </MDBNavbarItem>
              
              <MDBNavbarItem >
                <MDBNavbarLink  href='' className='text-white '>
                  <Button>Signup</Button>
                </MDBNavbarLink>
              </MDBNavbarItem>
              
            </MDBNavbarNav>
            
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header