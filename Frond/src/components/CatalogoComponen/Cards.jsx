import { useSelector } from "react-redux";
import { useTransition, animated } from "react-spring";
import Card from "./Card";

const Cards = ({ stateProducts }) => {
  const productosFiltrados = useSelector((state) => state.productsFiltered);
  const searchResults = useSelector((state) => state.searchResults);

  const productListToRender = searchResults.length > 0
    ? searchResults
    : productosFiltrados.length > 0
    ? productosFiltrados
    : stateProducts;

  const transitions = useTransition(productListToRender, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
    config: {duration: 500}
  });

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-3 grid-auto-rows grid-rows-1 gap-5 ">
      {transitions((style, item) => {
        return (
          <animated.div style={style}>
            <Card
              id={item.id}
              name={item.name}
              descripcion={item.descripcion}
              precio={item.precio_venta}
              imagenPrincipal={item.imagenPrincipal}
            />
          </animated.div>
        );
      })}
    </div>
  );
};

export default Cards;