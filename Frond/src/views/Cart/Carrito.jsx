import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emptyCartLS, addCartLSToApi, deleteArtLS, deleteArtAPI, clientes } from "../../redux/actions";
import { NavLink, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const Carrito = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

     useEffect(
        () => {
            dispatch(clientes());
          },[])
    const usuarios = useSelector((state)=> state.Allclients);
    const currentUser = usuarios.find((usuario) => {
    if(!isLoading && user)
    return usuario.name.toLowerCase() === user.name.toLowerCase() && usuario.correo_electronico.toLowerCase() === user.email.toLowerCase();
  });
  const dispatch = useDispatch();
  const userid = "cli-29";
  const extractNumber = (string) => {
    const match = string.match(/\d+/); // Busca uno o más dígitos en la cadena
    return match ? parseInt(match[0]) : 0; // Convierte el resultado a un número o devuelve 0 si no hay coincidencia
  };
  const NumUserId = extractNumber(userid);
  const [userInfo, setUserInfo] = useState({
    nombre: '',
    apellido: '',
    correoElectronico: '',
    numeroTelefono: '',
    ciudad: '',
    provincia: '',
    codigoPostal: '',
    contraseña: ''
  });
  const cartLS = useSelector(state => state.localCart);
  const cartUnif = (cart) => {
    const countMap = {};
    cart.forEach((item) => {
      if (item.id !== undefined && item.id !== null && item.color !== undefined && item.color !== null) {
        const itemKey = `${item.id}_${item.color}`;
        if (countMap[itemKey]) {
          countMap[itemKey] += item.amount;
        } else {
          countMap[itemKey] = item.amount;
        }
      }
    });
    const cartUnifRes = Object.keys(countMap).map((itemKey) => {
      const [itemId, color] = itemKey.split('_');
      return {
        objeto: cart.find((item) => item.id === itemId),
        cantidad: countMap[itemKey],
        color: color,
      };
    });
    return cartUnifRes;
  };
  const cartUnificado = cartUnif(cartLS);
  const dispatchCartToApi = async () => {
    try {
      await dispatch(addCartLSToApi({ user: NumUserId, localCart: cartLS }));
    } catch (error) {
      if (error.response) {
        console.log("Error en el backend:", error.response.data.error);
      } else {
        console.log("Error desconocido:", error.message);
      }
    }
  };
  useEffect(() => {
    if (isAuthenticated) {
      dispatchCartToApi();
      dispatch(emptyCartLS());
    } else {
      return;
    }
  }, [isAuthenticated]);
  const cartApi = useSelector(state => state.apiCart);
  const totalProd = isAuthenticated && cartApi && cartApi.productos
    ? cartApi.productos.reduce((total, item) => total + (item.precio_venta * item.cantidad), 0)
    : cartUnificado.reduce((total, item) => total + (item.objeto.precio_venta * item.cantidad), 0);
  const totalArts = isAuthenticated && cartApi && cartApi.productos
    ? cartApi.productos.reduce((qty, item) => qty + (item.cantidad), 0)
    : cartUnificado.reduce((qty, item) => qty + (item.cantidad), 0);
  const cartToRender = isAuthenticated ? cartApi : cartUnificado;

  const handleEmptyCart = () => {
    dispatch(emptyCartLS());
  }
  const handleDeleteArtLS = (item) => {
    dispatch(deleteArtLS(item.objeto.id, item.color, item.cantidad));
  }
  const handleDeleteArtAPI = (item) => {
    dispatch(deleteArtAPI({ user: NumUserId, productoId: item.id, colorId: 1 }))
  }
  const handleProceedToPayment = () => {
    if (!isAuthenticated) {
      Swal.fire('Debes iniciar sesión para continuar', 'error');
      return;
    }
    if (
      !currentUser.name ||
      !currentUser.correo_electronico ||
      !currentUser.telefono||
      !currentUser.direccion ||
      !currentUser.contraseña
    ) {
      Swal.fire('Completa tu información de perfil antes de continuar','', 'error');
      return;
    }
    axios.post('http://localhost:3001/pago', cartApi)
      .then((res) => (window.location.href = res.data.response.body.init_point));
  };
  const updateNombre = (nombre) => {
    setUserInfo((prevUserInfo) => ({ ...prevUserInfo, nombre }));
  };
  const updateApellido = (apellido) => {
    setUserInfo((prevUserInfo) => ({ ...prevUserInfo, apellido }));
  };

  return (
    <div className="bg-white">
      <div className="mx-8 mt-6 grid grid-cols-3 grid-rows-6 gap-5">
        {/* Columna izquierda: detalles de productos en carrito */}
        <div className="col-span-2 flex flex-col space-y-4">
          {cartToRender && cartToRender.length > 0 ? (
            <>
              {cartToRender.map((item, index) => (
                <div key={index} className="grid grid-cols-6 gap-4 rounded-lg bg-gray-50 shadow-md">
                  <img
                    src={item.objeto.imagenPrincipal}
                    alt="fotoProducto"
                    className="col-span-1 h-20 object-contain bg-white border-r-2 border-gray-200"
                  />
                  <div className="col-span-3 flex flex-col justify-center">
                    <h4 className="font-medium text-gray-900 capitalize">{isAuthenticated ? item.name : item.objeto.name}</h4>
                    <p className="text-sm text-gray-500">Color: {item.color}</p>
                  </div>
                  <div className="col-span-1 flex flex-col justify-center">
                    <p className="text-sm font-medium">
                      Cantidad: {item.cantidad}
                    </p>
                  </div>
                  <div className="col-span-1 flex flex-col justify-center">
                    <p className="text-sm font-medium">
                      Costo: {item.objeto.precio_venta * item.cantidad}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDeleteArtLS(item)}
                    className="flex items-center justify-center w-8 h-8 text-gray-400 bg-gray-200 hover:bg-gray-100 rounded-full"
                  >
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M7.707 10L2.854 4.146a1 1 0 111.414-1.414L9.12 8.32a1 1 0 010 1.414L4.268 14.66a1 1 0 11-1.414-1.414L7.707 10z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              ))}
              <div className="flex justify-end">
                {isAuthenticated ? null : (
                  <button
                    onClick={() => handleEmptyCart()}
                    className="mt-4 mx-6 px-4 py-2 text-sm font-medium text-white bg-gray-400 hover:bg-gray-500 rounded-md"
                  >
                    Limpiar Carrito
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="grid grid-cols-5 p-6 rounded-lg bg-purple-100">
            <div className="col-span-3 flex items-center justify-center font-medium text-gray-900">
              No hay artículos en su carrito
            </div>
          </div>
          )}
        </div>
        {/* Columna derecha: total y botón para continuar a la pasarela de pago */}
        <div className="col-span-1 flex flex-col justify-between px-6 py-4 rounded-lg bg-gray-50 shadow-lg">
          <div>
            <h2 className="mb-4 text-lg font-medium text-gray-900">
              Resumen de Compra
            </h2>
            <div className="grid grid-cols-2 gap-2 mb-3 text-sm font-medium text-gray-600">
              <div>Artículos ({totalArts || 0})</div>
              <div className="text-right">{totalProd || 0}</div>
              <div>Envío</div>
              <div className="text-right">0</div>
            </div>
            <div className="border-t border-gray-200 mt-3 pt-3 text-lg font-bold text-gray-900">
              <div className="mb-1">Total</div>
              <div className="text-right">{totalProd || 0}</div>
            </div>
          </div>
          <button
            onClick={() => {
              handleProceedToPayment();
              updateNombre(userInfo.nombre);
              updateApellido(userInfo.apellido);
            }}
            className="mt-4 px-4 py-2 text-white bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 rounded-md"
          >
            Continuar compra
          </button>
        </div>
        <div className="col-span-1 flex justify-center">
          <NavLink to="/catalogo">
            <button
              className="px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md"
            >
              Agregar Artículos
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Carrito;