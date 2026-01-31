import Navbar from "../Components/Navbar";
import MyHeadFixedCard from "../Components/my-head-fixed-card";
import BrandWall from "../Components/BrandWalls";
import Testimonials from "../Components/Testimonials";
import "./About.css";
function About() {
  return (
    <>
      <Navbar />
      <div className="about-container mt-4 mb-5">
        <div className="about-left ">
          <MyHeadFixedCard />
        </div>
        <div className="hero">
          <div className="hero-content">
            <div className="hero-top">
              <h1>
                Hi, This Is <span className="accent">Ifeoluwa Smith</span> 👋
              </h1>

              <div className="availability">
                <span className="dot"></span>
                Available For Hire
              </div>
            </div>

            <p className="hero-text">
              I{" "}
              <strong>
                Design and Optimize High-Converting Squarespace Websites
              </strong>{" "}
              for service businesses, creators, and brands that want{" "}
              <strong>Clarity, Credibility, and Consistent growth 🚀</strong>
            </p>

            <div className="hero-stats">
              <div className="stat">
                <h2>6+</h2>
                <p>Year of Experience</p>
              </div>

              <div className="stat">
                <h2>20+</h2>
                <p>Project Completed</p>
              </div>

              <div className="stat">
                <h2>23+</h2>
                <p>Happy Client</p>
              </div>
            </div>
          </div>

          {/* <div className="scroll-indicator">
            <span>SCROLL DOWN</span>
            <div className="circle">
              <i className="bi bi-arrow-down"></i>
            </div>
          </div> */}
          <BrandWall />
          <Testimonials />
        </div>
      </div>
    </>
  );
}

export default About;
