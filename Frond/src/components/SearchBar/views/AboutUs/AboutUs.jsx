import { useState } from 'react';
import Logo from '../../assets/img/MgtaTechlogo.png';
import icon3 from '../../assets/img/icon3.svg';
import icon2 from '../../assets/img/icon2.svg';
import icon1 from '../../assets/img/icon1.svg';
import 'tailwindcss/tailwind.css';


const AboutUs = () => {
  return (
    <>

      <div className="grid grid-cols-14 grid-rows-20 gap-0 w-screen ml-20 pr-40 mb-40 mt-20">
        <div className="col-start-2 col-end-6 row-start-0 row-end-2 font-bold text-3xl flex justify-center items-center ">Quienes somos?</div>

        <div className="col-start-1 col-end-6 row-start-2 row-end-6 flex justify-center my-4 items-center ">
          <img src={Logo} alt="logobonitaAndLovely" className="h-40 rounded-full" />
        </div>

        <div className="col-start-0 col-end-6 row-start-6 row-end-10">
        Texto debajo de logo Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        Texto debajo de logo Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        Texto debajo de logo Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        Texto debajo de logo Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        Texto debajo de logo Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </div>

        <div className="col-start-0 col-end-6 row-start-16 row-end-20">
          subtexto de la columna izquierda Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </div>
        
        

      </div>
     
    </>
  );
};

export default AboutUs;
