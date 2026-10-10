import {Navbar, Container, Nav} from 'react-bootstrap'

function CustomNavbar() {
    return (
        <Navbar bg="black" variant="dark" expand="lg" fixed="top">
        <Container id="CustomNavbar" className="bg-black">
          <Navbar.Brand href="#home">Mi Portafolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">Sobre mí</Nav.Link>
              <Nav.Link href="#projects">Proyectos</Nav.Link>
              <Nav.Link href="#contact">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default CustomNavbar;