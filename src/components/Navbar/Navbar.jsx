import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar-component">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/transactions">Transactions</NavLink>
    </nav>
  );
}
