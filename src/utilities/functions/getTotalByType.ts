// functions
import { filterType } from "./filterType";

// types
import type { TTransactions, TTransactionType } from "../../types";

//--------------------------------------------------------------------------------------------------//

export function getTotalByType(
  transactions: TTransactions,
  transactionType: TTransactionType
): string {
  if (transactionType === "") {
    console.warn(
      "Unnecessary use of getTotalByType: empty transaction type provided."
    );

    return "0.00";
  } else {
    const total: string = filterType(transactions, transactionType)
      .reduce((sum, transaction) => {
        const amountToNumber = Number(transaction.amount);

        if (isNaN(amountToNumber) || !isFinite(amountToNumber)) {
          return sum;
        } else {
          return sum + amountToNumber;
        }
      }, 0)
      .toFixed(2);

    return total;
  }
}
