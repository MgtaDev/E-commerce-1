import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteAPI, addFavoriteLS, addItemToCartApi, addItemToCartLS, addToCartFunction, deleteFavoriteAPI, deleteFavoriteLS } from "../../redux/actions";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaStar } from "react-icons/fa";

const Card = ({ id, marcaId , name, precio, imagenPrincipal }) => {
  const redirigirAlInicio = () => {
    window.scrollTo(0, 0);
  }
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const localFavorites = useSelector((state) => state.localFavorites);
  const favoritesRaw = useSelector((state) => state.favoritesRaw);
  const usuarios = useSelector((state) => state.Allclients);
  const { isAuthenticated, user, isLoading } = useAuth0();
  const currentUser = usuarios.find(
    (usuario) =>
      !isLoading &&
      user &&
      usuario.name.toLowerCase() === user.name.toLowerCase() &&
      usuario.correo_electronico.toLowerCase() === user.email.toLowerCase()
  );
  const extractNumber = (string) => {
    const match = string.match(/\d+/); // Busca uno o más dígitos en la cadena
    return match ? parseInt(match[0]) : 0; // Convierte el resultado a un número o devuelve 0 si no hay coincidencia
  };
  const productoId = extractNumber(id);
  const correo_electronico = user?.email;
  const favorito = {
    productoId,
    correo_electronico,
  };

  useEffect(() => {
    if (isAuthenticated) {
      setIsFavorite(favorites.some((objeto) => objeto.id === id));
    } else {
      setIsFavorite(localFavorites.some((item) => item.id === id));
    }
  }, [isAuthenticated, favorites, localFavorites, id]);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      if (isAuthenticated) {
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
      } else {
        dispatch(deleteFavoriteLS(id));
      }
    } else {
      if (isAuthenticated) {
        dispatch(addFavoriteAPI(favorito));
      } else {
        dispatch(addFavoriteLS(id));
      }
    }
    setIsFavorite(!isFavorite);
  };

// const NumUserId = extractNumber(currentUser?.id);

const addToCart = () => {        

  dispatch(addItemToCartLS(id, 1, 1)); 
  dispatch(addToCartFunction(id, 1, 1));

  Swal.fire({
    icon: 'success',
    title: 'Añadido al carrito',
    showConfirmButton: false,
    timer: 1500
});
}
  
  return (
    <div className="flex bg-white-200 h-full grid-cols-1 flex-col rounded-md shadow overflow-hidden hover:-translate-y-10 duration-300 hover:shadow-lg ease-in-out ">
    <Link to={`/detail/${id}`}>
      <img className="object-cover " src={imagenPrincipal} alt="ofertas" />
    </Link>
    <div className="flex flex-col p-4">
      <div className="mb-2">
        <div className="flex items-center">
        <h2 className="text-base font-bold capitalize text-gray-800">{name}</h2>
        <button
            className={`relative group p-2 ml-2 ${
              isFavorite ? "text-red-500 font-bold" : "text-gray-400"
            }`}
            onClick={handleFavoriteClick}
          >
            <AiFillHeart className="text-xl transition duration-300 ease-in-out group-hover:text-red-400" />
          </button>
        </div>

        <p className="text-sm mt-1 font-bold text-gray-700">${precio}.00</p>
      </div>
      <div className="flex flex-row items-center mb-2">
        <span className="inline-block bg-orange-600 text-white text-xs font-bold py-1 px-2 rounded-full mr-2">20%</span>
        <del className="text-xs text-gray-400">$0.00</del>
      </div>
      <p className="text-xs text-gray-600">{marcaId === 1 ? 'Trendy' : marcaId === 2 ? 'Kiss Beauty' : marcaId === 3 ? 'MyK' : 'Otras marcas'}</p>
      <div className="flex flex-row items-center">
      </div>
    </div>
  </div>
  );
};

export default Card;