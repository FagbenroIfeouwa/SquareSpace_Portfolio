import "./FAQs.css";

import { useState } from "react";

const faqs = [
  {
    question: "Do you only work with Squarespace?",
    answer:
      "Yes. I specialize in Squarespace. This focus allows me to build, customize, and optimize Squarespace websites more efficiently and deliver better results than a generalist."
  },
  {
    question: "Can you improve an existing Squarespace website?",
    answer:
      "Absolutely. I regularly work with existing Squarespace websites to improve layout, clarity, performance, SEO, and conversions without starting from scratch."
  },
  {
    question: "Do you use custom code or CSS in Squarespace?",
    answer:
      "Yes. I use custom CSS where needed to enhance layout, styling, and responsiveness while keeping everything clean, stable, and fully compatible with Squarespace."
  },
  {
    question: "Can you help with SEO on Squarespace?",
    answer:
      "Yes. I implement on-page SEO best practices including page structure, metadata, image optimization, and technical setup to help improve visibility and performance."
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. I offer ongoing Squarespace support for updates, improvements, fixes, and new sections so your website continues to grow with your business."
  }
];
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4">Frequently Asked Questions</h2>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            key={index}
            onClick={() => toggle(index)}
          >
            <div className="faq-header">
              <p className="faq-question">{faq.question}</p>

              <span className="faq-icon">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {openIndex === index && (
              <div className="faq-body">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
