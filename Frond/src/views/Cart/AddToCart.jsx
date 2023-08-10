import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCartProducts, addToCartFunction } from "../../redux/actions";
import { useEffect } from "react";
import bagIcon from '../../assets/img/baghandleWhite.svg';

let image = "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/0/M/0ML19241_1_1c53.webp";

const AddToCart = () => { 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const stateProducts = useSelector(state => state.cartProducts);
  console.log(stateProducts);
  const searchParams = new URLSearchParams(location.search);

  const id = searchParams.get("id");
  const amount = searchParams.get("amount");

  useEffect(() => {
      dispatch(getCartProducts(id)); 
  }, [dispatch, id]);


    useEffect(() => {
        dispatch(getCartProducts(id)); 
    }, [dispatch, id]);

    const addToCart = () => {
        dispatch(addToCartFunction(id, amount)); 
        const carritotUrl = `/carrito/${id}`; 
        navigate(carritotUrl);
    };

    return (
        <div className='flex flex-column items-center justify-center border border-green-500 border-5'>
            <div className='w-full h-full border border-black-500 border-500'>
            <div className='flex m-10 rounded-lg bg-fuchsia-200 p-10 justify-center items-center'>
                    {stateProducts.productos && stateProducts.productos.map((item) => (
                        <p key={item.id}>{item.name.toUpperCase()}</p>
                    ))}
                    <img src={image /* stateProducts.imagen */} alt="Productimage" className=' ml-2 w-20 h-20 object-cover rounded-full ml-10' />
                    
                        <h3 className=''>Agregaste a tu carrito</h3>
                        <p className='text-2xl font-bold'>{stateProducts.name}</p>
                        <p> Hay {amount} productos en tu carrito </p>

                        <button onClick={addToCart} className='bg-customColor text-white font-semibold py-1 px-4 rounded-xl h-10 w-50 flex items-center gap-2'>
                            <img src={bagIcon} alt="bag icon" className="w-6 h-6 " />
                            Ver carrito
                        </button>
                </div>

                <div className='flex flex-row gap-2 m-10 rounded-lg bg-fuchsia-200 p-10 justify-center items-center'>
                    <h1> Acá va catalogo </h1>
                </div>
            </div>
        </div>
    );
};

export default AddToCart;
