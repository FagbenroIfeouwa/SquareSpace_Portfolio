import myHeadshot from "../assets/my-headshot.jpg";
import "./my-head-fixed-card.css";
import { Link } from "react-router-dom";

function MyHeadFixedCard() {
  return (
    <>
      <img src={myHeadshot} alt="My Headshot" className="my-image rounded-3" />
      <div className="profile-card mt-4">
        <h2 className="profile-name">
          Ifeoluwa Smith <span className="wave">👋</span>
        </h2>
        <h4 className="profile-title">Squarespace Developer</h4>

        <p className="profile-bio">
          I{" "}
          <strong>
            Design and Optimize High-Converting Squarespace Websites
          </strong>{" "}
          for service businesses, creators, and brands that want{" "}
          <strong>Clarity, Credibility, and Consistent growth 🚀</strong>
        </p>

        <div className="profile-actions">
          <Link to="/contact">
            <button className="btn-primary">
              <i className="bi bi-envelope"></i>
              Contact Me
            </button>
          </Link>

          <Link to="/contact">
            <button className="btn-outline">
              <i className="bi bi-copy"></i>
              Copy Email
            </button>
          </Link>
        </div>

        <div className="profile-socials">
          <a href="#">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#">
            <i className="bi bi-pinterest"></i>
          </a>
          <a href="#">
            <i className="bi bi-github"></i>
          </a>
          <a href="#">
            <i className="bi bi-youtube"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default MyHeadFixedCard;
