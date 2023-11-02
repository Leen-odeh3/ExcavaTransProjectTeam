import "./Footer.scss";

const Footer = () => {
  const about = ["Our Company", "Our Services", "Latest News", "Contact Us"];
  const shop = ["Online Shop", "Inventory", "FAQs", "Featured Product"];
  const follow = ["Twitter", "Behance", "Facebook", "Linkedin"];
  const contact = [
    "info@excava.com",
    "1095 Howard Street, San Francisco, USA",
    "(+88) 1900 888 666",
    "Need I help? Talk to an Expert"
  ];

  return (
    <div className="footer">
      <div className="footer-section-one">
        <div className="footer-info">
          <p className="sub">Subscribe to Our Newsletter</p>
          <p style={{ color: "#ADADAD" }}>
            Want to stay up to date on our work and latest news? Subscribe to
            our newsletters
          </p>
        </div>

        <form>
          <div className="form">
            <input type="email" placeholder="Email" />
            <button>Subscribe</button> {/* Fixed typo in button text */}
          </div>
        </form>
      </div>
      <div className="footer-section-links">
        <div className="about">
          <h3>About Us</h3>
          <span></span>
          {about.map((e, index) => (
            <a key={index} href="#">{e}</a>
          ))}
        </div>
        <div className="shop">
          <h3>Our Shop</h3>
          <span></span>
          {shop.map((e, index) => (
            <a key={index} href="#">{e}</a>
          ))}
        </div>
        <div className="follow">
          <h3>Follow Us</h3>
          <span></span>
          {follow.map((e, index) => (
            <a key={index} href="#">{e}</a>
          ))}
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <span></span>
          {contact.map((e, index) => (
            <a key={index} href="#">{e}</a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
