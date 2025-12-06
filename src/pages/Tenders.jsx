// C:\Users\Jeff\Documents\sacco-react\src\pages\Tenders.jsx

import { Link } from "react-router-dom";
import "animate.css";

export default function Tenders() {
  const tenderCategories = [
    {
      title: "Supply of Goods",
      img: "/images/goods1.jpeg",
      description:
        "Provision of various goods including office supplies, equipment, ICT hardware, and branded materials.",
      delay: "0s",
    },
    {
      title: "Provision of Services",
      img: "/images/services1.jpeg",
      description:
        "Professional services such as consulting, training, auditing, marketing, and ICT support.",
      delay: "0.2s",
    },
    {
      title: "Works & Maintenance",
      img: "/images/service2.jpeg",
      description:
        "Construction, repairs, renovations, and maintenance of physical infrastructure and facilities.",
      delay: "0.4s",
    },
    {
      title: "Framework Agreements",
      img: "/images/services3.jpeg",
      description:
        "Prequalification for long-term supply, services partnerships, and annual procurement contracts.",
      delay: "0.6s",
    },
  ];

  const activeTenders = [
    {
      title: "Provision of ICT Equipment",
      ref: "MWSC/TDR/001/2025",
      deadline: "15 Feb 2025",
      delay: "0s",
    },
    {
      title: "Office Furniture Supply",
      ref: "MWSC/TDR/002/2025",
      deadline: "20 Feb 2025",
      delay: "0.2s",
    },
    {
      title: "Branch Office Renovation Works",
      ref: "MWSC/TDR/003/2025",
      deadline: "5 Mar 2025",
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
            Tenders
          </h1>
          <p
            className="lead mt-3 animate__animated animate__fadeInUp animate__delay-1s mx-auto"
            style={{ maxWidth: "750px" }}
          >
            Explore current tender opportunities and procurement notices available
            to qualified suppliers, contractors, and service providers.
          </p>
        </div>
      </section>

      {/* ============================ TENDER CATEGORIES ============================ */}
      <section className="py-5 bg-light">
        <div className="container-fluid text-center">
          <h2 className="fw-bold text-secondary mb-5">Tender Categories</h2>

          <div className="row row-cols-1 row-cols-md-4 g-4">
            {tenderCategories.map((item, index) => (
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

      {/* ============================ ACTIVE TENDERS ============================ */}
      <section className="py-5">
        <div className="container-fluid">
          <h2 className="fw-bold text-secondary text-center mb-5">
            Active Tender Notices
          </h2>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              {activeTenders.map((tender, index) => (
                <div
                  key={index}
                  className="p-4 mb-3 shadow-sm rounded animate__animated animate__fadeInUp"
                  style={{ animationDelay: tender.delay, backgroundColor: "white" }}
                >
                  <h5 className="fw-bold text-primary">{tender.title}</h5>
                  <p className="mb-1 text-muted">Reference: {tender.ref}</p>
                  <p className="mb-3 small">Deadline: {tender.deadline}</p>
                  <Link
                    to="/apply-tender"
                    className="btn btn-primary btn-sm fw-bold"
                    style={{ backgroundColor: "#151269", borderColor: "#151269" }}
                  >
                    View Details
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
          }}
          >
            Partner With Us Through Fair Procurement
          </h2>
          <p className="lead mb-4">
            We uphold transparent, fair, and competitive procurement processes.
            Qualified suppliers are encouraged to participate.
          </p>
          <Link
            to="/contact"
            className="btn btn-light btn-lg text-primary fw-bold tenders-btn"
          >
            Contact Procurement Office
          </Link>
        </div>
      </section>
    </>
  );
}
