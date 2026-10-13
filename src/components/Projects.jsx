import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import proyecto3 from '../assets/proyecto3.png'
import proyecto2 from '../assets/proyecto2.png'
import proyecto1 from '../assets/proyecto1.png'

function Projects() {
  return (
    <Container id="projects" className="py-5">
      <h2 className="text-center text-light mb-4">Mis Proyectos</h2>
      <Row className="g-4">
        
        <Col xs={12} md={4}>
          <Card className="h-100 shadow-sm text-dark">
            <Card.Img variant="top" src={proyecto1} />
            <Card.Body className="d-flex flex-column">
              <Card.Title>Portafolio</Card.Title>
              <Card.Text>
                Portafolio realizado con React y Bootstrap, pruebas realizadas con Vite.
              </Card.Text>
              <div className="mb-3">
                <Badge bg="secondary" className="me-1">React</Badge>
                <Badge bg="secondary" className="me-1">Bootstrap</Badge>
                <Badge bg="secondary" className="me-1">Node.js</Badge>
                <Badge bg="secondary" className="me-1">Vite</Badge>
              </div>
              <Button variant="outline-secondary" className="mt-auto" href="https://github.com/LukasCalvo/portafolio" target="_blank">Ver Código</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4}>
          <Card className="h-100 shadow-sm text-dark">
            <Card.Img variant="top" src={proyecto2} />
            <Card.Body className="d-flex flex-column">
              
              <Card.Title>GameKeyHub</Card.Title>
              <Card.Text>
                Plataforma Backend de Marketplace de Llaves de Videojuegos, hecha con arquitectura microservicios en Spring Boot
              </Card.Text>
              <div className="mb-3">
                <Badge bg="secondary" className="me-1">SpringBoot</Badge>
                <Badge bg="secondary" className="me-1">Java</Badge>
                <Badge bg="secondary" className="me-1">Eureka</Badge>
              </div>
              <Button variant="outline-secondary" className="mt-auto" target="_blank" href="https://github.com/LukasCalvo/10MicroserviciosExamenTransversal">Ver Código</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4}>
          <Card className="h-100 shadow-sm text-dark">
            <Card.Img variant="top" src={proyecto3} />
            <Card.Body className="d-flex flex-column">
              <Card.Title>Prototipo Gestion Aduanera</Card.Title>
              <Card.Text>
                Prototipo de una plataforma acerca de la gestion de las aduanas.
              </Card.Text>
              <div className="mb-3">
                <Badge bg="secondary" className="me-1">HTML</Badge>
                <Badge bg="secondary" className="me-1">JavaScript</Badge>
                <Badge bg="secondary" className="me-1">CSS</Badge>
              </div>
              <Button variant="outline-secondary" className="mt-auto" target="_blank" href="https://github.com/LukasCalvo/Prototipo_Ing_Software">Ver Código</Button>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
}

export default Projects;