import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {emptyCartLS} from "../../redux/actions"

// const totalItemsCart = [1];
// const cantidad = 1;


const Carrito = () => {
    const dispatch = useDispatch();
    
    const cartLS = useSelector(state => state.localCart); //estos son los item en carrito en local/

    const handleEmptyCart = () =>{
        dispatch(emptyCartLS());
    }        
    
   /* unificar amount de articulos start*/
   const cartUnif = (cart) =>{
   const countMap = {};

    cart.forEach(item=>{
        const itemId=item.id;
        if(countMap[itemId]){
            countMap[itemId]+=item.amount;
        }else{
            countMap[itemId]=item.amount;
        }
    });

    const cartUnifRes = Object.keys(countMap).map(itemId=>({
        objeto: cart.find(item=>item.id===itemId || {}),
        cantidad: countMap[itemId]
    }))
    return cartUnifRes;
   };
   const cartUnificado = cartUnif(cartLS);
   /* unificar amount de articulos end*/
   
    const totalProd = cartUnificado.reduce((total,item)=>total+(item.objeto.precio_venta * item.objeto.amount),0);
    const totalArts = cartUnificado.reduce((qty,item)=>qty+(item.objeto.amount),0);
    
    return (
        <>        
            <div class="grid grid-cols-3 grid-rows-6 gap-5 mx-8 mt-6">
                {/* columna izquierda detallar productos en carrito */}  
                {cartUnificado && cartUnificado.length > 0 ? (
                <>
                {cartUnificado.map((item, index) => (
                    <div key={index} className="col-span-2 grid grid-cols-6 px-6 mx-6 shadow-md rounded-lg bg-fuchsia-200">
                <img src={item.objeto.imagenPrincipal} alt="fotoProducto" className="col-span-1 w-12 bg-white my-2 border-2 border-purple-300 justify-self-left" />
                <div className="col-start-2 col-span-3 place-self-center font-medium">
                    {item.objeto.name}
                </div>
                <div className="col-start-5 col-span-1 flex items-center justify-center font-medium ">
                    <p>Cantidad: </p> {item.objeto.amount}
                </div>
                <div className="col-start-6 col-span-1 flex items-center justify-center font-medium ">
                    <p>Precio: </p>{item.objeto.precio_venta * item.objeto.amount}
                </div>
            </div>
        ))}
        <div class="col-start-2  flex justify-end h-6">
            <button onClick={handleEmptyCart} class="rounded-md mx-6 px-2 text-gray-400 bg-gray-200 hover:bg-gray-100 font-small">
                Limpiar Carrito
            </button>
        </div>
        </>
    ) : (
        <div className="col-span-2 grid grid-cols-5 px-6 mx-6 shadow-md rounded-lg bg-fuchsia-200">
            <div className="col-start-2 col-span-3 flex items-center justify-center font-medium">
            No hay artículos en su carrito
            </div>
        </div>
    )}                   


    {/* columna derecha, total y boton a pasarela */}
                <div class="col-start-3 row-start-1 row-end-4 px-6 mx-6 rounded-lg bg-purple-200">

                    <div class="grid grid-cols-4 grid-rows-6 m-4">
                        <h2 class="col-span-4 row-start-1 place-self-center font-medium">
                            Resumen de Compra
                        </h2>

                        <h3 class="col-start-1 col-end-3 row-start-2 place-self-start">
                        Arts. ({totalArts || 0})
                        </h3>
                        <h3 class="col-start-1 col-end-3 row-start-3 place-self-start">
                            Envio
                        </h3>
                        
                        <h2 class="col-start-1 col-end-3 row-start-5 place-self-start font-bold">
                            Total
                        </h2>

                        <h2 class="col-start-4 row-start-2 place-self-start">
                        {totalProd || 0}
                        </h2>
                        <h2 class="row-start-3 col-start-4  place-self-start">
                            0
                        </h2>
                        <h2 class="row-start-5 col-start-4  place-self-start font-bold">
                        {totalProd || 0}
                        </h2>

                        <button class="rounded-md row-start-6 place-self-center col-span-4 p-1.5 text-white bg-[#6b086f] hover:bg-[#7c4884]">
                            Continuar compra
                        </button>

                    </div>
                </div>
            </div>
        </>
    )

    };

export default Carrito;