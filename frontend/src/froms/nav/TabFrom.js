import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import { Divider } from 'antd' 
export default class TabFrom extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                  <Navbar.Brand href="#/">OWH I AM</Navbar.Brand>
                  <Divider type="vertical" />
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
                      <Nav.Link href="#login">  <Button variant="outline-warning">EDIT</Button></Nav.Link> 
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
