import React, { useState, useEffect } from "react";
import itemList from "../../assets/itemList.json";

import "./ItemListContainer.css";

export const ItemListContainer = ({ title }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(itemList);
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      <div className="item__list__container">
        {items.map((item) => (
          <div className="item__list">
            <img src={item.img} alt={item.name} />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
