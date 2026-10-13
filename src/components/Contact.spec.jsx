import Contact from './Contact';
import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jasmine-dom';

describe('Contact', () => {
  afterEach(() => {
    cleanup();
  });

  it('debe renderizar el componente sin errores', () => {
    render(<Contact />);
    expect(screen.getByText('Contacto')).toBeInTheDocument();
  });

  it('debe mostrar formulario con campos requeridos', () => {
    render(<Contact />);
    expect(screen.getByLabelText('Tu Nombre')).toBeInTheDocument();
    expect(screen.getByLabelText('Correo Electrónico')).toBeInTheDocument();
    expect(screen.getByLabelText('Mensaje')).toBeInTheDocument();
  });

  it('debe tener placeholders en los campos', () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText('Ej. Juan Pérez')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('correo@ejemplo.com')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Escribe tu mensaje aquí...')).toBeInTheDocument();
  });

  it('debe tener botón de envío', () => {
    render(<Contact />);
    const submitButton = screen.getByRole('button', { name: /enviar mensaje/i });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');
  });

  it('debe permitir escribir en el campo nombre', () => {
    render(<Contact />);
    const nameInput = screen.getByLabelText('Tu Nombre');
    fireEvent.change(nameInput, { target: { value: 'Juan Pérez' } });
    expect(nameInput).toHaveValue('Juan Pérez');
  });

  it('debe permitir escribir en el campo email', () => {
    render(<Contact />);
    const emailInput = screen.getByLabelText('Correo Electrónico');
    fireEvent.change(emailInput, { target: { value: 'juan@ejemplo.com' } });
    expect(emailInput).toHaveValue('juan@ejemplo.com');
  });

  it('debe permitir escribir en el campo mensaje (textarea)', () => {
    render(<Contact />);
    const messageInput = screen.getByLabelText('Mensaje');
    fireEvent.change(messageInput, { target: { value: 'Hola, esto es un mensaje de prueba.' } });
    expect(messageInput).toHaveValue('Hola, esto es un mensaje de prueba.');
  });

  it('debe tener contenedor con id "contact" para navegación', () => {
    render(<Contact />);
    expect(document.getElementById('contact')).toBeInTheDocument();
  });

  it('debe tener etiquetas label asociadas a cada input', () => {
    render(<Contact />);
    const nameLabel = screen.getByLabelText('Tu Nombre');
    const emailLabel = screen.getByLabelText('Correo Electrónico');
    const messageLabel = screen.getByLabelText('Mensaje');
    
    expect(nameLabel).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(messageLabel).toBeInTheDocument();
  });

  it('el campo email debe ser type="email"', () => {
    render(<Contact />);
    const emailInput = screen.getByLabelText('Correo Electrónico');
    expect(emailInput).toHaveAttribute('type', 'email');
  });

  it('el campo mensaje debe ser textarea con 4 filas', () => {
    render(<Contact />);
    const messageInput = screen.getByLabelText('Mensaje');
    expect(messageInput.tagName).toBe('TEXTAREA');
    expect(messageInput).toHaveAttribute('rows', '4');
  });

  it('el formulario debe ser accesible (navegación por teclado)', () => {
    render(<Contact />);
    const nameInput = screen.getByLabelText('Tu Nombre');
    const emailInput = screen.getByLabelText('Correo Electrónico');
    const messageInput = screen.getByLabelText('Mensaje');
    const submitButton = screen.getByRole('button', { name: /enviar mensaje/i });

    expect(nameInput).not.toHaveAttribute('tabIndex', '-1');
    expect(emailInput).not.toHaveAttribute('tabIndex', '-1');
    expect(messageInput).not.toHaveAttribute('tabIndex', '-1');
    expect(submitButton).not.toHaveAttribute('tabIndex', '-1');
  });
});