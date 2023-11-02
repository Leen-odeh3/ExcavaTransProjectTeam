import { useNavigate } from "react-router-dom";
import './Requirements.scss'

const Requirements = () => {

    const navigate =useNavigate();

  return (
    <div
      className="mainSection"
      style={{
        height: "600px",
        padding: "100px",
        textAlign: "center",
        width: "100%",
        margin: "auto",
      }}
    >
      <h3 style={{ letterSpacing: "1px", marginBottom: "35px",fontSize:"25px" }}>
        DO YOU NEED HEAVY MACHINERY?  WE HAVE THE SOLUTION
      </h3>
      <p style={{ color: "#6c757d", fontSize: "20px", marginBottom: "60px" }}>
        We have long since decided to be a driving force in combatting climate
        change and with our commitment to Science Based Targets, we accelerate
        the transformation urgently needed in our industry. To achieve our goal
        of net-zero greenhouse gas emissions by 2040, we work closely with
        municipalities, cities, suppliers, customers and other partners.
      </p>
      <button
        style={{
          width: "240px",
          height: "60px",
          border: "none",
          borderRadius: "5px",
          color: "white",
          backgroundColor: "#de9a4f",
          cursor: "pointer",
          fontSize: "20px",
          fontWeight: "700",
          fontFamily:"cursive",
          marginBottom:"30px",
        }}
        onClick={()=>navigate("/contact")}
      >
        CONTACT US
      </button>
    </div>
  );
};

export default Requirements;
