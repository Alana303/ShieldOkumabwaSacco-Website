import { Link } from "react-router-dom";
import "animate.css";

export default function Complaints() {
  const complaintSteps = [
    {
      title: "1. Submit Your Complaint",
      icon: "📩",
      description:
        "Share your concern through our complaint form, email, or by visiting any branch.",
      delay: "0s",
    },
    {
      title: "2. Acknowledgment",
      icon: "✅",
      description:
        "You will receive an acknowledgment confirming receipt of your complaint within 24 hours.",
      delay: "0.2s",
    },
    {
      title: "3. Review & Investigation",
      icon: "🕵️‍♀️",
      description:
        "Our team reviews your complaint and investigates it with fairness, confidentiality, and professionalism.",
      delay: "0.4s",
    },
    {
      title: "4. Resolution & Feedback",
      icon: "📞",
      description:
        "We provide the final resolution and feedback through your preferred communication channel.",
      delay: "0.6s",
    },
  ];

  const contacts = [
    {
      label: "Email",
      value: "complaints@shieldokumbawasacco.org",
    },
    {
      label: "Phone",
      value: "+254 711 130 000",
    },
    {
      label: "Office Hours",
      value: "Mon – Fri, 8:00 AM – 5:00 PM",
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
            style={{ color: "white", fontWeight: "bolder" }}
          >
            Complaints & Feedback
          </h1>
          <p
            className="lead mt-3 animate__animated animate__fadeInUp animate__delay-1s mx-auto"
            style={{ maxWidth: "750px" }}
          >
            We are committed to serving you better. Share your feedback or
            concerns, and we will ensure prompt, fair, and transparent
            resolution.
          </p>
        </div>
      </section>

      {/* ============================ COMPLAINT PROCESS ============================ */}
      <section className="py-5 bg-light">
        <div className="container-fluid text-center">
          <h2 className="fw-bold text-secondary mb-5">
            Our Complaint Handling Process
          </h2>

          <div className="row row-cols-1 row-cols-md-4 g-4">
            {complaintSteps.map((step, index) => (
              <div className="col" key={index}>
                <div
                  className="card h-100 border-0 shadow-sm p-4 animate__animated animate__fadeInUp"
                  style={{ animationDelay: step.delay }}
                >
                  <div
                    className="fs-1 mb-3"
                    style={{
                      color: "#151269",
                    }}
                  >
                    {step.icon}
                  </div>
                  <h5 className="fw-bold text-primary">{step.title}</h5>
                  <p className="small mt-2"  style={{color: "black", fontWeight: "bolder",}}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ CONTACT INFORMATION ============================ */}
      <section className="py-5">
        <div className="container-fluid text-center">
          <h2 className="fw-bold text-secondary mb-4">
            How to Reach the Complaints Office
          </h2>
          <p className="mb-5 mx-auto" style={{ maxWidth: "700px" , color: "black", fontWeight: "bolder"}}>
            Our Complaints & Resolution team is available to listen and assist
            you. Use any of the contacts below to reach us easily.
          </p>

          <div className="row justify-content-center">
            <div className="col-lg-6">
              <ul className="list-group shadow-sm">
                {contacts.map((item, index) => (
                  <li
                    key={index}
                    className="list-group-item p-3 d-flex justify-content-between align-items-center"
                    style={{
                      fontWeight: "500",
                    }}
                  >
                    {item.label}
                    <span className="text-primary fw-bold">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            to="/about/contact"
            className="btn btn-primary mt-4 fw-bold"
            style={{ backgroundColor: "#151269", borderColor: "#151269" }}
          >
            Contact Support Team
          </Link>
        </div>
      </section>

      {/* ============================ CTA SECTION ============================ */}
      <section className="bg-primary text-white py-5 text-center">
        <div className="container-fluid">
          <h2
            className="display-6 fw-bold mb-3"
            style={{ color: "white", fontWeight: "bolder" }}
          >
            Your Voice Matters
          </h2>
          <p className="lead mb-4">
            Every complaint helps us improve. Thank you for helping us serve you
            better.
          </p>
          <Link
            to="/about/contact"
            className="btn btn-light btn-lg text-primary fw-bold feedbackk-btn"
          >
            Submit Feedback
          </Link>
        </div>
      </section>
    </>
  );
}
