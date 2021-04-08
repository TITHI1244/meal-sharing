import React from "react";

function Navigation() {
  return (
    <nav>
      <ul>
        <li className="nav-logo">
          <a href="#">
            <img
              src="https://docs.google.com/uc?export=download&id=1Ax3M9GU5H5h4Kvog5WbOxNQvbjUKmQj9"
              alt="logo"
              style={{ height: "2em" }}
            />
          </a>
        </li>
        <li>
          <ul className="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Meals</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
