// types
import type { TSetTransactionAmount } from "./t-set-transaction-amount";
import type { TTransactionAmount } from "./t-transaction-amount";

//--------------------------------------------------------------------------------------------------//

export type TTransactionAmountContext = {
  initialTransactionAmount: TTransactionAmount;
  transactionAmount: TTransactionAmount;
  setTransactionAmount: TSetTransactionAmount;

  isTransactionAmountValid: () => boolean;
};
