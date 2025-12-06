import { useState } from "react";
import "animate.css";
import { Link } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: "bi-geo-alt-fill",
      title: "Address",
      text: "123 Empowerment Street, Nairobi, Kenya",
    },
    {
      icon: "bi-telephone-fill",
      title: "Phone",
      text: "+254 711 130 000",
    },
    {
      icon: "bi-envelope-fill",
      title: "Email",
      text: "info@shieldokumbawasacco.com",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section contact-hero text-center d-flex align-items-center justify-content-center">
        <div className="container-fluid">
          <h1 className="display-4 fw-bold animate__animated animate__fadeInDown">
            Contact Us
          </h1>
          <p className="lead mt-3 animate__animated animate__fadeInUp animate__delay-1s mx-auto hero-subtitle">
            Reach out to our dedicated team. Whether you need support, want to collaborate, or have a question—we’re here to help.
          </p>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="py-5 contact-info-section bg-light">
        <div className="container-fluid text-center">
          <h2 className="fw-bold text-secondary mb-5 animate__animated animate__fadeInDown">
            Our Contact Information
          </h2>
          <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
            {contactInfo.map((item, index) => (
              <div
                className="col animate__animated animate__fadeInUp"
                key={index}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="card h-100 shadow-sm border-0 text-center p-4 contact-card hover-zoom">
                  <i className={`bi ${item.icon} text-primary fs-1 mb-3`}></i>
                  <h5 className="fw-bold" style={{color: "black", fontWeight: "bolder",}}>{item.title}</h5>
                  <p className="mb-0" style={{color: "black", fontWeight: "bolder",}}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      {/* CONTACT FORM */}
<section className="py-5 contact-form-section bg-contact-section">
  <div className="container-fluid">
    <h2 className="fw-bold text-white text-center mb-5 animate__animated animate__fadeInDown">
      Send Us a Message
    </h2>
    <div className="row justify-content-center">
      <div className="col-lg-6 animate__animated animate__slideInUp">
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="card p-4 shadow-sm contact-form-card"
        >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control mb-3"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control mb-3"
                  placeholder="Your Email"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-control mb-3"
                  placeholder="Subject"
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control mb-3"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="btn btn-primary hero-btn-primary w-100"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="map-section py-5">
        <div className="container-fluid text-center">
          <h2 className="fw-bold text-secondary mb-4 animate__animated animate__fadeInDown">
            Find Us Here
          </h2>
          <div className="ratio ratio-16x9 shadow-sm map-embed animate__animated animate__fadeInUp hover-shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.123456789!2d36.8219!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1770abcd1234%3A0xabcdef1234567890!2sNairobi!5e0!3m2!1sen!2ske!4v1691234567890"
              allowFullScreen=""
              loading="lazy"
              title="SACCO Location"
            ></iframe>
          </div>
        </div>
      </section>

            {/* FLOATING CTA BUTTON */}
        <button
        onClick={() => {
            document
            .getElementById("contact-form")
            .scrollIntoView({ behavior: "smooth", block: "start" });
        }}
        className="floating-cta btn btn-primary hero-btn-primary animate__animated animate__pulse animate__infinite"
        title="Send us a message"
        >
        Contact Us
        </button>

    </>
  );
}
