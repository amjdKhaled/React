import React from "react";
import Logo from "../assets/Logo.png";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div
          className="container-fluid"
          style={{ backgroundColor: "#1e1b2e", color: "#e0d4fc" }}>
          <img
            src={Logo}
            className="rounded mx-auto d-block "
            style={{
              width: "100px",
              height: "100px",
            }}></img>
          <a className="navbar-brand text-white" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#">
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-white" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item text-white" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white" href="#">
                      Another action
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item text-white" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled text-white"
                  aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex text-white" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <button
                className="btn btn-light-success text-white"
                type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
