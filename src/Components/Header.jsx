import React from "react";

const Header = ({ itemCount }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#!">
          GUVI ADD TO CART TASK
        </a>
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="d-flex">
          <label className="btn btn-outline-dark">
            <i className="fa-solid fa-cart-shopping me-2"></i>
            Cart
            <span className="badge bg-dark text-white ms-1 rounded-pill">
              {itemCount}
            </span>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Header;
