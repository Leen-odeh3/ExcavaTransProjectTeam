import TopHeader from "./TopHeader"
import './Header.scss'
import MiddleHeader from "./MiddleHeader"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <header className="main-header">
      <TopHeader/>
      <MiddleHeader/>
      <Navbar/>
    </header>
  )
}

export default Header
