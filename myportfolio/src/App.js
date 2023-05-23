import React from 'react';
import './App.css'
import { Footer } from "./components/Footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import Header from './components/header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className='contenedor'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mi" element={<About />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
