import "./Header.css";
import Navbar from "../Navbar/Navbar";

export default function Header({ title }) {
  return (
    <header className="header-component">
      <h1 className="title">{title}</h1>
      <Navbar />
    </header>
  );
}
