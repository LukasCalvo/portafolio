import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

function Projects() {
  return (
    <Container id="projects" className="py-5">
      <h2 className="text-center text-light mb-4">Mis Proyectos</h2>
      <Row className="g-4">
        
        <Col xs={12} md={4}>
          <Card className="h-100 shadow-sm text-dark">
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
              <Button variant="outline-secondary" className="mt-auto" href="#">Ver Código</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4}>
          <Card className="h-100 shadow-sm text-dark">
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
              <Button variant="outline-secondary" className="mt-auto" href="#">Ver Código</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4}>
          <Card className="h-100 shadow-sm text-dark">
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
              <Button variant="outline-secondary" className="mt-auto" href="#">Ver Código</Button>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
}

export default Projects;