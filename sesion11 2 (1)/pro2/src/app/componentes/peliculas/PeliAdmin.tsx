import { useState } from "react";
import { Pelicula } from "../../modelos/peliculas";
import { ARREGLO_PELICULASS } from "../../mocks/Pelicula-mocks";

export const PeliAdmin = () => {
  const [arrPeliculas] = useState<Pelicula[]>(ARREGLO_PELICULASS);

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-md-11 mt-4">
          <table className="table table-striped table-hover">
            <thead>
              <tr className="table-danger">
                <th style={{ width: "10%" }}>Codigo</th>
                <th style={{ width: "30%" }}>Nombre</th>
                <th style={{ width: "25%" }}>Protagonista</th>
                <th style={{ width: "25%" }}>Imagen</th>
                <th style={{ width: "10%" }}>Eliminar/Editar </th>
              </tr>
            </thead>
            <tbody>
              {arrPeliculas.map((miPeli: Pelicula) => (
                <tr className="aligh-middle" key={miPeli.codPelicula}>
                  <td>{miPeli.codPelicula}</td>
                  <td>{miPeli.nombrePelicula}</td>
                  <td>{miPeli.protagonistaPelicula}</td>
                  <td>
                    <img src={miPeli.imagenPeliculaBase64} alt="" className="imagenListado" />
                    <div className="text-info"></div>
                    {miPeli.imagenPelicula}
                  </td>
                  <td className="text-center">
                  <a href="/#">
                    <i className="fa-solid fa-trash-can rojito"></i>
                  </a>{" "}
                  <a href="/pactual/8">
                    <i className="fa-regular fa-pen-to-square verde"></i>
                  </a>
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
