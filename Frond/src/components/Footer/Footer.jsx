import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logoBonitaLovelyw.png';
import Facebook from '../../assets/img/facebook.png';
import Twitter from '../../assets/img/gorjeo.png';
import Gmail from '../../assets/img/gmail.png';


function Footer() {
  return (
   <div className='flex justify-between items-center border-gray-300 border-t'>
    <div className='flex items-center'>
      <h1 className='text-xl font-bold '>Enmable</h1>
      <p className='text-sm text-gray-700 px-4'>Tu sitio de compras de preferencia en latinoamerica</p>
    </div>
    <div>
      <p className='text-sm text-gray-700 px-4'>Copyright 2023</p>
    </div>
   </div>
  );
};

export default Footer;