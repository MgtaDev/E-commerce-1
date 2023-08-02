import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import Products from "./components/Products/Products";
import AboutUs from "./views/AboutUs/AboutUs";
import Contact from "./views/Contact/Contact";
import Chatbot from "react-chatbot-kit";
import Detail from "./views/Detail/Detail";
import Configs from "./components/ChatBot/Configs";
import MessageParser from "./components/ChatBot/MessageParser";
// import ActionProvider from "./components/ChatBot/ActionProvider";

function App() {
  return (
    <div className="font-poppins">
      <div className="min-h-screen bg-gray-100">
       
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
      </div>
      <div className="fixed bottom-4 right-4">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <Chatbot
            config={Configs}
            messageParser={MessageParser}
            // actionProvider={ActionProvider}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
