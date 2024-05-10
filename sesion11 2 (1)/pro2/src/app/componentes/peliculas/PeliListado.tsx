import { useState } from "react";
import { Pelicula } from "../../modelos/peliculas";
import { ARREGLO_PELICULAS } from "../../mocks/Pelicula-mocks";
import { ARREGLO_PELICULA_GENERO } from "../../utilidades/dominios/DomGenero";

export const PeliListado = () => {
  const [arrPeliculas] = useState<Pelicula[]>(ARREGLO_PELICULAS);

  const obtenerNombreGenero = (valor: string) => {
    for (const obGen of ARREGLO_PELICULA_GENERO) {
      if (obGen.codGenero == valor) {
        return obGen.nombreGenero;
      }
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-md-11 mt-4">
          <table className="table table-striped table-hover">
            <thead>
              <tr className="table-danger">
                <th style={{ width: "10%" }}>Codigo</th>
                <th style={{ width: "30%" }}>Nombre</th>
                <th style={{ width: "20%" }}>Genero</th>
                <th style={{ width: "30%" }}>Protagonista</th>
                <th style={{ width: "10%" }}>Imagen</th>
              </tr>
            </thead>
            <tbody>
              {arrPeliculas.map((miPeli: Pelicula) => (
                <tr className="aligh-middle" key={miPeli.codPelicula}>
                  <td>{miPeli.codPelicula}</td>
                  <td>{miPeli.nombrePelicula}</td>
                  <td>{obtenerNombreGenero(miPeli.codGeneroPelicula)}</td>
                  <td>{miPeli.protagonistaPelicula}</td>
                  <td>
                    <img src={miPeli.imagenPeliculaBase64} alt="" className="imagenListado" />
                    <div className="text-info"></div>
                    {miPeli.imagenPelicula}
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
