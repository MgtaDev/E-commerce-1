import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { clientes } from '../../redux/actions';

const Miperfil = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    // dispatch(clientes());
  }, []);

  const { user, isLoading } = useAuth0();
  // const [showPassword, setShowPassword] = useState(false);
  // const [buttonSwitch, setButtonSwitch] = useState(false);

  // const usuarios = useSelector((state) => state.Allclients);
  // const currentUser = usuarios && usuarios.find((usuario) => {
  //   return (
  //     usuario.name &&
  //     usuario.correo_electronico &&
  //     usuario.name.toLowerCase() === user.name.toLowerCase() &&
  //     usuario.correo_electronico.toLowerCase() === user.email.toLowerCase()
  //   );
  // });

  // ...

  // const userToEdit = {
  //   imagen: null,
  //   name: `${userInfo.name} ${userInfo.apellido}`,
  //   telefono: userInfo.telefono,
  //   correo_electronico: userInfo.correo_electronico,
  //   direccion: `${userInfo.ciudad}, ${userInfo.provincia}`,
  //   contraseña: userInfo.contraseña,
  // };

  // const SeeIcon = showPassword ? FaEye : FaEye;
  // const SeeSlashIcon = showPassword ? FaEye : FaEyeSlash;

  // const handleToggleShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };
  // console.log(userInfo);

  // const handleChange = (event) => {
  //   const target = event.target;
  //   const name = target.name;
  //   const value = target.value;

  //   setUserInfo({
  //     ...userInfo,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (id) => {
  //   // ...
  // };

  return (
    <div className="h-screen flex max-w-full">
      {/* Columna izquierda */}
      <div className="w-1/3 flex-shrink-0">
        {/* Renderizar contenido aquí */}
      </div>

      {/* Columna derecha */}
      <div className="w-2/3 m-5 flex-shrink-0">
        {/* Renderizar contenido aquí */}
      </div>
    </div>
  );
};

export default Miperfil;
