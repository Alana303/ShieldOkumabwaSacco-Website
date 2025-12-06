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
          <h1 className="display-4 fw-bold animate__animated animate__fadeInDown"
          
          style={{
            color: "white",
            fontWeight: "bolder",
          }}>
            Who We Are
          </h1>
          <p
            className="lead mt-3 animate__animated animate__fadeInUp animate__delay-1s mx-auto"
            style={{ maxWidth: "650px" }}
          >
            As a women-centered community SACCO, we are dedicated to empowering
            lives through financial inclusion, mentorship, and sustainable
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
                alt="Empowering women"
                className="img-fluid rounded shadow"
              />
            </div>

            <div className="col-md-6">
              <h2 className="fw-bold text-primary mb-3">Our Journey</h2>
              <p className="lead" style={{color: "black", fontWeight: "bolder",}}>
                Shield Okumbawa Community Sacco was founded with one purpose —
                to empower women through accessible financial services that
                create real and lasting change.
              </p>

              <p style={{color: "black", fontWeight: "bolder",}}>
                Over the years, we have built a strong community of members who
                trust us with their dreams. Our SACCO continues to grow through
                transparency, collaboration, and unwavering commitment to the
                women we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== Mission / Vision / Values ====================== */}
      <section className="py-5">
        <div className="container-fluid text-center">
          <h2 className="fw-bold text-secondary mb-5">Our Guiding Principles</h2>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100 shadow-sm border-0 p-4 text-center">
                <i className="bi bi-bullseye text-primary fs-1 mb-3"></i>
                <h4 className="fw-bold" style={{color: "black", fontWeight: "bolder",}}>Mission</h4>
                <p style={{color: "black", fontWeight: "bolder",}}>
                  To empower women through financial education, accessible
                  products, and sustainable opportunities that transform lives
                  and uplift communities.
                </p>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 shadow-sm border-0 p-4 text-center">
                <i className="bi bi-eye text-success fs-1 mb-3"></i>
                <h4 className="fw-bold" style={{color: "black", fontWeight: "bolder",}}>Vision</h4>
                <p style={{color: "black", fontWeight: "bolder",}}>
                  To be the most trusted women-focused SACCO that drives
                  financial inclusion and economic stability across communities.
                </p>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 shadow-sm border-0 p-4 text-center">
                <i className="bi bi-heart text-danger fs-1 mb-3"></i>
                <h4 className="fw-bold" style={{color: "black", fontWeight: "bolder",}}>Core Values</h4>
                <ul className="list-unstyled text-start mx-auto" style={{ maxWidth: "280px", color: "black", fontWeight: "bolder",}}>
                  <li>✔ Integrity & Accountability</li>
                  <li>✔ Transparency</li>
                  <li>✔ Inclusivity</li>
                  <li>✔ Women Empowerment</li>
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
          <h2 className="fw-bold text-secondary mb-5">Why Choose Our SACCO?</h2>

          <div className="row row-cols-1 row-cols-md-4 g-4">

            <div className="col">
              <div className="card h-100 border-0 shadow-sm p-4">
                <i className="bi bi-shield-check text-primary fs-1 mb-3"></i>
                <h5 className="fw-bold" style={{color: "black", fontWeight: "bolder",}}>Reliable & Transparent</h5>
                <p style={{color: "black", fontWeight: "bolder",}}>
                  We operate with integrity, providing clear information and
                  trustworthy services to all our members.
                </p>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 border-0 shadow-sm p-4">
                <i className="bi bi-people text-success fs-1 mb-3"></i>
                <h5 className="fw-bold" style={{color: "black", fontWeight: "bolder",}}>Women-Focused</h5>
                <p style={{color: "black", fontWeight: "bolder",}}>
                  We prioritize women’s financial empowerment and provide
                  programs tailored to their growth.
                </p>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 border-0 shadow-sm p-4">
                <i className="bi bi-mortarboard text-warning fs-1 mb-3"></i>
                <h5 className="fw-bold" style={{color: "black", fontWeight: "bolder",}}>Financial Literacy</h5>
                <p style={{color: "black", fontWeight: "bolder",}}>
                  Workshops, seminars, and mentorship opportunities to help our
                  members make informed financial decisions.
                </p>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 border-0 shadow-sm p-4">
                <i className="bi bi-graph-up-arrow text-info fs-1 mb-3"></i>
                <h5 className="fw-bold" style={{color: "black", fontWeight: "bolder",}}>Growth & Stability</h5>
                <p style={{color: "black", fontWeight: "bolder",}}>
                  Our programs ensure long-term financial stability and
                  sustainable economic growth for members.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ====================== CTA Section ====================== */}
      <section className="bg-primary text-white py-5 text-center">
        <div className="container-fluid">
          <h2 className="display-5 fw-bold mb-3"
          style={{
            color: "white",
            fontWeight: "bolder",
          }}>
            Join a Community That Believes in Your Potential
          </h2>
          <p className="lead mb-4">
            Start your journey towards financial empowerment today.
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
