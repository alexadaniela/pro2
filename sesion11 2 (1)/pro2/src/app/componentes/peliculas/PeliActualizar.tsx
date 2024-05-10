import Form from "react-bootstrap/Form";
import noFoto from "../../../assets/img/noDisponible.png";

export const PeliActualizar = (props: any) => {
  console.log(props);
  return (
    <div className="d-flex justify-content-center">
      <div className="col-md-5 mt-5 pb-4">
        <Form noValidate>
          <div className="card">
            <div className="card-header">
              <h5 className=" rojito">Actualizar película</h5>
            </div>

            <div className="card-body">
              <div className="mb-3">
                <Form.Group controlId="nombrePelicula">
                  <Form.Label>
                    <span className="rojito">*</span> Nombre película
                  </Form.Label>
                  <Form.Control size="sm" required type="text" name="nombrePelicula" />
                </Form.Group>
              </div>

              <div className="mb-3">
                <Form.Group controlId="pro">
                  <Form.Label>
                    <span className="rojito">*</span> Protagonista
                  </Form.Label>
                  <Form.Control size="sm" required type="text" name="protagonistaPelicula" />
                </Form.Group>
              </div>

              <div className="mb-3">
                <Form.Group controlId="gen">
                  <Form.Label>
                    <span className="rojito">*</span> Protagonista
                  </Form.Label>

                  <Form.Select size="sm" required name="generoPelicula">
                    <option value="">Seleccione un genero</option>
                  </Form.Select>
                </Form.Group>
              </div>

              <div className="mb-3">
                <Form.Group controlId="fot">
                  <Form.Label>
                    <span className="rojito">*</span> Imágen:
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    accept="image/png, image/jpeg"
                    // ref={fileInputRef}
                    type="file"
                    name="imagenPelicula"
                  />
                </Form.Group>
              </div>

              <div className="mb-3">
                <div className="d-flex justify-content-center">
                  <img src={noFoto} alt="no foto" className="maximoTamanoCreacion" />
                </div>
              </div>
            </div>

            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Actualizar película
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
