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
            About Shield Okumbawa Community Sacco
          </h1>
          <p className="lead mt-3 animate__animated animate__fadeInUp animate__delay-1s">
            Empowering women through community-driven savings, investments, and
            financial literacy since 2020.
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
    {/* ===== Our Story Section ===== */}
<section id="our-story" className="py-5 bg-white">
  <div className="container-fluid">
    <h2 className="text-center mb-5 fw-bold text-secondary animate__animated animate__fadeIn">
      Our Story
    </h2>
    <div className="row align-items-center">
      <div className="col-md-6 animate__animated animate__fadeInLeft">
        <p className="lead" style={{ color: "black", fontWeight: "bolder" }}>
          Founded in 2020 by a group of visionary women in Kenya, Shield
          Okumbawa Community Sacco started as a small savings group.
        </p>
        <p style={{ color: "black", fontWeight: "bolder" }}>
          What began as a humble initiative quickly grew into a movement,
          driven by the determination to create financial security for women
          who had long been excluded from traditional banking systems.
        </p>
        <p style={{ color: "black", fontWeight: "bolder" }}>
          Through collective savings and shared investment opportunities,
          members discovered the power of unity and the strength of
          community-driven financial growth. This spirit of collaboration
          continues to define our SACCO today.
        </p>
        <p style={{ color: "black", fontWeight: "bolder" }}>
          Today, we empower over 20,000 women through financial services,
          community support, and education — ensuring that every member has
          the tools to build a brighter, more sustainable future.
        </p>
      </div>
      <div className="col-md-6 text-center animate__animated animate__fadeInRight">
        <img
          src="/images/image1.jpg"
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
                  <h5 className="card-title fw-bold" style={{color: "black", fontWeight: "bold" }}>Our Mission</h5>
                  <p style={{ color: "black", fontWeight: "bolder" }} className="card-text">
                    To provide accessible savings and investments that empower
                    women to achieve financial independence.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm border-0 text-center animate__animated animate__zoomIn animate__delay-1s">
                <div className="card-body">
                  <i className="bi bi-eye text-success fs-1 mb-3"></i>
                  <h5 className="card-title fw-bold" style={{color: "black", fontWeight: "bolder",}}>Our Vision</h5>
                  <p style={{ color: "black", fontWeight: "bold" }} className="card-text">
                    A world where every woman has the support to build a
                    prosperous future and sustainable community.
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
          <h2 className="display-5 fw-bold mb-3 animate__animated animate__pulse animate__infinite animate__slow"
          style={{
            color: "white",
            fontWeight: "bolder",
          }}
          >
            Join Our Empowering Community
          </h2>
          <p className="lead mb-4" style={{ color: "black", fontWeight: "bold" }}>
            Become a member and start building your financial future today.
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
