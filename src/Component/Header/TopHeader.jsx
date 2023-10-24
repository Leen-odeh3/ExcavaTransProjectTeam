import "./Header.scss";
import { Social } from "../../data/Social";

const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="top-header-place">
        <i className="bi bi-geo-alt-fill"></i>
        1095 Howard Street, San Francisco, USA
      </div>

      <div className="top-header-phone">
        <i className="bi bi-telephone-fill"></i>
        123-456-789 101
      </div>
      <div className="top-header-email">
        <i className="bi bi-envelope-fill"></i>
        info@excava.com
      </div>

      <div className="top-header-links">
        {Social.map((socialLink, index) => (
          <a key={index} href={socialLink.url} target="-blank">
            {socialLink.icons}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TopHeader;
