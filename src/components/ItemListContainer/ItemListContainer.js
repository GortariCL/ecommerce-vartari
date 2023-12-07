import React, { useState, useEffect } from "react";
import itemDetail from "../../assets/itemDetail.json";
import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(itemDetail)
  }, []);
  console.log(items);

  return (
    <div>
      <h1>Lista de Cocktails</h1>
      <div className="cocktail-list">
        {items.map((item) => (
          <ItemDetailContainer
            key={item.id}
            nombre={item.nombre}
            descripcion={item.descripcion}
            precio={item.precio}
            imagen={item.imagen}
          />
        ))}
      </div>
    </div>
  );
};
