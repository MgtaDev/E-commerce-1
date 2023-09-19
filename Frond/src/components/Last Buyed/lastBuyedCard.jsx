import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteAPI, addFavoriteLS, addItemToCartApi, addItemToCartLS, addToCartFunction, deleteFavoriteAPI, deleteFavoriteLS } from "../../redux/actions";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaStar } from "react-icons/fa";

const LastBuyedCard = ({lastCompra}) => {
    const redirigirAlInicio = () => {
        window.scrollTo(0, 0);
      }
  const extractNumber = (string) => {
    const match = string.match(/\d+/); // Busca uno o más dígitos en la cadena
    return match ? parseInt(match[0]) : 0; // Convierte el resultado a un número o devuelve 0 si no hay coincidencia
  };


  return (
    <div className="relative w-full h-[350px]  rounded-lg  bg-white border border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-gray-100">
      <Link onClick={redirigirAlInicio} to={`/detail/${lastCompra.productoId}`}>
        <img
          src={lastCompra.imagenProducto}
          alt={lastCompra.productoName}
          className="w-[100%] object-cover h-40 rounded-t-lg "
        />
      
      <div className="flex justify-between items-center mt-4">
        <h3 className="text-md leading-tight px-4 font-semibold capitalize text-gray-800">
          {lastCompra.productoName}
        </h3>
       
      </div>
      <p className="text-gray-500 my-2 px-4 text-sm">{lastCompra.descripcion}</p>
      {lastCompra.reseñas.length > 0 ? (
                    <div className="flex items-center mt-1">
                      <p className="text-yellow-500 mr-1 flex flex-row ml-4 mb-4">
                        {Array.from({ length: 5 }).map((star, index) => (
                          <FaStar
                            key={index}
                            className='text-yellow-400 flex flex-row'
                          />
                        ))}
                      </p>
                      <p className="text-gray-600 ml-2 mb-4">
                        ({lastCompra.reseñas.length} reseñas)
                      </p>
                    </div>
                  ) : (
                    <p className="text-gray-600 ml-2 mb-4 font-semibold">
                      Sin reseñas aún
                    </p>
                  )}
      </Link>
    </div>
  );
};

export default LastBuyedCard;