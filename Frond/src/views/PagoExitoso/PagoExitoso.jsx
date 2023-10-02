import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { clientes } from '../../redux/actions';


const PagoExitoso = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [emailSent, setEmailSent] = useState(false);
  const { user } = useAuth0();

  useEffect (
    () => {
      dispatch(clientes())
    }
  ,[]);

  const usuarios = useSelector((state)=> state.Allclients);
  const currentUser = usuarios?.find((usuario) => {
    return usuario?.name.toLowerCase() === user?.name.toLowerCase() && usuario?.correo_electronico.toLowerCase() === user.email.toLowerCase();
  });



  const handleButtonClick = () => {

    const currentDate = new Date(); // Obtén la fecha y hora actual
    const formattedDate = `${currentDate.toLocaleDateString()} a las ${currentDate.toLocaleTimeString()}`; // Formatea la fecha y hora en una cadena legible para el usuario
    const message = `
      Gracias por realizar tu compra con bonita and love!

      Detalles de tu compra:
      Usuario: ${currentUser?.name}
      Email: ${currentUser?.correo_electronico}
      Fecha: ${formattedDate}
  
      Productos comprados:
  
      ¡Gracias por tu escojernos!
    `;
    // Lógica para enviar el correo electrónico con los detalles de la compra
    // utilizando la librería emailjs-com
    emailjs.send('service_j9jlamg', 'template_7hdwwc9', {name: currentUser.name,  to_email: currentUser.correo_electronico ,message: message, }, '9yN7zM_SZvzvGp-oz')
      .then(() => {
        setEmailSent(true);
        console.log(`     
          Usuario: ${currentUser.name}
          Email: ${currentUser.correo_electronico}
          Fecha: ${formattedDate}`);
      })
      .catch((error) => {
        console.log('Ha ocurrido un error al enviar el correo electrónico:', error);
      });
    navigate('/catalogo');
  };
  
  return (
    <div className="bg-gray-100 py-40">
      <div className="flex items-center justify-center h-full">
        <div className="bg-white justify-center border border-gray-300 rounded-lg shadow-lg px-6 py-4">
          <h2 className="text-3xl font-bold text-center mb-4">Pago exitoso</h2>
          <p className="text-lg font-medium mb-6">Tu compra ha sido procesada con éxito.</p>
          <div className='flex justify-center'>
          <button
            className="bg-blue-500 justify-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
            onClick={handleButtonClick}>
            OK
          </button>
          </div>
          {emailSent && <p className="text-green-500 font-medium mt-4">Se ha enviado un correo electrónico con los detalles de la compra.</p>}
        </div>
      </div>
    </div>
  );
};

export default PagoExitoso;