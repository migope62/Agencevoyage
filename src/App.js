import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Nosvilles from "./pages/Nosvilles";
import Reservation from "./pages/Reservation";
import Connexion from "./pages/Connexion";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/nosvilles" element={<Nosvilles />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/compte" element={<Connexion/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
