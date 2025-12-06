// C:\Users\Jeff\Documents\sacco-react\src\pages\Publications.jsx

import { Link } from "react-router-dom";
import "animate.css";

export default function Publications() {
  const categories = [
    {
      title: "Annual Reports",
      img: "/images/Report1.jpeg",
      description:
        "Detailed insights into our yearly performance, financial statements, milestones, and strategic achievements.",
      delay: "0s",
    },
    {
      title: "Newsletters",
      img: "/images/Report2.jpeg",
      description:
        "Quarterly updates featuring member stories, project highlights, financial education, and SACCO activities.",
      delay: "0.2s",
    },
    {
      title: "Financial Statements",
      img: "/images/Report4.jpeg",
      description:
        "Transparent reporting of audited statements, budget summaries, and financial disclosures.",
      delay: "0.4s",
    },
    {
      title: "Policies & Guides",
      img: "/images/Report3.jpeg",
      description:
        "Reference documents including policies, manuals, guidelines, and compliance frameworks.",
      delay: "0.6s",
    },
  ];

  const documents = [
    {
      title: "2024 Annual Report",
      date: "Released: 10 Jan 2025",
      file: "/docs/annual-report-2024.pdf",
      delay: "0s",
    },
    {
      title: "Q4 2024 Newsletter",
      date: "Released: 20 Dec 2024",
      file: "/docs/newsletter-q4-2024.pdf",
      delay: "0.2s",
    },
    {
      title: "2024 Audited Financial Statements",
      date: "Released: 05 Jan 2025",
      file: "/docs/financial-statements-2024.pdf",
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
            Publications
          </h1>
          <p
            className="lead mt-3 animate__animated animate__fadeInUp animate__delay-1s mx-auto"
            style={{ maxWidth: "750px" }}
          >
            Access official SACCO publications, reports, newsletters, and
            financial documents designed to keep members informed and empowered.
          </p>
        </div>
      </section>

      {/* ============================ PUBLICATION CATEGORIES ============================ */}
      <section className="py-5 bg-light">
        <div className="container-fluid text-center">
          <h2 className="fw-bold text-secondary mb-5">Publication Categories</h2>

          <div className="row row-cols-1 row-cols-md-4 g-4">
            {categories.map((item, index) => (
              <div className="col" key={index}>
                <div
                  className="card h-100 border-0 shadow-sm p-3 animate__animated animate__fadeInUp"
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

      {/* ============================ DOCUMENTS LIST ============================ */}
      <section className="py-5">
        <div className="container-fluid">
          <h2 className="fw-bold text-secondary text-center mb-5">
            Latest Publications
          </h2>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              {documents.map((doc, index) => (
                <div
                  key={index}
                  className="p-4 mb-3 shadow-sm rounded animate__animated animate__fadeInUp"
                  style={{ animationDelay: doc.delay, backgroundColor: "white" }}
                >
                  <h5 className="fw-bold text-primary">{doc.title}</h5>
                  <p className="text-muted small mb-2">{doc.date}</p>
                  <a
                    href={doc.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm fw-bold"
                    style={{ backgroundColor: "#151269", borderColor: "#151269" }}
                  >
                    View / Download
                  </a>
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
          }}>Stay Informed</h2>
          <p className="lead mb-4">
            Access our publications anytime and stay updated on our progress,
            performance, and community initiatives.
          </p>
          <Link
            to="/about/contact"
            className="btn btn-light btn-lg text-primary fw-bold publications-btn"
          >
            Request Printed Copies
          </Link>
        </div>
      </section>
    </>
  );
}
