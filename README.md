# 📘 Documentación Interactiva con React Router

🟢 **Ver la app en funcionamiento:**  
[https://canodelacuadra.github.io/react-docs-router](https://canodelacuadra.github.io/react-docs-router)

Este proyecto es una pequeña aplicación creada con **React + Vite** para enseñar los fundamentos de **React Router**, rutas dinámicas, carga de contenidos Markdown y resaltado de código con Prism.js.

## ✨ Características

- Rutas dinámicas con `React Router` (`/doc/:tema`)
- Carga de archivos `.md` desde `public/docs/`
- Navegación generada automáticamente
- Conversión de Markdown a HTML con `marked`
- Resaltado de sintaxis con `Prism.js`
- Preparada para despliegue en GitHub Pages

## 🚀 Instalación local

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

## 🌐 Despliegue en GitHub Pages

1. Edita `vite.config.js`:

   ```js
   export default defineConfig({
     base: '/react-docs-router/',
     plugins: [react()],
   });
   ```

2. Asegúrate de que `public/docs/` contiene los archivos `.md`.

3. Instala `gh-pages`:

   ```bash
   npm install --save-dev gh-pages
   ```

4. En tu `package.json`, añade:

   ```json
   "homepage": "https://canodelacuadra.github.io/react-docs-router",
   "scripts": {
     "dev": "vite",
     "build": "vite build",
     "preview": "vite preview",
     "deploy": "gh-pages -d dist"
   }
   ```

5. Despliega:

   ```bash
   npm run build
   npm run deploy
   ```

## 📁 Estructura del proyecto

```
📁 public/
   └─ 📁 docs/
      ├─ html.md
      ├─ css.md
      └─ javascript.md

📁 src/
   ├─ 📁 components/
   │   └─ Navbar.jsx
   ├─ 📁 pages/
   │   └─ Doc.jsx
   ├─ 📁 data/
   │   └─ temas.js
   ├─ App.jsx
   ├─ main.jsx
   ├─ index.css
   └─ app.css
```

## 📝 Ejemplo de Markdown

```markdown
# Título

```javascript
const saludo = "Hola";
console.log(saludo);
```
```

## 🧩 Tecnologías

- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [Marked](https://marked.js.org/)
- [Prism.js](https://prismjs.com/)
- [Vite](https://vitejs.dev/)
- [GitHub Pages](https://pages.github.com/)

---

© 2025 – Proyecto educativo para uso formativo.
