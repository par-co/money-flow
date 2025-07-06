// css
import "./AddButton.css";

// JSX
import type { JSX } from "react";

//--------------------------------------------------------------------------------------------------//

export default function AddButton(): JSX.Element {
  return (
    <button className="btn" type="submit">
      Add
    </button>
  );
}
