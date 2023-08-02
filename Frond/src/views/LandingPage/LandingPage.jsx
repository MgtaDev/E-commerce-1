import { useState } from 'react';
import styled from 'styled-components';
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri';
import NavBar from "../../components/NavBar/NavBar";
import Proveedores from '../../components/Proveedores/Proveedores';
import Carousel from '../../components/Carousel/Carousel';
import CarouselMid from '../../components/CarouselMid/Carousel'
import Products from '../../components/Products/Products'
// import Offers from '../../components/offers/offers'
import Footer from '../../components/Footer/Footer';
import ChatBotComponent from '../../components/ChatBot/ChatBot';
import Reviews from '../../components/Reviews/Reviews'
import ChooseUs from '../../components/ChooseUsSection/Choose'

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
  navigate('/detail')
  }

  return (
    <>
      <Container darkMode={isDarkMode}>
        <NavBar />
        <div style={{ height: '800px', overflowX: 'scroll', marginTop: '-2%' }}>
          <Carousel />
        </div>
        
        <Proveedores/>
        <Products/>
      

        <div style={{ height: '500px', overflowX: 'scroll' }}>
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