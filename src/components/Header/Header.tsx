// css
import "./Header.css";

// components
import Navbar from "../Navbar/Navbar";

// JSX
import type { JSX } from "react";

//--------------------------------------------------------------------------------------------------//

type THeaderProps = { title: string };

export default function Header({ title }: THeaderProps): JSX.Element {
  return (
    <header className="header-component">
      <h1 className="title">{title}</h1>
      <Navbar />
    </header>
  );
}
