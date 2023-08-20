import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

const PagoExitoso = () => {
  const navigate = useNavigate()
  const [emailSent, setEmailSent] = useState(false);

  const handleButtonClick = () => {
    // Lógica para enviar el correo electrónico con los detalles de la compra
    // utilizando la librería emailjs-com
    emailjs.send('default_service', 'template_id', {
      to_email: 'contacto@tudireccion.com',
      message: 'Detalles de la compra',
    }, 'user_id')
      .then(() => {
        setEmailSent(true);
      })
      .catch((error) => {
        console.log('Ha ocurrido un error al enviar el correo electrónico:', error);
      });
      navigate('/catalogo')

  };
  
  return (
    <div className="bg-gray-100 py-40">
      <div className="flex items-center justify-center h-full">
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg px-6 py-4">
          <h2 className="text-3xl font-extrabold mb-4">Pago exitoso</h2>
          <p className="text-lg font-medium mb-6">Tu compra ha sido procesada con éxito.</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
            onClick={handleButtonClick}
          >
            OK
          </button>
          {emailSent && <p className="text-green-500 font-medium mt-4">Se ha enviado un correo electrónico con los detalles de la compra.</p>}
        </div>
      </div>
    </div>
  );
};

export default PagoExitoso;