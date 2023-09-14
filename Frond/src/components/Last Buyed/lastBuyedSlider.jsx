  import React, { useEffect, useState } from "react";
  import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
  import "pure-react-carousel/dist/react-carousel.es.css";
  import { useDispatch, useSelector } from "react-redux";
  import { products, userCompras } from "../../redux/actions";
  import { useNavigate } from "react-router-dom";
  import { useAuth0 } from "@auth0/auth0-react";
import LastBuyedCard from "./lastBuyedCard";
  
  /* Install pure-react-carousel using -> npm i pure-react-carousel */
  
  const MoreProductsCardContainer = () => {
    
    const dispatch = useDispatch();
    const extractIdNumber = (id) => {
      const idParts = id && id.split('-'); // Separa el string en partes utilizando el carácter "-"
      return parseInt(idParts && idParts[1]); // Convierte la segunda parte a un número entero y lo retorna
    };
    const userComprasById = useSelector((state) => state.userCompras);
    console.log(userComprasById);
  
    const usuarios = useSelector((state) => state.Allclients);
    const { user } = useAuth0();
    const currentUser = usuarios.find(
      (usuario) =>
        usuario.name.toLowerCase() === user?.name.toLowerCase() &&
        usuario.correo_electronico.toLowerCase() === user.email.toLowerCase()
    );
  
    const idNumber = extractIdNumber(currentUser?.id);
    useEffect(() => {
      dispatch(userCompras(idNumber));
    }, [dispatch, idNumber]);
    const redirigirAlInicio = () => {
      window.scrollTo(0, 0);
    }
  
    const navigate = useNavigate()
    const goCatalog = () => {
      navigate('/catalogo')
      redirigirAlInicio()
    }
  
    const navigateProductDetail = (id) => {
      navigate(`/detail/${id}`)
      redirigirAlInicio()
    }
  
    return (
      <div className=" w-full">
        {userComprasById.productos?.length > 0 && ( 
        <h2 className="m-2 cursor-pointer text-xl font-semibold inline-block text-gray-700  py-1 px-4 items-center gap-2 rounded-lg"> Comprar de nuevo:</h2>
        )}
        <div className="flex items-center justify-center w-full h-full  sm:py-8">
          {/* Carousel for desktop and large size devices */}
          {userComprasById.productos?.length > 0 ? (
            <CarouselProvider className="lg:block hidden w-full" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={4} step={1} infinite={true}>
            <div className="w-full relative flex items-center justify-center">
              <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </ButtonBack>
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                    <Slider>
            <div id="slider" className="h-full flex w-full  gap-14 items-center justify-start transition ease-out duration-700">
            {userComprasById.productos?.map((product, index) => (
              <Slide index={index} key={index}>
                <LastBuyedCard lastCompra={product} key={index}/>
              </Slide>
            ))}
            </div>
            </Slider>
              </div>
              <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </ButtonNext>
            </div>
            </CarouselProvider>
          )
            : ''
        }
         
        </div>
      </div>
    );
  }
  
  export default MoreProductsCardContainer;
  