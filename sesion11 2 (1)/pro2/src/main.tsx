import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";

// Importar estilos y bibliotecas adicionales
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.css";

// Rutas adicionales, como 'Películas', 'Detalles de película', 'Favoritos', etc.
import Movies from "./components/Movies";
import MovieDetail from "./components/MovieDetail";
import Favorites from "./components/Favorites";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("No se pudo encontrar el elemento root");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          {/* Agrega otras rutas según sea necesario */}
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);
