import React from "react";
import "./navbar.css"

function Navbar({ currentPage, handlePageChange }) {
  return (
    <header style={{ backgroundColor: "#000000ff", color: "#e5e5e5ff", padding: "20px" }}>
      <nav>
          <h2 style={{ color: "#e5e5e5ff", textAlign:"center" }}>Alan Pereyro</h2>
        <ul className="nav nav-tabs" style={{ color: "#e5e5e5ff", backgroundColor: "#000000ff",  }}>
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
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
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
