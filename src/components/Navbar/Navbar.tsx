// css
import "./Navbar.css";

// react-router-dom
import { NavLink } from "react-router-dom";

// JSX
import type { JSX } from "react";

//--------------------------------------------------------------------------------------------------//

export default function Navbar(): JSX.Element {
  return (
    <nav className="navbar-component">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/transactions">Transactions</NavLink>
    </nav>
  );
}
