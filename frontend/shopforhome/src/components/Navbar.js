import React from "react";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BsBookmarkHeart } from "react-icons/bs";
import { GrCart } from "react-icons/gr";
import { GrDocumentUpdate } from "react-icons/gr";

const role = "admin";
const Navbar = () => {
  // const navigate = useNavigate()

  return (
    <div className="nav-container">
      <div className="logo">
        <h2>ShopForHome</h2>
      </div>
      <nav className="row">
        <div className="nav-items col">
          <p>
            <NavLink to="/" className="NavLink">
              Home
            </NavLink>
          </p>
          <p>
            <NavLink to="about" className="NavLink">
              About
            </NavLink>
          </p>
          <p>
            <NavLink to="products" className="NavLink">
              Products
            </NavLink>
          </p>
        </div>
        <ul className="col">
          <li className="item">
            <BsBookmarkHeart className="icons" />
          </li>
          <li className="item">
            <GrCart className="icons cart-icon" />
          </li>
          {role === "admin" ? (
            <li className="item">
              <NavLink to="bulkupload" className="NavLink">
                <GrDocumentUpdate className="icons cart-icon" />
              </NavLink>
            </li>
          ) : (
            <></>
          )}
          <li className="item">
            <div class="dropdown">
              <div
                class=" dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <CgProfile className="icons" />
              </div>

              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Signup
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Login
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    others
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
