import React from "react";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <header style={{ backgroundColor: "#000000ff", color: "#e5e5e5ff", padding: "20px" }}>
      <nav>
        <ul className="nav nav-tabs" style={{ color: "#e5e5e5ff" }}>
          <h2 style={{ color: "#e5e5e5ff" }}>Alan Pereyro</h2>
          <li className="nav-item">
            <a
              style={{ color: "#e5e5e5ff", transition: "color 0.3s" }}
              href="#about"
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              style={{ color: "#e5e5e5ff", transition: "color 0.3s" }}
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              style={{ color: "#e5e5e5ff", transition: "color 0.3s" }}
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <style>
        {`
        .nav-link:hover,
        .nav-link:active {
          color: #14213dff;
        }
        `}
      </style>
    </header>
  );
}

export default Navbar;
