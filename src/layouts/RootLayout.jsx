import "./RootLayout.css";
import Header from "../components/Header/Header";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RootLayout() {
  const initialTransactions = [];
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions
      ? JSON.parse(savedTransactions)
      : initialTransactions;
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <div className="root-layout">
      <Header title="MoneyFlow" />
      <ScrollToTop transactions={transactions} />
      <Outlet
        context={{ initialTransactions, transactions, setTransactions }}
      />
    </div>
  );
}
