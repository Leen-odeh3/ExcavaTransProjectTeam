import "./Header.scss";

const MiddleHeader = () => {
  return (
    <div className="middle-header">
      <div className="logo">
        <b>Excava</b>
      </div>
      <div className="search-main">
        <input type="text" placeholder="Search..." />
        <i className="bi bi-search"></i>
      </div>
      <div className="icons-middle">
        <i className="bi bi-cart2"></i>
        <i className="bi bi-person"></i>
      </div>
    </div>
  );
};

export default MiddleHeader;
