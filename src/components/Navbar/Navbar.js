import React from "react";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <header style={{ backgroundColor: "#000000ff", color: "#e5e5e5ff", padding: "20px" }}>
      <nav>
        <ul className="nav nav-tabs" style={{ color: "#e5e5e5ff", backgroundColor: "#000000ff" }}>
          <h2 style={{ color: "#e5e5e5ff" }}>Alan Pereyro</h2>
          <li className="nav-item">
            <a
              className={`nav-link ${currentPage === 'About' ? 'active' : ''}`}
              href="#about"
              onClick={() => handlePageChange('About')}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${currentPage === 'Portfolio' ? 'active' : ''}`}
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${currentPage === 'Contact' ? 'active' : ''}`}
              href="#contact"
              onClick={() => handlePageChange('Contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <style>
        {`
        .nav-link:hover,
        .nav-link.active {
          color: #fca311ff !important;
        }
        `}
      </style>
    </header>
  );
}

export default Navbar;
