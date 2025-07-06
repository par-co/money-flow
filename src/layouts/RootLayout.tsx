// css
import "./RootLayout.css";

// hooks
import { useTransactions } from "../hooks/useTransactions";

// react-router-dom
import { Outlet } from "react-router-dom";

// components
import Header from "../components/Header/Header";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

// JSX
import type { JSX } from "react";

//--------------------------------------------------------------------------------------------------//

export default function RootLayout(): JSX.Element {
  const { initialTransactions, transactions, setTransactions } =
    useTransactions();

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
