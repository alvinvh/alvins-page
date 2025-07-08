import React from "react";

function Footer() {
  return (
    <div className="footer">
      <footer className="pt-5">
        <div className="row">
          <div className="col col-md-4 mb-3 footer-content">
            <h5>Alvin Handoko</h5>
            <ul className="nav flex-column">
              <li className="mb-2">
                <p className="footer-link">
                  Full Stack Developer & Machine Learning Enthusiast based in Perth, specialized in creating modern web applications.
                </p>
              </li>
            </ul>
          </div>
          <div className="col col-md-4 mb-3 footer-content">
            <h5>Navigation</h5>
            <ul className="nav flex-column">
              <li className="mb-2">
                <a href="/" className="footer-link">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#about" className="footer-link">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#project" className="footer-link">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div id="contact" className="col col-md-4 mb-3 footer-content">
            <h5>Connect</h5>
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <a href="https://github.com/alvinvh" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github h-4 w-4" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>
              <a href="https://linkedin.com/in/alvinvh" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin h-5 w-5" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="mailto:alvinvarianto18@gmail.com" className="footer-link" aria-label="Email">
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
              </a>
              <a href="tel:+61449710223" className="footer-link" aria-label="Phone">
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0 1 22 16.92z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 mt-4 border-top">
          <p>© 2025 Alvin Handoko. All rights reserved.</p>
          <p>
            Made with ❤️ using{" "}
            React
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
