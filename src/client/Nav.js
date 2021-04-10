import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li className="nav-logo">
          <NavLink to="/">
            <img
              src="https://docs.google.com/uc?export=download&id=1Ax3M9GU5H5h4Kvog5WbOxNQvbjUKmQj9"
              alt="logo"
              style={{ height: "2em" }}
            />
          </NavLink>
        </li>
        <li>
          <ul className="nav-links">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/meals">Meals</NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
