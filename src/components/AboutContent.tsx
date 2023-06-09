import { Link } from "react-router-dom";
import "./AboutContentStyles.css";

import react1 from "../assets/react1.jpg";
import react2 from "../assets/react2.webp";

function AboutContent() {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I</h1>
        <p>
          Hi, i'm a passionate full stack developer with a creative eye for
          design and a strong focus on delivering elegant and intuitive
          interfaces. Excited to collaborate on new projects!
        </p>
        <div className="btn-align">
          <Link to="/contact">
            <button className="btn">contact</button>
          </Link>
          <a href="https://drive.google.com/file/d/1hAWSiMTcCJAjQ2uqDdhqt04REdgcbXxz/view?usp=sharing" download  className="btn btn-light">
            Resume
          </a>
        </div>
      </div>
      <div className="right">
        <div className="image-container">
          <div className="img-stack top">
            <img src={react1} alt="" />
          </div>
          <div className="img-stack bottom">
            <img src={react2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
