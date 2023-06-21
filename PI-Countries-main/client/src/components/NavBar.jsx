import { Link } from "react-router-dom";
import React from "react";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Landing</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/country">Countries</Link>
        </li>
        <li>
          <Link to="/activities">Activities</Link>
        </li>
      </ul>
    </nav>
  );
};

