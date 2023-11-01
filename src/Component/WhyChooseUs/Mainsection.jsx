import "./Mainsection.scss";
import { reasons } from "../../data/Reasons";

const Mainsection = () => {
  return (
    <div className="main-section">
      <div className="info-section">
        <div>
          <span> </span>
          <b>REASONS TO CHOOSE US</b>
          <span> </span>
        </div>

        <p>INDUSTRY LEADER IN CONSTRUCTION EQUIPMENT SUPPLY</p>
      </div>

      <div className="reasons-section">
        {reasons.map((e, index) => (
          <div className="index" key={index}>
            <img src={e.url} alt={e.title} />
            <h3>{e.title}</h3>
            <p>{e.desc}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mainsection;
