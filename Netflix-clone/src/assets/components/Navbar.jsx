import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/Navbar.css';

import netflixLogo from '../img/logo.png'
import profileIcon from '../img/icon.png'
import avatar from '../img/avatar.png'

const NetflixNavbar = () => {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="index.html">
          <img
            src={netflixLogo}
            alt="netflix_logo"
            width="100"
            height="55"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="me-auto fw-bold">
            <Nav.Link href="#" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#" className='text-secondary'>TV Shows</Nav.Link>
            <Nav.Link href="#" className='text-secondary'>Movies</Nav.Link>
            <Nav.Link href="#" className='text-secondary'>Recently Added</Nav.Link>
            <Nav.Link href="#" className='text-secondary'>My List</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <div className="mt-3 d-flex align-items-center">
              <i class="bi bi-search pe-4 fs-5 text-white"></i>
              <Nav.Link href="#" className="me-4 text-white">
                KIDS
              </Nav.Link>
              <i class="bi bi-bell pe-3 fs-5 text-white"></i>
            </div>
            <NavDropdown 
              title={
                <img
                  src={profileIcon}
                  alt="avatar"
                  width="50"
                  style={{ borderRadius: '50%' }}
                  className='mb-2'  
                />
              }
              id="nav-dropdown"
              className='text-white mt-4'
              align="end"
            >
              <NavDropdown.Item>
                <div className="d-flex align-items-center">
                  <img
                    src={avatar}
                    alt="avatar"
                    width="50"
                    height="50"
                    className="me-2"
                  />
                  Epicoder #1
                </div>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Manage Profiles</NavDropdown.Item>
              <NavDropdown.Item href="profile.html">Account</NavDropdown.Item>
              <NavDropdown.Item href="#">Help Center</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Signout Netflix</NavDropdown.Item>
            </NavDropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NetflixNavbar;





