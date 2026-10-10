import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <Container id="contact" className="py-5 rounded shadow-sm mb-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h2 className="text-center mb-4 text-light">Contacto</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label className="text-light">Tu Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ej. Juan Pérez" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label className="text-light">Correo Electrónico</Form.Label>
              <Form.Control type="email" placeholder="correo@ejemplo.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label className="text-light">Mensaje</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Escribe tu mensaje aquí..." />
            </Form.Group>

            <Button variant="secondary" type="submit" className="w-100">
              Enviar Mensaje
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;