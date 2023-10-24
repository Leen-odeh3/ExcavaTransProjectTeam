import { Outlet } from "react-router-dom";
import Header from "../Component/Header/Header";
import Footer from '../Component/Footer/Footer'

const index = () => {
  return (
    <div>
      <div>
      <Header />
      <Outlet />
      <Footer/>
    </div>
    </div>
  )
}

export default index