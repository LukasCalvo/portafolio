import About from './About';
import { render, screen, cleanup } from '@testing-library/react';

describe('About', () => {
  afterEach(() => {
    cleanup();
  });

  it('debe renderizar el componente sin errores', () => {
    render(<About />);
    expect(screen.getByText('Lukas Calvo')).toBeInTheDocument();
  });

  it('debe mostrar la foto de perfil con alt descriptivo', () => {
    render(<About />);
    const img = screen.getByAltText('Imagen de perfil');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://avatars.githubusercontent.com/u/217789653?v=4');
  });

  it('debe mostrar la biografía del estudiante', () => {
    render(<About />);
    expect(screen.getByText('Estudiante de ingeniería en informática en DUOC UC')).toBeInTheDocument();
  });

  it('debe mostrar la sección de habilidades', () => {
    render(<About />);
    expect(screen.getByText('Mis habilidades')).toBeInTheDocument();
  });

  it('debe renderizar todas las habilidades como badges', () => {
    render(<About />);
    const skills = ['Java', 'Kotlin', 'Spring Boot', 'Python', 'JavaScript', 'React', 'Oracle SQL', 'PL/SQL', 'Git'];
    skills.forEach(skill => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  it('debe mostrar la sección de redes sociales', () => {
    render(<About />);
    expect(screen.getByText('Redes')).toBeInTheDocument();
  });

  it('debe tener enlaces a Instagram y GitHub', () => {
    render(<About />);
    const instagramBtn = document.querySelector('a[href="https://www.instagram.com/pateshito/"]');
    const githubBtn = document.querySelector('a[href="https://github.com/LukasCalvo"]');
    expect(instagramBtn).toBeInTheDocument();
    expect(githubBtn).toBeInTheDocument();
    expect(instagramBtn).toHaveAttribute('target', '_blank');
    expect(githubBtn).toHaveAttribute('target', '_blank');
  });

  it('los enlaces externos deben tener rel="noopener noreferrer"', () => {
    render(<About />);
    const instagramBtn = document.querySelector('a[href="https://www.instagram.com/pateshito/"]');
    const githubBtn = document.querySelector('a[href="https://github.com/LukasCalvo"]');
    expect(instagramBtn).toHaveAttribute('rel', 'noopener noreferrer');
    expect(githubBtn).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('debe tener contenedor con id "about" para navegación', () => {
    render(<About />);
    expect(document.getElementById('about')).toBeInTheDocument();
  });
});