// css
import "./TransactionsPage.css";

// hooks
import { useTransactionsContext } from "../../hooks/useTransactionsContext";

// components
import Total from "../../components/Total/Total";
import TransactionItem from "../../components/TransactionItem/TransactionItem";
import ClearButton from "../../components/ClearButton/ClearButton";

// types
import type { TTransactionID } from "../../types";

// JSX
import type { JSX } from "react";

//--------------------------------------------------------------------------------------------------//

export default function TransactionsPage(): JSX.Element {
  const context = useTransactionsContext();

  if (!context) {
    return (
      <main className="transactions-page-main">
        <p className="transactions-page-loading">Loading...</p>
      </main>
    );
  }

  const { initialTransactions, transactions, setTransactions } = context;

  const handleDeleteTransaction = (id: TTransactionID): void => {
    setTransactions((prevTransactions) => {
      return prevTransactions.filter(
        (eachTransaction) => eachTransaction.id !== id
      );
    });
  };

  return transactions.length > 0 ? (
    <main className="transactions-page-main">
      <Total transactions={transactions} />

      <ul className="transactions-page-ul">
        {transactions.map((transaction, index) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            index={index}
            handleDeleteTransaction={handleDeleteTransaction}
          />
        ))}
      </ul>

      <ClearButton
        initialTransactions={initialTransactions}
        transactions={transactions}
        setTransactions={setTransactions}
      />
    </main>
  ) : (
    <main className="transactions-page-main">
      <p className="no-transactions-found">No transactions found.</p>
    </main>
  );
}
