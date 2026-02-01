import "./Welcome_Interface.css";
import MyHeadFixedCard from "./my-head-fixed-card";
import project1 from "../assets/Project1_Ori (1).png";
import project2 from "../assets/Project1_Ori (2).png";
import Squarespace1 from "../assets/squarepaceIcon.png";
import Squarespace2 from "../assets/squarepaceIcon2.png";
import CSS from "../assets/css.png";
import Responsive from "../assets/responsive.png";
import SEO from "../assets/Seo.webp";
import HTML from "../assets/html.webp";
import UIUX from "../assets/ui-ux.svg";
import Mobile from "../assets/app.svg";
import Product from "../assets/prd-design.svg";
import Branding from "../assets/branding.svg";
import reactLogo from "../assets/react.svg";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Squarespace Website Design",
    icon: UIUX
  },
  {
    title: "Squarespace Redesign & Improvements",
    icon: Mobile
  },
  {
    title: "SEO & Performance Optimization",
    icon: Product
  },
  {
    title: "Squarespace Branding",
    icon: Branding
  }
];

const expertTools = [
  { name: " Square Space", icon: Squarespace1 },
  { name: " Square Space 7.1", icon: Squarespace2 },
  { name: " Responsive Design", icon: Responsive },
  { name: " SEO", icon: SEO },
  { name: " HTML 5", icon: HTML },
  { name: " CSS", icon: CSS }
];

function WelcomeInterface() {
  return (
    <>
      <div className="portfolio-layout mt-4 mb-5">
        <div className="left-card">
          <MyHeadFixedCard />
        </div>

        <div className="center-top">
          <h2 className="fs-4 fw-bold">Experience & Tools</h2>
          <div className="experience-list">
            <div className="experience-item">
              <span className="year">2021–Present</span>

              <div className="logo">
                <img src={Squarespace1} alt="Adobe" />
              </div>

              <div className="details">
                <h4>SquareSpace</h4>
                <p>Senior Developer</p>
              </div>
            </div>

            <div className="experience-item">
              <span className="year">2021–Present</span>

              <div className="logo">
                <img src={SEO} alt="Adobe" />
              </div>

              <div className="details">
                <h4>SEO Specialist</h4>
                <p>Senior Specialist</p>
              </div>
            </div>

            <div className="experience-item">
              <span className="year">2021–Present</span>

              <div className="logo">
                <img src={reactLogo} alt="React" />
              </div>

              <div className="details">
                <h4>React</h4>
                <p>Senior Developer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="center-bottom">
          <h1 className="fs-4 fw-bold">My Expert Area</h1>
          <div className="row g-4 mt-1">
            {expertTools.map((tool, index) => (
              <div className="col-6 col-md-4" key={index}>
                <div className="expert-card text-center">
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="expert-icon"
                  />
                </div>
                <p className="mt-1 mb-0 fw-bold fs-6 text-center">
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="right-card">
          <h1 className="fs-4 fw-bold d-inline">Recent Projects</h1>
          <Link to="/works" className="text-decoration-none">
            <span className="fs-6 fw-medium ms-5 border-bottom my-color">
              All Projects<i className="bi bi-arrow-right ms-2 my-color"></i>
            </span>
          </Link>
          <div className="d-flex flex-column mt-3">
            <div className="image-wrapper">
              <img src={project1} alt="" />
            </div>

            <div className="image-wrapper mt-4">
              <img src={project2} alt="" />
            </div>
          </div>
        </div>

        <div className="last-left-card">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold mb-0 fs-4">Services I Offer</h2>

            <Link to="/services" className="text-decoration-none">
              <span className="services-link">See All Services →</span>
            </Link>
          </div>
          {/* Cards */}
          <div className="services row g-4">
            {services.map((service, index) => (
              <div
                className="col-12 col-sm-6 col-lg-3 service-card-container"
                key={index}
              >
                <div className="service-card text-center">
                  <div className="service-icon-wrapper">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="service-icon"
                    />
                  </div>
                  <p className="service-title">{service.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="last-right-card">
          <div className="hero-wrapper">
            {/* Badge */}
            <span className="hero-badge">
              Available for Squarespace Projects 🎨 Available For Hire 🚀
            </span>

            {/* Heading */}
            <h1 className="hero-title mt-4">
              Let&apos;s <span className="wave">👋</span>
              <br />
              Work Together
            </h1>

            {/* CTA */}
            <Link to="/contact" className="hero-link mt-3">
              Let&apos;s Talk →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default WelcomeInterface;
