// C:\\Users\\Jeff\\Documents\\sacco-react\\src\\pages\\PublicConsultations.jsx

import { useEffect } from "react";
import "animate.css";

export default function PublicConsultations() {
  useEffect(() => {
    // Trigger animations on load
    const animatedElements = document.querySelectorAll(".animate-on-load");
    animatedElements.forEach((el) => {
      el.classList.add("animate__animated", "animate__fadeInUp");
    });
  }, []);

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: "#f8f9fa" }}>
      {/* Hero Section */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h1
            className="display-4 fw-bold animate-on-load"
            style={{
              color: "blue",
              fontWeight: "bolder",
            }}
          >
            Public Consultations
          </h1>
          <p
            className="lead mt-3 animate-on-load"
            style={{ maxWidth: "800px", margin: "0 auto", color: "black", fontWeight: "bolder", }}
          >
            Shield Okumbawa Community Sacco actively engages members and the public
            when shaping regulatory policies, ensuring transparency and participation.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-9">
          <div className="p-4 p-md-5 bg-white shadow rounded-3 animate-on-load">
            <h3 className="mb-4 fw-bold" style={{ color: "blue", fontWeight:"bolder", }}>
              Our Approach to Public Consultations
            </h3>

            <p style={{color: "black", fontWeight: "bolder",}}>
              Public consultations help ensure that the Sacco’s rules and operations
              reflect the needs, expectations, and rights of our members and the
              community. Through structured forums, digital feedback channels, and
              regularly scheduled stakeholder engagements, we gather diverse input
              that informs policy development.
            </p>

            <h4 className="mt-4 fw-bold" style={{ color: "blue", fontWeight:"bolder", }}>
              What We Aim to Achieve
            </h4>
            <ul style={{color: "black", fontWeight: "bolder",}}>
              <li>Enhance transparency in regulatory development.</li>
              <li>Encourage active member and public participation.</li>
              <li>Ensure policies align with community and financial sector needs.</li>
              <li>Promote accountability in governance and decision-making.</li>
            </ul>

            <h4 className="mt-4 fw-bold" style={{ color: "blue", fontWeight: "bolder", }}>
              How Consultations Are Conducted
            </h4>
            <p style={{color: "black", fontWeight: "bolder",}}>We use multiple channels to ensure accessibility and inclusivity:</p>
            <ul style={{color: "black", fontWeight: "bolder",}}>
              <li>Member Annual General Meetings (AGMs)</li>
              <li>Public stakeholder forums</li>
              <li>Online feedback platforms</li>
              <li>Targeted outreach to community groups</li>
            </ul>

            <p style={{color: "black", fontWeight: "bolder",}} className="mt-4">
              Feedback gathered through these channels directly informs Sacco
              policies, operational adjustments, and our strategic development roadmap.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
