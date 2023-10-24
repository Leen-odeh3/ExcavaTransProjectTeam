import './Header.scss'

const Navbar = () => {
  const nav = ['Home', 'Mechanisms', 'About Us', 'Workshops', 'Contact Us'];
  
  return (
    <div className="nav-header">
      <ul>
        {nav.map((e, index) => (
          <li key={index} className={`nav-${index}`}>{e}</li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
