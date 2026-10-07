import './App.css'
import { Navbar, Container, Nav, Row, Col, Card, Button, Badge, Form } from 'react-bootstrap';

function App() {
  return (
    <div className="bg-black min-vh-100">
      
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
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

      <Container id="about" className="text-center" style={{ marginTop: '100px' }}>
        <div className="d-flex flex-column align-items-center gap-3">
          <img
            src='https://r72.cooltext.com/rendered/cooltext517147425877432.gif'
            alt="Título"
          />
          <img 
            src="https://avatars.githubusercontent.com/u/217789653?v=4" 
            alt="Imagen de perfil" 
            className="rounded-circle" 
            width="170" 
            height="170"
          />
        </div>
        <p className="lead text parrafo">Estudiante de ingenieria en informatica en DUOC UC</p>
      </Container>

      <Container id="projects" className="py-5">
        <h2 className="text-center mb-4">Mis Proyectos</h2>
        <Row className="g-4">
          
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src="https://via.placeholder.com/300x180" />
              <Card.Body className="d-flex flex-column">
                <Card.Title>Proyecto 1</Card.Title>
                <Card.Text>
                  Descripción breve de lo que hace este proyecto y los retos que resolviste.
                </Card.Text>
                <div className="mb-3">
                  <Badge bg="secondary" className="me-1">React</Badge>
                  <Badge bg="secondary" className="me-1">Bootstrap</Badge>
                </div>
                <Button variant="outline-primary" className="mt-auto" href="#">Ver Código</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src="https://via.placeholder.com/300x180" />
              <Card.Body className="d-flex flex-column">
                <Card.Title>Proyecto 2</Card.Title>
                <Card.Text>
                  Aplicación web interactiva desarrollada con tecnologías modernas.
                </Card.Text>
                <div className="mb-3">
                  <Badge bg="secondary" className="me-1">JavaScript</Badge>
                  <Badge bg="secondary" className="me-1">API</Badge>
                </div>
                <Button variant="outline-primary" className="mt-auto" href="#">Ver Código</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src="https://via.placeholder.com/300x180" />
              <Card.Body className="d-flex flex-column">
                <Card.Title>Proyecto 3</Card.Title>
                <Card.Text>
                  Plataforma de comercio electrónico con carrito de compras integrado.
                </Card.Text>
                <div className="mb-3">
                  <Badge bg="secondary" className="me-1">React</Badge>
                  <Badge bg="secondary" className="me-1">Node.js</Badge>
                </div>
                <Button variant="outline-primary" className="mt-auto" href="#">Ver Código</Button>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>

      <Container id="contact" className="py-5 bg-white rounded shadow-sm mb-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <h2 className="text-center mb-4">Contacto</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Tu Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ej. Juan Pérez" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" placeholder="correo@ejemplo.com" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Escribe tu mensaje aquí..." />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Enviar Mensaje
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;