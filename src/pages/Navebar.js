import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navebar.css'
import Logo from '../Img/Icon.png'

function Navebar() {
  return (
    <Navbar  expand="md" bg='light' data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/"><img src={Logo} alt="Logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Welcome</Nav.Link>
            <Nav.Link href="/about">Company</Nav.Link>
            <Nav.Link href="/blog">Our Products</Nav.Link>
            <Nav.Link href="/contact">Contact us</Nav.Link>
            <Nav.Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navebar;