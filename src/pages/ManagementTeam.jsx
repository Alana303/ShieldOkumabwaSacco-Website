// C:\Users\Jeff\Documents\sacco-react\src\pages\ManagementTeam.jsx

import { Link } from "react-router-dom";
import "animate.css";

export default function ManagementTeam() {
  const team = [
    {
      name: "Janet Anyango",
      title: "Chief Executive Officer (CEO)",
      img: "/images/romeo2.jpeg",
      bio: "Oversees the SACCO’s overall strategic execution, ensuring impactful operations and organizational growth.",
      delay: "0s",
    },
    {
      name: "Rachel Tum",
      title: "Finance & Administration Manager",
      img: "/images/romeo1.jpeg",
      bio: "Leads financial planning, compliance, and effective allocation of member resources with transparency.",
      delay: "0.2s",
    },
    {
      name: "Lucy Muthoni",
      title: "Customer Relations Manager",
      img: "/images/romeo3.jpeg",
      bio: "Ensures exceptional member experience by fostering strong communication and service delivery.",
      delay: "0.4s",
    },
    {
      name: "Mercy Odinga",
      title: "Loans & Credit Manager",
      img: "/images/romeo4.jpeg",
      bio: "Manages loan products, credit assessments, and ensures responsible lending aligned with member needs.",
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
          <h1 className="display-4 fw-bold animate__animated animate__fadeInDown"
          style={{
            color: "white",
            fontWeight: "bolder",
          }}
          >
            Management Team
          </h1>
          <p
            className="lead mt-3 animate__animated animate__fadeInUp animate__delay-1s mx-auto"
            style={{ maxWidth: "700px" }}
          >
            Meet the professionals who run our day-to-day operations with
            excellence, commitment, and a deep passion for empowering women
            through sustainable financial solutions.
          </p>
        </div>
      </section>

      {/* ============================ TEAM SECTION ============================ */}
      <section className="py-5 bg-light">
        <div className="container-fluid text-center">
          <h2 className="fw-bold text-secondary mb-5">Our Dedicated Management</h2>

          <div className="row row-cols-1 row-cols-md-4 g-4">
            {team.map((member, index) => (
              <div className="col" key={index}>
                <div
                  className={`card h-100 border-0 shadow-sm p-3 animate__animated animate__fadeInUp`}
                  style={{ animationDelay: member.delay }}
                >
                  <div className="text-center">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="rounded-circle mb-3 shadow"
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

                  <h4 className="fw-bold text-primary"style={{ color: "blue !important", fontWeight:"bolder", }}>{member.name}</h4>
                  <p className=""style={{color: "black",fontWeight: "bolder",}}>{member.title}</p>


                  <p className="small mt-2" style={{color: "black", fontWeight: "bolder",}}>{member.bio}</p>
                </div>
              </div>
            ))}
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
          }}>
            Excellence in Service Delivery
          </h2>
          <p className="lead mb-4">
            Our management team works tirelessly to ensure efficiency,
            transparency, and high-quality service to all members.
          </p>
          <Link
            to="/register"
            className="btn btn-light btn-lg text-primary fw-bold join-sacco-btn"
          >
            Join the SACCO
          </Link>
        </div>
      </section>
    </>
  );
}
