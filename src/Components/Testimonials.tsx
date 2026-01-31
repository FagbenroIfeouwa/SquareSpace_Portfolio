import { useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    rating: 5,
    source: "Framer.com",
    text: `Working with Ifeoluwa completely changed how our website performs. The design finally reflects our brand, and more importantly, visitors now understand what we offer within seconds. We started getting more qualified inquiries within weeks.`,
    name: "Sarah M.",
    role: "Service Business Owner"
  },
  {
    rating: 5,
    source: "Framer.com",
    text: `I had a Squarespace site already, but it felt generic and confusing. Ifeoluwa refined the structure, improved clarity, and optimized it for conversions. The result is a website I am proud to share.`,
    name: "Daniel K.",
    role: "Content Creator"
  },
  {
    rating: 5,
    source: "Framer.com",
    text: `What impressed me most was the strategic approach. This was not just a redesign. It was a complete upgrade to how our brand is presented online.`,
    name: "Amelia R.",
    role: "Founder, Lifestyle Brand"
  },

  {
    rating: 5,
    source: "Framer.com",
    text: `What stood out most was the attention to user experience. Every section now has a purpose. Our bounce rate dropped, and visitors stay longer on the site.`,
    name: "Micheal T.",
    role: "Consultant"
  }
];

function Testimonials() {
  const [index, setIndex] = useState(0);

  const visible = testimonials.slice(index, index + 2);

  const next = () => {
    if (index < testimonials.length - 2) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="container my-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold mb-0">Trusted By 23+ Clients</h2>

        <div className="d-flex gap-2">
          <button className="nav-btn" onClick={prev}>
            ←
          </button>
          <button className="nav-btn" onClick={next}>
            →
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="row g-4">
        {visible.map((item, i) => (
          <div className="col-md-6" key={i}>
            <div className="testimonial-card">
              {/* Top row */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="stars">{"★".repeat(item.rating)}</div>

                <a href="#" className="source-link">
                  {/* {item.source} ↗ */}
                </a>
              </div>

              {/* Text */}
              <p className="testimonial-text">"{item.text}"</p>

              {/* Author */}
              <p className="testimonial-author">
                {item.name} <span>- {item.role}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
