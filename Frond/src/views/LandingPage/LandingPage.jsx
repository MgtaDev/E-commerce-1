import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CarouselMid from '../../components/CarouselMid/Carousel'
import LastBuyedSlider from "../../components/Last Buyed/lastBuyedSlider";
import { useDispatch, useSelector } from 'react-redux';
import Products from '../../components/Products/Products';
import { products } from '../../redux/actions';
import Proveedores from '../../components/Proveedores/Proveedores';
import ProductsMayLike from '../ProductsYouMayLike/productsMayLike';
import Footer from '../../components/Footer/Footer';
import Marcas from '../../NuestrasMarcas/nuestrasMarcas';


const Container = styled.div`
  background-color: ${props => props.darkMode ? '#1a1a1a' : '#ebeaea'};
  color: ${props => props.darkMode ? '#fff' : '#333'};
  padding: 0rem;

`;

const LandingPage = () => {
  
  const dispatch = useDispatch();
  const numberSize = 20;

  
  useEffect(() => {
    // setPageNumber(0);
    const fetchData = () => {
      const queries = {
        page: 0,
        size: numberSize
      };
      dispatch(products(queries));
    };
    fetchData();
  }, [dispatch, numberSize]);
  
  const stateProducts = useSelector((state)=> state.stateProducts)
  console.log(stateProducts)

  return (
    <main className='px-20'>
    <div className='-mx-20'>
    <CarouselMid/>

    </div>
    <div className='mt-60 mb-20'>
    <Products stateProducts={stateProducts}/>
    </div>

    <div className='mt-80'>
      <Proveedores/>
    </div>

    <div className='mt-10 -mx-20'>
    <CarouselMid/>
    </div>
    
    <div className='mt-80'>
      <Marcas/>
    </div>

    <div className='mt-40'>
      <ProductsMayLike/>
    </div>

    <div className='mt-40 -mx-20'>
      <Footer/>
    </div>

    </main>
  );
};

export default LandingPage;