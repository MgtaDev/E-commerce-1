import React, { useEffect } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from 'react-redux';
import { products } from '../../redux/actions'; // Asegúrate de importar la acción adecuadamente

const Cards = () => {
  const stateProducts = useSelector(state => state.Allproducts);
  const dispatch = useDispatch();

  useEffect(() => {
    // Simulamos una llamada al servidor para obtener los datos del JSON
    // En una aplicación real, puedes hacer una llamada real al servidor aquí
    const fetchData = async () => {
      try {
        await dispatch(products());
      } catch (error) {
        console.log(error.text);
      }
    };
    fetchData();
  }, [dispatch]);

  // Utilizamos directamente el estado "stateProducts" proveniente de Redux
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-auto-rows grid-rows-1 gap-5">
      {stateProducts.map(({ name, descripcion, precio_venta}) => {
        return (
          <Card
            key={name}
            name={name}
            descripcion={descripcion}
            precio={precio_venta}
          />
        );
      })}
    </div>
  );
};

export default Cards;
