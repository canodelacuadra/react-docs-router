# Mostrar documentación en Markdown con React Router

🟢 **Ver la app en funcionamiento:**  
[https://canodelacuadra.github.io/react-docs-router](https://canodelacuadra.github.io/react-docs-router)

Este proyecto es una pequeña aplicación creada con **React + Vite** utilizando **React Router**, rutas dinámicas, carga de contenidos Markdown y resaltado de código con Prism.js.

##  Características

- Rutas dinámicas con `React Router` (`/doc/:tema`)
- Carga de archivos `.md` desde `public/docs/`
- Navegación generada automáticamente
- Conversión de Markdown a HTML con `marked`
- Resaltado de sintaxis con `Prism.js`


##  Instalación local

1. Clona el repositorio:

   ```bash
   git clone https://github.com/canodelacuadra/react-docs-router.git
   cd react-docs-router
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```



##  Estructura del proyecto

```
 public/
   └─  docs/
      ├─ html.md
      ├─ css.md
      └─ javascript.md

 src/
   ├─  components/
   │   └─ Navbar.jsx
   ├─  pages/
   │   └─ Doc.jsx
   ├─  data/
   │   └─ temas.js
   ├─ App.jsx
   ├─ main.jsx
   ├─ index.css
   └─ app.css
```

##  Ejemplo de Markdown

```markdown
# Título

```javascript
const saludo = "Hola";
console.log(saludo);
```
```

##  Tecnologías

- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [Marked](https://marked.js.org/)
- [Prism.js](https://prismjs.com/)
- [Vite](https://vitejs.dev/)
- [Netlify](https://app.netlify.com/)

---

© 2025 – Proyecto educativo para uso formativo.
