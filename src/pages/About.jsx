import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function About() {
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
          <h1 className="display-4 fw-bold text-primary animate__animated animate__fadeInDown animate__slow">
            About Shield Okumbawa Community SACCO
          </h1>
          <p className="lead mt-3 animate__animated animate__fadeInUp animate__delay-1s">
            Empowering individuals, families, and youth through community-driven
            savings, investments, and financial education since 2020.
          </p>
          <div className="mt-4">
            <a
              href="#our-story"
              className="btn btn-primary btn-lg me-3 animate__animated animate__pulse animate__infinite animate__slow"
            >
              Our Story
            </a>
            <a
              href="#mission-vision"
              className="btn btn-outline-primary btn-lg animate__animated animate__pulse animate__infinite animate__slow"
            >
              Mission & Vision
            </a>
          </div>
        </div>
      </section>

      {/* ===== Our Story Section ===== */}
      <section id="our-story" className="py-5 bg-white">
        <div className="container-fluid">
          <h2 className="text-center mb-5 fw-bold text-secondary animate__animated animate__fadeIn">
            Our Story
          </h2>
          <div className="row align-items-center">
            <div className="col-md-6 animate__animated animate__fadeInLeft">
              <p className="lead" style={{ color: "black", fontWeight: "bolder" }}>
                Founded in 2020 by a group of community-minded leaders in Kenya,
                Shield Okumbawa Community SACCO began as a small collective savings initiative.
              </p>
              <p style={{ color: "black", fontWeight: "bolder" }}>
                What started as a focused effort to improve financial access quickly evolved
                into an inclusive movement supporting women, men, and young people who were
                underserved by traditional financial institutions.
              </p>
              <p style={{ color: "black", fontWeight: "bolder" }}>
                Through shared savings, responsible lending, and collaborative investment
                opportunities, members experienced the strength of unity and the impact of
                community-based financial growth.
              </p>
              <p style={{ color: "black", fontWeight: "bolder" }}>
                Today, we support over 20,000 members by providing financial services,
                education, and community support — equipping individuals and families with
                the tools needed to build secure and sustainable futures.
              </p>
            </div>
            <div className="col-md-6 text-center animate__animated animate__fadeInRight">
              <img
                src="/images/sacco1.jpg"
                alt="Our Story"
                className="img-fluid rounded shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Mission & Vision ===== */}
      <section id="mission-vision" className="py-5 bg-light">
        <div className="container-fluid">
          <h2 className="text-center mb-5 fw-bold text-secondary animate__animated animate__fadeIn">
            Mission & Vision
          </h2>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card h-100 shadow-sm border-0 text-center animate__animated animate__zoomIn">
                <div className="card-body">
                  <i className="bi bi-bullseye text-primary fs-1 mb-3"></i>
                  <h5
                    className="card-title fw-bold"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Our Mission
                  </h5>
                  <p
                    style={{ color: "black", fontWeight: "bolder" }}
                    className="card-text"
                  >
                    To provide accessible savings, credit, and investment solutions
                    that empower individuals, families, and youth to achieve financial stability.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm border-0 text-center animate__animated animate__zoomIn animate__delay-1s">
                <div className="card-body">
                  <i className="bi bi-eye text-success fs-1 mb-3"></i>
                  <h5
                    className="card-title fw-bold"
                    style={{ color: "black", fontWeight: "bolder" }}
                  >
                    Our Vision
                  </h5>
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    className="card-text"
                  >
                    A financially inclusive society where people of all genders and
                    generations can build prosperous lives and resilient communities.
                  </p>
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
            Join Our Growing Community
          </h2>
          <p className="lead mb-4" style={{ color: "black", fontWeight: "bold" }}>
            Become a member and take confident steps toward your financial future.
          </p>
          <a
            href="/register"
            className="btn btn-light btn-lg text-white fw-bold animate__animated animate__bounce animate__infinite animate__slow register-btn"
          >
            Register Now!
          </a>
        </div>
      </section>
    </>
  );
}
