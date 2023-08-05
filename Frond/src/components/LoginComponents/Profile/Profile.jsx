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
        <img className={style.imgProfile} src={user.picture} alt={user.name} />
      </div>
    )
  );
};

export default Profile;