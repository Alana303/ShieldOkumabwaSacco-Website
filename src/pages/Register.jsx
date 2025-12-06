import { useState } from "react";
import "animate.css";
import { Link } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      {/* FULL WIDTH REGISTER SECTION */}
      <section
        className="container-fluid"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #151269, #3b82f6)",
        }}
      >
        <div className="row g-0 h-100">

          {/* LEFT SIDE — Branding / Illustration */}
          <div
            className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center animate__animated animate__fadeInLeft"
            style={{
              background: "#151269",
              color: "white",
              padding: "40px",
            }}
          >
            <div className="text-center px-4">
              <img
                src="/images/logo.png"
                style={{ width: "65%", maxWidth: "300px" }}
                alt="Register Illustration"
                className="animate__animated animate__pulse animate__infinite animate__slow"
              />
              <h1 className="fw-bold mt-4" style={{color: "white"}}>Welcome to Shield Okumbawa Sacco</h1>
              <p className="mt-3 lead">
                Driving women’s financial empowerment through secure savings and sustainable growth.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE — Form */}
          <div
            className="col-lg-6 d-flex align-items-center justify-content-center animate__animated animate__fadeInRight"
            style={{ padding: "40px" }}
          >
            <div
              className="card shadow-lg border-0"
              style={{
                width: "100%",
                maxWidth: "520px",
                borderRadius: "22px",
              }}
            >
              <div className="card-body p-5">

                <h2 className="text-center fw-bold mb-4" style={{ color: "#151269" }}>
                  Become a Member
                </h2>

                <form onSubmit={handleRegister}>
                  <div className="row">

                    {/* Full Name */}
                    <div className="col-md-6 mb-3">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="fullname"
                          placeholder="Full Name"
                          required
                        />
                        <label htmlFor="fullname" style={{ color: "#151269", fontWeight: "bold" }}>
                          Full Name
                        </label>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="col-md-6 mb-3">
                      <div className="form-floating">
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          placeholder="Phone Number"
                          required
                        />
                        <label htmlFor="phone" style={{ color: "#151269", fontWeight: "bold" }}>
                          Phone Number
                        </label>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="col-md-6 mb-3">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Email"
                          required
                        />
                        <label htmlFor="email" style={{ color: "#151269", fontWeight: "bold" }}>
                          Email Address
                        </label>
                      </div>
                    </div>

                    {/* ID */}
                    <div className="col-md-6 mb-3">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="idno"
                          placeholder="ID Number"
                          required
                        />
                        <label htmlFor="idno" style={{ color: "#151269", fontWeight: "bold" }}>
                          National ID Number
                        </label>
                      </div>
                    </div>

                    {/* Password */}
                    <div className="col-md-6 mb-3 position-relative">
                      <div className="form-floating">
                        <input
                          type={showPassword ? "text" : "password"}
                          className="form-control"
                          id="password"
                          placeholder="Password"
                          required
                        />
                        <label htmlFor="password" style={{ color: "#151269", fontWeight: "bold" }}>
                          Password
                        </label>
                      </div>

                      <span
                        style={{
                          position: "absolute",
                          right: "15px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          cursor: "pointer",
                          color: "#151269",
                          fontSize: "18px",
                        }}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? "🙈" : "👁️"}
                      </span>
                    </div>

                    {/* Confirm Password */}
                    <div className="col-md-6 mb-3 position-relative">
                      <div className="form-floating">
                        <input
                          type={showConfirm ? "text" : "password"}
                          className="form-control"
                          id="confirm"
                          placeholder="Confirm Password"
                          required
                        />
                        <label htmlFor="confirm" style={{ color: "#151269", fontWeight: "bold" }}>
                          Confirm Password
                        </label>
                      </div>

                      <span
                        style={{
                          position: "absolute",
                          right: "15px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          cursor: "pointer",
                          color: "#151269",
                          fontSize: "18px",
                        }}
                        onClick={() => setShowConfirm(!showConfirm)}
                      >
                        {showConfirm ? "🙈" : "👁️"}
                      </span>
                    </div>
                  </div>

                  {/* Register Button */}
                  <button
                    type="submit"
                    className="btn btn-primary w-100 btn-lg fw-bold mt-3"
                    style={{ backgroundColor: "#151269" }}
                  >
                    Register
                  </button>
                </form>

                <p className="text-center mt-4">
                  Already have an account?{" "}
                  <Link to="/login" className="fw-bold" style={{ color: "#151269" }}>
                    Login Here
                  </Link>
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS MODAL */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-4 text-center">
              <h3 className="fw-bold text-success">Registration Successful</h3>
              <p className="text-muted">Welcome to Shield Okumbawa Sacco!</p>
              <button
                className="btn btn-primary"
                style={{ backgroundColor: "#151269" }}
                onClick={() => setShowModal(false)}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
