import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
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
import ReviwerD from "../../components/modalReviwers/reviewrsDetail/ReviwerD";
import QRCode from "react-qr-code";
import Modal from "react-modal";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "90%",
    maxHeight: "80vh",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: "50",
  },
};


const Detail = () => {
  console.log(axios.defaults.baseURL);
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
console.log(stateProducts);

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
  const [qrVisible, setQrVisible] = useState(false); 

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
      Swal.fire("Completa tu información de perfil antes de continuar", "", "error");
      return;
    }
    if (stateProducts.cantidad === 0) {
      Swal.fire("Este producto esta agotado momentaneamente", "", "error");
      return;
    }
    
    try {
      await axios.put(`carrito/${idNumber}`, productToAdd);
     
      const response = await axios.post("https://e-commerce-1-production.up.railway.app/pago", productToPay);
      window.location.href = response.data.response.body.init_point;
      
      // if(response){
      //   axios.put(`http://localhost:3001/carrito/pagado/${idNumber}`, { pagado: true });
      // } 
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
    quantity: amount,
  };

  function obtenerMarca(stateProducts) {
    let marca = '';
    let imagen = '';
    
    switch (stateProducts.marcaId) {
      case 1:
        marca = 'Nike';
        imagen = 'imagen-nike.jpg';
        break;
      case 2:
        marca = 'Adidas';
        imagen = 'imagen-adidas.jpg';
        break;
      case 3:
        marca = 'Puma';
        imagen = 'imagen-puma.jpg';
        break;
        case 4:
        marca = 'Puma';
        imagen = 'imagen-puma.jpg';
        break;
        case 5:
        marca = 'Puma';
        imagen = 'imagen-puma.jpg';
        break;
        case 6:
        marca = 'Puma';
        imagen = 'imagen-puma.jpg';
        break;
        case 7:
        marca = 'Puma';
        imagen = 'imagen-puma.jpg';
        break;
        case 8:
        marca = 'Puma';
        imagen = 'imagen-puma.jpg';
        break;
        case 9:
        marca = 'Puma';
        imagen = 'imagen-puma.jpg';
        break;
        case 10:
        marca = 'Puma';
        imagen = 'imagen-puma.jpg';
        break;
        case 11:
        marca = 'Puma';
        imagen = 'imagen-puma.jpg';
        break;
        case 12:
        marca = 'Puma';
        imagen = 'imagen-puma.jpg';
        break;
        case 13:
        marca = 'Puma';
        imagen = 'imagen-puma.jpg';
        break;
        case 14:
        marca = 'Puma';
        imagen = 'imagen-puma.jpg';
        break;
        case 15:
        marca = 'Puma';
        imagen = 'imagen-puma.jpg';
        break;
        case 16:
        marca = 'Puma';
        imagen = 'imagen-puma.jpg';
        break;
        case 17:
        marca = 'Puma';
        imagen = 'imagen-puma.jpg';
        break;
        case 18:
        marca = 'Puma';
        imagen = 'imagen-puma.jpg';
        break;
        case 19:
        marca = 'Puma';
        imagen = 'imagen-puma.jpg';
        break;
        case 20:
        marca = 'Puma';
        imagen = 'imagen-puma.jpg';
        break;
        case 21:
        marca = 'Puma';
        imagen = 'imagen-puma.jpg';
        break;
        case 22:
        marca = 'Puma';
        imagen = 'imagen-puma.jpg';
        break;
        case 23:
        marca = 'Puma';
        imagen = 'imagen-puma.jpg';
        break;
        case 24:
        marca = 'Puma';
        imagen = 'imagen-puma.jpg';
        break;
        case 25:
        marca = 'Puma';
        imagen = 'imagen-puma.jpg';
        break;
        case 26:
        marca = 'Puma';
        imagen = 'imagen-puma.jpg';
        break;
        case 27:
        marca = 'Puma';
        imagen = 'imagen-puma.jpg';
        break;
        case 28:
        marca = 'Puma';
        imagen = 'imagen-puma.jpg';
        break;
        case 29:
        marca = 'Puma';
        imagen = 'imagen-puma.jpg';
        break;
        case 30:
        marca = 'Puma';
        imagen = 'imagen-puma.jpg';
        break;
        case 31:
        marca = 'Puma';
        imagen = 'imagen-puma.jpg';
        break;
       
      default:
        marca = 'Marca no encontrada';
        imagen = 'imagen-default.jpg';
    }
    
    return `<img src=${imagen}> ${marca}`;
  }

  const addToCart = () => {        
    dispatch(addItemToCartLS(id, amount, 1)); 
    dispatch(addToCartFunction(id, amount, 1)); 
    Swal.fire('Agregado exitosamente', `${stateProducts.name} ha sido agregado al carrito`, 'success')
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

  function getProductCondition() {
    const id = stateProducts.tamañoId
    
    switch(id) {
      case 1:
        return 'Nuevo';
  
      case 2:
        return 'Reconstruido';
  
      case 3:
        return 'De 2da mano';
  
      case 4:
        return 'De 3ra mano';
  
      default:
        return '';
    }
  }

  function getProductBrand() {
    const id = stateProducts.marcaId
    
    switch(id) {
      case 1:
        return 'Mars Gaming';
  
      case 2:
        return 'Asus';

      case 3:
        return 'JBL';
  
      case 4:
        return "AVR";
  
      case 5:
        return 'Samsung';
      
      case 6:
          return 'Lenovo';

      case 7:
          return 'Redragon';

      case 8:
          return 'Comifort';

      case 9:
          return 'Intel';

      case 10:
          return 'Nintendo';

          case 11:
            return 'Xbox';
      
          case 12:
            return 'Playstation';
    
          case 13:
            return 'Acer';
      
          case 14:
            return "Dell";
      
          case 15:
            return 'HP';
          
          case 16:
              return 'Epson';
    
          case 17:
              return 'APC';
    
          case 18:
              return 'Techviews';
    
          case 19:
              return 'Argom';
    
          case 20:
              return 'Cooler Master';
    
          case 21:
              return 'Biostar';

              case 22:
                return 'AMD';
          
              case 23:
                return 'DeepCool';
        
              case 24:
                return 'Kingston';
          
              case 25:
                return "Adata";
          
              case 26:
                return 'LG';
              
              case 27:
                  return 'HHGears';
        
              case 28:
                  return 'Razer';
        
              case 29:
                  return 'Logitech';
        
              case 30:
                  return 'HiperX';
        
            
        
        
  
      default:
        return '';
    }
  }

  function getProductCategoria() {
    const id = stateProducts.categoriaId
    
    switch(id) {
      case 1:
        return 'Perifericos e Impresoras';
  
      case 2:
        return 'Laptops';

      case 3:
        return 'Audifonos';
  
      case 4:
        return "Procesadores y CPU'S";
  
      case 5:
        return 'Monitores';
      
      case 6:
          return 'Mobiliario y Sillas';

      case 7:
          return 'Fuentes, tarjetas y reguladores';

      case 8:
          return 'Seguridad';

      case 9:
          return 'Teclados';

      case 10:
          return 'Accesorios';

      case 11:
          return 'Consolas';


      default:
        return '';
    }
  }


  const handleShare = () => {
    setQrVisible(!qrVisible); 
    setQrUrl(window.location.href); // Actualiza la URL cada vez que se abre la modal// Cambia el estado para mostrar el código QR en la modal
  };

  const handleModalClose = () => {
    setQrVisible(false); // Cambia el estado para ocultar la modal
  };
  console.log(qrVisible) 

  const [qrUrl, setQrUrl] = useState(window.location.href);

  const url = window.location.href;

  return (
    <>
    
      <animated.div style={fadeIn}>
      
      <div className="flex gap-10 mt-10">
     {/* 1 */}
      <div className="flex flex-col h-[400px] w-80 px-10 ">
      <img className="rounded-md" src={stateProducts.imagenPrincipal} alt="" />
     
      <div className="flex justify-center gap-2 mt-5">
      <img className="h-12 w-12" src={stateProducts.imagenPrincipal} alt="" />
      <img className="h-12 w-12"  src={stateProducts.imagenPrincipal} alt="" />
      <img className="h-12 w-12"  src={stateProducts.imagenPrincipal} alt="" />
      <img className="h-12 w-12"  src={stateProducts.imagenPrincipal} alt="" />
     
      </div>
      </div>
     {/* 2 */}
      <div className="w-[45%]">
      <h2 className="text-xl text-gray-900 capitalize py-2  font-bold">{stateProducts.name} - Producto certificado  <FaCheckCircle className="text-green-600"/> </h2>
      <div className="flex text-xs items-center mb-2">
      <FaStar className="text-yellow-400"/> <p className="text-sm mr-3">4.8</p>   1.2k reviews
      </div>
      <div className="flex items-center">
      <span className="font-bold text-xl">${stateProducts.precio_venta}.00 </span>
      <span className="text-xs text-gray-500 px-2"> / Unidad</span>
      </div>
      <span className="text-xs text-gray-500">{stateProducts.cantidad} Disponibles</span>

      <div className="border-b mt-4"></div>

      <h2 className="font-bold py-4">Detalles</h2>
      <div className="flex items-center">
      <p className="text-gray-500 mr-5">Condicion</p> <span className="font-bold text-sm">{getProductCondition()}</span>
      </div>
      <div className="flex items-center">
      <p className="text-gray-500 mr-5">Peso unitario</p> <span className="font-bold text-sm">{stateProducts.precio_compra}g</span>
      </div>
      <div className="flex items-center">
      <p className="text-gray-500 mr-5">Categoria</p> <span className="font-bold text-sm">{getProductCategoria()}</span>
      </div>
      <div className="flex items-center">
      <p className="text-gray-500 mr-5">Marca</p> <span className="font-bold text-sm">{getProductBrand()}</span>
      </div>

      <div className="border-b mt-4"></div>


      <h2 className="text-md font-bold text-gray-800 py-3 ">Descripcion del producto</h2>

      <p className="text-sm mb-3">{stateProducts.descripcion}</p>
      </div>

{/* precio compra es igual a peso unitario */}
{/* Condicion es igual a referencia del proveedor */}




     {/* 3 */}
      <div>
        <div className="shadow rounded-md p-6">
          <div className="flex justify-between items-center">
          <div className="flex h-10 w-10 m-2">
            <img className="rounded-md" src={stateProducts.imagenPrincipal} alt="" />
          </div>
          <div>
            {
              stateProducts.cantidad < 1 ? (
                <span className="text-sm">Agotado <span className="text-red-500 text-sm">X</span> </span>
                
                )
              :(
                <span className="text-sm">En stock <span className="text-green-500 text-sm">√</span> </span>
                )
            }
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
          className="flex items-center bg-white text-blue-900 py-1.5 px-5 text-sm rounded-md border w-full text-center border-blue-900 hover:bg-blue-900 hover:text-white ease-in-out duration-300"> <FaShoppingCart className="mr-2"/> Añadir al carrito</button>

          <div className="flex mt-2">
            <div className="flex items-center mt-3 px-2 text-xs">
            <FaHeart/>
            <Link to={'/favoritos'}>
            <p className="text-sm text-gray-800 ml-1 cursor-pointer ">Favoritos</p> 
            </Link>
            </div>

            <div className="border-r"></div>
  

            <div onClick={handleShare} className="flex cursor-pointer items-center px-2 mt-3 text-sm text-gray-800">
            <FaShare/>
            <p className="ml-1 ">Compartir</p>
                <Modal
            isOpen={qrVisible}
            onRequestClose={handleModalClose}
            style={customStyles}
          >
            <div className="flex flex-col justify-center items-center h-full">
              <QRCode size={300} value={qrUrl} />
              <button
              onClick={handleShare}
              className="mt-5 bg-white text-blue-900 py-1.5 px-5 text-sm rounded-md border w-full text-center border-blue-900 hover:bg-blue-900 hover:text-white ease-in-out duration-300"
              type="button"
            >
              Cerrar
            </button>
            </div>
          </Modal>
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
      <h2 className="text-lg font-bold">Azus</h2>
      </div>

      <div className="flex text-sm flex-col px-20  border-r  flex items-center">
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
        <div className="border-b"></div>


  
      {/* <SectionReviews /> */}
      <div className="flex gap-2">
      <SectionReviews/>
      <ReviwerD/>
      </div>
    


        </div>
        
      </animated.div>
    </>
  );
};

export default Detail;