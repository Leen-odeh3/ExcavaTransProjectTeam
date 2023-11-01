import { NavLink } from 'react-router-dom';
import './Header.scss'

// eslint-disable-next-line react/prop-types
const Navbar = ({open}) => {
  const nav = ['Home', 'Mechanisms', 'About', 'Workshops', 'Contact'];
  
 
  
  return (
    <div className="nav-header" style={{left: open && "0"}}>
      <ul>
        {nav.map((e, index) => (
          <li key={index} className={`nav-${index} nav`}><NavLink to={`/${e}`}> {e}</NavLink></li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
