import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import SectionReviews from "../../components/modalReviwers/reviewrsDetail/SectionReviews";
import bagIcon from '../../assets/img/baghandleWhite.svg';
import { getProductsByDetail, cleanDetail, addToCartFunction, addItemToCartLS, addItemToCartApi, clientes } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { useAuth0 } from "@auth0/auth0-react";
import MoreProductsCardContainer2 from "../../components/MoreProducts/MoreProducts2";
import { FaCheckCircle, FaHeart, FaShare, FaShoppingCart, FaStar } from "react-icons/fa";
import MyK from '../../assets/img/proveedor1.png'


const Detail = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const redirigirAlInicio = () => {
    window.scrollTo(0, 0);
  }
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
    const idParts = id && id.split('-')  ;
    return parseInt(idParts && idParts[1]);
  };
  const idNumber = extractIdNumber(currentUser?.id);
  const productId = extractIdNumber(id);
  const [amount, setAmount] = useState(1);
  const [show, setShow] = useState(false);

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
      Swal.fire("Debes iniciar sesión para continuar", "", "error");
      return;
    }
    if (
      !currentUser.name ||
      !currentUser.correo_electronico ||
      !currentUser.telefono ||
      !currentUser.direccion
    ) {
      setShow(true);
      return;
    }
    if (stateProducts.cantidad <= 0) {
      setShow(true);
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

  const addToCart = () => {        
    dispatch(addItemToCartLS(id, amount, 1)); 
    dispatch(addToCartFunction(id, amount, 1)); 
    Swal.fire('Agregado exitosamente', `${stateProducts.name} ha sido agregado al carrito`, 'success')
    redirigirAlInicio()
  }

  const goBack = () => {
    navigate('/catalogo');
    redirigirAlInicio()
  }

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
    delay: 200,
    onRest: () => setShow(true)
  });

  const slideIn = useSpring({
    from: { transform: "translateY(20px)", opacity: 0 },
    to: { transform: "translateY(0px)", opacity: show ? 1 : 0 },
    config: { duration: 500 },
    delay: 500,
  });

  return (
    <>
      {/* <button
        onClick={goBack}
        className="bg-blue-900 absolute ml-20 text-white py-2 px-4 rounded-lg mb-6 mt-12"
      >
        Volver
      </button> */}
      <animated.div style={fadeIn}>
      
      <div className="flex gap-10 mt-10">
     {/* 1 */}
      <div className="flex flex-col h-[400px] w-80 ml-20 mr-10 ">
      <img className="rounded-md" src={stateProducts.imagenPrincipal} alt="" />
     
      <div className="flex gap-2 mt-5">
      <img className="h-12 w-12" src={stateProducts.imagenPrincipal} alt="" />
      <img className="h-12 w-12"  src={stateProducts.imagenPrincipal} alt="" />
      <img className="h-12 w-12"  src={stateProducts.imagenPrincipal} alt="" />
      <img className="h-12 w-12"  src={stateProducts.imagenPrincipal} alt="" />
      <img className="h-12 w-12"  src={stateProducts.imagenPrincipal} alt="" />
      <img className="h-12 w-12"  src={stateProducts.imagenPrincipal} alt="" />
      </div>
      </div>
     {/* 2 */}
      <div>
      <h2 className="text-xl text-gray-900 capitalize py-2  font-bold">{stateProducts.name} - Producto certificado  <FaCheckCircle className="text-green-600"/> </h2>
      <div className="flex text-xs items-center mb-2">
      <FaStar className="text-yellow-400"/> <p className="text-sm mr-3">4.8</p>   1.2k reviews
      </div>
      <div className="flex items-center">
      <span className="font-bold text-xl">${stateProducts.precio_venta}.00 </span>
      <span className="text-xs text-gray-500 px-2"> / Unidad</span>
      </div>

      <div className="border-b mt-4"></div>

      <h2 className="font-bold py-4">Detalles</h2>
      <div className="flex items-center">
      <p className="text-gray-500 mr-5">Condicion</p> <span className="font-bold text-sm">Nuevo</span>
      </div>
      <div className="flex items-center">
      <p className="text-gray-500 mr-5">Peso unitario</p> <span className="font-bold text-sm">10 g</span>
      </div>
      <div className="flex items-center">
      <p className="text-gray-500 mr-5">Categoria</p> <span className="font-bold text-sm">Telefonos Celulares</span>
      </div>

      <div className="border-b mt-4"></div>


      <h2 className="text-md font-bold text-gray-800 py-3 ">Descripcion del producto</h2>

      <p className="text-sm mb-3">{stateProducts.descripcion}</p>
      </div>





     {/* 3 */}
      <div>
        <div className="shadow rounded-md p-6">
          <div className="flex justify-between items-center">
          <div className="flex h-10 w-10 m-2">
            <img className="rounded-md" src={stateProducts.imagenPrincipal} alt="" />
          </div>
          <div>
            <span className="text-sm">En stock <span className="text-green-500 text-sm">√</span> </span>
          </div>
          </div>
         
          <div className="border-b"></div>

          <div className="flex items-center justify-between">
          <p className="text-sm text-gray-800">Cantidad</p>
          <div className="flex items-center justify-end py-3 gap-2">
                    <span className="py-1 px-4 rounded-md text-xs">
                      {amount}
                    </span>
                    <button
                      type="button"
                      className=""
                      onClick={handleDecrement}
                    >
                      -
                    </button>
                   
                    <button
                      type="button"
                      className=""
                      onClick={handleIncrement}
                    >
                      +
                    </button>
                  </div>
          </div>
         
         
          <div className="flex justify-between">
          <p className="text-sm text-gray-800 mb-4">Subtotal</p>
          <span className="text-xs font-bold">${stateProducts.precio_venta * amount}.00</span>
          </div>
 

          <button onClick={addToCart}
          className="flex items-center bg-white text-blue-900 py-1.5 px-5 text-sm rounded-md border w-full text-center border-blue-900"> <FaShoppingCart className="mr-2"/> Añadir al carrito</button>
          <button onClick={handleProceedToPayment}
           className= "bg-blue-900 w-full flex items-center text-white py-2 px-8 text-sm rounded-md text-center mt-3"> Comprar ahora</button>

          <div className="flex">
            <div className="flex items-center mt-3 px-2 text-xs">
            <FaHeart/>
            <p className="text-sm text-gray-800 ml-1 ">Favoritos</p> 
            </div>

            <div className="border-r"></div>
  

            <div className="flex items-center px-2 mt-3 text-sm text-gray-800">
            <FaShare/>
            <p className="ml-1">Compartir</p>
            </div>
           
          </div>


        </div>
      </div>

      </div>

      <div className="px-20 mt-20 mb-20">
      <div className="border-t"></div>

      {/* Container */}
      <div className="flex items-cente m-8 gap-2 justify-center">
      <img className="h-14 w-14 border rounded-full" src={MyK} alt="" />
      
      <div className="flex items-center">
      <FaCheckCircle className="text-green-600"/>
      <h2 className="text-lg font-bold">MyK</h2>
      </div>

      <div className="flex text-xs flex-col px-20  border-r  flex items-center">
      <FaStar className="text-yellow-400"/>
      <span>1.2k reviews</span>
      </div>

      <div className="flex-col text-sm px-20 border-r ">
        <p className="font-bold">700+</p>
        <span>Producto certificado</span>

      </div>

      <div className="flex-col text-sm px-20">
        <p className="font-bold">1-2 Dias</p>
        <span>Tiempo estimado de entrega</span>

      </div>




      </div>
      {/* Container */}


  
      {/* <SectionReviews /> */}
      



        <div className="border-b"></div>

      </div>
        
      </animated.div>
    </>
  );
};

export default Detail;