import React, { useState } from "react";
import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer";

import "./Cocktails.css";

export const Cocktails = () => {
  const [item, setItem] = useState([
    {
      id: 1,
      nombre: "Mojito Clásico",
      descripcion: "Refrescante cóctel de menta, ron, azúcar, lima y soda.",
      precioCLP: 6500,
      imagen:
        "https://img.freepik.com/fotos-premium/coctel-mojito-contra-superficie-botellas-barra-atributos-barra_210632-1077.jpg",
    },
    {
      id: 2,
      nombre: "Piña Colada",
      descripcion: "Deliciosa mezcla de ron, crema de coco y jugo de piña.",
      precioCLP: 6900,
      imagen: "https://media.istockphoto.com/id/1310583811/es/foto/bebida-de-c%C3%B3ctel-pina-colada.jpg?s=612x612&w=0&k=20&c=LHDfw25F8zJnekCLPzpXGs00Jv8PsLUXO_Utd4rx09g=",
    },
    {
      id: 3,
      nombre: "Daiquiri de Fresa",
      descripcion: "Cóctel a base de ron blanco, fresas y jugo de limón.",
      precioCLP: 5950,
      imagen: "https://st2.depositphotos.com/10614052/49250/i/450/depositphotos_492502356-stock-photo-glass-of-strawberry-daiquiri-cocktail.jpg",
    },
    {
      id: 4,
      nombre: "Margarita",
      descripcion: "Cóctel de tequila, triple sec y jugo de lima.",
      precioCLP: 6400,
      imagen: "https://img.freepik.com/foto-gratis/coctel-fresco-alcohol-cubitos-hielo-rodaja-limon-vaso_114579-1448.jpg",
    },
    {
      id: 5,
      nombre: "Caipirinha",
      descripcion: "Cóctel brasileño con cachaça, lima, azúcar y hielo.",
      precioCLP: 6000,
      imagen: "https://media.istockphoto.com/id/1271629506/es/foto/caipirinha-brasile%C3%B1a-en-una-tabla-de-cortar-con-lim%C3%B3n-con-un-fondo-degradado-copiar-el-espacio.jpg?s=612x612&w=0&k=20&c=AgrHuEt9AQyDq1xVqYLYID_h2g-CAQh21NDIwR0CwnY=",
    },
    {
      id: 6,
      nombre: "Martini Espresso",
      descripcion: "Combinación de vodka, licor de café y espresso.",
      precioCLP: 7600,
      imagen: "https://media.istockphoto.com/id/838386748/photo/bartender-decorated-espresso-cocktail-drink-white-foam-coffee-bean.jpg?s=612x612&w=0&k=20&c=3rId9166SZFLpGsHVlf43WJc9qzdRGevofmgr4Y6XYo=",
    },
    {
      id: 7,
      nombre: "Sangría",
      descripcion: "Refrescante mezcla de vino tinto, frutas y brandy.",
      precioCLP: 8000,
      imagen: "https://media.istockphoto.com/id/500005177/es/foto/deliciosos-rojo-sangr%C3%ADa-caseras.jpg?s=612x612&w=0&k=20&c=uVLUDxuI-FkZhRummZWdNs8yZgtMTEGMkcYitY2rASw=",
    },
    {
      id: 8,
      nombre: "Mai Tai",
      descripcion: "Cóctel tropical con ron, curaçao, almendra y limón.",
      precioCLP: 7800,
      imagen: "https://media.istockphoto.com/id/545372152/es/foto/c%C3%B3ctel-casero-mai-tai.jpg?s=612x612&w=0&k=20&c=oqZKmCebRiDZM7e467G7RIDj-tfgnHMiad6P7DnN5X4=",
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
