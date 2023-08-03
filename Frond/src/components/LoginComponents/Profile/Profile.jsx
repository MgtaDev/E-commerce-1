import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import vector from '../../../assets/img/vector.svg'
import style from './Profile.module.css'
import LogoutButton from '../Logout'
import { useState } from 'react'
import off from '../../../assets/img/off.png'



const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };


  if (isLoading) {
    return <noProfile alt="" src={vector} />
  }

  


  return (
    isAuthenticated && (
      <div>
        <img className={style.imgProfile} src={user.picture} alt={user.name} onClick={handleToggleMenu}
       />

        {isOpen && (
          
          <div className="absolute top-12 right-0 z-20 w-48 bg-white border rounded-md shadow-lg mt-20">
          <img className={style.perfilDropdown} src={user.picture} alt={user.name} onClick={handleToggleMenu}/>
          
          <a href="/perfil" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Mi perfil
          </a>
          <a href="/compras" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Mis compras
          </a>
          <a href="/carrito" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Mi carrito
          </a>
          <a href="/ajustes" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Ajustes
          </a>
          <a href="#logout" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
          <div className="flex">
          <img className={style.off} src={off} alt="" />
          <LogoutButton/>
          </div>
         
          </a>
        </div>
        )}
      </div>
    )
  );
};

export default Profile;