import React, { useState } from "react";
import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer";

import "./Cervezas.css";

export const Cervezas = () => {
  const [item, setItem] = useState([
    {
      id: 1,
      nombre: "IPA",
      descripcion: "Cerveza ale con sabor a lúpulo y notas cítricas.",
      precioCLP: 5600,
      imagen:
        "https://cdn.la-montana.cl/wp-content/uploads/2021/07/WEB-09-1.png",
    },
    {
      id: 2,
      nombre: "Stout",
      descripcion: "Cerveza oscura y cremosa con matices a café y chocolate.",
      precioCLP: 6800,
      imagen:
        "https://cdnx.jumpseller.com/cerveza-mas-56/image/34360081/resize/1200/1200?1682104846",
    },
    {
      id: 3,
      nombre: "Pilsner",
      descripcion: "Cerveza lager refrescante con un sabor equilibrado.",
      precioCLP: 5150,
      imagen:
        "https://d1ks0wbvjr3pux.cloudfront.net/bcb97cd2-3b05-4f57-b4fa-e008256fd656-lg.jpg",
    },
    {
      id: 4,
      nombre: "Witbier",
      descripcion: "Cerveza de trigo con toques cítricos y especiados.",
      precioCLP: 5900,
      imagen:
        "https://d1ks0wbvjr3pux.cloudfront.net/f99ad468-29dd-41a7-ae7c-7338202e18e7-lg.jpg",
    },
    {
      id: 5,
      nombre: "Amber Ale",
      descripcion: "Cerveza ale de color ámbar con sabor a caramelo y frutas.",
      precioCLP: 6400,
      imagen: "https://www.biuzt.cl/wp-content/uploads/Amber-Ale.png",
    },
    {
      id: 6,
      nombre: "Saison",
      descripcion: "Cerveza belga especiada y refrescante.",
      precioCLP: 6000,
      imagen:
        "https://peumopoint.cl/wp-content/uploads/2020/07/PEUMO-VARIEDADES-II-WEB-820-X-889-PX-1-500x500.png",
    },
    {
      id: 7,
      nombre: "Pale Ale",
      descripcion: "Cerveza de cuerpo medio con sabor a lúpulo y maltas.",
      precioCLP: 5800,
      imagen:
        "https://cdnx.jumpseller.com/cerveza-mas-56/image/34360730/resize/1200/1200?1682105874",
    },
    {
      id: 8,
      nombre: "Porter",
      descripcion: "Cerveza oscura con aromas a café, cacao y frutos secos.",
      precioCLP: 7000,
      imagen:
        "https://jumbo.vtexassets.com/arquivos/ids/424836/Pack-6-un-cerveza-porter-45%C2%B0-botella-330-cc-c-u.jpg?v=637521872344470000",
    },
  ]);

  return (
    <div className="cocktails__container">
      {item.map((item) => {
        return (
          <ItemDetailContainer
            key={item.id}
            nombre={item.nombre}
            precioCLP={item.precioCLP}
            imagen={item.imagen}
          />
        );
      })}
    </div>
  );
};
