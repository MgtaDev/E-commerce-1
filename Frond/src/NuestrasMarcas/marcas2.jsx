import React, { useState } from 'react';

import { useSpring, animated } from "react-spring";
import MarsGaming from '../assets/img/mars-gaming-logo.png'
import Azus from '../assets/img/azuslogo.png'
import JBL from '../assets/img/jbl-logo.png'
import AVR from '../assets/img/Avr-logo.png'
import Samsung from '../assets/img/samsung-logo.jpg'
import Lenovo from '../assets/img/samsung-logo.jpg'
import Redragon from '../assets/img/samsung-logo.jpg'
import Comifort from '../assets/img/samsung-logo.jpg'
import Intel from '../assets/img/samsung-logo.jpg'
import Nintendo from '../assets/img/samsung-logo.jpg'
import Xbox from '../assets/img/samsung-logo.jpg'
import Playstation from '../assets/img/samsung-logo.jpg'
import Acer from '../assets/img/samsung-logo.jpg'
import Dell from '../assets/img/samsung-logo.jpg'
import Hp from '../assets/img/samsung-logo.jpg'
import Epson from '../assets/img/samsung-logo.jpg'
import APC from '../assets/img/samsung-logo.jpg'
import Teachview from '../assets/img/samsung-logo.jpg'
import Argom from '../assets/img/samsung-logo.jpg'
import CoolerMaster from '../assets/img/samsung-logo.jpg'
import Biostar from '../assets/img/samsung-logo.jpg'
import AMD from '../assets/img/samsung-logo.jpg'
import Deepcool from '../assets/img/samsung-logo.jpg'
import Kingston from '../assets/img/samsung-logo.jpg'
import Adata from '../assets/img/samsung-logo.jpg'
import LG from '../assets/img/samsung-logo.jpg'
import HHGears from '../assets/img/samsung-logo.jpg'
import Razer from '../assets/img/samsung-logo.jpg'
import Logitech from '../assets/img/samsung-logo.jpg'
import HiperX from '../assets/img/samsung-logo.jpg'





import style from './Proveedores.module.css'
import styled from 'styled-components'
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Card = styled.div`
  background-color: #fff;
  border-radius: .5rem;
  display:flex;

  padding:1rem;
  flex-direction:column;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
  margin: 1rem;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);

  }
`;
const Marcas2 = () => {

    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 500 },
        delay: 200,
        onRest: () => setShow(true)
      });
      const [show, setShow] = useState(false);

return (

    <animated.div style={fadeIn}>
    <div className={style.Proveedores}>
      <div className='items-center my-5 flex justify-between'>
      <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
        <h1 className='text-xl font-bold px-1'>Marcas</h1>
      </div>
      <div>
        <Link to={'/categorias'}>
        <span className='mb-1 px-4 text-sm text-blue-900'>Ver mas</span>
        </Link>
      </div>
      </div>
     

        <div className={style.flex}>

        <Card>
        
        <img src={MarsGaming} alt="" />
        
        <div className='border border-w-1 -mt-3 mb-3 border-gray-100'></div>
        <div className='flex flex-col'>
          <p className='text-xs text-center'>Mars Gaming</p>
          <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
          <p className='text-center text-gray-500 text-xs px-1'>Tienda oficial</p>
      </div>

        </div>
        </Card>

        <Card>
        
        <img src={Azus} alt="" />
        
        <div className='border border-w-1 -mt-3 mb-3 border-gray-100'></div>
        <div className='flex flex-col'>
          <p className='text-xs text-center'>Azus</p>
          <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
          <p className='text-center text-gray-500 text-xs px-1'>Tienda oficial</p>
      </div>

        </div>
        </Card>

        <Card>
        
        <img src={JBL} alt="" />
        
        <div className='border border-w-1 -mt-3 mb-3 border-gray-100'></div>
        <div className='flex flex-col'>
          <p className='text-xs text-center'>JBL</p>
          <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
          <p className='text-center text-gray-500 text-xs px-1'>Tienda oficial</p>
      </div>

        </div>
        </Card>

        <Card>
        
        <img src={AVR} alt="" />
        
        <div className='border border-w-1 -mt-3 mb-3 border-gray-100'></div>
        <div className='flex flex-col'>
          <p className='text-xs text-center'>AVR</p>
          <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
          <p className='text-center text-gray-500 text-xs px-1'>Tienda oficial</p>
      </div>

        </div>
        </Card>

        <Card>
        
        <img src={Samsung} alt="" />
        
        <div className='border border-w-1 -mt-3 mb-3 border-gray-100'></div>
        <div className='flex flex-col'>
          <p className='text-xs text-center'>Samsung</p>
          <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
          <p className='text-center text-gray-500 text-xs px-1'>Tienda oficial</p>
      </div>

        </div>
        </Card>
         <Card>
        
        <img src={Lenovo} alt="" />
        
        <div className='border border-w-1 -mt-3 mb-3 border-gray-100'></div>
        <div className='flex flex-col'>
          <p className='text-xs text-center'>Lenovo</p>
          <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
          <p className='text-center text-gray-500 text-xs px-1'>Tienda oficial</p>
      </div>

        </div>
        </Card>
        <Card>
        
        <img src={Redragon} alt="" />
        
        <div className='border border-w-1 -mt-3 mb-3 border-gray-100'></div>
        <div className='flex flex-col'>
          <p className='text-xs text-center'>Red Dragon</p>
          <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
          <p className='text-center text-gray-500 text-xs px-1'>Tienda oficial</p>
      </div>

        </div>
        </Card>
        <Card>
        
        <img src={Comifort} alt="" />
        
        <div className='border border-w-1 -mt-3 mb-3 border-gray-100'></div>
        <div className='flex flex-col'>
          <p className='text-xs text-center'>Blue Makeup</p>
          <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
          <p className='text-center text-gray-500 text-xs px-1'>Tienda oficial</p>
      </div>

        </div>
        </Card>
        <Card>
        
        <img src={Intel} alt="" />
        
        <div className='border border-w-1 -mt-3 mb-3 border-gray-100'></div>
        <div className='flex flex-col'>
          <p className='text-xs text-center'>Intel</p>
          <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
          <p className='text-center text-gray-500 text-xs px-1'>Tienda oficial</p>
      </div>

        </div>
        </Card>
        <Card>
        
        <img src={Nintendo} alt="" />
        
        <div className='border border-w-1 -mt-3 mb-3 border-gray-100'></div>
        <div className='flex flex-col'>
          <p className='text-xs text-center'>Nintendo</p>
          <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
          <p className='text-center text-gray-500 text-xs px-1'>Tienda oficial</p>
      </div>

        </div>
        </Card>
        <Card>
        
        <img src={Xbox} alt="" />
        
        <div className='border border-w-1 -mt-3 mb-3 border-gray-100'></div>
        <div className='flex flex-col'>
          <p className='text-xs text-center'>Xbox</p>
          <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
          <p className='text-center text-gray-500 text-xs px-1'>Tienda oficial</p>
      </div>

        </div>
        </Card>
        <Card>
        
        <img src={Playstation} alt="" />
        
        <div className='border border-w-1 -mt-3 mb-3 border-gray-100'></div>
        <div className='flex flex-col'>
          <p className='text-xs text-center'>Plystation</p>
          <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
          <p className='text-center text-gray-500 text-xs px-1'>Tienda oficial</p>
      </div>

        </div>
        </Card>
        <Card>
        
        <img src={Acer} alt="" />
        
        <div className='border border-w-1 -mt-3 mb-3 border-gray-100'></div>
        <div className='flex flex-col'>
          <p className='text-xs text-center'>Acer</p>
          <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
          <p className='text-center text-gray-500 text-xs px-1'>Tienda oficial</p>
      </div>

        </div>
        </Card>
        <Card>
        
        <img src={LG} alt="" />
        
        <div className='border border-w-1 -mt-3 mb-3 border-gray-100'></div>
        <div className='flex flex-col'>
          <p className='text-xs text-center'>LG</p>
          <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
          <p className='text-center text-gray-500 text-xs px-1'>Tienda oficial</p>
      </div>

        </div>
        </Card>
        <Card>
        
        <img src={Acer} alt="" />
        
        <div className='border border-w-1 -mt-3 mb-3 border-gray-100'></div>
        <div className='flex flex-col'>
          <p className='text-xs text-center'>Acer</p>
          <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
          <p className='text-center text-gray-500 text-xs px-1'>Tienda oficial</p>
      </div>

        </div>
        </Card>
        <Card>
        
        <img src={Dell} alt="" />
        
        <div className='border border-w-1 -mt-3 mb-3 border-gray-100'></div>
        <div className='flex flex-col'>
          <p className='text-xs text-center'>Dell</p>
          <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
          <p className='text-center text-gray-500 text-xs px-1'>Tienda oficial</p>
      </div>

        </div>
        </Card>
        <Card>
        
        <img src={Razer} alt="" />
        
        <div className='border border-w-1 -mt-3 mb-3 border-gray-100'></div>
        <div className='flex flex-col'>
          <p className='text-xs text-center'>Razer</p>
          <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
          <p className='text-center text-gray-500 text-xs px-1'>Tienda oficial</p>
      </div>

        </div>
        </Card>
        <Card>
        
        <img src={Hp} alt="" />
        
        <div className='border border-w-1 -mt-3 mb-3 border-gray-100'></div>
        <div className='flex flex-col'>
          <p className='text-xs text-center'>Hp</p>
          <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
          <p className='text-center text-gray-500 text-xs px-1'>Tienda oficial</p>
      </div>

        </div>
        </Card>
        <Card>
        
        <img src={Epson} alt="" />
        
        <div className='border border-w-1 -mt-3 mb-3 border-gray-100'></div>
        <div className='flex flex-col'>
          <p className='text-xs text-center'>Epson</p>
          <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
          <p className='text-center text-gray-500 text-xs px-1'>Tienda oficial</p>
      </div>

        </div>
        </Card>
        <Card>
        
        <img src={APC} alt="" />
        
        <div className='border border-w-1 -mt-3 mb-3 border-gray-100'></div>
        <div className='flex flex-col'>
          <p className='text-xs text-center'>APC</p>
          <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
          <p className='text-center text-gray-500 text-xs px-1'>Tienda oficial</p>
      </div>

        </div>
        </Card>
        <Card>
        
        <img src={Teachview} alt="" />
        
        <div className='border border-w-1 -mt-3 mb-3 border-gray-100'></div>
        <div className='flex flex-col'>
          <p className='text-xs text-center'>Teachview</p>
          <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
          <p className='text-center text-gray-500 text-xs px-1'>Tienda oficial</p>
      </div>

        </div>
        </Card>
        <Card>
        
        <img src={Argom} alt="" />
        
        <div className='border border-w-1 -mt-3 mb-3 border-gray-100'></div>
        <div className='flex flex-col'>
          <p className='text-xs text-center'>Argom</p>
          <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
          <p className='text-center text-gray-500 text-xs px-1'>Tienda oficial</p>
      </div>

        </div>
        </Card>
        <Card>
        
        <img src={CoolerMaster} alt="" />
        
        <div className='border border-w-1 -mt-3 mb-3 border-gray-100'></div>
        <div className='flex flex-col'>
          <p className='text-xs text-center'>Cooler Master</p>
          <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
          <p className='text-center text-gray-500 text-xs px-1'>Tienda oficial</p>
      </div>

        </div>
        </Card>
        <Card>
        
        <img src={Biostar} alt="" />
        
        <div className='border border-w-1 -mt-3 mb-3 border-gray-100'></div>
        <div className='flex flex-col'>
          <p className='text-xs text-center'>Biostar</p>
          <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
          <p className='text-center text-gray-500 text-xs px-1'>Tienda oficial</p>
      </div>

        </div>
        </Card>
        <Card>
        
        <img src={AMD} alt="" />
        
        <div className='border border-w-1 -mt-3 mb-3 border-gray-100'></div>
        <div className='flex flex-col'>
          <p className='text-xs text-center'>AMD</p>
          <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
          <p className='text-center text-gray-500 text-xs px-1'>Tienda oficial</p>
      </div>

        </div>
        </Card>
        <Card>
        
        <img src={Deepcool} alt="" />
        
        <div className='border border-w-1 -mt-3 mb-3 border-gray-100'></div>
        <div className='flex flex-col'>
          <p className='text-xs text-center'>Deep cool</p>
          <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
          <p className='text-center text-gray-500 text-xs px-1'>Tienda oficial</p>
      </div>

        </div>
        </Card>
        <Card>
        
        <img src={Kingston} alt="" />
        
        <div className='border border-w-1 -mt-3 mb-3 border-gray-100'></div>
        <div className='flex flex-col'>
          <p className='text-xs text-center'>Kingston</p>
          <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
          <p className='text-center text-gray-500 text-xs px-1'>Tienda oficial</p>
      </div>

        </div>
        </Card>
        <Card>
        
        <img src={Adata} alt="" />
        
        <div className='border border-w-1 -mt-3 mb-3 border-gray-100'></div>
        <div className='flex flex-col'>
          <p className='text-xs text-center'>Adata</p>
          <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
          <p className='text-center text-gray-500 text-xs px-1'>Tienda oficial</p>
      </div>

        </div>
        </Card>
        <Card>
        
        <img src={HiperX} alt="" />
        
        <div className='border border-w-1 -mt-3 mb-3 border-gray-100'></div>
        <div className='flex flex-col'>
          <p className='text-xs text-center'>Hiper X</p>
          <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
          <p className='text-center text-gray-500 text-xs px-1'>Tienda oficial</p>
      </div>

        </div>
        </Card>
        <Card>
        
        <img src={Logitech} alt="" />
        
        <div className='border border-w-1 -mt-3 mb-3 border-gray-100'></div>
        <div className='flex flex-col'>
          <p className='text-xs text-center'>Logitech</p>
          <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
          <p className='text-center text-gray-500 text-xs px-1'>Tienda oficial</p>
      </div>

        </div>
        </Card>
        <Card>
        
        <img src={HHGears} alt="" />
        
        <div className='border border-w-1 -mt-3 mb-3 border-gray-100'></div>
        <div className='flex flex-col'>
          <p className='text-xs text-center'>Hh Gears</p>
          <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
          <p className='text-center text-gray-500 text-xs px-1'>Tienda oficial</p>
      </div>

        </div>
        </Card>


        

       
        </div>

    </div>
    </animated.div>
    )
}
export default Marcas2;