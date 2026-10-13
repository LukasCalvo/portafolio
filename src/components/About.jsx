import { Container, Button, Badge } from 'react-bootstrap';

function About() {
  const skills = [
    'Java',
    'Kotlin',
    'Spring Boot',
    'Python',
    'JavaScript',
    'React',
    'Oracle SQL',
    'PL/SQL',
    'Git'
  ];

  return (
    <Container id="about" className="text-center pt-5">
      <h1 className="text-light">Lukas Calvo</h1>
      <img 
        src="https://avatars.githubusercontent.com/u/217789653?v=4" 
        alt="Imagen de perfil" 
        className="rounded-circle img-fluid shadow my-3" 
        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
      />
      <p className="lead text-light mt-2 px-3">
        Estudiante de ingeniería en informática en DUOC UC
      </p>
      <p className="text-light mt-2 px-3">
        ¡Bienvenido a mi portafolio profesional donde podras ver mis proyectos y noticias recientes!
      </p>

      <div className="my-4">
        <h3 className="text-light mb-3">Mis habilidades</h3>
        <div className="d-flex flex-wrap justify-content-center gap-2 px-2">
          {skills.map((skill) => (
            <Badge 
              key={skill} 
              bg="secondary" 
              className="px-3 py-2 border border-secondary text-light fs-6 fw-normal"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-light mb-3">Redes</h3>
        <Button
          variant="secondary"
          href="https://www.instagram.com/pateshito/"
          target="_blank"
          rel="noopener noreferrer"
          className="d-inline-flex align-items-center justify-content-center m-2"
        >
          <i className="bi bi-instagram fs-5"></i>
        </Button>
        <Button
          variant="secondary"
          href="https://github.com/LukasCalvo"
          target="_blank"
          rel="noopener noreferrer"
          className="d-inline-flex align-items-center justify-content-center m-2"
        >
          <i className="bi bi-github fs-5"></i>
        </Button>
      </div>
    </Container>
  );
}

export default About;
