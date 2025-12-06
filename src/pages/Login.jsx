import { useState } from "react";
import "animate.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      {/* FULL WIDTH LOGIN SECTION */}
      <section
        className="container-fluid"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #151269, #3b82f6)",
        }}
      >
        <div className="row g-0 h-100">

          {/* LEFT SIDE — Illustration / Branding */}
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
                style={{ width: "65%", maxWidth: "300px", }}
                alt="Illustration"
                className="animate__animated animate__pulse animate__infinite animate__slow"
              />
              <h1 className="fw-bold mt-4" style={{color: "white"}}>
                Welcome to Shield Okumbawa Sacco
              </h1>
              <p className="mt-3 lead">
                Secure. Reliable. Empowering Women Financially.
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
                maxWidth: "500px",
                borderRadius: "22px",
              }}
            >
              <div className="card-body p-4">

                <h2 className="text-center fw-bold mb-3" style={{ color: "#151269" }}>
                  Member Login
                </h2>
                <p className="text-center text-muted mb-4">
                  Access your secure member dashboard
                </p>

                <form onSubmit={handleLogin}>
                  {/* EMAIL */}
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="example@mail.com"
                      required
                    />
                    <label htmlFor="email" style={{ color: "#151269", fontWeight: "bold" }}>
                      Email Address
                    </label>
                  </div>

                  {/* PASSWORD */}
                  <div className="form-floating mb-3 position-relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      id="password"
                      placeholder="password"
                      required
                    />
                    <label htmlFor="password" style={{ color: "#151269", fontWeight: "bold" }}>
                      Password
                    </label>

                    <span
                      style={{
                        position: "absolute",
                        right: "12px",
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

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className="btn btn-primary w-100 btn-lg fw-bold"
                    style={{ backgroundColor: "#151269" }}
                  >
                    Login
                  </button>
                </form>

                <p className="text-center mt-3">
                  Don't have an account?{" "}
                  <Link to="/register" className="fw-bold" style={{ color: "#151269" }}>
                    Register Now
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
              <h3 className="fw-bold text-success">Login Successful</h3>
              <p className="text-muted">Welcome back!</p>
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
