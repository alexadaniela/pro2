import { Route, Routes } from "react-router-dom";

import { AcercaDe } from "../../componentes/otros/AcercaDe";

import { Inicio } from "../../componentes/contenedor/Inicio";
import { PeliCrear } from "../../componentes/peliculas/PeliCrear";
import { PeliAdmin } from "../../componentes/peliculas/PeliAdmin";
import { PeliListado } from "../../componentes/peliculas/PeliListado";
import { PeliActualizar } from "../../componentes/peliculas/PeliActualizar";

import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
	  
      <Route path="/pcrear" element={<PeliCrear />} />
      <Route path="/padmin" element={<PeliAdmin />} />
      <Route path="/plistar" element={<PeliListado />} />
      <Route path="/pactual/:codigo" element={<PeliActualizar />} />

      <Route path="/acerca" element={<AcercaDe />} />

      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
};
