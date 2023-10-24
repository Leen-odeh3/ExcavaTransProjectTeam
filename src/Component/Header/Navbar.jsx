import "./Header.scss";

// eslint-disable-next-line react/prop-types
const Navbar = ({ open }) => {
  const nav = ["Home", "Mechanisms", "About Us", "Workshops", "Contact Us"];

  return (
    <div className="nav-header" style={{ left: open && "0" }}>
      <ul>
        {nav.map((e, index) => (
          <li key={index} className={`nav-${index} nav`}>
            {e}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
