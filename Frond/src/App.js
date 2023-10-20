import React, { useEffect } from "react";
import { FaWhatsapp } from 'react-icons/fa';
import './App.css';
import {Route, Routes, useLocation, useNavigate } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import Products from "./components/Products/Products";
import AboutUs from "./views/AboutUs/AboutUs";
import Contact from "./views/Contact/Contact";
import FAQs from "./views/FAQs/FAQs"
import Marcas2 from "./NuestrasMarcas/marcas2";
import Catalogo from "./views/Catalogo/Catalogo.jsx";
import Proveedores2 from "./components/Proveedores/Categorias";
import Form from "./views/Form/Form";
import Profile from "./views/Profile/MiPerfil.jsx";
import Detail from "./views/Detail/Detail";
import Favoritos from "./views/Favoritos/Favoritos"
import Dashboard2 from "./views/Dashboard2/dashboard";
import axios from "axios"
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AddToCart from "./views/Cart/AddToCart";
import MisCompras from './views/Mis compras/misCompras.jsx'
import Carrito from "./views/Cart/Carrito";
import PagoExitoso from "./views/PagoExitoso/PagoExitoso.jsx"
import { useAuth0 } from "@auth0/auth0-react";
import { clientes, productosSinPag, syncFavoritesWithAPI } from "./redux/actions";
import { useDispatch, useSelector} from "react-redux";
import WhatsappIcon from './assets/img/social.png'
import { useParams } from "react-router-dom"; 
import Proveedores from "./components/Proveedores/Proveedores";
axios.defaults.baseURL = "https://e-commerce-1-production.up.railway.app"
// axios.defaults.baseURL = "http://localhost:3001"


function App () {
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user, isAuthenticated, isLoading} = useAuth0()
  useEffect(() => {
    dispatch(clientes());
  }, []);
  const usuarios = useSelector((state) => state.Allclients);
  const currentUser = usuarios.find(
    (usuario) =>
      !isLoading &&
      user &&
      usuario.name.toLowerCase() === user.name.toLowerCase() &&
      usuario.correo_electronico.toLowerCase() === user.email.toLowerCase()
  );

  const isCurrentUserValid = currentUser && currentUser !== null;
  
  useEffect(()=>{
    dispatch(productosSinPag())
  }, [])

  useEffect(() => {
    if (isAuthenticated && isCurrentUserValid) {
      dispatch(syncFavoritesWithAPI(user.email));
    }
  }, [user, isCurrentUserValid]);
  const params = useParams();

    const sendWhatsappMessage = () => {
      window.open("https://wa.me/584121968978", "_blank")
    };

  // Esto aun no esta listo del todo, no tocar.
  return (
    <div>
      {
            location.pathname !== "" ? <Navbar /> : null
         }
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/categorias" element={<Proveedores />} />
        <Route path="/categorias2" element={<Proveedores2 />} />
        <Route path="/marcas2" element={<Marcas2 />} />        
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/form" element={<Form />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/itemadded/:id" element={<AddToCart />} />
        <Route path="/carrito/:id" element={<Carrito />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/perfil" element = {<Profile/>}/>
        <Route path="confirmedpayment" element={<PagoExitoso/>}/>      
        <Route path="/miscompras" element = {<MisCompras/>}/>
        <Route path="/dashboard" element = {<Dashboard2/>}/>
        



      </Routes>
      {
            location.pathname !== "/dashboard2" 
            ? 
            <div className="flex fixed bottom-0 w-20 right-0 m-2 p-4 rounded-full cursor-pointer">
            <img onClick={()=> sendWhatsappMessage()} className="w-20 hover:transform hover:scale-110" src={WhatsappIcon} alt=""/>
            </div> 
            : ''
         }
      
      {
            location.pathname !== "/" ? <Footer /> : null
         }
    </div>
  );
}

export default App;