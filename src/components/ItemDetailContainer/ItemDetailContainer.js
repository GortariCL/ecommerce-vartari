import React from "react";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = ({
  nombre,
  precio,
  imagen,
}) => {
  return (
    <div className="item__detail">
      <img src={imagen} alt={nombre} />
      <h2>{nombre}</h2>
      <p>Precio: ${precio}</p>
    </div>
  );
};
