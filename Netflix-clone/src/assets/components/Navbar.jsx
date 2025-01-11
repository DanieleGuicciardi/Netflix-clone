import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import netflixLogo from '../img/logo.png'

const NetflixNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="index.html">
          <img
            src={netflixLogo}
            alt="netflix_logo"
            width="100"
            height="50"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">TV Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <div className="mt-3 d-flex align-items-center">
              <Nav.Link href="#" className="me-4" style={{ fontWeight: 'bold' }}>
                KIDS
              </Nav.Link>
            </div>
            <NavDropdown
              title={
                <img
                  src="assets/avatar.png"
                  alt="avatar"
                  width="50"
                  style={{ borderRadius: '50%' }}
                />
              }
              id="nav-dropdown"
              align="end"
            >
              <NavDropdown.Item>
                <div className="d-flex align-items-center">
                  <img
                    src="assets/avatar.png"
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





