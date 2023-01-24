import React from "react";
import { useState } from "react";
import { NavLink , Link} from "react-router-dom";

const Navbar = () => {
  const [display, setDisplay] = useState(false);

  const handleMenuOpen = () => {
    setDisplay((prev) => !prev);
  };
  const handleMenuClose = () => {
    setDisplay((prev) => !prev);
  };

  return (
    <div className=" ">
      <div className=" navBar fixed-top">
        <div className=" container py-3   d-flex justify-content-between mx-auto">
          <Link className="navbar-brand" to="/">
            <h3 className="text-light">Workaholic</h3>
          </Link>

          <ul className="navList d-flex list-unstyled justify-content-between ">
            <li className="">
              <Link className="navLink" to="/">
                Home
              </Link>
            </li>
            <li className="">
              <Link className="navLink" to="/jobs">
                Jobs
              </Link>
            </li>

            <li className="">
              <Link className="navLink" to="/signup">
                SignUp
              </Link>
            </li>

            <li className="">
              <Link className="navLink" to="/signin">
                Sign In
              </Link>
            </li>
            <div onClick={handleMenuOpen} className="">
              {" "}
              <i className="menu text-light bi bi-list" />
            </div>
          </ul>

          <div>
            {display && (
              <ul className="dropDown list-unstyled">
                <div onClick={handleMenuClose} className="menuOpen">
                  {" "}
                  <i className="bi bi-x-lg" />{" "}
                </div>
                <li className="">
                  <Link onClick={handleMenuClose} className="link" to="/">
                    Home
                  </Link>
                </li>
                <li className="">
                  <Link onClick={handleMenuClose} className="link" to="/jobs">
                    Jobs 
                  </Link>
                </li>

                <li className="">
                  <Link onClick={handleMenuClose} className="link" to="/signin">
                    Sign In
                  </Link>
                </li>

                <li className="">
                  <Link onClick={handleMenuClose} className="link" to="/signup">
                    SignUp
                  </Link>
                </li>

                {/* <li className="" >
                <i className="bi bi-cart2 navIcons" />
            </li> */}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
