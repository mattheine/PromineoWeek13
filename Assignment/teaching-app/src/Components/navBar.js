import React from 'react';

export default class NavBar extends React.Component{ 
    render(){
        return(
            <nav className=" navbar-fixed-top mt-3 curve navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
            <a className="navbar-brand" href="assignment.html">
              <img
                src="logo.png"
                style={{ width: "7rem", height: "7rem" }}
                alt="Matt Heine"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link px-1" href="assignment.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-md-5 px-sm-1 px-lg-5" href="about.html">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-1" href="info.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          
        );
    }
}