// C:\Users\Jeff\Documents\sacco-react\src\pages\WhoWeAre.jsx

import { Link } from "react-router-dom";

export default function WhoWeAre() {
  return (
    <>
      {/* ====================== Hero Section ====================== */}
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
            style={{
              color: "white",
              fontWeight: "bolder",
            }}
          >
            Who We Are
          </h1>
          <p
            className="lead mt-3 animate__animated animate__fadeInUp animate__delay-1s mx-auto"
            style={{ maxWidth: "650px" }}
          >
            We are a community-driven SACCO committed to empowering women, men,
            and youth through financial inclusion, mentorship, and sustainable
            economic opportunities.
          </p>
        </div>
      </section>

      {/* ====================== Intro Section ====================== */}
      <section className="py-5 bg-light">
        <div className="container-fluid">
          <div className="row align-items-center g-5">
            <div className="col-md-6">
              <img
                src="/images/image1.jpg"
                alt="Community empowerment"
                className="img-fluid rounded shadow"
              />
            </div>

            <div className="col-md-6">
              <h2 className="fw-bold text-primary mb-3">Our Journey</h2>
              <p
                className="lead"
                style={{ color: "black", fontWeight: "bolder" }}
              >
                Shield Okumbawa Community SACCO was established with a shared
                vision — to provide accessible and reliable financial services
                that empower individuals and strengthen communities.
              </p>

              <p style={{ color: "black", fontWeight: "bolder" }}>
                Over the years, we have grown into a trusted financial partner
                for diverse members. Our progress is built on transparency,
                collaboration, and a strong commitment to inclusive economic
                growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== Mission / Vision / Values ====================== */}
      <section className="py-5">
        <div className="container-fluid text-center">
          <h2 className="fw-bold text-secondary mb-5">
            Our Guiding Principles
          </h2>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100 shadow-sm border-0 p-4 text-center">
                <i className="bi bi-bullseye text-primary fs-1 mb-3"></i>
                <h4
                  className="fw-bold"
                  style={{ color: "black", fontWeight: "bolder" }}
                >
                  Mission
                </h4>
                <p style={{ color: "black", fontWeight: "bolder" }}>
                  To empower individuals, families, and youth through financial
                  education, accessible products, and sustainable opportunities
                  that uplift communities.
                </p>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 shadow-sm border-0 p-4 text-center">
                <i className="bi bi-eye text-success fs-1 mb-3"></i>
                <h4
                  className="fw-bold"
                  style={{ color: "black", fontWeight: "bolder" }}
                >
                  Vision
                </h4>
                <p style={{ color: "black", fontWeight: "bolder" }}>
                  To be a trusted and inclusive SACCO that drives financial
                  access, stability, and shared prosperity across generations.
                </p>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 shadow-sm border-0 p-4 text-center">
                <i className="bi bi-heart text-danger fs-1 mb-3"></i>
                <h4
                  className="fw-bold"
                  style={{ color: "black", fontWeight: "bolder" }}
                >
                  Core Values
                </h4>
                <ul
                  className="list-unstyled text-start mx-auto"
                  style={{
                    maxWidth: "280px",
                    color: "black",
                    fontWeight: "bolder",
                  }}
                >
                  <li>✔ Integrity & Accountability</li>
                  <li>✔ Transparency</li>
                  <li>✔ Inclusivity</li>
                  <li>✔ Equal Opportunity</li>
                  <li>✔ Community Growth</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== Why Choose Us ====================== */}
      <section className="py-5 bg-light">
        <div className="container-fluid text-center">
          <h2 className="fw-bold text-secondary mb-5">
            Why Choose Our SACCO?
          </h2>

          <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
              <div className="card h-100 border-0 shadow-sm p-4">
                <i className="bi bi-shield-check text-primary fs-1 mb-3"></i>
                <h5
                  className="fw-bold"
                  style={{ color: "black", fontWeight: "bolder" }}
                >
                  Reliable & Transparent
                </h5>
                <p style={{ color: "black", fontWeight: "bolder" }}>
                  We operate with integrity and openness, offering trustworthy
                  services and clear communication to all members.
                </p>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 border-0 shadow-sm p-4">
                <i className="bi bi-people text-success fs-1 mb-3"></i>
                <h5
                  className="fw-bold"
                  style={{ color: "black", fontWeight: "bolder" }}
                >
                  Inclusive Membership
                </h5>
                <p style={{ color: "black", fontWeight: "bolder" }}>
                  Our programs support women, men, and youth, ensuring fair
                  access to opportunities for financial growth.
                </p>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 border-0 shadow-sm p-4">
                <i className="bi bi-mortarboard text-warning fs-1 mb-3"></i>
                <h5
                  className="fw-bold"
                  style={{ color: "black", fontWeight: "bolder" }}
                >
                  Financial Literacy
                </h5>
                <p style={{ color: "black", fontWeight: "bolder" }}>
                  Training sessions, workshops, and mentorship programs that
                  help members make confident financial decisions.
                </p>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 border-0 shadow-sm p-4">
                <i className="bi bi-graph-up-arrow text-info fs-1 mb-3"></i>
                <h5
                  className="fw-bold"
                  style={{ color: "black", fontWeight: "bolder" }}
                >
                  Growth & Stability
                </h5>
                <p style={{ color: "black", fontWeight: "bolder" }}>
                  Our solutions are designed to promote long-term financial
                  security and sustainable economic progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== CTA Section ====================== */}
      <section className="bg-primary text-white py-5 text-center">
        <div className="container-fluid">
          <h2
            className="display-5 fw-bold mb-3"
            style={{
              color: "white",
              fontWeight: "bolder",
            }}
          >
            Join a Community That Believes in Your Potential
          </h2>
          <p className="lead mb-4">
            Start your journey toward financial empowerment today.
          </p>
          <Link
            to="/register"
            className="btn btn-light btn-lg text-primary fw-bold become-member-btn"
          >
            Become a Member
          </Link>
        </div>
      </section>
    </>
  );
}
