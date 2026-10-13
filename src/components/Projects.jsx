import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import proyecto1 from '../assets/proyecto1.png';
import proyecto2 from '../assets/proyecto2.png';
import proyecto3 from '../assets/proyecto3.png';

const imagenesMap = {
  'Portafolio': proyecto1,
  'GameKeyHub': proyecto2,
  'Prototipo Gestion Aduanera': proyecto3,
};

function Projects() {
  const [proyectos, setProyectos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProyectos = async () => {
      try {
        const baseUrl = import.meta.env.BASE_URL || '/';
        const response = await fetch(`${baseUrl}proyectos.json`);
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        setProyectos(data);
      } catch (err) {
        setError(err.message);
        console.error('Error al cargar proyectos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProyectos();
  }, []);

  if (loading) {
    return (
      <Container id="projects" className="py-5">
        <div className="text-center text-light">
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Cargando proyectos...</span>
          </div>
          <p className="mt-2">Cargando proyectos...</p>
        </div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container id="projects" className="py-5">
        <div className="text-center text-danger">
          <p>Error al cargar los proyectos: {error}</p>
        </div>
      </Container>
    );
  }

  return (
    <Container id="projects" className="py-5">
      <h2 className="text-center text-light mb-4">Mis Proyectos</h2>
      <Row className="g-4">
        {proyectos.map((proyecto) => (
          <Col xs={12} md={4} key={proyecto.id}>
            <Card className="h-100 shadow-sm text-dark">
              <Card.Img 
                variant="top" 
                src={imagenesMap[proyecto.titulo] || proyecto1} 
                alt={`Imagen del proyecto ${proyecto.titulo}`}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{proyecto.titulo}</Card.Title>
                <Card.Text>{proyecto.descripcion}</Card.Text>
                <div className="mb-3">
                  {proyecto.tecnologias.map((tech) => (
                    <Badge key={tech} bg="secondary" className="me-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button 
                  variant="outline-secondary" 
                  className="mt-auto" 
                  href={proyecto.enlace} 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Código
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;