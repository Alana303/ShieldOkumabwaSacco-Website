// C:\\Users\\Jeff\\Documents\\sacco-react\\src\\pages\\LicensingAuthorization.jsx

import { useEffect } from "react";
import "animate.css";

export default function LicensingAuthorization() {
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
      {/* ===== HERO ===== */}
      <section className="hero-section bg-light py-5 text-center">
        <div className="container-fluid">
          <h1
            className="display-4 fw-bold animate__animated animate__fadeInDown animate__slow"
            style={{ color: "white", fontWeight: "bolder" }}
          >
            Licensing & Authorization
          </h1>

          <p className="lead mt-3 animate__animated animate__fadeInUp animate__delay-1s">
            Discover the official licensing requirements and authorization process
            for SACCOs under SASRA regulations.
          </p>
        </div>
      </section>

      {/* ===== SECTION ===== */}
      <section className="py-5 bg-white">
        <div className="container-fluid">
          <h2 className="text-center mb-5 fw-bold text-secondary">
            SACCO Licensing Requirements
          </h2>

          <div className="row align-items-center">
            <div className="col-md-6 animate__animated animate__fadeInLeft">
              <p className="lead" style={{ color: "black", fontWeight: "bolder" }}>
                Every SACCO in Kenya must undergo a standardized authorization
                process before it can operate legally and accept deposits from
                members.
              </p>

              <p style={{ color: "black", fontWeight: "bold" }}>
                Requirements include:
              </p>

              <ul style={{ color: "black", fontWeight: "bold" }}>
                <li>Minimum capital requirements</li>
                <li>Qualified board and management team</li>
                <li>Documented governance & risk structures</li>
                <li>Secure operational systems</li>
                <li>Annual audits & financial records</li>
                <li>Compliance with SASRA licensing standards</li>
              </ul>
            </div>

            <div className="col-md-6 text-center animate__animated animate__fadeInRight">
              <img
                src="/images/Licensing1.jpeg"
                alt="Licensing Authorization"
                className="img-fluid rounded shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Licensing Steps ===== */}
      <section className="py-5 bg-light">
        <div className="container-fluid">
          <h2 className="text-center mb-5 fw-bold text-secondary">
            Steps in the Authorization Process
          </h2>

          <div className="row row-cols-1 row-cols-md-3 g-4">

            {/* Step 1 */}
            <div className="col animate__animated animate__zoomIn">
              <div className="card h-100 text-center shadow-sm border-0">
                <div className="card-body">
                  <i className="bi bi-clipboard-data fs-1 text-primary mb-3"></i>
                  <h5 className="fw-bold" style={{ color: "black" }}>
                    1. Application Submission
                  </h5>
                  <p style={{ color: "black", fontWeight: "bold" }}>
                    SACCO submits all necessary documentation for review.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="col animate__animated animate__zoomIn animate__delay-1s">
              <div className="card h-100 text-center shadow-sm border-0">
                <div className="card-body">
                  <i className="bi bi-search fs-1 text-success mb-3"></i>
                  <h5 className="fw-bold" style={{ color: "black" }}>
                    2. SASRA Evaluation
                  </h5>
                  <p style={{ color: "black", fontWeight: "bold" }}>
                    Regulatory officers review the SACCO’s readiness and compliance.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="col animate__animated animate__zoomIn animate__delay-2s">
              <div className="card h-100 text-center shadow-sm border-0">
                <div className="card-body">
                  <i className="bi bi-check-circle fs-1 text-warning mb-3"></i>
                  <h5 className="fw-bold" style={{ color: "black" }}>
                    3. Authorization & Certification
                  </h5>
                  <p style={{ color: "black", fontWeight: "bold" }}>
                    Once approved, SACCO receives the license to operate legally.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== CTA (Licensing & Authorization Focus) ===== */}
      <section className="bg-primary text-white py-5 text-center">
        <div className="container">
          <h2
            className="display-6 fw-bold mb-3 animate__animated animate__pulse animate__infinite animate__slow"
            style={{ color: "white", fontWeight: "bolder" }}
          >
            Ready to Begin Your Licensing Journey?
          </h2>

          <p className="lead mb-4" style={{ fontWeight: "bold" }}>
            Learn more about the requirements, documentation, and steps involved in obtaining
            authorization to operate a compliant and trusted SACCO.
          </p>

          <a
            href="/regulatory/licensing-requirements"
            className="btn btn-light btn-lg text-primary fw-bold animate__animated animate__fadeInUp fatter-btn"
          >
            View Licensing Requirements
          </a>
        </div>
      </section>

    </>
  );
}
