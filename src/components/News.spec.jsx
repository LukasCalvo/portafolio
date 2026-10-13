import News from './News';
import { render, screen, cleanup, waitFor } from '@testing-library/react';

describe('News', () => {
  afterEach(() => {
    cleanup();
  });

  it('debe renderizar el componente sin errores', async () => {
    render(<News />);
    await waitFor(() => {
      expect(screen.getByText('Noticias')).toBeInTheDocument();
    });
  });

  it('debe mostrar spinner mientras carga', () => {
    global.fetch.and.callFake(() => new Promise(() => {}));
    render(<News />);
    expect(screen.getByRole('status')).toBeInTheDocument();
    const loadingTexts = screen.getAllByText('Cargando noticias...');
    expect(loadingTexts.length).toBeGreaterThan(0);
  });

  it('debe cargar y mostrar las noticias desde JSON', async () => {
    render(<News />);
    await waitFor(() => {
      expect(screen.getByText('Nuevo proyecto: Portafolio Personal con React')).toBeInTheDocument();
      expect(screen.getByText('Certificación en Desarrollo Web Full Stack')).toBeInTheDocument();
    });
  });

  it('debe mostrar el contenido de cada noticia', async () => {
    render(<News />);
    await waitFor(() => {
      expect(screen.getByText('He completado mi portafolio personal desarrollado con React, Bootstrap y Vite.')).toBeInTheDocument();
      expect(screen.getByText('He obtenido la certificación en Desarrollo Web Full Stack por DUOC UC.')).toBeInTheDocument();
    });
  });

  it('debe formatear las fechas en español', async () => {
    render(<News />);
    await waitFor(() => {
      expect(screen.getByText(/octubre|oct/i)).toBeInTheDocument();
      expect(screen.getByText(/septiembre|sep/i)).toBeInTheDocument();
    });
  });

  it('debe renderizar 2 columnas en desktop (grid md=6)', async () => {
    render(<News />);
    await waitFor(() => {
      expect(document.querySelectorAll('.col-md-6').length).toBe(2);
    });
  });

  it('debe usar Cards de Bootstrap para cada noticia', async () => {
    render(<News />);
    await waitFor(() => {
      const cards = document.querySelectorAll('.card');
      expect(cards.length).toBe(2);
    });
  });

  it('debe tener contenedor con id "news" para navegación', async () => {
    render(<News />);
    await waitFor(() => {
      expect(document.getElementById('news')).toBeInTheDocument();
    });
  });

  it('debe mostrar array vacío si el JSON devuelve array vacío', async () => {
    global.fetch.and.callFake(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve([])
    }));
    render(<News />);
    await waitFor(() => {
      expect(screen.getByText('Noticias')).toBeInTheDocument();
      expect(document.querySelectorAll('.card').length).toBe(0);
    });
  });

  it('debe manejar error de fetch correctamente', async () => {
    global.fetch.and.callFake(() => Promise.resolve({
      ok: false,
      status: 500
    }));
    render(<News />);
    await waitFor(() => {
      expect(screen.getByText(/error al cargar las noticias/i)).toBeInTheDocument();
    });
  });

  it('debe manejar error de red correctamente', async () => {
    global.fetch.and.callFake(() => Promise.reject(new Error('Network error')));
    render(<News />);
    await waitFor(() => {
      expect(screen.getByText(/error al cargar las noticias/i)).toBeInTheDocument();
    });
  });
});