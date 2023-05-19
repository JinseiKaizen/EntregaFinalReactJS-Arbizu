import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Carousel, Form } from "react-bootstrap";
import GeneralContext from "../context/GeneralContext";
import ItemButtonsComponent from "./ItemButtonsComponent";

const ItemComponent = (props) => {           
  const { data, showInfo, showDelete } = props;
  const { id: idProduct, title, img, description, price, stock, CustomColor } = data; 
  const [_stock, _setStock] = useState(stock || 0);
  const { removeToCar } = useContext(GeneralContext);
  const { addToCar } = useContext(GeneralContext);

  const [selectedModel, setSelectedModel] = useState('');

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };


  const handlerActionAdd = () => {
    if (_stock > 0) {
      _setStock(_stock - 1);
      //handlerUpdate();
    }
  };

  const showShortValue = (value = "", lengthMax = 45) => {
    return value.length > lengthMax ? value.substring(0, lengthMax).concat(" ...") : value;
  };

  const removeThisItem = () => {
    removeToCar(data);
  };

  const addBtnAction = () => {
    addToCar(data);
    alert("Se agrego el producto al carrito");
  };

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
        <h5 className="card-title">{showShortValue(title, 25)}
        <ItemButtonsComponent 
        showInfo={showInfo} 
        showDelete={showDelete} 
        idProduct={idProduct}
        />
        </h5>
        <button className="btn btn-danger btn-sm" onClick={removeThisItem}>
          x
        </button>
      </div>
      <Carousel>
        {img.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={image} alt="" />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="card-body">
        <p className="card-text text-muted">{showShortValue(description)}</p>
        <p className="card-text">
          <span className="fw-bold">$ {price}</span> - Existencia: {_stock}
        </p>
        <NavLink to={`/products/detail/${idProduct}`}>
          <button className="btn btn-outline-primary btn-sm me-2" onClick={handlerActionAdd}>
            + info
          </button>
        </NavLink>

        <Form.Group controlId="modelSelect">
        <Form.Label>Selecciona color del modelo:</Form.Label>
        <Form.Control as="select" value={selectedModel} onChange={handleModelChange}>
          <option value="">Selecciona el color del filamento</option>
          {CustomColor.map((color, index) => (
            <option key={index} value={color}>
              {color}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

        <button onClick={addBtnAction} className="btn btn-primary">
          Agregar al carrito
        </button>
      </div>

    </div>
  );
};

export default ItemComponent;

