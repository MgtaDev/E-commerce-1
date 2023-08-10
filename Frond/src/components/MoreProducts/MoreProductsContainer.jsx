/* import { useSelector, useDispatch } from "react-redux";
import MoreProductsCard from "./MoreProductsCard";
import { useEffect } from "react";
import { products } from "../../redux/actions";
// Asegúrate de importar la acción adecuadamente

const MoreProductsContainer = () => {
    const dispatch = useDispatch;

  // Utilizamos directamente el estado "stateProducts" proveniente de Redux
const productos = useSelector((state)=> state.allProducts)
useEffect(() => {
    dispatch(products()) 
}); // despacha cuando se monta

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-auto-rows grid-rows-1 gap-5">
      {productos.length>0? productos.map(({id, name, descripcion, precio_venta}) => {
        return (
          <MoreProductsCard
            id={id}
            key={id}
            name={name}
            descripcion={descripcion}
            precio={precio_venta}
          />
        );
      }): productos.productos?.map(({id, name, descripcion, precio_venta}) => {
        return (
          <MoreProductsCard
            id={id}
            key={id}
            name={name}
            descripcion={descripcion}
            precio={precio_venta}
          />
        );
      })}
    </div>
  );
};

export default MoreProductsContainer;
*/