import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Navbar from "../../components/NavBar/NavBar";

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  gap: 30px;
  padding: 8%;
`;

const infoWrapper = styled.div`
display: flex;
  flex-direction: column;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Button = styled.button`
  display: flex;
  justify-content: left;
  background-color: ${props => props.primary ? '#B061B2;' : '#fff'};
  color: ${props => props.primary ? '#fff' : '#B061B2'};
  padding: 1rem 2rem;

  margin-top: 50px;
  margin-left: 35px;
  border: none;
  border-radius: 2rem;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.primary ? '#fff' : '#8d8af1'};
    color: ${props => props.primary ? '#B061B2;' : '#fff'};
  }
`;

const imageContainer = styled.div` 
display: flex;
flex-wrap: wrap;
justify-content: left;
gap: 10px;
`;

const quantityButton = styled.div`
display: flex;
align-items: center;
background-color: #f3f3f3;
border: none;
border-radius: 1.84375rem;
padding: 5px;
font-weight: bold;
font-size: 1rem;
cursor: pointer;
transition: all 0.3s ease;

&:hover {
  background-color: #e0e0e0;
}
`;

/* const ContainerDetail = styled.div`
  width: 40%;
  height: 50%;
  background: #f5f5f5;
  padding: 2rem 1.5rem;
  transition: box-shadow .3s ease, transform .2s ease;
  margin: 30px;
  border-radius: 5px;
  box-shadow: 0 8px 50px #23232333;
`; */

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform .2s ease, opacity .2s ease;
  color: black;
`;

const DetailImg1 = styled.img`
  display: flex;
  flex-direction: row;
  background: linear-gradient(to top, #f1e1c1 0%, #fcbc97 100%);
  width: 40%;
  border-radius: 10%;
  transition: transform .2s ease;
  margin-bottom: 1rem;
  color: black;
`;

const DetailImg = styled.img`
background: linear-gradient(to top, #f1e1c1 0%, #fcbc97 100%);
  width: 10%;
  border-radius: 1%;
  transition: transform .2s ease;
  margin-bottom: 1rem;

`;

let products = [
    {
        id: 1,
        name: "MAYBELLINE NEW YORK",
        description: "Pintalabios mate de larga duración SuperStay Matte Ink",
        images: {
            image1: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/0/M/0ML19241_1_1c53.webp",
            image2: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/0/M/0ML21209_1_ac93.webp",
            image3: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/0/M/0ML22532_1_1d09.webp",
            image4: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/0/M/0ML22533_1_22cb.webp",
            image5: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/0/M/0ML21213_1_cfd4.webp"
        },
        price: "$3200"
    },

    {
        id: 2,
        name: "Máscara de pestañas",
        description: "Mascara de Pestañas mate de larga duración SuperStay Matte Ink",
        images: {
            image1: "https://divna.es/wp-content/uploads/2022/02/mascara-extra-volumen-verde-3.jpg",
            image2: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.maquillalia.com%2Fessence-mascara-de-pestanas-volumen-definicion-lash-like-boss-ultranegra-p-72146.html&psig=AOvVaw3s3vd_LZgT1LDrIxADfhJ8&ust=1691047807800000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLCt9ZC6vYADFQAAAAAdAAAAABAb",
            image3: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsalcobrand.cl%2Fproducts%2Fmascara-pestanas-contra-agua-wtp&psig=AOvVaw3s3vd_LZgT1LDrIxADfhJ8&ust=1691047807800000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLCt9ZC6vYADFQAAAAAdAAAAABAo",
            image4: "https://petrizzio.cl/cdn/shop/products/MascaradePestanasBigVolumenWashable.jpg?v=1682094815",
            image5: "https://www.maicao.cl/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Chile/default/dwb90ef285/images/large/399865-mascara-de-pestanas-36h-water-proof-212-very-black-8ml.jpg?sw=1000&sh=1000"
        },
        price: "$5000"
    }]

/*  {
      id: 3,
      name: "Base",
      description: "Base mate de larga duración SuperStay Matte Ink",
      images: {
          image1: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.etniacosmetics.com%2Fes%2Fsoft-focus-foundation.html&psig=AOvVaw0pK5jW2kjrKRpYqZ4_GFz5&ust=1691047932049000&source=images&cd=vfe&opi=89978449&ved=0CA0QjRxqFwoTCMCUjcy6vYADFQAAAAAdAAAAABAc",
          image2: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.liliumnature.com%2Fproducto%2Fmaquillaje-fluido-no-714-beige-natural-de-zao-makeup%2F&psig=AOvVaw0pK5jW2kjrKRpYqZ4_GFz5&ust=1691047932049000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMCUjcy6vYADFQAAAAAdAAAAABAr",
          image3: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elcorteingles.es%2Fperfumeria%2FA23913935-base-de-maquillaje-studio-fix-fluid-spf-15-mac%2F&psig=AOvVaw0pK5jW2kjrKRpYqZ4_GFz5&ust=1691047932049000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMCUjcy6vYADFQAAAAAdAAAAABA2",
          image4: "https://www.maybelline.co/~/media/mny/latam/colombia/maquillaje-rostro/fit%20me%20matte%20poreless%20new%20images%2006032022/130/130-buff-beige-760x1130.jpg",
          image5: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgiodegiovanni.com%2Fproducto%2Fperfect-hydrofluid-spf15%2F&psig=AOvVaw0pK5jW2kjrKRpYqZ4_GFz5&ust=1691047932049000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMCUjcy6vYADFQAAAAAdAAAAABBj"
      },
      price: "$6000"
  }
 
      {
          id: 4,
          name: "Esmalte para uñas",
          description: "Esmalte mate de larga duración SuperStay Matte Ink",
          images: {
              image1: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.marykay.es%2Fes-es%2Fproducts%2Fmakeup%2Fnails%2Fesmalte-para-unas-visionary-pink-990314592&psig=AOvVaw2PmTXUTEIGa2p8Sna4C-8y&ust=1691048076416000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICx8JC7vYADFQAAAAAdAAAAABAF",
              image2: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wynie.com%2Fesmaltes%2F1367-esmalte-permanente-gel-color-para-lampara-uv-paso-2.html&psig=AOvVaw2PmTXUTEIGa2p8Sna4C-8y&ust=1691048076416000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICx8JC7vYADFQAAAAAdAAAAABAK",
              image3: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elle.com%2Fes%2Fbelleza%2Fcara-cuerpo%2Fg38619366%2Fesmaltes-unas-buenos-resistentes%2F&psig=AOvVaw2PmTXUTEIGa2p8Sna4C-8y&ust=1691048076416000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICx8JC7vYADFQAAAAAdAAAAABAf",
              image4: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpodologosasturias.com%2Fweb%2Fblog%2Findex.php%2F2017%2F03%2F09%2Fesmaltes-para-coches-y-para-unas%2F&psig=AOvVaw2PmTXUTEIGa2p8Sna4C-8y&ust=1691048076416000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICx8JC7vYADFQAAAAAdAAAAABA4",
              image5: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aromas.es%2Fmaquillaje-esmalte-de-unas%2F&psig=AOvVaw2PmTXUTEIGa2p8Sna4C-8y&ust=1691048076416000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICx8JC7vYADFQAAAAAdAAAAABBB"
          },
          price: "$6000"
      },
      
      {
          id: 5,
          name: "Sombra de ojos",
          description: "Sombra de ojos de larga duración SuperStay Matte Ink",
          images: {
              image1: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vogue.es%2Fbelleza%2Fmaquillaje%2Fgalerias%2Fpaletas-de-sombras-de-ojos-mas-vendidas%2F14892&psig=AOvVaw2aYR3OsjtxvZZlMpjVtMxm&ust=1691048182474000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOjWysO7vYADFQAAAAAdAAAAABAG",
              image2: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vogue.es%2Fcompras%2Farticulos%2Fpaletas-sombras-ojos-coloridas-sephora&psig=AOvVaw2aYR3OsjtxvZZlMpjVtMxm&ust=1691048182474000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOjWysO7vYADFQAAAAAdAAAAABAg",
              image3: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.maquillalia.com%2Ftechnic-cosmetics-paleta-de-sombras-de-ojos-pressed-pigment-unconditional-p-71771.html&psig=AOvVaw2aYR3OsjtxvZZlMpjVtMxm&ust=1691048182474000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOjWysO7vYADFQAAAAAdAAAAABAq",
              image4: "https://muchomaquillaje.com/wp-content/uploads/2023/05/artdeco-EYELIGHTS-PALETTE-OCEAN-OBSESSION%E2%80%8B.jpg",
              image5: "https://muchomaquillaje.com/wp-content/uploads/2023/05/85006_2-e1684842456723.jpeg"
          },
          price: "$6000" } 
      ]*/


const Detail = () => {
    const back = useNavigate();
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };


    const product = products.find((item) => item.id.toString() === id);

    return (
        <div>
            <Navbar />
            <Button primary onClick={() => back('/')}>
                Atrás
            </Button>
            <DetailWrapper>
                <DetailImg1 src={product.images.image1} alt={product.name} />
                <imageContainer>
                    <DetailImg src={product.images.image2} alt={product.name} />
                    <DetailImg src={product.images.image3} alt={product.name} />
                    <DetailImg src={product.images.image4} alt={product.name} />
                    <DetailImg src={product.images.image5} alt={product.name} />
                </imageContainer>
                </DetailWrapper>

                <div>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>2

                <infoWrapper>
                <QuantityContainer>
                <quantityButton onClick={handleDecrement}>-</quantityButton>
                    <p>{quantity}</p>
                <quantityButton onClick={handleIncrement}> +</quantityButton>
                </QuantityContainer>
                </infoWrapper>

                <Button primary> Comprar </Button>
        </div>
    );
};

export default Detail;

