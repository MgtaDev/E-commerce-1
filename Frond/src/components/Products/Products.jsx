import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import banner from '../../assets/slides/boashop banner.png'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaCheckCircle, FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { products } from '../../redux/actions';
import Countdown from '../countdown/countdown';
import { Link } from 'react-router-dom';

const Products = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: 'linear',
    prevArrow: <FaArrowAltCircleLeft className='!bg-orange-700'/>,
    nextArrow: <FaArrowAltCircleRight className="!bg-orange-700 " />
  };
  const stateProducts = useSelector(state => state.Allproducts);
  const productosFiltrados = useSelector((state) => state.productsFiltered);   
  const productosEnVenta = stateProducts?.productos?.filter((product) => product.activa === true);
  const numberSize = 20;
  const redirigirAlInicio = () => {
    window.scrollTo(0, 0);
  }

  const dispatch = useDispatch();

  return (
    <div className='mb-20'>
      <div className='flex items-center px-3'>
        <FaCheckCircle className='text-green-500'/>
        <h1 className='text-xl font-bold px-1'>Productos en oferta</h1>
        <Countdown/>
      </div>
      <CarouselContainer>
        <CarouselWrapper {...settings}>
          {stateProducts?.productos?.map((item) => (
            <div class="flex flex-col h-80 rounded-md shadow bg-white !w-[250px] shadow-full mt-5 ml-2 transform hover:scale-110 duration-300">
              <div className='flex px-8'>
                <Link to={`/detail/${item.id}`}>
                  <img class="flex cursor-pointer !w-40 !h-40" src={item.imagenPrincipal} alt="ofertas" />
                </Link>
              </div>
              <div class="flex flex-col px-4">
                <div class="mb-0">
                  <p class="text-sm capitalize text-gray-800 font-bold">{item.name}</p>
                  <p class="text-sm py-1">${item.precio_compra}.00</p>
                </div>
                <div class="flex flex-row items-center mb-1">
                  <span class="text-xs font-bold text-green-500 mr-1">20%</span>
                  <span class="text-xs line-through text-gray-400">${item.precio_venta}.00</span>
                </div>
                <p class="text-xs my-2">{item.marcaId === 1 ? 'Mars Gaming' : item.marcaId === 2 ? 'Azus' : item.marcaId === 3 ? 'None' : 'Otras marcas'}</p>
              
              </div>
            </div>
          ))}
        </CarouselWrapper>
      </CarouselContainer>
    </div>
  );
};

const CarouselContainer = styled.div`
  position: relative;
  height: 50px;
  
`;

const CarouselWrapper = styled(Slider)`
  position: relative;
  width: 100%;
  height: 100%;
  gap: 5px;

  .slick-dots li button:before {
    color: #fff;
    opacity: 0.5;
    font-size: 1.5rem;
  }
  
  .slick-dots li.slick-active button:before {
    opacity: 1;
  }

  .slick-prev, .slick-next {
    border: none;
    background: none;
    outline: none;
    font-size: 2rem;
    color: orange;
    cursor: pointer;
    position: absolute;
    top: 350%;
    transform: translateY(-50%);
    z-index: 1;
  }

  .slick-prev {
    left: .1rem;
  }

  .slick-next {
    right: -6px
  }

  .slick-slide {
    position: relative;
    overflow: hidden;
    perspective: 200px;
    transition: transform 0.7s;
  }

  .slick-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
    transition: all 0.5s ease;
  }
`;

export default Products;