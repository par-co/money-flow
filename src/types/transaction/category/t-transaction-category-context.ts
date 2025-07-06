// types
import type { TTransactionCategoryLabel } from "./t-transaction-category-label";
import type { TTransactionCategoryOptions } from "./t-transaction-category-options";
import type { TTransactionCategory } from "./t-transaction-category";
import type { TSetTransactionCategory } from "./t-set-transaction-category";

//--------------------------------------------------------------------------------------------------//

export type TTransactionCategoryContext = {
  transactionCategoryLabel: TTransactionCategoryLabel;

  transactionCategoryOptions: TTransactionCategoryOptions;

  initialTransactionCategory: TTransactionCategory;
  transactionCategory: TTransactionCategory;
  setTransactionCategory: TSetTransactionCategory;
};
