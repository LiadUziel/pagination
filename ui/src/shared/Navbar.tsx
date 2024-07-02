import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/offset">Offset Pagination</Link>
        </li>
        <li>
          <Link to="/cursor">Cursor Pagination</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
