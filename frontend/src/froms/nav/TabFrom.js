import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
export default class TabFrom extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                  <Navbar.Brand href="#/"> ABOUT ME</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link href="#">PHOTOS</Nav.Link>
                      <Nav.Link href="#">MESSAGE</Nav.Link>
                      <NavDropdown title="SOCIAL MEDIA" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="https://github.com/apisitaom">Git Hub</NavDropdown.Item>
                        <NavDropdown.Item href="https://web.facebook.com/apisit.prompha">Facebook</NavDropdown.Item>
                        <NavDropdown.Item href="#d">Email</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#d">Feed Back</NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                    <Nav>
                      <Nav.Link href="#">  <Button variant="outline-warning">EDIT PROFILE</Button></Nav.Link> 
                      <Nav.Link eventKey={2} href="#">
                        <Button variant="outline-dark">LOG OUT</Button>
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
