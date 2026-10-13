// src/test-setup.js

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jasmine.createSpy().and.returnValue({
    matches: false,
    addListener: jasmine.createSpy(),
    removeListener: jasmine.createSpy()
  })
});

global.ResizeObserver = jasmine.createSpy().and.returnValue({
  observe: jasmine.createSpy(),
  unobserve: jasmine.createSpy(),
  disconnect: jasmine.createSpy()
});

const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (
      args[0]?.includes?.('Warning: ReactDOM.render is no longer supported') ||
      args[0]?.includes?.('act(...)') ||
      args[0]?.includes?.('useLayoutEffect')
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});

beforeAll(() => {
  jasmine.addMatchers({
    toBeInTheDocument: () => ({
      compare: (actual) => {
        const pass = actual !== null && actual !== undefined && 
                     (typeof actual.isConnected === 'boolean' ? actual.isConnected : 
                      document.body.contains(actual));
        return {
          pass,
          message: pass 
            ? 'Expected element not to be in the document' 
            : 'Expected element to be in the document'
        };
      }
    }),
    toHaveAttribute: () => ({
      compare: (actual, attrName, expectedValue) => {
        if (!actual || !actual.hasAttribute) {
          return { pass: false, message: 'Expected element to have attribute' };
        }
        const hasAttr = actual.hasAttribute(attrName);
        if (expectedValue === undefined) {
          return { pass: hasAttr, message: hasAttr ? `Expected element not to have attribute ${attrName}` : `Expected element to have attribute ${attrName}` };
        }
        const attrValue = actual.getAttribute(attrName);
        const pass = hasAttr && attrValue === expectedValue;
        return { pass, message: pass ? `Expected attribute ${attrName} not to be ${expectedValue}` : `Expected attribute ${attrName} to be ${expectedValue}, got ${attrValue}` };
      }
    }),
    toHaveValue: () => ({
      compare: (actual, expectedValue) => {
        if (!actual || actual.value === undefined) {
          return { pass: false, message: 'Expected element to have a value' };
        }
        const pass = actual.value === expectedValue;
        return { pass, message: pass ? `Expected value not to be ${expectedValue}` : `Expected value to be ${expectedValue}, got ${actual.value}` };
      }
    }),
    toHaveTextContent: () => ({
      compare: (actual, expectedText) => {
        if (!actual || actual.textContent === undefined) {
          return { pass: false, message: 'Expected element to have text content' };
        }
        const pass = actual.textContent.includes(expectedText);
        return { pass, message: pass ? `Expected text not to contain ${expectedText}` : `Expected text to contain ${expectedText}` };
      }
    })
  });
});

const defaultProjects = [
  { id: 1, titulo: 'Portafolio', imagen: '/src/assets/proyecto1.png', descripcion: 'Portafolio realizado con React y Bootstrap', tecnologias: ['React', 'Bootstrap', 'Node.js', 'Vite'], enlace: 'https://github.com/LukasCalvo/portafolio' },
  { id: 2, titulo: 'GameKeyHub', imagen: '/src/assets/proyecto2.png', descripcion: 'Plataforma Backend de Marketplace', tecnologias: ['SpringBoot', 'Java', 'Eureka'], enlace: 'https://github.com/LukasCalvo/10MicroserviciosExamenTransversal' },
  { id: 3, titulo: 'Prototipo Gestion Aduanera', imagen: '/src/assets/proyecto3.png', descripcion: 'Prototipo de plataforma aduanera', tecnologias: ['HTML', 'JavaScript', 'CSS'], enlace: 'https://github.com/LukasCalvo/Prototipo_Ing_Software' }
];

const defaultNews = [
  { titulo: 'Nuevo proyecto: Portafolio Personal con React', fecha: '2024-10-10', contenido: 'He completado mi portafolio personal desarrollado con React, Bootstrap y Vite.' },
  { titulo: 'Certificación en Desarrollo Web Full Stack', fecha: '2024-09-15', contenido: 'He obtenido la certificación en Desarrollo Web Full Stack por DUOC UC.' }
];

global.fetch = jasmine.createSpy('fetch').and.callFake((url) => {
  if (url.includes('proyectos.json')) {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(defaultProjects)
    });
  }
  if (url.includes('noticias.json')) {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(defaultNews)
    });
  }
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve([])
  });
});

beforeEach(() => {
  global.fetch.calls.reset();
  global.fetch.and.callFake((url) => {
    if (url.includes('proyectos.json')) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(defaultProjects)
      });
    }
    if (url.includes('noticias.json')) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(defaultNews)
      });
    }
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve([])
    });
  });
});