import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Navbar from "../../components/NavBar/NavBar";
import bagIcon from '../../assets/img/baghandleWhite.svg';
import Footer from "../../components/Footer/Footer";
import colorIcon from '../../assets/img/colorIcon.svg'

const Button = styled.button`
  display: flex;
  justify-content: left;
  background-color: ${props => props.primary ? '#B061B2;' : '#fff'};
  color: ${props => props.primary ? '#fff' : '#B061B2'};
  padding: 1rem 2rem;

  margin-top: 80px;
  margin-left: 60px;
  margin-bottom: 50px;
  border: none;
  border-radius: 1rem;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.primary ? '#fff' : '#8d8af1'};
    color: ${props => props.primary ? '#B061B2;' : '#fff'};
  }
`;

const Detail = () => {
    const back = useNavigate();
    const { id } = useParams();
    const [images, setImages] = useState({
        img1: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/0/M/0ML19241_1_1c53.webp",
        img2: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/0/M/0ML21209_1_ac93.webp",
        img3: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/0/M/0ML22532_1_1d09.webp",
        img4: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/0/M/0ML22533_1_22cb.webp"
    })

    const [activeImg, setActiveImage] = useState(images.img1)

    const [amount, setAmount] = useState(1);

    const handleDecrement = () => {
        setAmount((prev) => Math.max(prev - 1, 0));
    };

    const handleIncrement = () => {
        setAmount((prev) => Math.min(prev + 1, 10));
    };

    // La cantidad del stock no puede ser menor a cero y como maximo tiene que ser
    // el stock disponible (que en este caso es 10);
    // border border-blue-500 border-5 rounded-lg'


    return (
        <div>
            <Navbar />
            <div className="m-20">
                <Button primary onClick={() => back('/')}>
                    Atrás
                </Button>
            </div>
            <div className='flex flex-col justify-between ml-60 mr-60 lg:flex-row gap-16 lg:items-center'>
                <div className='flex flex-col gap-6 lg:w-2/4'>
                    <img src={activeImg} alt="" className='w-full h-full aspect-square object-cover rounded-xl' />
                    <div className='flex flex-row justify-between h-24'>
                        <img src={images.img1} alt="" className='w-24 h-24 p-1 m-3 rounded-md cursor-pointer border border-grey-500 border-5 rounded-lg' onClick={() => setActiveImage(images.img1)} />
                        <img src={images.img2} alt="" className='w-24 h-24 p-1 m-3 rounded-md cursor-pointer border border-grey-500 border-5 rounded-lg' onClick={() => setActiveImage(images.img2)} />
                        <img src={images.img3} alt="" className='w-24 h-24 p-1 m-3 rounded-md cursor-pointer border border-grey-500 border-5 rounded-lg' onClick={() => setActiveImage(images.img3)} />
                        <img src={images.img4} alt="" className='w-24 h-24 p-1 m-3 rounded-md cursor-pointer border border-grey-500 border-5 rounded-lg' onClick={() => setActiveImage(images.img4)} />
                    </div>
                </div>

                <div className='flex flex-col gap-4 lg:w-2/4'>
                    <div>
                        <span className='font-semibold text-customColor'>Lipstick 24 hs</span>
                        <h1 className='text-3xl font-bold'>MAYBELLINE NEW YORK</h1>
                    </div>
                    <p className='text-gray-700'>
                        Pintalabios mate de larga duración SuperStay Matte Ink
                    </p>
                    <h6 className='text-2xl font-semibold'>$ 3000.00</h6>
                    <div className='flex flex-row items-center gap-12'>

                    <div className='flex flex-row gap-3'>
                <div className='relative'>
                    <img src={colorIcon} alt="colorIcon" className="w-6 h-6 z-10" style={{ zIndex: 10 }} />
                </div>
                <div className='relative'>
                    <img src={colorIcon} alt="colorIcon" className="w-6 h-6 z-10" style={{ zIndex: 10 }} />
                </div>
                <div className='relative'>
                    <img src={colorIcon} alt="colorIcon" className="w-6 h-6 z-10" style={{ zIndex: 10 }} />
                </div>
                <div className='relative'>
                    <img src={colorIcon} alt="colorIcon" className="w-6 h-6 z-10" style={{ zIndex: 10 }} />
                </div>
                <div className='relative'>
                    <img src={colorIcon} alt="colorIcon" className="w-6 h-6 z-10" style={{ zIndex: 10 }} />
                </div>
            </div>
                        <div className='flex flex-row items-center'>
                            <button className='bg-gray-200 py-2 px-5 rounded-lg text-customColor text-3xl' onClick={handleDecrement}>-</button>
                            <span className='py-4 px-6 rounded-lg'>{amount}</span>
                            <button className='bg-gray-200 py-2 px-4 rounded-lg text-customColor text-3xl' onClick={handleIncrement}>+</button>
                        </div>
                        <button className='bg-customColor text-white font-semibold py-3 px-16 rounded-xl h-full flex items-center gap-2'>
                            <img src={bagIcon} alt="bag icon" className="w-6 h-6 " />
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <Footer />
            </div>

        </div>
    )
};

export default Detail;
