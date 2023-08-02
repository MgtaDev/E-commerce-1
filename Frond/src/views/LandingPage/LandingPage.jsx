import { useState } from 'react';
import styled from 'styled-components';
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri';
import NavBar from "../../components/NavBar/NavBar";
import Proveedores from '../../components/Proveedores/Proveedores';
import Carousel from '../../components/Carousel/Carousel';
import CarouselMid from '../../components/CarouselMid/Carousel'
// import Offers from '../../components/offers/offers'
import Footer from '../../components/Footer/Footer';
import ChatBotComponent from '../../components/ChatBot/ChatBot';
import Reviews from '../../components/Reviews/Reviews'
import ChooseUs from '../../components/ChooseUsSection/Choose'
import style from './Landing.module.css'
import maquillaje from '../../assets/img/maquillaje.png'
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  background-color: ${props => props.darkMode ? '#1a1a1a' : '#fff'};
  color: ${props => props.darkMode ? '#fff' : '#333'};
  padding: 2rem;
`;

const Title = styled.h1`
  font-family: 'Manrope', sans-serif;
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 1.2rem;
`;

const Button = styled.button`
  background-color: ${props => props.primary ? '#eecafa' : '#fff'};
  color: ${props => props.primary ? '#333' : '#8d8af1'};
  padding: 1rem 2rem;
  border: none;
  border-radius: 2rem;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.primary ? '#fff' : '#8d8af1'};
    color: ${props => props.primary ? '#eecafa' : '#fff'};
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom:5%;
  margin-top:3%;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 2rem;
  display:flex;
  padding:1rem;
  flex-direction:row;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  margin: 4rem;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);

  }
`;


const LanguageSelector = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  button {
    background-color: transparent;
    border: none;
    color: ${props => props.active ? '#8d8af1' : '#333'};
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    margin: 0 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      color: #8d8af1;
    }
  }
`;


const LandingPage = () => {
  const navigate = useNavigate()
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const getButtonLabel = (buttonLanguage) => {
    if (language === 'es') {
      return buttonLanguage === 'es' ? 'Español' : 'Inglés';
    } else if (language === 'en') {
      return buttonLanguage === 'es' ? 'Spanish' : 'English';
    }
  };

  const goDetail = () => {
    let id = 1;
    navigate('/detail/${id}')
  }

  return (
    <>
      <Container darkMode={isDarkMode}>
        <NavBar />
        <div style={{ height: '800px', overflowX: 'scroll', marginTop: '-2%' }}>
          <Carousel />
        </div>

        <Proveedores></Proveedores>

        <h1 className={style.productosH1}>Descubre nuestros productos</h1>

        <CardContainer>
          <Card>
            <div class="flex font-sans">
              <div class="flex-none w-56 relative">
                <img src={maquillaje} alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
              </div>
              <form class="flex-auto p-6">
                <div class="flex flex-wrap">
                  <h1 class="flex-auto font-medium text-slate-900">
                    Producto 1
                  </h1>
                  <div class="w-full flex-none mt-2 order-1 text-3xl font-bold text-pink-600 ">
                    $3600.00
                  </div>
                  <div class="text-sm font-medium text-slate-400">
                    En stock
                  </div>
                </div>
                <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">

                </div>
                <div class="flex space-x-4 mb-5 text-sm font-medium">
                  <div class="flex-auto flex space-x-4">
                    <button onClick={goDetail} class="h-10 px-6 font-semibold rounded-full bg-pink-600 text-white" type="submit">
                      Comprar Ahora
                    </button>
                    <button class="h-10 px-6 font-semibold rounded-full border border-slate-200 text-slate-900" type="button">
                      Añadir al carrito
                    </button>
                  </div>
                  <button class="flex-none flex items-center justify-center w-9 h-9 rounded-full text-pink-600 bg-pink-50" type="button" aria-label="Like">
                    <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                    </svg>
                  </button>
                </div>
                <p class="text-sm text-slate-500">
                  Consulte las tarifas de envio con su proveedor.
                </p>
              </form>
            </div>
          </Card>

          <Card>

            <div class="flex font-sans">
              <div class="flex-none w-56 relative">
                <img src={maquillaje} alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
              </div>
              <form class="flex-auto p-6">
                <div class="flex flex-wrap">
                  <h1 class="flex-auto font-medium text-slate-900">
                    Producto 2
                  </h1>
                  <div class="w-full flex-none mt-2 order-1 text-3xl font-bold text-pink-600">
                    $3900.00
                  </div>
                  <div class="text-sm font-medium text-slate-400">
                    In stock
                  </div>
                </div>
                <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">

                </div>
                <div class="flex space-x-4 mb-5 text-sm font-medium">
                  <div class="flex-auto flex space-x-4">
                    <button onClick={goDetail} class="h-10 px-6 font-semibold rounded-full bg-pink-600 text-white" type="submit">
                      Comprar Ahora
                    </button>
                    <button class="h-10 px-6 font-semibold rounded-full border border-slate-200 text-slate-900" type="button">
                      Añadir al carrito
                    </button>
                  </div>
                  <button class="flex-none flex items-center justify-center w-9 h-9 rounded-full text-pink-600 bg-pink-50" type="button" aria-label="Like">
                    <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                    </svg>
                  </button>
                </div>
                <p class="text-sm text-slate-500">
                  Free shipping on all continental US orders.
                </p>
              </form>
            </div>
          </Card>

          <Card>


            <div class="flex font-sans">
              <div class="flex-none w-56 relative">
                <img src={maquillaje} alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
              </div>
              <form class="flex-auto p-6">
                <div class="flex flex-wrap">
                  <h1 class="flex-auto font-medium text-slate-900">
                    Producto 3
                  </h1>
                  <div class="w-full flex-none mt-2 order-1 text-3xl font-bold text-pink-600">
                    $3900.00
                  </div>
                  <div class="text-sm font-medium text-slate-400">
                    In stock
                  </div>
                </div>
                <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">

                </div>
                <div class="flex space-x-4 mb-5 text-sm font-medium">
                  <div class="flex-auto flex space-x-4">
                    <button onClick={goDetail} class="h-10 px-6 font-semibold rounded-full bg-pink-600 text-white" type="submit">
                      Comprar Ahora
                    </button>
                    <button class="h-10 px-6 font-semibold rounded-full border border-slate-200 text-slate-900" type="button">
                      Añadir al carrito
                    </button>
                  </div>
                  <button class="flex-none flex items-center justify-center w-9 h-9 rounded-full text-pink-600 bg-pink-50" type="button" aria-label="Like">
                    <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                    </svg>
                  </button>
                </div>
                <p class="text-sm text-slate-500">
                  Free shipping on all continental US orders.
                </p>
              </form>
            </div>
          </Card>

          <Card>

            <div class="flex font-sans">
              <div class="flex-none w-56 relative">
                <img src={maquillaje} alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
              </div>
              <form class="flex-auto p-6">
                <div class="flex flex-wrap">
                  <h1 class="flex-auto font-medium text-slate-900">
                    Producto 4
                  </h1>
                  <div class="w-full flex-none mt-2 order-1 text-3xl font-bold text-pink-600">
                    $3900.00
                  </div>
                  <div class="text-sm font-medium text-slate-400">
                    In stock
                  </div>
                </div>
                <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">

                </div>
                <div class="flex space-x-4 mb-5 text-sm font-medium">
                  <div class="flex-auto flex space-x-4">
                    <button onClick={goDetail} class="h-10 px-6 font-semibold rounded-full bg-pink-600 text-white" type="submit">
                      Comprar Ahora
                    </button>
                    <button class="h-10 px-6 font-semibold rounded-full border border-slate-200 text-slate-900" type="button">
                      Añadir al carrito
                    </button>
                  </div>
                  <button class="flex-none flex items-center justify-center w-9 h-9 rounded-full text-pink-600 bg-pink-50" type="button" aria-label="Like">
                    <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                    </svg>
                  </button>
                </div>
                <p class="text-sm text-slate-500">
                  Free shipping on all continental US orders.
                </p>
              </form>
            </div>
          </Card>

        </CardContainer>

        <div style={{ height: '300px', overflowX: 'scroll' }}>
          <CarouselMid></CarouselMid>
        </div>

        <>
          <Reviews></Reviews>
        </>
        <>
          <ChooseUs></ChooseUs>
        </>

      </Container>

      <ChatBotComponent language={language} />
      <Footer />
    </>
  );
};

export default LandingPage;