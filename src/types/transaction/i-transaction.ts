// types
import type { TTransactionCategory } from "./category/t-transaction-category";
import type { TTransactionAmount } from "./amount/t-transaction-amount";
import type { TTransactionDate } from "./date/t-transaction-date";
import type { TTransactionID } from "./t-transaction-id";
import type { TTransactionType } from "./type/t-transaction-type";

//--------------------------------------------------------------------------------------------------//

export interface ITransaction {
  id: TTransactionID;
  type: TTransactionType;
  category: TTransactionCategory;
  date: TTransactionDate;
  amount: TTransactionAmount;
}
