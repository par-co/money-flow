// types
import type { TSetTransactionDate } from "./t-set-transaction-date";
import type { TTransactionDate } from "./t-transaction-date";

//--------------------------------------------------------------------------------------------------//

export type TTransactionDateContext = {
  initialTransactionDate: TTransactionDate;
  transactionDate: TTransactionDate;
  setTransactionDate: TSetTransactionDate;
};
