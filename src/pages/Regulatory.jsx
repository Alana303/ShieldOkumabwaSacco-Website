// C:\\Users\\Jeff\\Documents\\sacco-react\\src\\pages\\Regulatory.jsx

import { useEffect } from "react";
import "animate.css";

export default function Regulatory() {
  useEffect(() => {
    const btn = document.querySelector(".btn-outline-primary");
    if (!btn) return;

    const originalBg = btn.style.backgroundColor;
    const originalColor = btn.style.color;

    const handleEnter = () => {
      btn.style.backgroundColor = "red";
      btn.style.color = "white";
    };

    const handleLeave = () => {
      btn.style.backgroundColor = originalBg;
      btn.style.color = originalColor;
    };

    btn.addEventListener("mouseenter", handleEnter);
    btn.addEventListener("mouseleave", handleLeave);

    return () => {
      btn.removeEventListener("mouseenter", handleEnter);
      btn.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <>
      {/* ===== Hero Section ===== */}
      <section className="hero-section bg-light py-5 text-center">
        <div className="container-fluid">
          <h1
            className="display-4 fw-bold animate__animated animate__fadeInDown animate__slow"
            style={{
              color: "white",
              fontWeight: "bolder",
            }}
          >
            Regulatory & Compliance
          </h1>
          <p className="lead mt-3 animate__animated animate__fadeInUp animate__delay-1s">
            Ensuring transparency, legal compliance, and member protection under all
            regulatory standards governing SACCOs in Kenya.
          </p>
          <div className="mt-4">
            <a
              href="#regulatory-overview"
              className="btn btn-primary btn-lg me-3 animate__animated animate__pulse animate__infinite animate__slow"
            >
              Overview
            </a>
            <a
              href="#regulatory-links"
              className="btn btn-outline-primary btn-lg animate__animated animate__pulse animate__infinite animate__slow"
            >
              Key Sections
            </a>
          </div>
        </div>
      </section>

      {/* ===== Regulatory Overview Section ===== */}
      <section id="regulatory-overview" className="py-5 bg-white">
        <div className="container-fluid">
          <h2 className="text-center mb-5 fw-bold text-secondary animate__animated animate__fadeIn">
            Regulatory Overview
          </h2>

          <div className="row align-items-center">
            <div className="col-md-6 animate__animated animate__fadeInLeft">
              <p className="lead" style={{ color: "black", fontWeight: "bolder" }}>
                Shield Okumbawa Community SACCO operates under the strict
                regulatory framework established by the Sacco Societies Act,
                ensuring full compliance with Kenya’s cooperative and financial laws.
              </p>

              <p style={{ color: "black", fontWeight: "bolder" }}>
                Our regulatory compliance ensures transparency, member safety,
                risk management, and operational excellence—allowing us to grow
                responsibly and sustainably.
              </p>

              <p style={{ color: "black", fontWeight: "bolder" }}>
                We continually update our policies, processes, and reporting
                standards to meet the evolving legal requirements from SASRA, the
                Ministry of Cooperatives, and other oversight institutions.
              </p>

              <p style={{ color: "black", fontWeight: "bolder" }}>
                This commitment guarantees that all member investments are
                protected, monitored, and managed with the highest level of
                governance.
              </p>
            </div>

            <div className="col-md-6 text-center animate__animated animate__fadeInRight">
              <img
                src="/images/Regulatory5.jpeg"
                alt="Regulatory Overview"
                className="img-fluid rounded shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Key Regulatory Sections ===== */}
      <section id="regulatory-links" className="py-5 bg-light">
        <div className="container-fluid">
          <h2 className="text-center mb-5 fw-bold text-secondary animate__animated animate__fadeIn">
            Key Regulatory Sections
          </h2>

          <div className="row row-cols-1 row-cols-md-3 g-4">

            {/* Regulatory Framework */}
            <div className="col">
              <div className="card h-100 shadow-sm border-0 text-center animate__animated animate__zoomIn">
                <div className="card-body">
                  <i className="bi bi-shield-check text-primary fs-1 mb-3"></i>
                  <h5 className="card-title fw-bold" style={{ color: "black" }}>
                    Regulatory Framework
                  </h5>
                  <p className="card-text" style={{ color: "black", fontWeight: "bold" }}>
                    Learn about the core laws, Acts, and guidelines that govern SACCO operations.
                  </p>
                  <a href="/regulatory/regulatoryframework" className="btn btn-primary">
                    View Details
                  </a>
                </div>
              </div>
            </div>

            {/* Licensing & Authorization */}
            <div className="col">
              <div className="card h-100 shadow-sm border-0 text-center animate__animated animate__zoomIn animate__delay-1s">
                <div className="card-body">
                  <i className="bi bi-key text-success fs-1 mb-3"></i>
                  <h5 className="card-title fw-bold">Licensing & Authorization</h5>
                  <p className="card-text" style={{ color: "black", fontWeight: "bold" }}>
                    Understand the SACCO licensing process and compliance obligations under SASRA.
                  </p>
                  <a href="/regulatory/licensingauthorization" className="btn btn-success text-white">
                    View Details
                  </a>
                </div>
              </div>
            </div>

            {/* Public Consultations */}
            <div className="col">
              <div className="card h-100 shadow-sm border-0 text-center animate__animated animate__zoomIn animate__delay-2s">
                <div className="card-body">
                  <i className="bi bi-people text-warning fs-1 mb-3"></i>
                  <h5 className="card-title fw-bold">Public Consultations</h5>
                  <p className="card-text" style={{ color: "black", fontWeight: "bold" }}>
                    Explore public notices, member feedback sessions, and regulatory updates.
                  </p>
                  <a href="/regulatory/publicconsultations" className="btn btn-warning text-white">
                    View Details
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="bg-primary text-white py-5 text-center">
        <div className="container-fluid">
          <h2
            className="display-5 fw-bold mb-3 animate__animated animate__pulse animate__infinite animate__slow"
            style={{
              color: "white",
              fontWeight: "bolder",
            }}
          >
            Committed to Transparency & Compliance
          </h2>
          <p className="lead mb-4" style={{ color: "black", fontWeight: "bold" }}>
            Explore our regulatory documentation to understand how we safeguard member interests.
          </p>
          <a
            href="/regulatory/regulatoryframework"
            className="btn btn-light btn-lg text-primary fw-bold animate__animated animate__bounce animate__infinite animate__slow fatterr-btn"
          >
            View Regulatory Documentation
          </a>
        </div>
      </section>
    </>
  );
}
