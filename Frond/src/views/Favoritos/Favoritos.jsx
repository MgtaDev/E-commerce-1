import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

import Card from "../../components/CatalogoComponen/Card";

import MoreProductsCardContainer from "../../components/MoreProducts/MoreProductsContainer";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { deleteFavoriteAPI, deleteFavoriteLS } from "../../redux/actions";

const Favoritos = () => {
  const dispatch = useDispatch()
  const favoritesRaw = useSelector((state) => state.favoritesRaw);
  const favoritosLS = useSelector((state) => state.localFavorites);
  const favoritosAPI = useSelector((state) => state.favorites);
  const { user, isAuthenticated } = useAuth0();
  const categorias = useSelector((state) => state.Allcategories);
  const favoritos = isAuthenticated ? favoritosAPI : favoritosLS;
  console.log(user);
  const redirigirAlInicio = () => {
    window.scrollTo(0, 0);
  }

  // paginacion
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedPage, setSelectedPage] = useState(1)
  const [itemsPerPage] = useState(4)
  const lastClient = currentPage * itemsPerPage;
  const firtsClient = lastClient - itemsPerPage
  const currentProducts = favoritos?.slice(firtsClient,lastClient)
  console.log(favoritos);
  const [disableTF, setDisableTF] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const numberSize = 10;

  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(favoritos?.length / itemsPerPage); i++) {
    pageNumbers.push({number:i, selected: i === selectedPage});
  }
  return pageNumbers;
};

const pageNumbers = generatePageNumbers();


  const saludo = () => {
    return (
      <div className="text-xl">
        {isAuthenticated ? (
          <h1 className="mx-16 my-4">
            Hola, <span className="font-bold">{user.given_name}</span>. Estos son
            tus productos Favoritos:
          </h1>
        ) : (
          <h1 className="mx-16 my-4">Estos son tus productos Favoritos</h1>
        )}
      </div>
    );
  };

  return (
    <div>

      {saludo()}

      {favoritos?.length ? (
        <div className="mx-24 p-5 my-10 bg-gray-50 align-center flex justify-center">
          <div className="grid md:grid-cols-1 lg:grid-cols-1 grid-auto-rows grid-rows-1 gap-5 align-center ">
            {currentProducts.map(({ id, imagenPrincipal, name, precio_venta }) => {
              return (
                <div key={id} className="flex justify-center ml-5 flex-col items-center justify-between p-6 w-[650px] rounded-lg bg-white border-b shadow-sm mb-4">
                                       
                <div className="flex items-center justify-between w-full">
                  <Link to={`/detail/${id}`}>
                    <img src={imagenPrincipal} alt="fotoProducto" className="w-20 h-20 object-cover border-2 border rounded-md " />
                  </Link>
                    <div className="-ml-4 w-40">
                        <div className="font-medium capitalize text-gray-800">{name}</div>
                        <div className="w-20 text-right text-xs flex items-center justify-center">
                      
                        

                    </div>
                        
                    </div>
                   
                    <div className="w-32 text-right font-medium">
                        <div className="text-xs text-gray-500">Costo</div>
                        ${precio_venta}.00
                        <p onClick={()=>{
                        const correo_electronico = user?.email
                          if(isAuthenticated){
                            if (favoritesRaw.length > 0) {
                              const resultado = favoritesRaw.find(
                                (objeto) => objeto.productoId === id
                              );
                              if (resultado) {
                                const idFav = resultado.id;
                                const favoritoR = {
                                  correo_electronico,
                                  idFav,
                                  id,
                                };
                                dispatch(deleteFavoriteAPI(favoritoR));
                              }
                            }
                          }else{
                            
                            dispatch(deleteFavoriteLS(id))
                          }
                        }} className="text-xs cursor-pointer text-red-600">Eliminar</p>
                    </div>
                    
                </div>
            </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="text-center p-20 my-8">
          <button className="text-gray-600 text-xl font-medium ">Tu lista de favoritos esta vacia</button>
        </div>
      )}

        {favoritos?.length > 5 && (
 <div className="flex justify-center py-8">
 <button
   onClick={() => {
     if (currentPage > 1) {
       setCurrentPage(currentPage - 1);
       setSelectedPage(selectedPage - 1);
       redirigirAlInicio()
     }
   }}
   className="border-solid rounded border border-[255 255 255] px-3 py-1 mx-1 text-lg font-semibold text-slate-400   "
   >
   {"<"}
 </button>

 {pageNumbers.map(({ number, selected }) => (
   <button
     key={number}
     onClick={() => {
       setCurrentPage(number);
       setSelectedPage(number);
       redirigirAlInicio()
     }}
     className={`mx-1 text-lg font-bold px-3 py-1 rounded ${selected ? 'bg-blue-900 text-white' : 'bg-white text-black '}`}
   >

     {number}
   </button>

 ))}
 
 <button
   onClick={() => {
     if (currentPage < Math.ceil(favoritos?.length / itemsPerPage)) {
       setCurrentPage(currentPage + 1);
       setSelectedPage(selectedPage + 1);
       redirigirAlInicio()
     }
   }}
   className="border-solid rounded border border-[255 255 255] px-3 py-1 mx-1 text-lg font-semibold text-slate-400   "
   >
   {">"}
 </button>
</div>
        )}
     
     
    </div>
  );
};

export default Favoritos;