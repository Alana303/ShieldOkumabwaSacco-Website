import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="text-white pt-4 pb-2 mt-auto"
      style={{ backgroundColor: "#000", fontWeight: "600" }}
    >
      <div className="container-fluid">
        <div className="row justify-content-between text-center text-md-start">

          {/* ===== Left Column ===== */}
          <div className="col-md-4 mb-3 mb-md-0" style={{ paddingLeft: "40px" }}>
            <h5 className="fw-bold">Shield Okumbawa Community Sacco</h5>

            <img
              src="/images/logo.png"
              alt="Logo"
              style={{ maxHeight: "60px" }}
              className="mt-2"
            />

            <p className="text-light small mt-2">
              Empowering Women, Building Futures
            </p>
          </div>

          {/* ===== Middle Column (Centered) ===== */}
          <div
            className="col-md-4 mb-3 mb-md-0 d-flex flex-column align-items-center"
          >
            <h5 className="fw-bold text-center">Quick Links</h5>

            <ul className="list-unstyled small text-center">
              <li className="my-1">
                <Link to="/about" className="text-white text-decoration-none">
                  About Us
                </Link>
              </li>
              <li className="my-1">
                <Link to="/publications" className="text-white text-decoration-none">
                  Publications
                </Link>
              </li>
              <li className="my-1">
                <Link to="/regulatory" className="text-white text-decoration-none">
                  Regulatory Info
                </Link>
              </li>
              <li className="my-1">
                <Link to="/contact" className="text-white text-decoration-none">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* ===== Right Column ===== */}
          <div
            className="col-md-4"
            style={{ paddingRight: "40px" }}
          >
            <h5 className="fw-bold text-md-end text-center">Connect With Us</h5>

            <div className="mb-2 text-md-end text-center">
              <a href="#" className="text-white me-3">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="bi bi-twitter fs-5"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-instagram fs-5"></i>
              </a>
            </div>

            <p className="small text-light text-md-end text-center mb-1">
              Email: info@shieldokumbawasacco.com
            </p>
            <p className="small text-light text-md-end text-center mb-0">
              Phone: +254 711 130 000
            </p>
          </div>
        </div>
        {/* ===== Divider Line (White, Full Width) ===== */}
        <hr
          className="mt-3 mb-2"
          style={{
            borderTop: "3px solid white",
            opacity: 1,
            width: "100vw",
            marginLeft: "calc(50% - 50vw)",
          }}
        />

        {/* ===== Copyright Row ===== */}
        <div
          className="text-center small"
          style={{ color: "white", fontWeight: "700" }}
        >
          © Shield Okumbawa Sacco. All Rights Reserved.
          <br />
          Since 2020.
        </div>

      </div>
    </footer>
  );
}
