import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isAboutPage = location.pathname.startsWith("/about");

  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/images/logo.png" alt="Logo" className="me-2" />
            <span className="d-none d-md-inline">
              Shield Okumbawa <br />
              <span className="left-margin">Community Sacco</span>
            </span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  to="/"
                  style={{ color: "black", fontWeight: "bolder" }}
                >
                  Home
                </Link>
              </li>

              {/* About Us Dropdown — expanded only on About pages */}
              {!isAboutPage ? (
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/about" ? "active" : ""
                    }`}
                    to="/about"
                    style={{ color: "black", fontWeight: "bolder" }}

                  >
                    About Us
                  </Link>
                </li>
              ) : (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownAbout"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ color: "black", fontWeight: "bolder" }}
                  >
                    About Us
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownAbout"
                  >
                    <li>
                      <Link className="dropdown-item" to="/about/who-we-are" style={{ color: "black", fontWeight: "bolder" }}>
                        Who We Are
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/about/board-of-directors" style={{ color: "black", fontWeight: "bolder" }}

                      >
                        Board of Directors
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/about/management-team" style={{ color: "black", fontWeight: "bolder" }}
                      >
                        Management Team
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/about/strategic-plan"
                      style={{ color: "black", fontWeight: "bolder" }}>
                        Strategic Plan
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/about/service-charter" style={{ color: "black", fontWeight: "bolder" }}

                      >
                        Service Charter
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/about/careers" style={{ color: "black", fontWeight: "bolder" }}
>
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/about/tenders" style={{ color: "black", fontWeight: "bolder" }}
>
                        Tenders
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/about/contact" style={{ color: "black", fontWeight: "bolder" }}
>
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </li>
              )}

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/publications" ? "active" : ""
                  }`}
                  to="/publications"
                  style={{ color: "black", fontWeight: "bolder" }}

                >
                  Publications
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownReg"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "black", fontWeight: "bolder" }}

                >
                  Regulatory
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownReg"
                >
                  <li>
                    <Link className="dropdown-item" to="/regulatory/regulatoryframework"
                    style={{ color: "black", fontWeight: "bolder" }}
                    >
                      Regulatory Framework
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/regulatory/licensingauthorization"
                    style={{ color: "black", fontWeight: "bolder" }}>
                      Licensing & Authorization
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/regulatory/publicconsultations"
                    style={{ color: "black", fontWeight: "bolder" }}

                    >
                      Public Consultations
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/complaints" ? "active" : ""
                  }`}
                  to="/complaints"
                  style={{ color: "black", fontWeight: "bolder" }}

                >
                  Complaints
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link btn btn-primary text-white ms-lg-3"
                  to="/login"
                  style={{ color: "black", fontWeight: "bolder" }}

                >
                  Member Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
