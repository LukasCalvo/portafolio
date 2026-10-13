import Projects from './Projects';
import { render, screen, cleanup, waitFor } from '@testing-library/react';

describe('Projects', () => {
  afterEach(() => {
    cleanup();
  });

  it('debe renderizar el componente sin errores', async () => {
    render(<Projects />);
    await waitFor(() => {
      expect(screen.getByText('Mis Proyectos')).toBeInTheDocument();
    });
  });

  it('debe mostrar spinner mientras carga', () => {
    global.fetch.and.callFake(() => new Promise(() => {}));
    render(<Projects />);
    expect(screen.getByRole('status')).toBeInTheDocument();
    const loadingTexts = screen.getAllByText('Cargando proyectos...');
    expect(loadingTexts.length).toBeGreaterThan(0);
  });

  it('debe cargar y mostrar los proyectos desde JSON', async () => {
    render(<Projects />);
    await waitFor(() => {
      expect(screen.getByText('Portafolio')).toBeInTheDocument();
      expect(screen.getByText('GameKeyHub')).toBeInTheDocument();
      expect(screen.getByText('Prototipo Gestion Aduanera')).toBeInTheDocument();
    });
  });

  it('debe mostrar descripción de cada proyecto', async () => {
    render(<Projects />);
    await waitFor(() => {
      expect(screen.getByText('Portafolio realizado con React y Bootstrap')).toBeInTheDocument();
      expect(screen.getByText('Plataforma Backend de Marketplace')).toBeInTheDocument();
      expect(screen.getByText('Prototipo de plataforma aduanera')).toBeInTheDocument();
    });
  });

  it('debe mostrar tecnologías como badges para cada proyecto', async () => {
    render(<Projects />);
    await waitFor(() => {
      expect(screen.getByText('React')).toBeInTheDocument();
      expect(screen.getByText('Bootstrap')).toBeInTheDocument();
      expect(screen.getByText('SpringBoot')).toBeInTheDocument();
      expect(screen.getByText('Java')).toBeInTheDocument();
      expect(screen.getByText('HTML')).toBeInTheDocument();
      expect(screen.getByText('CSS')).toBeInTheDocument();
    });
  });

  it('debe tener enlaces a repositorios con target="_blank" y rel="noopener noreferrer"', async () => {
    render(<Projects />);
    await waitFor(() => {
      const links = screen.getAllByText('Ver Código');
      expect(links.length).toBe(3);
      links.forEach(link => {
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      });
    });
  });

  it('debe mostrar imágenes con alt descriptivo', async () => {
    render(<Projects />);
    await waitFor(() => {
      const images = screen.getAllByRole('img');
      expect(images.length).toBe(3);
      images.forEach(img => {
        expect(img.alt).toContain('Imagen del proyecto');
      });
    });
  });

  it('debe tener contenedor con id "projects" para navegación', async () => {
    render(<Projects />);
    await waitFor(() => {
      expect(document.getElementById('projects')).toBeInTheDocument();
    });
  });

  it('debe renderizar 3 columnas en desktop (grid md=4)', async () => {
    render(<Projects />);
    await waitFor(() => {
      expect(document.querySelectorAll('.col-md-4').length).toBe(3);
    });
  });

  it('debe manejar error de fetch correctamente', async () => {
    global.fetch.and.callFake(() => Promise.resolve({
      ok: false,
      status: 404
    }));
    render(<Projects />);
    await waitFor(() => {
      expect(screen.getByText(/error al cargar los proyectos/i)).toBeInTheDocument();
    });
  });

  it('debe manejar error de red correctamente', async () => {
    global.fetch.and.callFake(() => Promise.reject(new Error('Network error')));
    render(<Projects />);
    await waitFor(() => {
      expect(screen.getByText(/error al cargar los proyectos/i)).toBeInTheDocument();
    });
  });
});