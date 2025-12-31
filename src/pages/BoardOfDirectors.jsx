// C:\Users\Jeff\Documents\sacco-react\src\pages\BoardOfDirectors.jsx

import { Link } from "react-router-dom";

export default function BoardOfDirectors() {
  const directors = [
    {
      name: "David Odhiambo",
      title: "Chairperson",
      img: "/images/businessman.jpeg",
      bio: "Providing strategic leadership and guiding the SACCO’s growth through inclusive governance and long-term community development.",
      delay: "0s",
    },
    {
      name: "Grace Mwikali",
      title: "Vice Chairperson",
      img: "/images/image5.jpeg",
      bio: "Supporting member-focused initiatives and strengthening transparency and accountability across all governance functions.",
      delay: "0.2s",
    },
    {
      name: "Elizabeth Wanjiku",
      title: "Secretary",
      img: "/images/image3.jpeg",
      bio: "Overseeing documentation, communication processes, and the effective coordination of SACCO activities.",
      delay: "0.4s",
    },
    {
      name: "Mary Achieng",
      title: "Treasurer",
      img: "/images/image6.jpeg",
      bio: "Managing financial operations and ensuring responsible, transparent, and sustainable use of SACCO resources.",
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
            style={{
              color: "white",
              fontWeight: "bolder",
            }}
          >
            Board of Directors
          </h1>
          <p
            className="lead mt-3 animate__animated animate__fadeInUp animate__delay-1s mx-auto"
            style={{ maxWidth: "700px" }}
          >
            Meet the dedicated leaders who guide our SACCO with integrity,
            accountability, and a commitment to inclusive community growth.
          </p>
        </div>
      </section>

      {/* ============================ TEAM SECTION ============================ */}
      <section className="py-5 bg-light">
        <div className="container-fluid text-center">
          <h2 className="fw-bold text-secondary mb-5">
            Our Leadership Team
          </h2>

          <div className="row row-cols-1 row-cols-md-4 g-4">
            {directors.map((director, index) => (
              <div className="col" key={index}>
                <div
                  className="card h-100 border-0 shadow-sm p-3 animate__animated animate__fadeInUp"
                  style={{ animationDelay: director.delay }}
                >
                  <div className="text-center">
                    <img
                      src={director.img}
                      alt={director.name}
                      className="rounded-circle mb-3 shadow"
                      style={{
                        width: "220px",
                        height: "220px",
                        objectFit: "cover",
                        border: "4px solid #151269",
                        boxShadow: "0 0 15px rgba(0,0,0,0.15)",
                        transition:
                          "transform 0.4s ease, box-shadow 0.4s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = "scale(1.08)";
                        e.target.style.boxShadow =
                          "0 0 22px rgba(0,0,0,0.25)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = "scale(1)";
                        e.target.style.boxShadow =
                          "0 0 15px rgba(0,0,0,0.15)";
                      }}
                    />
                  </div>

                  <h4 className="fw-bold text-primary">
                    {director.name}
                  </h4>
                  <p
                    style={{ color: "black", fontWeight: "bolder" }}
                  >
                    {director.title}
                  </p>
                  <p
                    className="small mt-2"
                    style={{ color: "black", fontWeight: "bolder" }}
                  >
                    {director.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ CTA SECTION ============================ */}
      <section className="bg-primary text-white py-5 text-center">
        <div className="container-fluid">
          <h2
            className="display-6 fw-bold mb-3"
            style={{
              color: "white",
              fontWeight: "bolder",
            }}
          >
            Strong Leadership, Strong Future
          </h2>
          <p className="lead mb-4">
            Our board is committed to transparency, accountability, and
            sustainable empowerment for all members.
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
