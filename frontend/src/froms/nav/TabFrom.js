import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Divider, Popover } from 'antd' 
import Login from '../../views/Pages/Login/Login'
import Comment from '../../views/Pages/Comment/Comment'
export default class TabFrom extends Component {
    render() {
      const text = <span>My email</span>;
      const contents = (
        <div>
          <p>apisitprompha@gmail.com</p>
        </div>
      );
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                  <Navbar.Brand href="#/">HOME</Navbar.Brand>
                  <Divider type="vertical" />
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link href="#photo">PHOTOS</Nav.Link>
                      <Nav.Link>
                        <Popover placement="bottom" title={text} content={contents} trigger="click">
                          EMAIL
                        </Popover>
                      </Nav.Link>
                      <NavDropdown title="SOCIAL MEDIA" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="https://github.com/apisitaom">Git Hub</NavDropdown.Item>
                        <NavDropdown.Item href="https://web.facebook.com/apisit.prompha">Facebook</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <Comment />
                      </NavDropdown>
                    </Nav>
                    <Nav>
                      <Nav.Link>
                        <Login />
                      </Nav.Link> 
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
