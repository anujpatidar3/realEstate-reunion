import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';

//Logo
import logo from "../../images/logo.png"

//CSS
import "./navbar.css"

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white" className="navbar-border">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" width={"20%"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto" style={{ margin: "auto" }}>
            <Nav.Link href="rent" className="navbar-button">Rent</Nav.Link>
            <Nav.Link href="buy" className="navbar-button">Buy</Nav.Link>
            <Nav.Link href="sell" className="navbar-button">Sell</Nav.Link>
            <NavDropdown title="Manage Property" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Contact Us
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Contact Us
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resources" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Contact Us
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Contact Us
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Contact Us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#">Login</Nav.Link>
            <Nav.Link eventKey={2} href="#">
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;