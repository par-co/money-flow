import "./ErrorPage.css";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <main className="error">
      <p>{error.message}</p>
    </main>
  );
}
