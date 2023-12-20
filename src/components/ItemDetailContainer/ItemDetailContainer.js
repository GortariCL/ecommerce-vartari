import React from "react";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = ({ nombre, precioCLP, imagen }) => {
  return (
    <div className="item__detail__container">
      <div className="item__detail">
        <div className="img__frame">
          <img className="img__crop" src={imagen} alt={nombre} />
        </div>
        <h2>{nombre}</h2>
        <p>Precio: ${precioCLP}</p>
      </div>
    </div>
  );
};
