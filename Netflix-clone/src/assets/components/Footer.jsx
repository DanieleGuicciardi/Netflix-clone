import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./Footer.css"; // File per gli stili personalizzati

const Footer = () => {
  return (
    <footer className="footer text-light py-4">
      <div className="container">
        <div className="row">
          {/* Colonna social e link */}
          <div className="col-12 col-md-3 mb-3 mb-md-0">
            {/* Icone social su una riga */}
            <div className="mb-3 d-flex justify-content-start gap-3">
              <a href="#" className="text-secondary">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-secondary">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-secondary">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-secondary">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
            {/* Testi su un'altra riga */}
            <ul className="list-unstyled">
              <li><a href="#" className="text-secondary">Audio and Subtitles</a></li>
              <li><a href="#" className="text-secondary">Media Center</a></li>
              <li><a href="#" className="text-secondary">Privacy</a></li>
              <li><a href="#" className="text-secondary">Contact us</a></li>
            </ul>
          </div>

          {/* Colonna 2 */}
          <div className="col-12 col-md-3 mb-3 mb-md-0">
            <ul className="list-unstyled">
              <li><a href="#" className="text-secondary">Audio Description</a></li>
              <li><a href="#" className="text-secondary">Investor Relations</a></li>
              <li><a href="#" className="text-secondary">Legal Notices</a></li>
            </ul>
          </div>

          {/* Colonna 3 */}
          <div className="col-12 col-md-3 mb-3 mb-md-0">
            <ul className="list-unstyled">
              <li><a href="#" className="text-secondary">Help Center</a></li>
              <li><a href="#" className="text-secondary">Jobs</a></li>
              <li><a href="#" className="text-secondary">Cookie Preferences</a></li>
            </ul>
          </div>

          {/* Colonna 4 */}
          <div className="col-12 col-md-3">
            <ul className="list-unstyled">
              <li><a href="#" className="text-secondary">Gift Cards</a></li>
              <li><a href="#" className="text-secondary">Terms of Use</a></li>
              <li><a href="#" className="text-secondary">Corporate Information</a></li>
            </ul>
          </div>
        </div>

        {/* Pulsante Service Code */}
        <div className="mt-3">
          <button className="btn btn-outline-secondary btn-sm">Service Code</button>
        </div>

        {/* Copyright */}
        <div className="mt-3">
          <p className="small text-secondary">© 1997-2023 Netflix, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
