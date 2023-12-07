import React, { useState } from "react";
import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer";

import "./Vinos.css";

export const Vinos = () => {
  const [item, setItem] = useState([
    {
      id: 1,
      nombre: "Malbec",
      descripcion: "Vino tinto de color oscuro y sabor frutal.",
      precioCLP: 9500,
      imagen: "https://d1av3r99ggsbkh.cloudfront.net/3715-thickbox_default/malbec-premium-uno-valle-de-uco-vina-antigal-argentina.jpg",
    },
    {
      id: 2,
      nombre: "Chardonnay",
      descripcion: "Vino blanco con notas a frutas tropicales y vainilla.",
      precioCLP: 7800,
      imagen: "https://www.catadorstore.cl/images/productos/cono-sur-20-barrels-chardonnay.jpg",
    },
    {
      id: 3,
      nombre: "Merlot",
      descripcion: "Vino tinto suave y aromático con toques de frutos rojos.",
      precioCLP: 8800,
      imagen: "https://desaonline.vteximg.com.br/arquivos/ids/157249-1000-850/VN18048.png?v=637466821921270000",
    },
    {
      id: 4,
      nombre: "Sauvignon Blanc",
      descripcion: "Vino blanco fresco y herbáceo con notas cítricas.",
      precioCLP: 7100,
      imagen: "https://entrevinosylicores.cl/wp-content/uploads/2021/05/K42-Sauvignon-Blanc.jpg",
    },
    {
      id: 5,
      nombre: "Cabernet Sauvignon",
      descripcion: "Vino tinto robusto con sabores a grosella y cedro.",
      precioCLP: 10400,
      imagen: "https://colchaguavalley.cl/cdn/shop/products/2CS.jpg?v=1652823437",
    },
    {
      id: 6,
      nombre: "Syrah",
      descripcion:
        "Vino tinto intenso y especiado con notas a moras y pimienta.",
      precioCLP: 9200,
      imagen: "https://d1ks0wbvjr3pux.cloudfront.net/6169befc-ec32-4623-9f83-f15e4e1cf222-lg.jpg",
    },
    {
      id: 7,
      nombre: "Riesling",
      descripcion: "Vino blanco semiseco con aromas florales y cítricos.",
      precioCLP: 7400,
      imagen: "https://directwines.vtexassets.com/arquivos/ids/159969-2000-2000?v=637026056585400000&width=2000&height=2000&aspect=true",
    },
    {
      id: 8,
      nombre: "White Zinfandel",
      descripcion: "Vino tinto afrutado con sabores a frutos rojos y especias.",
      precioCLP: 9100,
      imagen: "https://bodegasalianza.vteximg.com.br/arquivos/ids/186392-800-800/27663-1.jpg?v=637600548462300000",
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
