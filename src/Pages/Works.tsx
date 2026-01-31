import Navbar from "../Components/Navbar";
import MyHeadFixedCard from "../Components/my-head-fixed-card";
import project1 from "../assets/Project1_Ori (1).png";
import project2 from "../assets/Project1_Ori (2).png";
import project3 from "../assets/project-3.png";
import "./About.css";
import "./Works.css";
function Works() {
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
                Check Out My Latest
                <span className="accent"> Projects</span> 👋
              </h1>
            </div>

            <p className="works-hero-text">
              A collection of website improvements, redesigns, and optimizations
              built to help businesses attract the right visitors and convert
              them into customers.
            </p>
          </div>

          <div className="projects-container">
            <div className="project-card">
              <div className="image-container">
                <img src={project1} alt="Project 1" />
              </div>

              <div className="project-info">
                <h3>Tails of the City – Pet Grooming Business </h3>
                <p>
                  <a
                    href="https://www.tailsofthecitydogsalon.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    Visit Site
                  </a>
                </p>
              </div>
              <p className="text-black-50 fw-semibold">
                Pet Services | Local Business Website | UI UX Design
              </p>
            </div>
            <div className="project-card">
              <div className="image-container">
                <img src={project2} alt="Project 2" />
              </div>
              <div className="project-info">
                <h3>Ultimate Property Investments</h3>
                <p>
                  <a
                    href="https://ultimatepropertyinvestments.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    Visit Site
                  </a>
                </p>
              </div>
              <p className="text-black-50 fw-semibold">
                Real Estate | Corporate Website | UI UX Design
              </p>
            </div>
            <div className="project-card">
              <div className="image-container">
                <img src={project3} alt="Project 3" />
              </div>
              <div className="project-info">
                <h3>FlowArch - Architecture Service Website</h3>
                <p>Visit Site</p>
              </div>
              <p className="text-black-50 fw-semibold">
                UI UX Design | Development
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Works;
