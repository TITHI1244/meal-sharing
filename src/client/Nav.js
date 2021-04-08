import React from "react";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
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
            <li>Home</li>
            <li>About</li>
            <li>Meals</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
