// types
import type { TTransactions, TTransactionType } from "../../types";

//--------------------------------------------------------------------------------------------------//

export function filterType(
  transactions: TTransactions,
  transactionType: TTransactionType
): TTransactions {
  if (transactionType === "") {
    console.warn(
      "Unnecessary use of filterType: empty transaction type provided."
    );

    return transactions;
  } else {
    return transactions.filter(
      (transaction) => transaction.type === transactionType
    );
  }
}
