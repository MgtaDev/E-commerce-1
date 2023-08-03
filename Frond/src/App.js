import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import Products from "./components/Products/Products";
import AboutUs from "./views/AboutUs/AboutUs";
import Contact from "./views/Contact/Contact";
import DevTeam from './views/DevTeam/devTeam.jsx'
import FAQs from "./views/FAQs/FAQs"
import Catalogo from "./views/Catalogo/Catalogo.jsx";
import Chatbot from "react-chatbot-kit";
import Form from "./views/Form/Form";
import Configs from "./components/ChatBot/Configs";
import MessageParser from "./components/ChatBot/MessageParser";

import Detail from "../src/views/Detail/Detail";

import Dashboard from "./components/Dashboard/Dashboard";

// import ActionProvider from "./components/ChatBot/ActionProvider";



function App () {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/devTeam" element={<DevTeam />} />
        <Route path="/form" element={<Form />} />

        <Route path="/detail/:id" element={<Detail />} />
=======
        <Route path="/dashboard" element = {<Dashboard/>}/>

      </Routes>
      <div className="chatbot-container">
        <Chatbot
          config={Configs}
          messageParser={MessageParser}
          // actionProvider={ActionProvider}
        />
      </div>
    </div>
  );
}

export default App;