import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import banner from '../../assets/slides/boashop banner.png'
import banner2 from '../../assets/img/banner enmbale 2.webp'
import banner3 from '../../assets/img/enmbale banner 3.webp'


const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    prevArrow: <ArrowIcon className="fa fa-chevron-left" />,
    nextArrow: <ArrowIcon className="fa fa-chevron-right" />,
    appendDots: dots => (
      <DotsContainer>
        {/* <ul > {dots} </ul> */}
      </DotsContainer>
    )
  };
  
  return (
    <CarouselContainer>
      <CarouselWrapper {...settings}>
        <div>
        <img className='' src={banner} alt="ofertas" />
        </div>

        <div>
        <img className='' src={banner2} alt="ofertas" />
        </div>

        <div>
        <img className='' src={banner3} alt="ofertas" />
        </div>
      </CarouselWrapper>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  position: relative;
  height: 58px;
`;

const CarouselWrapper = styled(Slider)`
  position: relative;
  width: 100%;
  height: 100%;

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
    opacity:0;

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

export default Carousel;