import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav class="main-navbar navbar navbar-expand-lg navbar-light">
        {/* <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button> --> */}
        <Link to='/' class="navbar-brand main-logo white-logo" onClick={() => window.location.reload()}>
          <img src="asstes/image/white-logo.svg" alt="" />
        </Link>
        {/* <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
            <a class="nav-item nav-link" href="#">
              Features
            </a>
            <a class="nav-item nav-link" href="#">
              Pricing
            </a>
            <a class="nav-item nav-link disabled" href="#">
              Disabled
            </a>
          </div>
        </div> */}
      </nav>
    </header>
  );
};

export default Header;
