// css
import "./Home.css";

// hooks
import { useTransactionsContext } from "../../hooks/useTransactionsContext";

// components
import TransactionForm from "../../components/TransactionForm/TransactionForm";

// JSX
import type { JSX } from "react";

//--------------------------------------------------------------------------------------------------//

export default function Home(): JSX.Element {
  const context = useTransactionsContext();

  if (!context) {
    return (
      <main className="home">
        <h2 className="welcome">Welcome</h2>
        <p className="loading">Loading...</p>
      </main>
    );
  }

  const { setTransactions } = context;

  return (
    <main className="home">
      <h2 className="welcome">Welcome</h2>
      <p className="text">
        To add a transaction, follow the steps as they appear.
      </p>
      <TransactionForm setTransactions={setTransactions} />
    </main>
  );
}
