import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import bagIcon from '../../assets/img/baghandleWhite.svg';
//import colorIcon from '../../assets/img/colorIcon.svg'
import { getProductsByDetail, cleanDetail, addToCartFunction, addItemToCartLS } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { useAuth0 } from '@auth0/auth0-react';
import { FaCircle } from "react-icons/fa";
import MoreProductsContainer from "../../components/MoreProducts/MoreProductsContainer";

const Detail = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const back = useNavigate();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { id } = useParams();
    const stateProducts = useSelector(state => state.productsDetail);
    console.log(stateProducts)

    const [userInfo, setUserInfo] = useState({
         nombre: 'Daniel',
        apellido: 'Apellido',
        correoElectronico: 'daniel@gmail.com',
        numeroTelefono: '031934123',
        ciudad: 'miami',
        provincia: 'florida',
        codigoPostal: '6301',
        contraseña: 'djqdijqw' 

        /*    nombre: '',
        apellido: '',
        correoElectronico: '',
        numeroTelefono: '',
        ciudad: '',
        provincia: '',
        codigoPostal: '',
        contraseña: '' */
    });

    const handleProceedToPayment = () => {
        if (!isAuthenticated) {
            // Si el usuario no está autenticado, mostrar una alerta
            Swal.fire('Debes iniciar sesión para continuar', 'error');
            return;
        }
        if (
            !userInfo.nombre ||
            !userInfo.apellido ||
            !userInfo.correoElectronico ||
            !userInfo.numeroTelefono ||
            !userInfo.ciudad ||
            !userInfo.provincia ||
            !userInfo.codigoPostal ||
            !userInfo.contraseña
        ) {

            Swal.fire('Completa tu información de perfil antes de continuar', 'error');
            return;
        }

        axios.post('http://localhost:3001/pago', productToPay)
            .then((res) => (window.location.href = res.data.response.body.init_point));
    };

    const updateNombre = (nombre) => {
        setUserInfo((prevUserInfo) => ({ ...prevUserInfo, nombre }));
      };
      
      const updateApellido = (apellido) => {
        setUserInfo((prevUserInfo) => ({ ...prevUserInfo, apellido }));
      };

      
    useEffect(() => {
        dispatch(getProductsByDetail(id));
        dispatch(addItemToCartLS(id, amount, color))
    console.log(`is ${id}`)
    console.log(`amount ${amount, color}`);

        return () => {
            dispatch(cleanDetail());
        };
    }, [dispatch, id]);


    const [images, setImages] = useState({
        img1: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/0/M/0ML19241_1_1c53.webp",
        img2: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/0/M/0ML21209_1_ac93.webp",
        img3: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/0/M/0ML22532_1_1d09.webp",
        img4: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/0/M/0ML22533_1_22cb.webp"
    })

    const colorIcon1 = "#EBC9BB";
    const colorIcon2 = "#800040";
    const colorIcon3 = "#EF3A57";
    const colorIcon4 = "#C81819";

    const [activeImg, setActiveImage] = useState(images.img1) //stateProducts

    const [amount, setAmount] = useState(1);
    const [color, setColor] = useState(colorIcon1);

    const handleDecrement = () => {
        setAmount((prev) => Math.max(prev - 1, 1));
    };

    const handleIncrement = () => {
        setAmount((prev) => Math.min(prev + 1, 10));
    };

    // border border-blue-500 border-5 rounded-lg'

    /*
     {
           "productos": [
        {
          "id": "col-16",
          "name": "Spray fijador de maquillaje",
          "descripcion": "Spray fijador de maquillaje para una larga duración",
          "precio_compra": "11.40",
          "porcentaje_ganancia": 25,
          "precio_venta": "14.25",
          "referencia_proveedor": "REF238",
          "marcaId": 1,
          "categoriaId": 3,
          "tamañoId": 3,
          "proveedorId": 6,
          "activa": true
        }
        },
    
    */

    const productToPay = {
        nombre: stateProducts.name,
        precio: stateProducts.precio_venta,
        descripcion: stateProducts.descripcion,
    }

    const addToCart = () => {
        dispatch(addToCartFunction(id, amount));
        const carritotUrl = `/itemadded/${id}?amount=${amount}?color=${color}`;
        navigate(carritotUrl);
    }

    return (
        <div className="mt-40 mb-40">

            <button className="ml-40 bg-customColor text-white text-1xl font-semibold py-2 px-2 rounded-xl flex items-center gap-2" onClick={() => back('/catalogo')}>
                Atrás
            </button>

            <div className='flex flex-col justify-between ml-60 mr-60 lg:flex-row gap-16 lg:items-center'>
                <div className='flex flex-col gap-6 lg:w-1/3 items-center mx-auto'>
                    <img src={activeImg} alt="" className='w-40% h-40% aspect-square object-cover rounded-xl ml-1' />
                    <div className='flex flex-row justify-between h-24'>
                        <img src={images.img1} alt="" className='w-20 h-30 p-2 m-3rounded-md cursor-pointer border border-grey-500 border-5 rounded-lg' onClick={() => setActiveImage(images.img1)} />
                        <img src={images.img2} alt="" className='w-20 h-30 p-2 m-3rounded-md cursor-pointer border border-grey-500 border-5 rounded-lg' onClick={() => setActiveImage(images.img2)} />
                        <img src={images.img3} alt="" className='w-20 h-30 p-2 m-3rounded-md cursor-pointer border border-grey-500 border-5 rounded-lg' onClick={() => setActiveImage(images.img3)} />
                        <img src={images.img4} alt="" className='w-20 h-30 p-2 m-3rounded-md cursor-pointer border border-grey-500 border-5 rounded-lg' onClick={() => setActiveImage(images.img4)} />
                    </div>
                </div>

                <div className='flex flex-col gap-4 lg:w-2/4'>
                    <div>
                        <div>
                            {stateProducts.productos && stateProducts.productos.map((item) => (
                                <p key={item.id}>{item.name.toUpperCase()}</p>
                            ))}
                        </div>
                        <h1 className='text-4xl font-bold'>{stateProducts.name}</h1>
                    </div>
                    <p className='text-gray-700 text-2xl'> {stateProducts.descripcion}</p>
                    <h3 className='text-3xl font-semibold'> $ {stateProducts.precio_venta}</h3>
                    <div className='flex flex-row items-center gap-12'>
                        <div className='flex flex-row gap-3'>
                            <div className='relative'>
                                <FaCircle color={colorIcon1} alt="colorIcon" className="w-7 h-7 z-10" style={{ zIndex: 10 }} onClick={() => { setColor(colorIcon1); setActiveImage(images.img1); }} />
                            </div>
                            <div className='relative'>
                                <FaCircle color={colorIcon2} alt="colorIcon" className="w-7 h-7 z-10" style={{ zIndex: 10 }} onClick={() => { setColor(colorIcon2); setActiveImage(images.img2); }} />
                            </div>
                            <div className='relative'>
                                <FaCircle color={colorIcon3} alt="colorIcon" className="w-7 h-7 z-10" style={{ zIndex: 10 }} onClick={() => { setColor(colorIcon3); setActiveImage(images.img3); }} />
                            </div>
                            <div className='relative'>
                                <FaCircle color={colorIcon4} alt="colorIcon" className="w-7 h-7 z-10" style={{ zIndex: 10 }} onClick={() => { setColor(colorIcon4); setActiveImage(images.img4); }} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row items-center gap-2 mb-10'>
                        <button className='bg-gray-200 py-2 px-2 rounded-lg text-customColor text-1xl' onClick={handleDecrement}>-</button>
                        <span className='py-2 px-4 rounded-lg'>{amount}</span>
                        <button className='bg-gray-200 py-2 px-2 mr-4 rounded-lg text-customColor text-1xl' onClick={handleIncrement}>+</button>

                        <button onClick={addToCart} className='bg-customColor text-white text-1xl font-semibold py-2 px-2 rounded-xl flex items-center gap-2' style={{ width: 'auto' }}>
                            <img src={bagIcon} alt="bag icon" className="w-6 h-6 " />
                            Agregar al carrito
                        </button>

                        <button
                            className="bg-customColor text-white text-1xl font-semibold py-2 px-2 rounded-xl flex items-center gap-2"
                            onClick={() => {
                                handleProceedToPayment();
                                // Aquí llamamos a las funciones de actualización
                                updateNombre(userInfo.nombre);
                                updateApellido(userInfo.apellido);
                                // Repite esto para las demás propiedades
                              }}
                            >
                            Comprar ahora
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex flex-row gap-2 mt-20 m-10 bg-fuchsia-200 rounded-lg p-10 shadow-2xl justify-center items-center'>
          <MoreProductsContainer/>
        </div>
        
        </div>
    );
}

export default Detail;