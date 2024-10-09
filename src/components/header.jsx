import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header className="navbar navbar-expand-lg navbar-dark bg-custom fixed-top">
          <div className="container-fluid d-flex justify-content-between align-items-center">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>         
            <div className="collapse navbar-collapse flex-grow-1 text-center" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">About</a>
                </li>
              </ul>
            </div>
            <div className="logo-container mx-auto">
              <img src="/logoJMK.svg" className="logo" alt="JMK Logo" />
            </div>
          </div>
        </header>
      );
    };
  
  

export default Header;
