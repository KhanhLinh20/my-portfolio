import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        <a className="navbar-brand text-white fw-bold" href="#">Khanh_Linh_Portfolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link text-white" href="#">About</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Skills</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Projects</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Contact</a></li>
          </ul>
        </div>
        <div className="d-flex">
          <a href="#" className="me-3 text-white"><i className="bi bi-instagram"></i></a>
          <a href="#" className="text-white"><i className="bi bi-facebook"></i></a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
