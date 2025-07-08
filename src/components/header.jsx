import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">Alvin Handoko</a>
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
          <div className="collapse navbar-collapse navbar-mid" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#project">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contacts</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </header>
  );
}

export default Header;