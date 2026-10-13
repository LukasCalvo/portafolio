# Portafolio Personal - Lukas Calvo

> Portafolio personal desarrollado con **React 19**, **Bootstrap 5** y **Vite** como parte de la Evaluación Formativa 2 (DSY1104) de DUOC UC.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)
![Jasmine](https://img.shields.io/badge/Jasmine-5-8A4182?logo=jasmine)
![Karma](https://img.shields.io/badge/Karma-6-1A91D0?logo=karma)

---

## 📋 Descripción

Portafolio personal responsivo que incluye:
- **Sobre mí**: Perfil, habilidades técnicas, redes sociales
- **Proyectos**: 3 proyectos cargados dinámicamente desde JSON
- **Noticias**: 2 noticias cargadas dinámicamente desde JSON  
- **Contacto**: Formulario funcional con validación

---

## 🚀 Tecnologías

| Categoría | Tecnologías |
|-----------|-------------|
| **Frontend** | React 19, React Bootstrap 2, Bootstrap 5, Bootstrap Icons |
| **Build** | Vite 8, ESLint (Oxlint) |
| **Testing** | Jasmine 5, Karma 6, @testing-library/react |
| **Datos** | JSON estático (`/public/proyectos.json`, `/public/noticias.json`) |
| **Despliegue** | GitHub Pages |

---

## 📦 Instalación

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

## 🧪 Pruebas Unitarias

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
- **Framework**: Jasmine 5 + Karma 6
- **Navegador**: Firefox Headless
- **Cobertura**: karma-coverage (HTML, LCOV, JSON, text-summary)
- **Matchors personalizados**: toBeInTheDocument, toHaveAttribute, toHaveValue, toHaveTextContent

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

## 📁 Estructura del Proyecto

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

---

## 🌐 Despliegue en GitHub Pages

### Configuración automática (recomendada)

El repositorio está configurado para deploy automático en GitHub Pages:

1. Push a `main` → GitHub Actions build + deploy
2. O manualmente:
   ```bash
   npm run build
   # Subir carpeta dist/ a rama gh-pages
   ```

### vite.config.js para GitHub Pages
```js
export default defineConfig({
  plugins: [react()],
  base: '/portafolio/',  // Nombre del repo
})
```

---

## ♿ Accesibilidad

- ✅ Semántica HTML5 (`<nav>`, `<main>`, `<section>`, `<article>`)
- ✅ Alt text en todas las imágenes
- ✅ Labels asociados en formularios (`htmlFor` / `id`)
- ✅ Navegación por teclado (`tabIndex`, `focus-visible`)
- ✅ Contraste WCAG AA (tema oscuro)
- ✅ `aria-label` en botones sin texto visible
- ✅ `rel="noopener noreferrer"` en enlaces externos

---

## ⚡ Optimización

- ✅ Code splitting automático (Vite)
- ✅ Minificación CSS/JS (producción)
- ✅ Imágenes optimizadas (WebP recomendado)
- ✅ Lazy loading de componentes (preparado)
- ✅ Tree shaking (ES modules)

---

## 📸 Capturas de Pantalla

### Desktop
![Desktop View](docs/screenshots/desktop.png)

### Mobile
![Mobile View](docs/screenshots/mobile.png)

### Tests Passing
![Tests](docs/screenshots/tests.png)

### Coverage Report
![Coverage](docs/screenshots/coverage.png)

---

## 📚 Documentación Adicional

- [TEST_PLAN.md](TEST_PLAN.md) - Plan de pruebas completo con 49 casos de prueba
- [karma.conf.cjs](karma.conf.cjs) - Configuración de Karma
- [webpack.test.config.cjs](webpack.test.config.cjs) - Config Webpack para tests

---

## 👨‍💻 Autor

**Lukas Calvo**
- 🎓 Estudiante Ingeniería Informática - DUOC UC
- 🔗 [GitHub](https://github.com/LukasCalvo)
- 📸 [Instagram](https://www.instagram.com/pateshito/)

---

## 📄 Licencia

Proyecto educativo - DSY1104 Evaluación Formativa 2 - DUOC UC 2024