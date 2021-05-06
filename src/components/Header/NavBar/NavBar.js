import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import logo from "../../../assets/images/logo.svg";
const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand className="logo-brand" href="#home">
        <img src={logo} alt="" srcset="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto ml-5">
          <Nav.Link className="mx-4 text-dark" href="#features">
            About
          </Nav.Link>
          <Nav.Link className="mx-4 text-dark" href="#pricing">
            Services
          </Nav.Link>
          <Nav.Link className="mx-4 text-dark" href="#deets">
            Industries
          </Nav.Link>
          <Nav.Link className="mx-4 text-dark" eventKey={2} href="#memes">
            Insight
          </Nav.Link>
          <Nav.Link className="mx-4 text-dark" eventKey={2} href="#memes">
            Clients
          </Nav.Link>
        </Nav>

        <Form inline>
          <div class="input-group border-0">
            <div className="input-group-prepend border-0">
              <span className="input-group-text border-0" id="basic-addon2">
                <i class="fa fa-search border-0"></i>
              </span>
            </div>
            <input
              type="text"
              class="form-control border-0"
              placeholder="Search"
            />
          </div>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
