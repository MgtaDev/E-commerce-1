import React from 'react';
import Sillas from '../../assets/img/img173.jpg';
import Mouses from '../../assets/img/img226.jpg';
import Teclados from '../../assets/img/img190.jpg';
import Cooling from '../../assets/img/img57.jpg';
import Audifonos from '../../assets/img/AudifonosImg.png';
import style from './Proveedores.module.css';
import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { productFilter } from '../../redux/actions';

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
    cursor: pointer;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }
`;

const Proveedores = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filterByCategories = (event) => {
    const categoryToFilter = event.currentTarget.getAttribute('data-categoria');
    const categoriaId = event.currentTarget.id;
    console.log(categoriaId);
    console.log(categoryToFilter);
    switch (categoryToFilter) {
      case 'Perifericos e impresoras':
        navigate('/catalogo');
        dispatch(productFilter({categoriaId: [1]}));
        break;
      case 'Laptop':
        navigate('/catalogo');
        dispatch(productFilter({categoriaId: [2]}));
        break;
      case 'Audifonos':
        navigate('/catalogo');
        dispatch(productFilter({categoriaId: [3]}));
        break;
      case 'Procesadores y CPU':
        navigate('/catalogo');
        dispatch(productFilter({categoriaId: [4]}));
        break;
      case 'Monitores':
        navigate('/catalogo');
        dispatch(productFilter({categoriaId: [5]}));
        break;
      case 'Mobiliario y Sillas':
        navigate('/catalogo');
        dispatch(productFilter({categoriaId: [6]}));
        break;
      case 'Fuentes, tarjetas y reguladores':
        navigate('/catalogo');
        dispatch(productFilter({categoriaId: [7]}));
        break;
      case 'Seguridad':
        navigate('/catalogo');
        dispatch(productFilter({categoriaId: [8]}));
        break;
      case 'Teclados':
        navigate('/catalogo');
        dispatch(productFilter({categoriaId: [9]}));
        break;
      case 'Accesorios':
        navigate('/catalogo');
        dispatch(productFilter({categoriaId: [10]}));
        break;
      case 'Consolas':
        navigate('/catalogo');
        dispatch(productFilter({categoriaId: [11]}));
        break;
      default:
        break;
    }
  };

  return (
    <div className={style.Proveedores}>
      <div className='items-center flex justify-between'>
        <div className='flex items-center px-3'>
          <FaCheckCircle className='text-green-500' />
          <h1 className='text-xl font-bold px-1'>Categorias</h1>
        </div>
        <div>
          <Link to={'/categorias'}>
            <span className='mb-1 px-4 text-sm text-blue-900'>Ver mas</span>
          </Link>
        </div>
      </div>

      <div className={style.flex}>
        <Card onClick={filterByCategories} id='1' data-categoria='Perifericos e impresoras'>
          <img src={Mouses} alt='Mouses' />
          <div className='flex flex-col'>
            <p className='text-xs mt-2 text-gray-500 text-center'>Perifericos e impresoras</p>
          </div>
        </Card>

        <Card onClick={filterByCategories} id='2' data-categoria='Audifonos'>
          <img src={Audifonos} alt='Sillas' />
          <div className='flex flex-col'>
            <p className='text-xs mt-2 text-gray-500 text-center'>Audifonos</p>
          </div>
        </Card>

        <Card onClick={filterByCategories} id='3' data-categoria='Mobiliario y Sillas'>
          <img src={Sillas} alt='Sillas' />
          <div className='flex flex-col'>
            <p className='text-xs mt-2 text-gray-500 text-center'>Sillas</p>
          </div>
        </Card>

        <Card onClick={filterByCategories} id='4' data-categoria='Procesadores y CPU'>
          <img src={Cooling} alt='Sillas' />
          <div className='flex flex-col'>
            <p className='text-xs mt-2 text-gray-500 text-center'>Procesadores y CPU</p>
          </div>
        </Card>

        <Card onClick={filterByCategories} id='5' data-categoria='Teclados'>
          <img src={Teclados} alt='Consolas' />
          <div className='flex flex-col'>
            <p className='text-xs mt-2 text-gray-500 text-center'>Teclados</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Proveedores;