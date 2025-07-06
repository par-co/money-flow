// css
import "./Confirmation.css";

// types
import type { TConfirmation } from "../../types";

// JSX
import type { JSX } from "react";

//--------------------------------------------------------------------------------------------------//

type TConfirmationProps = { message: TConfirmation };

export default function Confirmation({
  message,
}: TConfirmationProps): JSX.Element {
  return <p className="transaction-form-confirmation">{message}</p>;
}
