import Navbar from "../Components/Navbar";
import MyHeadFixedCard from "../Components/my-head-fixed-card";
import EmailForm from "../Components/emailform";
import "./About.css";
import "./Contact.css";
import FAQs from "../Components/FAQs";

function Contact() {
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
              <h1 className="fs-1">
                Let's 👋 <span className="accent">Work </span> Together
              </h1>
            </div>

            <p className="contact-hero-text">
              Tired of DIY website struggles? I specialize in creating custom
              Squarespace sites that capture your brand's essence and drive real
              results. Let's turn your online presence into your most powerful
              business asset.
            </p>
          </div>

          <EmailForm />

          {/* <div className="scroll-indicator">
            <span>SCROLL DOWN</span>
            <div className="circle">
              <i className="bi bi-arrow-down"></i>
            </div>
          </div> */}

          <FAQs />
        </div>
      </div>
    </>
  );
}

export default Contact;
