import { useNavigate } from "react-router-dom";

export const NoEncontrado = () => {
  const regresar = useNavigate();

  return (
    <div className="d-flex justify-content-center">
      <div className="mt-4 p-4 text-center text-bg-dark rounded-3 col-md-6">
        <span className="display-1">404</span>
        <div className="mb-4 lead">Recurso solicitado NO encontrado</div>
        <button onClick={() => regresar(-1)} className="btn btn-info">
          Regresar
        </button>
      </div>
    </div>
  );
};
