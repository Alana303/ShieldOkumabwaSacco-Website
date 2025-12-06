// C:\Users\Jeff\Documents\sacco-react\src\pages\Careers.jsx

import { Link } from "react-router-dom";
import "animate.css";

export default function Careers() {
  const benefits = [
    {
      title: "Empowering Work Environment",
      img: "/images/Work1.jpeg",
      description:
        "Join a purpose-driven team committed to empowering women and transforming communities through finance.",
      delay: "0s",
    },
    {
      title: "Professional Growth",
      img: "/images/Work2.jpeg",
      description:
        "We invest in continuous learning, capacity building, and career advancement opportunities for staff.",
      delay: "0.2s",
    },
    {
      title: "Inclusive Culture",
      img: "/images/Work3.jpeg",
      description:
        "We foster a culture built on respect, collaboration, and equal opportunities for all employees.",
      delay: "0.4s",
    },
    {
      title: "Competitive Benefits",
      img: "/images/Work4.jpeg",
      description:
        "Enjoy competitive compensation packages, wellness programs, and work-life balance initiatives.",
      delay: "0.6s",
    },
  ];

  const openings = [
    {
      role: "Loans Officer",
      type: "Full-Time",
      location: "Head Office",
      delay: "0s",
    },
    {
      role: "Customer Service Assistant",
      type: "Full-Time",
      location: "Branch Office",
      delay: "0.2s",
    },
    {
      role: "ICT Support Technician",
      type: "Contract",
      location: "Head Office",
      delay: "0.4s",
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
            Careers
          </h1>
          <p
            className="lead mt-3 animate__animated animate__fadeInUp animate__delay-1s mx-auto"
            style={{ maxWidth: "750px" }}
          >
            Join a dynamic team committed to empowering women, fostering
            financial growth, and creating meaningful community impact.
          </p>
        </div>
      </section>

      {/* ============================ BENEFITS ============================ */}
      <section className="py-5 bg-light">
        <div className="container-fluid text-center">
          <h2 className="fw-bold text-secondary mb-5">Why Work With Us?</h2>

          <div className="row row-cols-1 row-cols-md-4 g-4">
            {benefits.map((item, index) => (
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

      {/* ============================ JOB OPENINGS ============================ */}
      <section className="py-5">
        <div className="container-fluid">
          <h2 className="fw-bold text-secondary text-center mb-5">
            Current Opportunities
          </h2>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              {openings.map((job, index) => (
                <div
                  key={index}
                  className="p-4 mb-3 shadow-sm rounded animate__animated animate__fadeInUp"
                  style={{ animationDelay: job.delay, backgroundColor: "white" }}
                >
                  <h5 className="fw-bold text-primary">{job.role}</h5>
                  <p className="mb-1 text-muted">{job.type}</p>
                  <p className="mb-3 small">{job.location}</p>
                  <Link
                    to="/apply"
                    className="btn btn-primary btn-sm fw-bold"
                    style={{ backgroundColor: "#151269", borderColor: "#151269" }}
                  >
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>
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
            Build a Meaningful Career With Us
          </h2>
          <p className="lead mb-4">
            Be part of a passionate team that is transforming lives and building
            financially empowered communities.
          </p>
          <Link
            to="/contact"
            className="btn btn-light btn-lg text-primary fw-bold careers-btn"
          >
            Contact HR Department
          </Link>
        </div>
      </section>
    </>
  );
}
