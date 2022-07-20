import React from "react";
import { Button, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import logo from "../assets/oie_YRqpB70c5Sbm.png";

const NavBarComp = () => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      style={{ position: "sticky", top: "0", zIndex: "1000" }}
    >
      <Container style={{ padding: "0rem " }}>
        <Navbar.Brand href="#home">
          <img src={logo} height={50} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex justify-content-between align-items-center  w-50">
            <Link to="/" onClick={() => window.scroll(0, 0)}>
              Home
            </Link>
            <Link to="/aboutUs" onClick={() => window.scroll(0, 0)}>
              About Us
            </Link>
            <Link to="/career" onClick={() => window.scroll(0, 0)}>
              Career
            </Link>
            <Link to="/pricing" onClick={() => window.scroll(0, 0)}>
              Pricing
            </Link>
            <Row className="g-2">
              <div className="col-12 col-lg-auto d-flex">
                <Link
                  to="/login"
                  className="m-auto"
                  onClick={() => window.scroll(0, 0)}
                >
                  <Button variant="dark">Login</Button>
                </Link>
              </div>
              <div className="col-12 col-lg-auto d-flex">
                <Link
                  to="/signup"
                  className="m-auto"
                  onClick={() => window.scroll(0, 0)}
                >
                  <Button variant="dark">Signup</Button>
                </Link>
              </div>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComp;
