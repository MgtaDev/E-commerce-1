import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emptyCartLS, addCartLSToApi, deleteArtLS, deleteArtAPI } from "../../redux/actions"
import { Link, NavLink, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios  from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import LastBuyedSlider from "../../components/Last Buyed/lastBuyedSlider";
import { useSpring } from "react-spring";
import { FaArrowRight, FaDollarSign, FaRegHeart, FaTrash } from "react-icons/fa";

const Carrito = () => {
    const [show, setShow] = useState(false);
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
    const dispatch = useDispatch();
    const [apicart, setApicart] = useState([]); 
    const { user, isAuthenticated, isLoading } = useAuth0();
    const usuarios = useSelector((state) => state.Allclients);
    const currentUser = usuarios.find(
    (usuario) =>
      !isLoading &&
      user &&
      usuario.name.toLowerCase() === user.name.toLowerCase() &&
      usuario.correo_electronico.toLowerCase() === user.email.toLowerCase()
  );

    const extractNumber = (string) => {
        const match = string?.match(/\d+/); 
        return match ? parseInt(match[0]) : 0; 
    }; 

    const Clientela = useSelector(state=>state.Allclients);
    const clientFound = isAuthenticated ? Clientela.find(client => client.correo_electronico === user.email) : null;
    const NumUserId = isAuthenticated ? extractNumber(clientFound?.id) : undefined;

    const envio = 0

    useEffect(() => {
        if (isAuthenticated) {          
          axios.get(`/carrito/${NumUserId}`)
            .then(response => {
              setApicart(response.data);
            })
            .catch(error => {             
                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: error.response?.data || 'Hubo un error en la solicitud.',
                });
              });
        }else{
            return
        }
      }, [NumUserId, isAuthenticated]);
      
    const cartLS = useSelector(state => state.localCart); 

    const cartUnif = (cart) => {
        const countMap = {};
        cart.forEach((item) => {
            if (item.id !== undefined && item.id !== null && item.color) {
                const itemKey = `${item.id}`;
                if (countMap[itemKey]) {
                    countMap[itemKey] += item.amount;
                } else {
                    countMap[itemKey] = item.amount;
                }
            }
        });
        const cartUnifRes = Object.keys(countMap).map((itemKey) => {
            const [itemId] = itemKey.split('_');
            return {
                objeto: cart.find((item) => item.id === itemId),
                cantidad: countMap[itemKey],
                color: 1
            };
        });
        return cartUnifRes;
    };

    const cartUnificado = cartUnif(cartLS);

    useEffect(() => {
        if (isAuthenticated && cartLS) {
          dispatch(addCartLSToApi({ user: NumUserId, localCart: cartLS }))
            .catch(error => {             
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.response?.data || 'Hubo un error en la solicitud.',
              });
            });
            dispatch(emptyCartLS());
        } else {
          return;
        }
    }, [isAuthenticated]);

    const cartApi = useSelector(state => state.apiCart); console.log("cartApi", cartApi);console.log("cartUnificado", cartUnificado);

    const totalProd = isAuthenticated && cartApi && cartApi.productos
    ? cartApi.productos.reduce((total, item) => total + (item.precio_venta * item.cantidad), 0)
    : cartUnificado.reduce((total, item) => total + (item.objeto.precio_venta * item.cantidad), 0);

    const totalArts = isAuthenticated && cartApi && cartApi.productos
    ? cartApi.productos.reduce((qty, item) => qty + (item.cantidad), 0)
    : cartUnificado.reduce((qty, item) => qty + (item.cantidad), 0);


    const handleDeleteArtLS = (item) => { console.log("item.cantidad", item.cantidad);
        dispatch(deleteArtLS(item.objeto.id, item.cantidad, item.color));
    }

    const handleDeleteArtAPI = async (item) => {
        try {console.log("datos deleteArtApi", NumUserId, item.productoId,  item.colorId );
          await dispatch(deleteArtAPI({ user: NumUserId, productoId: item.productoId, colorId:item.colorId })); 
        } catch (error) {
          console.error('Error en handleDeleteArtAPI:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.response?.data || 'Hubo un error en la solicitud.',
          });
        }
      }
      
      const handleEmptyCart = () => {
        if(!isAuthenticated){
            dispatch(emptyCartLS());
        } else{
            dispatch(deleteArtAPI({user: NumUserId}))
        }
    }

   
    const productsToPay = cartApi.productos?.map((product) => ({
    nombre: product.name,
    precio: product.precio_venta,
    descripcion: product.name,
    quantity: product.cantidad
    })); console.log("productsToPay", productsToPay);

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
    try {

        const response = await axios.post(`${axios.defaults.baseURL}/pagoCarrito`, productsToPay);
        window.location.href = response.data.response.body.init_point;
    
        
      } catch (error) {
        console.log(error);
      }
    };


    return (
        <>
            <div className="grid grid-cols-3 gap-6 mx-20 mt-6 mb-20">


                <div className="col-span-2">
                <p className="px-10 py-10 text-3xl font-bold">Carrito ({totalArts})</p>
                    {cartApi.productos?.length || cartUnificado.length ? ( 
                        <div>
                            { cartApi.productos ? (
                                cartApi.productos.map((item, index) =>(
                                    <div key={index} className="flex flex-col items-center justify-between p-4 rounded-lg bg-white border-b  mb-4">
                                        <div className="flex items-center justify-between w-full">
                                            <img src={item.imagenPrincipal} alt="fotoProducto" className="w-16 h-16 object-cover border-2 border-indigo-200 rounded-full" />
                                            <div className="ml-4 w-40">
                                                <div className="font-medium capitalize text-gray-800">{item.name}</div>
                                                
                                            </div>
                                            <div className="w-20 text-right font-medium flex items-center justify-center">
                                                <div className="mr-1">Cantidad:</div> 
                                                <div>
                                                    {item.cantidad}
                                                </div>
                                            </div>
                                            <div className="w-32 text-right font-medium">
                                                <div className="text-xs text-gray-500">Costo</div>
                                                {item.precio_venta * item.cantidad} $
                                            </div>
                                            <button
                                                onClick={() => handleDeleteArtAPI(item)}
                                                className="ml-6 rounded-md p-1.5 text-gray-400 bg-gray-200 hover:bg-gray-100"
                                            >
                                                <FaTrash/>
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : ( cartUnificado.length ?
                                cartUnificado.map((item, index) => (
                                    <div key={item.objeto.id} className="flex justify-center ml-5 flex-col items-center justify-between p-6 w-[650px] rounded-lg bg-white border-b shadow-sm mb-4">
                                       
                                        <div className="flex items-center justify-between w-full">
                                            <img src={item.objeto.imagenPrincipal} alt="fotoProducto" className="w-20 h-20 object-cover border-2 border rounded-md " />
                                            <div className="-ml-4 w-40">
                                                <div className="font-medium capitalize text-gray-800">{item.objeto.name}</div>
                                                <div className="w-20 text-right text-xs flex items-center justify-center">
                                                <div>
                                                    {item.cantidad}
                                                </div>
                                                <div className="mr-1 ml-1 text-xs"> Item</div> 

                                            </div>
                                                <div className="mr-1 ml-7 text-xs">Myk</div>
                                            </div>
                                           
                                            <div className="w-32 text-right font-medium">
                                                <div className="text-xs text-gray-500">Costo</div>
                                                ${item.objeto.precio_venta * item.cantidad}.00
                                                <div className="flex gap-2">
                                                    <FaRegHeart/>
                                                <p className="text-xs">Mover a favoritos</p>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => handleDeleteArtLS(item)}
                                                className="ml-6 rounded-md p-1.5 text-gray-400 bg-gray-200 hover:bg-gray-100"
                                            >
                                                X
                                            </button>
                                        </div>
                                    </div>
                                ))
                                : 'Algo pasa'
                            )}                                                                    
                        </div>
                    ) : (
                        <div className="flex items-center flex-col justify-center mt-20 text-xl">
                            <div className="font-medium text-gray-600">No hay artículos en su carrito</div>
                            <Link to={'/catalogo'}>
                            <span className="text12xs text-blue-800 underline">Ir al catalogo</span>
                            </Link>
                        </div>
                    )}
                    {cartUnificado.length > 0  || cartApi.productos?.length ?(
                    <button onClick={() => handleEmptyCart()} className="ml-10 text-blue-900 text-xm">
                      Limpiar carrito
                      </button>
                    ) : null }
                </div>

                <div className="col-span-1">
                    <div className="py-8 mt-10 mr-2 px-4 bg-white rounded-md shadow-lg">
                        <h2 className="font-bold text-gray-800 mb-4">Resumen de Compra</h2>

                        <div className="flex items-center justify-between mb-4">
                            <div className="text-gray-800 font-medium">Productos ({totalArts || 0})</div>
                            <div className="text-gray-800">${totalProd || 0}.00</div>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                            <div className="text-gray-800 font-medium">Envio</div>
                            <div className="text-gray-500 text-sm">Acordar con proveedor </div>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                            <div className="font-bold text-gray-800">Subtotal</div>
                            <div className="font-bold text-gray-800">$ {totalProd || 0} .00</div>
                        </div>

                        <div className="w-full border border-gray-200 mb-4"></div>

                        <div className="flex items-center justify-between mb-4">
                            <div className="font-bold text-gray-800">Total</div>
                            <div className="font-bold text-gray-800">$ {totalProd  + envio || 0}.00</div>
                        </div>

                        

                        <button
                        onClick={() => {
                            handleProceedToPayment();                         
                        }}
                        className="transition flex justify-center items-center text-center duration-300 rounded-md py-3 px-4 text-white font-medium w-full bg-blue-900"
                        
                        >
                        Continuar compra
                        <FaArrowRight className='text-white ml-3'/>
                    </button>
                    </div>

                </div>
            </div>
           
        </>
    )

};

export default Carrito;