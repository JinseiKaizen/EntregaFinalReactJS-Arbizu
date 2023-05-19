import React, { Fragment, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import GeneralContext from "../context/GeneralContext";
import useFirestore from "../utils/useFirestore";
import { Form, Button, Col, Row, Carousel} from "react-bootstrap";

const nameCollection = "items";

const DetailProductView = () => {
  const { idProduct: documentId } = useParams();
  const { addToCar } = useContext(GeneralContext);
  const [data] = useFirestore({ nameCollection, documentId });
  const [amount, setAmount] = useState(1);
  const { title, description, price, category } = data;

  const [selectedColor, setSelectedColor] = useState("");

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const addBtnAction = () => {
    addToCar(data);
    alert("Se agrego el producto al carrito");
  };


  return (
    <Fragment>
      <Row className="my-5">
        <Col md={{ span: 6, offset: 3 }}>
          <div className="alert alert-primary text-center" role="alert">
            ¡CREA TUS IDEAS!
          </div>
        </Col>
        <Col md={{ span: 3 }}>
          <h3 className="text-center mb-0">
            Categoría: <span className="text-info">{category}</span>
          </h3>
        </Col>
      </Row>

      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <div className="card mb-3 shadow-sm">
            <Row className="g-0">
              <Carousel>
                {data.img && data.img.map((image, index) => (

                  <Carousel.Item key={index}>
                    <img className="d-block w-100 img-fluid" src={image} alt="" />
                  </Carousel.Item>
                ))}
              </Carousel>
              <Col md={{ span: 8 }}>
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <p className="card-text">
                    <small className="text-muted">$ {price}</small>
                  </p>
                  <Form.Group controlId="colorSelect">
                    <Form.Label>Selecciona el color:</Form.Label>
                    <Form.Control as="select" value={selectedColor} onChange={handleColorChange}>
                      <option value="">Selecciona el color del producto</option>
                      {data.CustomColor && data.CustomColor.map((color, index) => (
                        <option key={index} value={color}>
                          {color}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                  <Button variant="primary" onClick={addBtnAction}>
                    Agregar al carrito
                  </Button>
                  <p className="h6 my-5">
                    <span> Cantidad: </span>
                    {amount}{" "}
                    <div className="btn-group">
                    <button
                        disabled={amount === 1}
                        onClick={() => setAmount(amount - 1)}
                        className="btn btn-outline-secondary btn-sm"
                      >
                        -
                      </button>
                      <button onClick={() => setAmount(amount + 1)} className="btn btn-outline-secondary btn-sm">
                        +
                      </button>
                      
                    </div>
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default DetailProductView;
