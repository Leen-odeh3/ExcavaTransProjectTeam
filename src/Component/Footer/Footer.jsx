import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section-one">
        <div className="footer-info">
          <p className="sub">Subscribe to Our Newsletter</p>
          <p style={{color:"#ADADAD"}}>
            Want to stay up to date on our work and latest news? Subscribe to
            our newsletters
          </p>
        </div>

        <form>
          <div className="form">
            <input type="email" placeholder="Email" />
            <button>Subscibe</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Footer;
