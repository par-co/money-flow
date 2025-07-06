// types
import type { TTransactionTypeOptions } from "./t-transaction-type-options";
import type { TTransactionType } from "./t-transaction-type";
import type { TSetTransactionType } from "./t-set-transaction-type";

//--------------------------------------------------------------------------------------------------//

export type TTransactionTypeContext = {
  transactionTypeOptions: TTransactionTypeOptions;

  initialTransactionType: TTransactionType;
  transactionType: TTransactionType;
  setTransactionType: TSetTransactionType;
};
