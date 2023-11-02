import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "../Layout";
import Home from "../Pages/Home/Home";
import AboutUs from '../Pages/AboutUs/AboutUs'
import Mechanisms from '../Pages/Mechanisms/Mechanisms'
import Workshops from '../Pages/Workshops/Workshops'
import Contact from '../Pages/Contact/Contact'
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";

const Routing = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/mechanisms" element={<Mechanisms />} />
          <Route path="/contact" element={<Contact />} />
     
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default Routing;
