import Cards from "../../components/CatalogoComponen/Cards";
import { useEffect, useState } from "react";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill
} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import Catalogfilters from "../../components/CatalogoComponen/Catalogfilters";
import { products } from "../../redux/actions";

const Catalogo = () => {
  const stateProducts = useSelector(state => state.Allproducts);
  const [disableTF, setDisableTF] = useState(true);
  const [pageNumberNx, setPageNumberNx] = useState(0);
  const numberSize = 10;

  const dispatch = useDispatch();

  const handlerNext = () => {
    pageNumberNx < stateProducts.paginas - 1 ? setPageNumberNx(prevNext => prevNext + 1) : setDisableTF(false)
  };

  const handlerPrev = () => {
    pageNumberNx > 0 ? setPageNumberNx(pageNumberNx - 1) : setDisableTF(false);
  };

  useEffect(() => {
    const fetchData = () => {
      const queries = {
        page: pageNumberNx,
        size: numberSize
      };

      dispatch(products(queries));
    };

    fetchData();
    setDisableTF(pageNumberNx <= 0 || pageNumberNx >= stateProducts.paginas - 1);
  }, [dispatch, pageNumberNx, numberSize, stateProducts.paginas]);

  const renderPageButtons = () => {
    const pages = [];
    for (let i = 0; i < stateProducts.paginas; i++) {
      const pageNum = i + 1;
      const isActive = pageNum === pageNumberNx + 1;
      pages.push(
        <button
          key={i}
          className={`font-bold text-lg mx-2 px-2 py-0.5 rounded hover:bg-gray-200 focus:outline-none ${isActive ? "bg-gray-300" : "bg-white"}`}
          onClick={() => setPageNumberNx(i)}
        >
          {pageNum}
        </button>
      );
    }
    return pages;
  };

  return (
    <section>
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-1 px-10">
          <Catalogfilters />
        </div>
        <div className="col-span-4 py-10 px-10">
          <div className="grid grid-cols-2 pb-10 justify-items-center	">
            <p className="col-span-1 px-3 text-lg">
              <span className="font-bold">300</span> resultados para --
            </p>
            <select className="col-span-1 text-lg border-solid rounded border border-[255 255 255] px-2 py-[0.2rem] text-slate-400 focus:text-slate-950 focus:border-slate-950">
              <option value="selecciona una opcion">
                selecciona una opcion.
              </option>
              <option value="a">a</option>
              <option value="a">a</option>
            </select>
          </div>
          <Cards stateProducts={stateProducts} />
        </div>
        <div className="col-span-5 flex justify-center py-10">
          <button
            onClick={handlerPrev}
            className="text-3xl mr-5 focus:outline-none"
            disabled={!disableTF}
          >
            <BsFillArrowLeftSquareFill />
          </button>
          {renderPageButtons()}
          <button
            onClick={handlerNext}
            className="text-3xl ml-5 focus:outline-none"
            disabled={!disableTF}
          >
            <BsFillArrowRightSquareFill />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Catalogo;