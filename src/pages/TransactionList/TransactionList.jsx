import "./TransactionList.css";
import { useOutletContext } from "react-router-dom";
import ClearButton from "../../components/ClearButton/ClearButton";
import Total from "../../components/Total/Total";
import formatAmount from "../../utilities/functions/formatAmount";

export default function TransactionList() {
  const context = useOutletContext();

  if (!context) {
    return (
      <main className="transaction-list-main">
        <p className="transaction-list-loading">Loading...</p>
      </main>
    );
  }

  const { initialTransactions, transactions, setTransactions } = context;

  const handleDeleteTransaction = (id) => {
    const updatedTransactions = transactions.filter(
      (eachTransaction) => eachTransaction.id !== id
    );
    setTransactions(updatedTransactions);
  };

  const renderTransactionList = () => {
    return transactions.map((transaction, index) => (
      <li
        className={"transaction-list-row" + " " + transaction.type}
        key={transaction.id}
      >
        <p className="transaction-list-row-number">{index + 1}</p>
        <div htmlFor={transaction.id} className="transaction-list-row-info-div">
          <p className="transaction-list-row-info">
            <span className="transaction-list-each-title">Type:</span>
            <span className="transaction-list-each-value">
              {transaction.type}
            </span>
          </p>

          <p className="transaction-list-row-info">
            <span className="transaction-list-each-title">Category:</span>
            <span className="transaction-list-each-value">
              {transaction.category}
            </span>
          </p>

          <p className="transaction-list-row-info">
            <span className="transaction-list-each-title">Date:</span>
            <span className="transaction-list-each-value">
              {transaction.date}
            </span>
          </p>

          <p className="transaction-list-row-info">
            <span className="transaction-list-each-title">Amount:</span>
            <span className="transaction-list-each-value">
              € {formatAmount(transaction.amount)}
            </span>
          </p>
        </div>
        <button
          className="delete-btn"
          onClick={() => handleDeleteTransaction(transaction.id)}
        >
          Delete
        </button>
      </li>
    ));
  };

  return transactions.length > 0 ? (
    <main className="transaction-list-main">
      <Total transactions={transactions} />
      <ul className="transaction-list-ul">{renderTransactionList()}</ul>
      <ClearButton
        initialTransactions={initialTransactions}
        transactions={transactions}
        setTransactions={setTransactions}
      />
    </main>
  ) : (
    <main className="transaction-list-main">
      <p className="no-transactions-found">No transactions found.</p>
    </main>
  );
}
