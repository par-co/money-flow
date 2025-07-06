// hooks
import { useEffect, useState } from "react";

// functions
import { isLocalStorageAvailable } from "../utilities/functions/isLocalStorageAvailable";

// type guards
import { isITransaction } from "../utilities/functions/typeGuards/isITransaction";

// types
import type { TTransactions, TTransactionsContext } from "../types";

//--------------------------------------------------------------------------------------------------//

export function useTransactions(): TTransactionsContext {
  const initialTransactions: TTransactions = [];

  const [transactions, setTransactions] = useState<TTransactions>(() => {
    if (!isLocalStorageAvailable()) return initialTransactions;

    try {
      const savedTransactions = localStorage.getItem("transactions");

      const parsed = savedTransactions
        ? JSON.parse(savedTransactions)
        : initialTransactions;

      if (!Array.isArray(parsed) || !parsed.every(isITransaction)) {
        return initialTransactions;
      } else {
        return parsed;
      }
    } catch (error) {
      console.error("Failed to load transactions from localStorage:", error);
      return initialTransactions;
    }
  });

  useEffect(() => {
    if (!isLocalStorageAvailable()) return;

    try {
      localStorage.setItem("transactions", JSON.stringify(transactions));
    } catch (error) {
      console.error("Failed to save transactions to localStorage:", error);
    }
  }, [transactions]);

  return { initialTransactions, transactions, setTransactions };
}
