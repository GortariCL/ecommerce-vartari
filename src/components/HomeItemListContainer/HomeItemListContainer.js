import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import itemList from "../../assets/itemList.json";

import "./HomeItemListContainer.css";

export const HomeItemListContainer = ({ title }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(itemList);
  }, []);

  return (
    <div className="home__item__list__container">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="item__list__container">
        {items.map((item) => (
          <Link className="item__link" to={item.name.toLowerCase()}>
            <div className="item__list">
              <div className="img__frame">
                <img className="img__crop" src={item.img} alt={item.name} />
              </div>
              <h2>{item.name.toUpperCase()}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
