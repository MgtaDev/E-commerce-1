import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import Products from "./components/Products/Products";
import AboutUs from "./views/AboutUs/AboutUs";
import Contact from "./views/Contact/Contact";
import Chatbot from "react-chatbot-kit";
import ProductList from './components/ProducList/ProductList';
import Sidebar from './components/Sidebar/sidebar';


import Configs from "./components/ChatBot/Configs";
import MessageParser from "./components/ChatBot/MessageParser";
// import ActionProvider from "./components/ChatBot/ActionProvider";

function App () {
  return (
    <div className="flex">
      <div className="w-1/5 h-screen bg-gray-100">
        <Sidebar>
          <Link to="/categorias">
            <button>Categorías</button>
          </Link>
        </Sidebar>
      </div>
      <div className="w-4/5">
        <div className="routes-container">
          <Routes>
            <Route exact path="/categorias" element={<ProductList />} />
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/products" element={<Products />} />
            {/* <Route path="/product/:id" element={<ProductDetail />} />
            <Route exact path="/formulario" element={<Formulario />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/reviews" element={<Reviews></Reviews>} />
            <Route path="/createProduct" element={<CreateProduct></CreateProduct>} /> */}
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <div className="chatbot-container">
          <Chatbot
            config={Configs}
            messageParser={MessageParser}
            // actionProvider={ActionProvider}
          />
        </div>
      </div>
    </div>
  );
};

export default App;