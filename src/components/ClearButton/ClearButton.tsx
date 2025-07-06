// css
import "./ClearButton.css";

// types
import type { TTransactionsContext } from "../../types";

// JSX
import type { JSX } from "react";

//--------------------------------------------------------------------------------------------------//

type TClearButtonProps = Pick<
  TTransactionsContext,
  "initialTransactions" | "transactions" | "setTransactions"
>;

export default function ClearButton({
  initialTransactions,
  transactions,
  setTransactions,
}: TClearButtonProps): JSX.Element | null {
  if (transactions.length <= 1) return null;

  const resetTransactions = (): void => {
    const updatedTransactions = [...initialTransactions];
    setTransactions(updatedTransactions);
  };

  return (
    <button className="clear-btn" onClick={resetTransactions}>
      Clear the list
    </button>
  );
}
