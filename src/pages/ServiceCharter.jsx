// C:\Users\Jeff\Documents\sacco-react\src\pages\ServiceCharter.jsx

import { Link } from "react-router-dom";
import "animate.css";

export default function ServiceCharter() {
  const commitments = [
    {
      title: "Timely Service Delivery",
      img: "/images/romeo5.jpeg",
      description:
        "We ensure quick turnaround times for loans, inquiries, and member services, driven by professionalism and efficiency.",
      delay: "0s",
    },
    {
      title: "Transparency & Accountability",
      img: "/images/romeo6.jpeg",
      description:
        "All financial processes and communication remain clear, accurate, and accountable to our members at all times.",
      delay: "0.2s",
    },
    {
      title: "Member-Centered Support",
      img: "/images/romeo7.jpeg",
      description:
        "We are dedicated to fostering positive relationships by providing courteous, respectful, and personalized assistance.",
      delay: "0.4s",
    },
    {
      title: "Quality & Continuous Improvement",
      img: "/images/romeo8.jpeg",
      description:
        "We continuously evaluate and enhance our services to meet evolving member needs and industry best practices.",
      delay: "0.6s",
    },
  ];

  return (
    <>
      {/* ============================ HERO SECTION ============================ */}
      <section
        className="py-5 text-center text-white d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: "#151269",
          minHeight: "320px",
        }}
      >
        <div className="container-fluid">
          <h1 className="display-4 fw-bold animate__animated animate__fadeInDown"
          style={{
            color: "white",
            fontWeight: "bolder",
          }}
          >
            Service Charter
          </h1>
          <p
            className="lead mt-3 animate__animated animate__fadeInUp animate__delay-1s mx-auto"
            style={{ maxWidth: "750px"}}
          >
            Our Service Charter reflects our dedication to delivering reliable,
            responsive, and high-quality services to all members through
            efficiency, transparency, and continuous improvement.
          </p>
        </div>
      </section>

      {/* ============================ COMMITMENTS SECTION ============================ */}
      <section className="py-5 bg-light">
        <div className="container-fluid text-center">
          <h2 className="fw-bold text-secondary mb-5">Our Commitment to You</h2>

          <div className="row row-cols-1 row-cols-md-4 g-4">
            {commitments.map((item, index) => (
              <div className="col" key={index}>
                <div
                  className={`card h-100 border-0 shadow-sm p-3 animate__animated animate__fadeInUp`}
                  style={{ animationDelay: item.delay }}
                >
                  <div className="text-center mb-3">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="rounded-circle shadow"
                      style={{
                        width: "220px",
                        height: "220px",
                        objectFit: "cover",
                        border: "4px solid #151269",
                        transition: "transform 0.4s ease",
                      }}
                      onMouseEnter={(e) => (e.target.style.transform = "scale(1.07)")}
                      onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                    />
                  </div>

                  <h4 className="fw-bold text-primary">{item.title}</h4>
                  <p className="small mt-2" style={{color: "black", fontWeight: "bolder",}}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ CTA SECTION ============================ */}
      <section className="bg-primary text-white py-5 text-center">
        <div className="container-fluid">
          <h2 className="display-6 fw-bold mb-3"
          style={{
            color: "white",
            fontWeight: "bolder",
          }}>
            Service You Can Trust
          </h2>
          <p className="lead mb-4" style={{color: "black", fontWeight: "bolder",}}>
            Our SACCO remains committed to delivering excellent service and
            empowering every member with care and dedication.
          </p>
          <Link
            to="/contact"
            className="btn btn-light btn-lg text-primary fw-bold services-btn"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
