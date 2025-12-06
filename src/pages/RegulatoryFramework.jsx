// C:\\Users\\Jeff\\Documents\\sacco-react\\src\\pages\\RegulatoryFramework.jsx

import { useEffect } from "react";
import "animate.css";

export default function RegulatoryFramework() {
  useEffect(() => {
    const btn = document.querySelector(".btn-outline-primary");
    if (!btn) return;

    const originalBg = btn.style.backgroundColor;
    const originalColor = btn.style.color;

    const enter = () => {
      btn.style.backgroundColor = "red";
      btn.style.color = "white";
    };
    const leave = () => {
      btn.style.backgroundColor = originalBg;
      btn.style.color = originalColor;
    };

    btn.addEventListener("mouseenter", enter);
    btn.addEventListener("mouseleave", leave);

    return () => {
      btn.removeEventListener("mouseenter", enter);
      btn.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <>
      {/* ===== Hero ===== */}
      <section className="hero-section bg-light py-5 text-center">
        <div className="container-fluid">
          <h1
            className="display-4 fw-bold animate__animated animate__fadeInDown animate__slow"
            style={{ color: "white", fontWeight: "bolder" }}
          >
            Regulatory Framework
          </h1>

          <p className="lead mt-3 animate__animated animate__fadeInUp animate__delay-1s">
            Understanding the laws, Acts, and guidelines that govern Shield Okumbawa
            Community SACCO under the Kenyan cooperative regulatory environment.
          </p>
        </div>
      </section>

      {/* ===== Section ===== */}
      <section className="py-5 bg-white">
        <div className="container-fluid">
          <h2 className="text-center mb-5 fw-bold text-secondary animate__animated animate__fadeIn">
            The Legal Foundation
          </h2>

          <div className="row align-items-center">
            <div className="col-md-6 animate__animated animate__fadeInLeft">
              <p className="lead" style={{ color: "black", fontWeight: "bolder" }}>
                SACCO operations in Kenya are legally regulated to ensure financial
                transparency, consumer protection, and cooperative governance. Shield
                Okumbawa Community SACCO complies fully with the established national
                guidelines.
              </p>

              <p style={{ color: "black", fontWeight: "bold" }}>
                Our regulatory framework is influenced by:
              </p>

              <ul style={{ color: "black", fontWeight: "bold" }}>
                <li>The SACCO Societies Act, 2008</li>
                <li>The Cooperative Societies Act</li>
                <li>SASRA Regulations (2020)</li>
                <li>Government Financial Reporting Standards</li>
                <li>Internal Governance & Risk Assessment Policies</li>
              </ul>
            </div>

            <div className="col-md-6 text-center animate__animated animate__fadeInRight">
              <img
                src="/images/Regulatory3.jpeg"
                alt="Regulatory Framework"
                className="img-fluid rounded shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Core Components ===== */}
      <section className="py-5 bg-light">
        <div className="container-fluid">
          <h2 className="text-center mb-5 fw-bold text-secondary">
            Core Components of Compliance
          </h2>

          <div className="row row-cols-1 row-cols-md-3 g-4">

            {/* Governance */}
            <div className="col animate__animated animate__zoomIn">
              <div className="card h-100 shadow-sm border-0 text-center">
                <div className="card-body">
                  <i className="bi bi-diagram-3 fs-1 text-primary mb-3"></i>
                  <h5 className="fw-bold" style={{ color: "black" }}>
                    Governance Structure
                  </h5>
                  <p style={{ color: "black", fontWeight: "bold" }}>
                    Board oversight, annual audits, mandatory reporting, and
                    member-driven leadership.
                  </p>
                </div>
              </div>
            </div>

            {/* Reporting */}
            <div className="col animate__animated animate__zoomIn animate__delay-1s">
              <div className="card h-100 shadow-sm border-0 text-center">
                <div className="card-body">
                  <i className="bi bi-file-earmark-text fs-1 text-success mb-3"></i>
                  <h5 className="fw-bold" style={{ color: "black" }}>
                    Mandatory Reporting
                  </h5>
                  <p style={{ color: "black", fontWeight: "bold" }}>
                    Quarterly financial reporting, risk disclosures, and compliance
                    submissions to SASRA.
                  </p>
                </div>
              </div>
            </div>

            {/* Risk Control */}
            <div className="col animate__animated animate__zoomIn animate__delay-2s">
              <div className="card h-100 shadow-sm border-0 text-center">
                <div className="card-body">
                  <i className="bi bi-shield-lock fs-1 text-warning mb-3"></i>
                  <h5 className="fw-bold" style={{ color: "black" }}>
                    Risk Management
                  </h5>
                  <p style={{ color: "black", fontWeight: "bold" }}>
                    Systems designed to safeguard member deposits and promote stable
                    financial growth.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      {/* ===== CTA (Regulatory Framework Focus) ===== */}
      <section className="bg-primary text-white py-5 text-center">
        <div className="container">
          <h2
            className="display-6 fw-bold mb-3 animate__animated animate__fadeInUp"
            style={{ color: "white", fontWeight: "bolder" }}
          >
            Dive Deeper Into Our Regulatory Framework
          </h2>

          <p className="lead mb-4" style={{ fontWeight: "bold" }}>
            Explore the Acts, regulations, and governance structures that guide and shape
            how Shield Okumbawa Community SACCO operates within Kenya’s cooperative sector.
          </p>

          <a
            href="/regulatory/details"
            className="btn btn-light btn-lg text-primary fw-bold animate__animated animate__fadeIn  dayday-btn"
          >
            View Regulatory Details
          </a>
        </div>
      </section>

    </>
  );
}
