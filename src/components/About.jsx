import { Container, Button } from 'react-bootstrap';

function About() {
  return (
    <Container id="about" className="text-center pt-5">
      <h1>Lukas calvo</h1>
      <img 
        src="https://avatars.githubusercontent.com/u/217789653?v=4" 
        alt="Imagen de perfil" 
        className="rounded-circle img-fluid shadow" 
        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
      />
      <p className="lead text-light mt-3 px-3">Estudiante de ingeniería en informática en DUOC UC</p>
      <Button
        variant="secondary"
        href="https://www.instagram.com/pateshito/"
        target="_blank"
        className="d-inline-flex align-items-center gap-2 m-2"
      ><i className="bi bi-instagram fs-5"></i></Button>
      <Button
        variant="secondary"
        href="https://github.com/LukasCalvo"
        target="_blank"
        className="d-inline-flex align-items-center gap-2 m-2"
      ><i className="bi bi-github fs-5"></i></Button>
    </Container>
  );
}

export default About;