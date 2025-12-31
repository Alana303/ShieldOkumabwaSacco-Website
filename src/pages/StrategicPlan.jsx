// C:\Users\Jeff\Documents\sacco-react\src\pages\StrategicPlan.jsx

import { Link } from "react-router-dom";
import "animate.css";

export default function StrategicPlan() {
  const pillars = [
    {
      title: "Financial Empowerment",
      img: "/images/image7.jpeg",
      description:
        "Promoting financial inclusion and economic empowerment for all members through accessible, affordable, and sustainable financial solutions.",
      delay: "0s",
    },
    {
      title: "Sustainable Growth",
      img: "/images/image8.jpeg",
      description:
        "Driving long-term financial stability through innovation, prudent resource management, and member-centered growth strategies.",
      delay: "0.2s",
    },
    {
      title: "Operational Excellence",
      img: "/images/image9.jpeg",
      description:
        "Strengthening governance, digitization, and service delivery processes to ensure efficiency, accountability, and transparency.",
      delay: "0.4s",
    },
    {
      title: "Community Impact",
      img: "/images/image10.jpeg",
      description:
        "Enhancing social and economic development through partnerships, outreach programs, and initiatives that uplift individuals and communities.",
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
          <h1
            className="display-4 fw-bold animate__animated animate__fadeInDown"
            style={{ color: "white", fontWeight: "bolder" }}
          >
            Strategic Plan
          </h1>
          <p
            className="lead mt-3 animate__animated animate__fadeInUp animate__delay-1s mx-auto"
            style={{ maxWidth: "750px", color: "white", fontWeight: "bolder" }}
          >
            Our strategic plan defines the direction, priorities, and focus areas
            guiding our SACCO toward sustainable growth, financial inclusion, and
            positive impact for all members.
          </p>
        </div>
      </section>

      {/* ============================ STRATEGIC PILLARS ============================ */}
      <section className="py-5 bg-light">
        <div className="container-fluid text-center">
          <h2 className="fw-bold text-secondary mb-5">
            Our Core Strategic Pillars
          </h2>

          <div className="row row-cols-1 row-cols-md-4 g-4">
            {pillars.map((pillar, index) => (
              <div className="col" key={index}>
                <div
                  className="card h-100 border-0 shadow-sm p-3 animate__animated animate__fadeInUp"
                  style={{ animationDelay: pillar.delay }}
                >
                  <div className="text-center mb-3">
                    <img
                      src={pillar.img}
                      alt={pillar.title}
                      className="rounded-circle shadow"
                      style={{
                        width: "220px",
                        height: "220px",
                        objectFit: "cover",
                        border: "4px solid #151269",
                        transition: "transform 0.4s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.transform = "scale(1.07)")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.transform = "scale(1)")
                      }
                    />
                  </div>

                  <h4
                    className="fw-bold"
                    style={{ fontWeight: "bolder" }}
                  >
                    {pillar.title}
                  </h4>
                  <p
                    className="small mt-2"
                    style={{ color: "black", fontWeight: "bolder" }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ CTA ============================ */}
      <section className="bg-primary text-white py-5 text-center">
        <div className="container-fluid">
          <h2
            className="display-6 fw-bold mb-3"
            style={{ color: "white", fontWeight: "bolder" }}
          >
            A Clear Vision for a Strong Future
          </h2>
          <p className="lead mb-4">
            Our strategic roadmap promotes progress, innovation, and inclusive
            growth that benefits all members and the communities we serve.
          </p>
          <Link
            to="/about"
            className="btn btn-light btn-lg text-primary fw-bold learn-btn"
          >
            Learn More About Us
          </Link>
        </div>
      </section>
    </>
  );
}
