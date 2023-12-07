import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

import "./NavBar.css";

function CollapsibleExample() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="150"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav__link" to="/">Home</Link>
            <Link className="nav__link" to="/cocktails">Cocktails</Link>
            <Link className="nav__link" to="/vinos">Vinos</Link>
            <Link className="nav__link" to="/cervezas">Cervezas</Link>
            <Link className="nav__link" to="/aboutus">Sobre Nosotros</Link>
            <Link className="nav__link" to="/contact">Contacto</Link>
          </Nav>
          <Nav>
            <Link className="nav__link" to="/cart">
              <CartWidget />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  ); 
}

export default CollapsibleExample;
