import React from 'react';

import Marca1 from '../assets/img/img173.jpg'
import Marca2 from '../assets/img/img173.jpg'
import Marca3 from '../assets/img/img173.jpg'
import Marca4 from '../assets/img/img173.jpg'
import Marca5 from '../assets/img/img173.jpg'



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
const Marcas = () => {


return (
    <div className={style.Proveedores}>
      <div className='items-center flex justify-between'>
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
        
        <img src={Marca1} alt="" />
        
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
        
        <img src={Marca2} alt="" />
        
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
        
        <img src={Marca3} alt="" />
        
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
        
        <img src={Marca4} alt="" />
        
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
        
        <img src={Marca5} alt="" />
        
        <div className='border border-w-1 -mt-3 mb-3 border-gray-100'></div>
        <div className='flex flex-col'>
          <p className='text-xs text-center'>Blue Makeup</p>
          <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
          <p className='text-center text-gray-500 text-xs px-1'>Tienda oficial</p>
      </div>

        </div>
        </Card>

        

       
        </div>

    </div>
    )
}
export default Marcas;