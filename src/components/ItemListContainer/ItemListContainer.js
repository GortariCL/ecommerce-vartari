import React, { useState, useEffect } from "react";
import itemList from "../../assets/itemList.json";

import "./ItemListContainer.css";

export const ItemListContainer = ({ title }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(itemList);
  }, []);
  console.log(items);

  return (
    <div>
      <h1>{title}</h1>
      <div className="cocktail__list">
        {items.map((item) => (
          <div className="item__detail">
            <img src={item.img} alt={item.name} />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
