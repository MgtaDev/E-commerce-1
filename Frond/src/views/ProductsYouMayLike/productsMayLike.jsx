import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../../components/CatalogoComponen/Cards';
import Card from '../../components/CatalogoComponen/Card';
import { FaCheckCircle, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductsMayLike = () => {

    const stateProducts = useSelector(state => state.Allproducts);
    const productosFiltrados = useSelector((state) => state.productsFiltered);   
    const productosEnVenta = stateProducts?.productos?.filter((product) => product.activa === true);
    const numberSize = 20;
    const redirigirAlInicio = () => {
      window.scrollTo(0, 0);
    }
    console.log(stateProducts)
    console.log(productosFiltrados)
  
    const dispatch = useDispatch();
  

  return (
        <>
        <div className='items-center  flex justify-between'>
      <div className='flex items-center px-3'>
        <h1 className='text-xl font-bold px-1'>Productos mas vendidos</h1>
          <FaCheckCircle className='text-green-500'/>
      </div>
      <div>
        <Link to={'/catalogo'}>
        <spa onClick={redirigirAlInicio} className='mb-1 px-4 text-sm cursor-pointer text-blue-900'>Ir al catalogo</spa>
        </Link>
      </div>
      </div>
      
        <div className='grid md:grid-cols-3 lg:grid-cols-4 grid-auto-rows grid-rows-1 gap-1'>
          {stateProducts.productos?.length > 1 ? (
              stateProducts.productos.map((item) => {
                  return (
                      //         <Card
                      //   id={item.id}
                      //   name={item.name}
                      //   descripcion={item.descripcion}
                      //   precio={item.precio_venta}
                      //   imagenPrincipal={item.imagenPrincipal}
                      // />
                      <div class="flex flex-col rounded-md shadow w-[260px] shadow-md m-10 transform hover:scale-110 duration-300">
                        <Link to={`/detail/${item.id}`}>
                          <img class="object-contain items-center  rounded-md " src={item.imagenPrincipal} alt="ofertas" />
                        </Link>
                          <div class="flex flex-col justify-between px-4">
                              <div class="mb-2">
                                  <p class="text-sm capitalize text-gray-800 font-bold">{item.name}</p>
                                  <p class="text-sm">${item.precio_venta}.00</p>
                              </div>
                              <div class="flex flex-row items-center mb-2">
                                  <span class="text-xs font-bold text-green-500 mr-1">20%</span>
                                  <span class="text-xs line-through text-gray-400">${item.precio_original}.00</span>
                              </div>
                              <p class="text-xs my-2 ">{item.marcaId === 1 ? 'Mars Gaming' : item.marcaId === 2 ? 'Azus' : item.marcaId === 3 ? 'None' : 'Otras marcas'}</p>
                             
                          </div>
                      </div>

                  );
              }))
              : ''}
      </div></>
  )
}

export default ProductsMayLike