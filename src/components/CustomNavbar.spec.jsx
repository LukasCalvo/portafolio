import CustomNavbar from './CustomNavbar';
import { render, screen, cleanup } from '@testing-library/react';

describe('CustomNavbar', () => {
  afterEach(() => {
    cleanup();
  });

  it('debe renderizar el componente sin errores', () => {
    render(<CustomNavbar />);
    expect(screen.getByText('Mi Portafolio')).toBeInTheDocument();
  });

  it('debe mostrar los enlaces de navegación', () => {
    render(<CustomNavbar />);
    expect(screen.getByText('Sobre mí')).toBeInTheDocument();
    expect(screen.getByText('Proyectos')).toBeInTheDocument();
    expect(screen.getByText('Noticias')).toBeInTheDocument();
    expect(screen.getByText('Contacto')).toBeInTheDocument();
  });

  it('debe tener la marca "Mi Portafolio" con href #home', () => {
    render(<CustomNavbar />);
    const brand = screen.getByText('Mi Portafolio');
    expect(brand).toHaveAttribute('href', '#home');
  });

  it('los enlaces deben tener hrefs correctos', () => {
    render(<CustomNavbar />);
    expect(screen.getByText('Sobre mí')).toHaveAttribute('href', '#about');
    expect(screen.getByText('Proyectos')).toHaveAttribute('href', '#projects');
    expect(screen.getByText('Noticias')).toHaveAttribute('href', '#news');
    expect(screen.getByText('Contacto')).toHaveAttribute('href', '#contact');
  });

  it('debe tener botón toggle para menú móvil', () => {
    render(<CustomNavbar />);
    const toggle = screen.getByRole('button', { name: /toggle navigation/i });
    expect(toggle).toBeInTheDocument();
  });

  it('debe tener estructura de navbar responsiva', () => {
    render(<CustomNavbar />);
    const navbar = screen.getByRole('navigation');
    expect(navbar).toBeInTheDocument();
  });
});