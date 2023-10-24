import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import Home from "../Pages/Home/Home";
import AboutUs from '../Pages/AboutUs/AboutUs'


const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs/>} />
         


        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;