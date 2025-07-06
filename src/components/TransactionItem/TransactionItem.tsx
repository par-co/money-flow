// css
import "./TransactionItem.css";

// functions
import { formatAmount } from "../../utilities/functions/formatAmount";

// types
import type { ITransaction, TTransactionID } from "../../types";

// JSX
import type { JSX } from "react";

//--------------------------------------------------------------------------------------------------//

type TTransactionItemProps = {
  transaction: ITransaction;
  index: number;
  handleDeleteTransaction: (id: TTransactionID) => void;
};

export default function TransactionItem({
  transaction,
  index,
  handleDeleteTransaction,
}: TTransactionItemProps): JSX.Element {
  return (
    <li className={`transaction-Item ${transaction.type}`}>
      <p className="transaction-Item-number">{index + 1}</p>

      <div className="transaction-Item-info-div">
        <p className="transaction-Item-info">
          <span className="transaction-Item-each-title">Type:</span>
          <span className="transaction-Item-each-value">
            {transaction.type}
          </span>
        </p>

        <p className="transaction-Item-info">
          <span className="transaction-Item-each-title">Category:</span>
          <span className="transaction-Item-each-value">
            {transaction.category}
          </span>
        </p>

        <p className="transaction-Item-info">
          <span className="transaction-Item-each-title">Date:</span>
          <span className="transaction-Item-each-value">
            {transaction.date}
          </span>
        </p>

        <p className="transaction-Item-info">
          <span className="transaction-Item-each-title">Amount:</span>
          <span className="transaction-Item-each-value">
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
  );
}
