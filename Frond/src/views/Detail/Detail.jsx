import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SectionReviews from "../../components/modalReviwers/reviewrsDetail/SectionReviews";
import bagIcon from '../../assets/img/baghandleWhite.svg';
import { getProductsByDetail, cleanDetail, addToCartFunction, addItemToCartLS, addItemToCartApi, clientes } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useAuth0 } from "@auth0/auth0-react";
import MoreProductsCardContainer2 from "../../components/MoreProducts/MoreProducts2";

const Detail = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const stateProducts = useSelector((state) => state.productsDetail);
  useEffect(() => {
    dispatch(clientes());
  }, []);
  const usuarios = useSelector((state) => state.Allclients);
  const currentUser = usuarios?.find(
    (usuario) =>
      !isLoading &&
      user &&
      usuario.name.toLowerCase() === user?.name.toLowerCase() &&
      usuario.correo_electronico.toLowerCase() === user?.email.toLowerCase()
  );
  const extractIdNumber = (id) => {
    const idParts = id.split('-');
    return parseInt(idParts[1]);
  };
  const idNumber = extractIdNumber(currentUser?.id);
  const productId = extractIdNumber(id);
  const [amount, setAmount] = useState(1);

  const productToAdd = {
    productos: [
      {
        cantidad: amount,
        productoId: productId,
        colorId:1
      }
    ]
  }

  const handleProceedToPayment = async () => {
    if (!isAuthenticated) {
      Swal.fire("Debes iniciar sesión para continuar", "error", "error");
      return;
    }
    if (
      !currentUser.name ||
      !currentUser.correo_electronico ||
      !currentUser.telefono ||
      !currentUser.direccion
    ) {
      Swal.fire("Completa tu información de perfil antes de continuar", "", "error");
      return;
    }
    if (stateProducts.cantidad <= 0) {
      Swal.fire("Producto agotado momentáneamente", "", "error");
      return;
    }
    
    try {
      await axios.put(`carrito/${idNumber}`, productToAdd);
     
      const response = await axios.post("http://localhost:3001/pago", productToPay);
      window.location.href = response.data.response.body.init_point;
      
      if(response){
        axios.put(`http://localhost:3001/carrito/pagado/${idNumber}`, { pagado: true });
      } 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(getProductsByDetail(id));
    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch, id]);

  const handleDecrement = () => {
    setAmount((prev) => Math.max(prev - 1, 1));
  };

  const handleIncrement = () => {
    setAmount((prev) => Math.min(prev + 1, 10));
  };

  const productToPay = {
    nombre: stateProducts.name,
    precio: stateProducts.precio_venta,
    descripcion: stateProducts.descripcion,
    imagen: stateProducts.imagenPrincipal,
    quantity: amount,
  };

  const NumUserId=user;

  const addToCart = () => {        
    if (isAuthenticated) {
      dispatch(addItemToCartApi({userId: NumUserId, productoId:id, cantidad:amount, color:1}));
    } else {
      dispatch(addItemToCartLS(id, amount, 1)); 
    }
    dispatch(addToCartFunction(id, amount, 1)); 
    const carritotUrl = `/itemadded/${id}?amount=${amount}&color=${1}`;
    navigate(carritotUrl);    
  }

  const goBack = () => {
    navigate('/catalogo');
  }

  return (
    <><div className="px-4 py-8 max-w-4xl mx-auto">
      <button
        onClick={goBack}
        className="bg-customColor text-white py-2 px-4 rounded-lg mb-6 mt-12"
      >
        Volver
      </button>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md pb-6">
          <img
            src={stateProducts.imagenPrincipal}
            alt={stateProducts.name}
            className="w-full object-cover rounded-md h-64 mb-4" />
        </div>

        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl capitalize font-bold text-gray-900 mb-4">
            {stateProducts.name}
          </h2>
          <span className="text-sm text-gray-500">
            Disponibles: {stateProducts.cantidad}
          </span>
          <h3 className="text-lg font-medium text-customColor mt-2">
            ${stateProducts.precio_venta}
          </h3>
          <hr className="my-4" />
          <div className="flex items-center justify-between bg-gray-100 py-2 px-4 rounded-md">
            <span className="text-gray-500 text-sm font-medium">Cantidad:</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="rounded-full bg-customColor text-white font-bold text-xs py-1 px-2 hover:bg-customColor2"
                onClick={handleDecrement}
              >
                -
              </button>
              <span className="bg-gray-200 py-1 px-4 rounded-full text-xs font-medium">
                {amount}
              </span>
              <button
                type="button"
                className="rounded-full bg-customColor text-white font-bold text-xs py-1 px-2 hover:bg-customColor2"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={addToCart}
              className="bg-customColor text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-customColor2 transition duration-300 ease-in-out"
            >
              <img
                src={bagIcon}
                alt="bag icon"
                className="inline-block w-6 h-6 mr-2" />{" "}
              Añadir al carrito
            </button>
            <button onClick={() => { handleProceedToPayment(); } }
              className="bg-customColor ml-10 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-customColor3 transition duration-300 ease-in-out"
            >
              Comprar ahora
            </button>

          </div>
        </div>
      </div>

      {/* Sección de reseñas */}
      <div className="w-full justify-center bg-white rounded-lg shadow-md p-6">
        <SectionReviews />
      </div>

      {/* Contenedor de más productos */}
    </div>
      <div className='flex flex-row gap-2 mt-10 m-10 bg-fuchsia-200 rounded-lg p-10 shadow-2xl justify-center items-center'>
        <MoreProductsCardContainer2 />
      </div>
      </>
  );
};

export default Detail;