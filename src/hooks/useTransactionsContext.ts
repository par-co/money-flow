// hooks
import { useOutletContext } from "react-router-dom";

// types
import type { TTransactionsContext } from "../types";

//--------------------------------------------------------------------------------------------------//

export function useTransactionsContext(): TTransactionsContext {
  const context = useOutletContext<TTransactionsContext>();

  if (!context) {
    console.warn("Could not access context.");
  }

  return context;
}
