// types
import type { TSetTransactions } from "./t-set-transactions";
import type { TTransactions } from "./t-transactions";

//--------------------------------------------------------------------------------------------------//

export type TTransactionsContext = {
  initialTransactions: TTransactions;
  transactions: TTransactions;
  setTransactions: TSetTransactions;
};
