import React from 'react';

import Sillas from '../../assets/img/img173.jpg'
import Mouses from '../../assets/img/img226.jpg'
import Teclados from '../../assets/img/img190.jpg'
import Cooling from '../../assets/img/img57.jpg'
import Consolas from '../../assets/img/img20.jpg'





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
const Proveedores = () => {


return (
    <div className={style.Proveedores}>
      <div className='items-center flex justify-between'>
      <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500'/>
        <h1 className='text-xl font-bold px-1'>Categorias</h1>
      </div>
      <div>
        <Link to={'/categorias'}>
        <span className='mb-1 px-4 text-sm text-blue-900'>Ver mas</span>
        </Link>
      </div>
      </div>
     

        <div className={style.flex}>

        <Card>
        
        <img src={Mouses} alt="" />
        
        <div className='flex flex-col'>
          <p className='text-xs mt-2 text-gray-500 text-center'>Mouses</p>
         

        </div>
        </Card>

        <Card>
        
        <img src={Consolas} alt="" />
        
        <div className='flex flex-col'>
          <p className='text-xs mt-2 text-gray-500 text-center'>Sillas</p>
         

        </div>
        </Card>

        <Card>
        
        <img src={Sillas} alt="" />
        
        <div className='flex flex-col'>
          <p className='text-xs mt-2 text-gray-500 text-center'>Sillas</p>
         

        </div>
        </Card>

        <Card>
        
        <img src={Cooling} alt="" />
        
        <div className='flex flex-col'>
          <p className='text-xs mt-2 text-gray-500 text-center'>Sillas</p>
         

        </div>
        </Card>

        <Card>
        
        <img src={Teclados} alt="" />
        
        <div className='flex flex-col'>
          <p className='text-xs mt-2 text-gray-500 text-center'>Consolass</p>
         

        </div>
        </Card>

        

       
        </div>

    </div>
    )
}
export default Proveedores;