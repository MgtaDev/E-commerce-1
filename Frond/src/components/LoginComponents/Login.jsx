import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated, user, isLoading } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect();
  
    try {
      const userLogin = {
        name: user.name,
        correo_electronico: user.email
      }
        const response = axios.post('/cliente', userLogin);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};
  if (isLoading) {
    return (
      <div>
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <>
      {isAuthenticated ? (
        <div></div>
      ) : (
        <button className="mr-2" onClick={handleLogin}>
          <strong>Iniciar Sesión</strong>
        </button>
      )}
    </>
  );
};

export default LoginButton;