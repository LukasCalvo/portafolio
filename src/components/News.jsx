import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap';

function News() {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const baseUrl = import.meta.env.BASE_URL || '/';
        const response = await fetch(`${baseUrl}noticias.json`);
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        setNoticias(data);
      } catch (err) {
        setError(err.message);
        console.error('Error al cargar noticias:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNoticias();
  }, []);

  if (loading) {
    return (
      <Container id="news" className="py-5">
        <div className="text-center text-light">
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Cargando noticias...</span>
          </div>
          <p className="mt-2">Cargando noticias...</p>
        </div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container id="news" className="py-5">
        <div className="text-center text-danger">
          <p>Error al cargar las noticias: {error}</p>
        </div>
      </Container>
    );
  }

  return (
    <Container id="news" className="py-5">
      <h2 className="text-center text-light mb-4">Noticias</h2>
      <Row className="g-4">
        {noticias.map((noticia) => (
          <Col xs={12} md={6} key={noticia.titulo}>
            <Card className="h-100 bg-secundary shadow-sm">
              <Card.Body>
                <Card.Title>{noticia.titulo}</Card.Title>
                <Card.Subtitle className="mb-2 text-secundary">
                  <small>{new Date(noticia.fecha).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</small>
                </Card.Subtitle>
                <Card.Text >{noticia.contenido}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default News;