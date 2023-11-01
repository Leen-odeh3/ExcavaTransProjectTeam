import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import Home from "../Pages/Home/Home";
import AboutUs from '../Pages/AboutUs/AboutUs'
import Mechanisms from '../Pages/Mechanisms/Mechanisms'
import Workshops from '../Pages/Workshops/Workshops'
import Contact from '../Pages/Contact/Contact'
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/workshops" element={<Workshops/>} />
          <Route path="/mechanisms" element={<Mechanisms/>} />
          <Route path="/contact" element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;