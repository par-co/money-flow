// css
import "./ErrorPage.css";

// hooks
import { useRouteError } from "react-router-dom";

// functions
import { getErrorMessage } from "../../utilities/functions/getErrorMessage";

// JSX
import type { JSX } from "react";

//--------------------------------------------------------------------------------------------------//

export default function ErrorPage(): JSX.Element | null {
  const error = useRouteError();

  if (!error) return null;

  const message = getErrorMessage(error);

  console.error("Error message:", message);

  return (
    <main className="error">
      <h2>Something went wrong.</h2>
      <p>{message}</p>
    </main>
  );
}
