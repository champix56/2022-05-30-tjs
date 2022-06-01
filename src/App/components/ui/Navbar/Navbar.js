import React from "react";
import style from "./Navbar.module.css";
import { Container, Nav, Navbar as NavBar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <div className={style.Navbar} data-testid="Navbar">
      <NavBar bg="primary" variant="dark">
        <Container>
          <NavBar.Brand href="#home">Navbar</NavBar.Brand>
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </NavBar>
    </div>
  );
};


export default Navbar;
