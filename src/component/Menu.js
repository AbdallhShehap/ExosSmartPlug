import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../assiste/menu.css" // Ensure the path is correct
import { Link } from "react-router-dom";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img src={require("../images/color logo + slogan.png")} width="150px" height="50px" alt="Logo"/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="PRODUCTS" id="basic-nav-dropdown" className='menuItem no-arrow-dropdown'>
              <Link to="/firstproduct" className="dropdown-item" style={{ color: "black" }}>
                first product
              </Link>
              <NavDropdown.Divider />
              <Link to="/secoundproduct" className="dropdown-item" style={{ color: "black" }}>
                second product
              </Link>
            </NavDropdown>
            <Nav.Link as={Link} to="/ourstory" className='menuItem' style={{ color: "black" }}>
              ABOUT US
            </Nav.Link>
            <NavDropdown title="SUPPORT" id="basic-nav-dropdown" className='menuItem'>
              <Link to="/contactus" className="dropdown-item" style={{ color: "black" }}>
                CONTACT US
              </Link>
              <Link to="/privacypolicy" className="dropdown-item" style={{ color: "black" }}>
                PRIVACY POLICY
              </Link>
              <Link to="/termofuse" className="dropdown-item" style={{ color: "black" }}>
                TERM OF USE
              </Link>
              <NavDropdown.Divider />
              <Link to="/faqs" className="dropdown-item" style={{ color: "black" }}>
                FAQS
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
