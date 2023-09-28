import React from 'react';
import proveedor1 from '../../assets/img/proveedor1.png'
import proveedor2 from '../../assets/img/proveedor2.png'
import proveedor3 from '../../assets/img/proveedor3.png'
import style from './Proveedores.module.css'
import styled from 'styled-components'
import { FaCheckCircle } from 'react-icons/fa';
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
const Proveedores = () => {


return (
    <div className={style.Proveedores}>
      <div className='items-center flex justify-between'>
      <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
        <h1 className='text-xl font-bold px-1'>Marca oficiales</h1>
      </div>
      <div>
        <span className='mb-1 px-4 text-sm text-blue-900'>Ver mas</span>
      </div>
      </div>
     

        <div className={style.flex}>

        <Card>
        
        <img src={proveedor1} alt="" />
        
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
        
        <img src={proveedor1} alt="" />
        
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
        
        <img src={proveedor1} alt="" />
        
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
        
        <img src={proveedor1} alt="" />
        
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
        
        <img src={proveedor1} alt="" />
        
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
export default Proveedores;