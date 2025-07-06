// css
import "./Warning.css";

// types
import type { TWarningMessage } from "../../types";

// JSX
import type { JSX } from "react";

//--------------------------------------------------------------------------------------------------//

type TWarningProps = { message: TWarningMessage };

export default function Warning({ message }: TWarningProps): JSX.Element {
  return (
    <div className="transaction-form-warning">
      <p className="transaction-form-warning-text">{message}</p>
    </div>
  );
}
