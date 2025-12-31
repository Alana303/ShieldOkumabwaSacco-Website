import { useState, useEffect } from "react";
import AchievementCounters from "../components/AchievementCounters";
import { Link } from "react-router-dom";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hover, setHover] = useState(false); // Hover state for Become a Member

  const testimonials = [
    {
      text: `"Joining this SACCO has been a turning point for my business. The guidance and support helped me grow beyond what I imagined possible."`,
      img: "/images/testimonial3.jpeg",
      name: "Alex Mwangi",
      title: "Entrepreneur & Small Business Owner",
    },
    {
      text: `"Through the flexible loan options and supportive team, I was able to pursue my education with confidence. This SACCO truly supports future generations."`,
      img: "/images/Testi3.jpeg",
      name: "Faith Otieno",
      title: "University Student",
    },
    {
      text: `"The financial literacy programs have completely changed how I manage my finances. I now feel informed, confident, and prepared for the future."`,
      img: "/images/Testi1.jpeg",
      name: "Daniel Okello",
      title: "Community Member",
    },
  ];

  // Auto-slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      {/* ===== Hero Section ===== */}
      <section className="hero-section bg-light py-5 text-center d-flex align-items-center justify-content-center">
        <div className="container-fluid">
          <h1 className="display-4 fw-bold text-primary animate__animated animate__fadeInDown animate__slow">
            Empowering Communities, Building Sustainable Futures
          </h1>
          <div className="text-center mx-auto" style={{ maxWidth: "600px" }}>
            <p className="lead mt-3 animate__animated animate__fadeInUp animate__delay-1s">
              Join our inclusive, community-driven SACCO committed to supporting women, men, and youth through secure savings, smart investments, and shared growth.
            </p>
          </div>
          <div className="mt-4">

            {/* Learn More About Us Button */}
            <Link
              to="/about"
              className="btn btn-primary btn-lg me-3 hero-btn hero-btn-primary"
            >
              Learn More About Us
            </Link>

            {/* Become a Member Button */}
            <Link
              to="/register"
              className="btn btn-outline-primary btn-lg hero-btn hero-btn-outline become-members-btn"
            >
              Become a Member
            </Link>

          </div>
        </div>
      </section>

      {/* ===== Core Pillars Section ===== */}
      <section className="py-5 pillars-section">
        <div className="container-fluid">
          <h2 className="text-center mb-5 fw-bold text-secondary">
            Our Core Pillars of Growth & Inclusion
          </h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100 shadow-sm border-0 text-center">
                <i className="bi bi-wallet2 text-primary fs-1 mb-3"></i>
                <h5 className="fw-bold" style={{ color: "black", fontWeight: "bolder" }}>
                  Secure & Flexible Savings
                </h5>
                <p style={{ color: "black", fontWeight: "bolder" }}>
                  Strengthen your financial foundation with savings solutions designed to support individuals, families, and young entrepreneurs.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm border-0 text-center">
                <i className="bi bi-graph-up-arrow text-success fs-1 mb-3"></i>
                <h5 className="fw-bold" style={{ color: "black", fontWeight: "bolder" }}>
                  Strategic Investment Opportunities
                </h5>
                <p style={{ color: "black", fontWeight: "bolder" }}>
                  Engage in community-focused investment initiatives that generate returns while promoting shared economic development.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm border-0 text-center">
                <i className="bi bi-people-fill text-info fs-1 mb-3"></i>
                <h5 className="fw-bold" style={{ color: "black", fontWeight: "bolder" }}>
                  Community Support & Financial Education
                </h5>
                <p style={{ color: "black", fontWeight: "bolder" }}>
                  Be part of a supportive network that values learning, collaboration, and financial empowerment for all ages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Testimonials Section ===== */}
      <section className="py-5 testimonials-section">
        <div className="container-fluid text-center">
          <h2 className="mb-5 fw-bold text-secondary">What Our Members Say</h2>

          <div className="position-relative mx-auto" style={{ maxWidth: "700px" }}>
            {testimonials.map((t, index) => (
              <div
                key={index}
                className={`p-4 bg-white rounded shadow-sm d-flex flex-column align-items-center ${
                  index === currentSlide ? "d-block" : "d-none"
                }`}
                style={{
                  minHeight: "430px",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src={t.img}
                  className="rounded-circle"
                  alt={t.name}
                  style={{
                    width: "220px",
                    height: "220px",
                    objectFit: "cover",
                    borderRadius: "50%",
                    border: "5px solid #151269",
                  }}
                />

                <div className="mt-3">
                  <h4 className="mb-0 text-primary fw-bold">{t.name}</h4>
                  <p style={{ color: "black", fontWeight: "bolder" }}>{t.title}</p>
                </div>

                <p
                  className="mt-3"
                  style={{
                    color: "black",
                    fontWeight: "bolder",
                    fontStyle: "italic",
                  }}
                >
                  {t.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AchievementCounters />

      {/* ===== Newsletter Section ===== */}
      <section
        className="py-5 newsletter-section"
        style={{ backgroundColor: "#151269" }}
      >
        <div className="container-fluid text-center">
          <h2 className="mb-3 fw-bold text-white">Stay Connected with Our Community</h2>
          <p className="lead text-white-75 mb-4">
            Subscribe to receive updates, financial insights, and opportunities tailored for members of all backgrounds.
          </p>
          <form className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter your email address"
              required
              style={{ maxWidth: "400px" }}
            />
            <button type="submit" className="btn btn-light btn-lg subscribe-btn">
              Subscribe Now
            </button>
          </form>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="bg-primary text-white py-5 text-center cta-section">
        <div className="container-fluid">
          <h2 className="display-5 fw-bold mb-3">
            Ready to Shape Your Financial Journey?
          </h2>
          <p className="lead mb-4">
            Membership is open to everyone. Take the next step toward financial confidence and long-term growth.
          </p>
          <Link
            to="/register"
            className="btn btn-light btn-lg text-white fw-bold register-now-btn"
          >
            Register Now!
          </Link>
        </div>
      </section>
    </>
  );
}
