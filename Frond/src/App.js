import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import Products from "./components/Products/Products";
import AboutUs from "./views/AboutUs/AboutUs";
import Contact from "./views/Contact/Contact";
import Chatbot from "react-chatbot-kit";

import Configs from "./components/ChatBot/Configs";
import MessageParser from "./components/ChatBot/MessageParser";
// import ActionProvider from "./components/ChatBot/ActionProvider";

function App () {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
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
};

export default App;