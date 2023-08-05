import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import vector from '../../../assets/img/vector.svg'
import style from './Profile.module.css'



const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <noProfile alt="" src={vector} />
  }


  return (
    isAuthenticated && (
      <div>
        <img className={style.imgProfile} src={user.picture} alt={user.name} />
        <div className={style.onlineIndicator}>.</div>
      </div>
    )
  );
};

export default Profile;