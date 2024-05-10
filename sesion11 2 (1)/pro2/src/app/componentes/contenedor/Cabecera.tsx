import { NavLink } from "react-router-dom";
import logoPro from "../../../assets/img/logoReact.png";

export const Cabecera = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <img src={logoPro} alt="Logo proyecto" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link" aria-current="page">
                    Inicio
                  </NavLink>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Peliculas
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to="/plistar" className="dropdown-item">
                        Listar
                      </NavLink>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <NavLink to="/pcrear" className="dropdown-item">
                        Crear
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/padmin" className="dropdown-item">
                        Administrar
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <NavLink to="/acerca" className="nav-link">
                    Acerca de
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="navbar-nav me-auto mb-2 mb-lg-0">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/perdido" className="nav-link">
                    Otra opción
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
