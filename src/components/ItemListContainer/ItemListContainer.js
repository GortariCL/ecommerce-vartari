import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const product = useParams();

  useEffect(() => {
    setItems(product);
  }, [product]);

  console.log(items);

  return <>
    <h1>Productos</h1>
  </>;
};
