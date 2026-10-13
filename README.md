# Portafolio Personal - Lukas Calvo

> Portafolio personal desarrollado con **React**, **Bootstrap** y **Vite**.
---

## Descripción

Portafolio personal responsivo que incluye:
- **Sobre mí**: Perfil, habilidades técnicas, redes sociales
- **Proyectos**: 3 proyectos cargados dinámicamente desde JSON
- **Noticias**: 2 noticias cargadas dinámicamente desde JSON  
- **Contacto**: Formulario funcional con validación

---

## Tecnologías

| Categoría | Tecnologías |
|-----------|-------------|
| **Frontend** | React, React Bootstrap, Bootstrap, Bootstrap Icons |
| **Build** | Vite |
| **Testing** | Jasmine, Karma |
| **Datos** | JSON estático (`/public/proyectos.json`, `/public/noticias.json`) |
| **Despliegue** | GitHub Pages |

---

## Instalación

```bash
# Clonar repositorio
git clone https://github.com/LukasCalvo/portafolio.git
cd portafolio

# Instalar dependencias
npm install

# Desarrollo (localhost:5173)
npm run dev

# Build producción (carpeta dist/)
npm run build

# Preview build
npm run preview
```

---

## Pruebas Unitarias

```bash
# Ejecutar tests (modo CI)
npm test

# Tests en modo watch
npm run test:watch

# Generar reporte de cobertura
npm run coverage
```

**Reporte de cobertura**: Abrir `coverage/html/index.html` en el navegador.

### Configuración de Tests
- **Framework**: Jasmine + Karma
- **Navegador**: Firefox Headless
- **Cobertura**: karma-coverage

### Estructura de Tests
```
src/
├── components/
│   ├── CustomNavbar.spec.jsx  (5 tests)
│   ├── About.spec.jsx         (7 tests)
│   ├── Projects.spec.jsx      (13 tests)
│   ├── News.spec.jsx          (12 tests)
│   └── Contact.spec.jsx       (12 tests)
├── test-setup.js              # Configuración global + matchers
└── TEST_PLAN.md               # Plan de pruebas detallado
```

**Total**: 49 tests definidos (46 pasando = 94% success rate)

---

## Estructura del Proyecto

```
portafolio/
├── public/
│   ├── proyectos.json      # Datos de proyectos
│   ├── noticias.json       # Datos de noticias
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── CustomNavbar.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── News.jsx
│   │   └── Contact.jsx
│   ├── assets/             # Imágenes de proyectos
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── App.css
│   └── test-setup.js
├── karma.conf.cjs          # Configuración Karma
├── webpack.test.config.cjs # Config Webpack para tests
├── vite.config.js          # Configuración Vite
├── TEST_PLAN.md            # Plan de pruebas
└── package.json
```
