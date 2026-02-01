import Navbar from "../Components/Navbar";
import MyHeadFixedCard from "../Components/my-head-fixed-card";
import "./About.css";
import "./Services.css";
import BrandWall from "../Components/BrandWalls";
import Testimonials from "../Components/Testimonials";
import FAQ from "../Components/FAQs";
import webDev from "../assets/web-development.svg";
import UIUX from "../assets/ui-ux.svg";
import productDes from "../assets/prd-design.svg";
import appSvg from "../assets/app.svg";
import branding from "../assets/branding.svg";

function Services() {
  return (
    <>
      <Navbar />
      <div className="about-container mt-4 mb-5">
        <div className="about-left">
          <MyHeadFixedCard />
        </div>
        <div className="hero">
          <div className="hero-content">
            <div className="hero-top">
              <h1>
                Services I <span className="accent">Offer</span> 👋
              </h1>

              <div className="availability">
                <span className="dot"></span>
                Available For Hire
              </div>
            </div>

            <p className="hero-text mt-0">
              I{" "}
              <strong>
                Help Service Businesses, Creators, and Brands Design, Improve,
                and Optimize Squarespace Websites
              </strong>{" "}
              that are{" "}
              <strong>Clear, Credible, and Built to Drive Results.</strong>
            </p>
          </div>

          <section className="services">
            <div className="services-grid">
              <div className="service-card">
                <div className="icon-box">
                  <img src={webDev} alt="UI UX" />
                </div>
                <h3>Squarespace Website Design</h3>
              </div>

              <div className="service-card">
                <div className="icon-box">
                  <img src={UIUX} alt="Mobile App" />
                </div>
                <h3>Squarespace Website Design</h3>
              </div>

              <div className="service-card">
                <div className="icon-box">
                  <img src={productDes} alt="Product Design" />
                </div>
                <h3>Squarespace Redesign & Optimization</h3>
              </div>

              <div className="service-card">
                <div className="icon-box">
                  <img src={appSvg} alt="Branding" />
                </div>
                <h3>Squarespace SEO & Performance</h3>
              </div>

              <div className="service-card">
                <div className="icon-box">
                  <img src={branding} alt="Photography" />
                </div>
                <h3>Squarespace E-commerce Setup</h3>
              </div>

              <div className="service-card">
                <div className="icon-box">
                  <img src={appSvg} alt="Motion Design" />
                </div>
                <h3>Squarespace Speed Optimization</h3>
              </div>

              <div className="service-card">
                <div className="icon-box">
                  <img src={webDev} alt="Web Development" />
                </div>
                <h3>Custom CSS & Layout Tweaks</h3>
              </div>

              <div className="service-card">
                <div className="icon-box">
                  <img src={UIUX} alt="Visualization" />
                </div>
                <h3>Content Layout & Website Structure</h3>
              </div>
            </div>
          </section>

          {/* <div className="scroll-indicator">
            <span>SCROLL DOWN</span>
            <div className="circle">
              <i className="bi bi-arrow-down"></i>
            </div>
          </div> */}
          <BrandWall />
          <Testimonials />
          <FAQ />
        </div>
      </div>
    </>
  );
}

export default Services;
