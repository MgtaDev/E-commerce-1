import React from 'react';
import styled from 'styled-components'; // Importa Styled Components
import style from './reviews.module.css'
let imageLink =
    'https://media.istockphoto.com/id/1337144146/es/vector/vector-de-icono-de-perfil-de-avatar-predeterminado.jpg?s=612x612&w=0&k=20&c=YiNB64vwYQnKqp-bWd5mB_9QARD3tSpIosg-3kuQ_CI=';

// const ComponentTitle = styled.div`
//   justify-content: center;
//   font-family: 'Manrope', sans-serif;
//   font-size: 2rem; 
//   margin: 1rem auto 3em; 
//   text-align: center; 
//   margin: 4%;
// `;

const ReviewContainer = styled.div`
  padding: 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  margin-top: 5%;
  margin-bottom: 10%;
`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px; /* Ajusta el valor según tus preferencias */
`;

const AvatarImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px; /* Ajusta el valor según tus preferencias */
`;

const DevTitle = styled.h3`
  color: #000;
  font-family: Galdeano;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Review = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 40px;
  border: 1px solid rgba(0, 0, 0, 0.20);
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 250px;
  height: 250px;
  margin: 2%;
  padding: 1.5%;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }
`;

const ReviewText = styled.p`
  color: #575757;
  text-align: center;
  font-family: Galdeano;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Reviews = () => {
  return (
    <>
    <h1 className={style.centerText}>Reviews de nuestros usuarios</h1>
    <ReviewContainer>
          <Review>
              <ReviewText>"El producto es de alta calidad y cumple con mis expectativas. 100% satisfecha"</ReviewText>
              <AvatarContainer>
                  <AvatarImage src={imageLink} alt="user avatar" />
                  <DevTitle>María</DevTitle>
              </AvatarContainer>
          </Review>

          <Review>
              <ReviewText>"Completamente satisfecha. El envío se realizó en el tiempo acordado."</ReviewText>
              <AvatarContainer>
                  <AvatarImage src={imageLink} alt="user avatar" />
                  <DevTitle>Roxana</DevTitle>
              </AvatarContainer>
          </Review>

          <Review>
              <ReviewText>"Compré un labial y me llegó antes de lo acordado. 100% recomendado."</ReviewText>
              <AvatarContainer>
                  <AvatarImage src={imageLink} alt="user avatar" />
                  <DevTitle>Mónica</DevTitle>
              </AvatarContainer>
          </Review>
      </ReviewContainer>
      </>
  );
};

export default Reviews;