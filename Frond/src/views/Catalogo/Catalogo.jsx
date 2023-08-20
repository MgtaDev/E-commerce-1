import Cards from "../../components/CatalogoComponen/Cards";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Catalogfilters from "../../components/CatalogoComponen/Catalogfilters";
import { products } from "../../redux/actions";
import { FaBorderAll, FaThList } from "react-icons/fa"; // Importar los iconos que se utilizarán

const Catalogo = () => {
  const stateProducts = useSelector(state => state.Allproducts);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [cardLayout, setCardLayout] = useState(true); // Variable para el layout de las cartas
  const numberSize = 20;
  console.log(stateProducts)

  const dispatch = useDispatch();

  useEffect(() => {
    setPageNumber(0);
    const fetchData = () => {
      const queries = {
        page: 0,
        size: numberSize
      };
      dispatch(products(queries));
    };
    fetchData();
  }, [dispatch, numberSize]);

  useEffect(() => {
    setDisablePrev(pageNumber <= 0);
    setDisableNext(pageNumber >= stateProducts.paginas - 1);
  }, [pageNumber, stateProducts.paginas]);

  const handlePageClick = (newPageNumber) => {
    setPageNumber(newPageNumber);
    const queries = {
      page: newPageNumber,
      size: numberSize
    };
    dispatch(products(queries));
  };

  const renderPageButtons = () => {
    const pages = [];
    for (let i = 0; i < stateProducts.paginas; i++) {
      pages.push(
        <button
          key={i}
          className={`border-solid rounded border border-[255 255 255] px-2 py-1 mx-1 text-lg font-semibold text-slate-400 focus:text-slate-950 focus:border-slate-950 ${
            i === pageNumber ? "bg-slate-950 text-white" : ""
          }`}
          disabled={i === pageNumber || stateProducts.loading}
          onClick={() => handlePageClick(i)}
        >
          {i + 1}
        </button>
      );
    }
    return pages;
  };

  const handleCardLayoutChange = () => {
    setCardLayout(!cardLayout);
  };

  const renderCatalogLayoutButton = () => {
    if (cardLayout) {
      return (
        <button
          className="mx-1"
          onClick={handleCardLayoutChange}
        >
          <FaThList size={20} /> {/* Icono para cambiar a layout de lista */}
        </button>
      );
    } else {
      return (
        <button
          className="mx-1"
          onClick={handleCardLayoutChange}
        >
          <FaBorderAll size={20} /> {/* Icono para cambiar a layout de galería */}
        </button>
      );
    }
  };

  return (
    <section>
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-1 px-10">
          <Catalogfilters />
        </div>
        <div className="col-span-4 py-2 px-10">
          <div className="flex justify-center py-10">
            <button
              disabled={disablePrev || stateProducts.loading}
              onClick={() => handlePageClick(pageNumber - 1)}
              className="mx-1 text-3xl"
            >
              {"<"}
            </button>
            {renderPageButtons()}
            <button
              disabled={disableNext || stateProducts.loading}
              onClick={() => handlePageClick(pageNumber + 1)}
              className="mx-1 text-3xl"
            >
              {">"}
            </button>

         
          </div>
          <div className="flex justify-center mb-5">
          <button
          className="mx-1"
          onClick={handleCardLayoutChange}
        >
          <FaThList size={20} /> {/* Icono para cambiar a layout de lista */}
        </button>
        <button
          className="mx-1"
          onClick={handleCardLayoutChange}
        >
          <FaBorderAll size={20} /> {/* Icono para cambiar a layout de galería */}
        </button>
          </div>
      
          {cardLayout ? (
            <Cards stateProducts={stateProducts} />
          ) : (
            <div className="flex flex-col">
    {stateProducts.productos.map((producto) => (
    <div key={producto.id} className="p-4 my-4 bg-white rounded-md shadow-md">
      <div className="flex flex-row items-center">
        <img src={producto.imagenPrincipal} alt={producto.name} className="h-24 w-24 object-cover border-2 border-indigo-200 rounded-md mr-4" />
        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="text-lg font-medium">{producto.name}</h1>
          <button className="bg-black rounded-md py-2 px-4 text-white hover:bg-slate-500 transition-colors block mx-auto">
          Añadir al carrito
        </button>
        </div>
      </div>
      <p className="mt-1 text-sm text-gray-600 font-medium">{producto.descripcion}</p>
      <hr className="my-4 border-gray-300 w-11/12 mx-auto" />
      <div className="flex justify-between">
        <p className="text-md font-medium">${producto.precio_venta}</p>
      </div>
    </div>
  ))}
</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Catalogo;
