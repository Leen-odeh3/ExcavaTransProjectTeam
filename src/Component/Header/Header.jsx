import TopHeader from "./TopHeader"
import './Header.scss'
import MiddleHeader from "./MiddleHeader"

const Header = () => {
  return (
    <header className="main-header">
      <TopHeader/>
      <MiddleHeader/>
    </header>
  )
}

export default Header
