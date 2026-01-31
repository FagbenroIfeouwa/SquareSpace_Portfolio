import "./BrandWalls.css";
import SquareSpaceLogo from "../assets/squarepaceIcon.png";
import GoogleLogo from "../assets/Google_Logo.png";
import Figma from "../assets/Figma.webp";
import CSS from "../assets/css.png";
import Notion from "../assets/notion.svg";
import MailChimp from "../assets/mailchimp-removebg-preview.png";

const brands = [SquareSpaceLogo, GoogleLogo, Figma, CSS, Notion, MailChimp];

// repeat logos to match rows visually
const repeatedBrands = [...brands, ...brands, ...brands.slice(0, 4)];
function BrandWall() {
  return (
    <div className="container my-5">
      {/* Heading */}
      <h2 className="fw-bold mb-4">
        Platforms & Tools I Work <span className="sparkle">✨</span> With
      </h2>

      {/* Brand Grid */}
      <div className="row g-4">
        {repeatedBrands.map((logo, index) => (
          <div className="col-4 col-sm-3 col-md-2" key={index}>
            <div className="brand-card">
              <img src={logo} alt="Brand logo" className="brand-logo" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandWall;
