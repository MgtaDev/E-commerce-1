import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import banner from '../../assets/slides/boashop banner.png'
import { FaCheckCircle, FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { products } from '../../redux/actions';
import Countdown from '../countdown/countdown';

const Products = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: 'linear',
    prevArrow: <ArrowIcon className="fa fa-chevron-left" />,
    nextArrow: <ArrowIcon className="fa fa-chevron-right" />
  };
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
    <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
        <h1 className='text-xl font-bold px-1'>Flash Sales</h1>
        <Countdown/>
      </div>
    <CarouselContainer>
        <CarouselWrapper {...settings}>
          {stateProducts?.productos?.map((item) => (
            <div class="flex flex-col rounded-md shadow !w-[250px] shadow-full mt-5 ml-10">
            <img class="object-contain items-center !w-40 !h-40  " src={item.imagenPrincipal} alt="ofertas" />
            <div class="flex flex-col px-4">
                <div class="mb-0">
                    <p class="text-sm capitalize text-gray-800 font-bold">{item.name}</p>
                    <p class="text-sm py-1">${item.precio_venta}.00</p>
                </div>
                <div class="flex flex-row items-center mb-1">
                    <span class="text-xs font-bold text-green-500 mr-1">20%</span>
                    <span class="text-xs line-through text-gray-400">${item.precio_original}.00</span>
                </div>
                <p class="text-xs ">{item.marcaId === 1 ? 'Trendy' : item.marcaId === 2 ? 'Kiss Beauty' : item.marcaId === 3 ? 'MyK' : 'Otras marcas'}</p>
                <div class="flex flex-row items-center">
                    <FaStar class="w-4 h-4 text-yellow-500 mr-1" />
                    <p class="text-xs m-2 font-bold text-gray-600">Sin reviews</p>
                </div>
            </div>
        </div>

          ))}



        </CarouselWrapper>
      </CarouselContainer></>
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
  gap:5px

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
    color: #fff;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;

    &:hover {
      color: #ff6b6b;
    }
  }

  .slick-prev {
    left: 2rem;
  }

  .slick-next {
    right: 2rem;
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

// const Img = styled.img`
//   width: 100%;
//   height: 50%;
// `;

// const ImgTitle = styled.p`
//   margin-top: 1rem;
//   text-align: center;
// `;

const ArrowIcon = styled.i`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 0 0.25rem;
    list-style: none;

    button {
      border: none;
      background: none;
      outline: none;
      cursor: pointer;
      font-size: 1.5rem;
      color: #fff;
      opacity: 0.5;
      transition: all 0.3s;

      &:hover, &.slick-active {
        opacity: 1;
      }
    }
  }
`;

export default Products;