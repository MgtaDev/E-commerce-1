import React, { useState, useEffect } from "react";
import productsData from "../../json/products.json"; // Ajusta la ruta si es necesario
import Card from "./Card";

const Cards = () => {
  // Creamos un estado para almacenar los datos del JSON
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulamos una llamada al servidor para obtener los datos del JSON
    // En una aplicación real, puedes hacer una llamada real al servidor aquí
    setProducts(productsData.products);
  }, []);

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-auto-rows grid-rows-1 gap-5">
      {products.map(({title, price, image}) => {
        return(
            <Card
            key={title}
            title={title}
            price={price}
            image={image}
            />
        )
      })}
    </div>
  );
};

export default Cards;
