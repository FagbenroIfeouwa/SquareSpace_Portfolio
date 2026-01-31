import "../Pages/Contact.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function EmailForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, subject, budget, message });
    const serviceID = "service_bvzv7qr";
    const templateID = "template_mwao8lf";
    const publicKey = "syAiaW4TvrGhMl6af";

    // create a new object that contains dynamic template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Ifeoluwa",
      subject: subject,
      budget: budget,
      message: message
    };

    // Send the email using emailjs
    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setName("");
        setEmail("");
        setSubject("");
        setBudget("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <>
      <div className="contact-card">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-grid">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Budget</label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              >
                <option>Select budget...</option>
                <option>$500 - $1,000</option>
                <option>$1,000 - $5,000</option>
                <option>$5,000+</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>message</label>
            <textarea
              placeholder="Type details about your inquiry"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
            {/* <span className="arrow"></span> */}
          </button>
        </form>
      </div>
    </>
  );
}

export default EmailForm;
