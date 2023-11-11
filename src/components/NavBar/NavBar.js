import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartWidget } from "../CartWidget/CartWidget";
import logo from "../../assets/images/logo.svg";

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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="products">Productos</Nav.Link>
            <Nav.Link href="#aboutus">Sobre Nosotros</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
