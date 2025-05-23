import { useOutletContext } from "react-router-dom";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import "./Home.css";

export default function Home() {
  const context = useOutletContext();

  if (!context) {
    return (
      <main className="home">
        <h2 className="welcome">Welcome</h2>
        <p className="loading">Loading...</p>
      </main>
    );
  }

  const { initialTransactions, transactions, setTransactions } = context;

  return (
    <main className="home">
      <h2 className="welcome">Welcome</h2>
      <p className="text">
        To add a transaction, follow the steps as they appear.
      </p>
      <TransactionForm
        initialTransactions={initialTransactions}
        transactions={transactions}
        setTransactions={setTransactions}
      />
    </main>
  );
}
