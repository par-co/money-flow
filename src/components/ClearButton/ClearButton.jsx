import "./ClearButton.css";

export default function ClearButton({
  initialTransactions,
  transactions,
  setTransactions,
}) {
  const resetTransactions = () => {
    const updatedTransactions = initialTransactions;
    setTransactions(updatedTransactions);
  };

  return transactions.length > 1 ? (
    <button className="clear-btn" onClick={resetTransactions}>
      Clear the list
    </button>
  ) : null;
}
