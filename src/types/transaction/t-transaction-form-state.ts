// types
import type { TConfirmation } from "../t-confirmation";
import type { TTransactionAmount } from "./amount/t-transaction-amount";
import type { TTransactionCategory } from "./category/t-transaction-category";
import type { TTransactionCategoryLabel } from "./category/t-transaction-category-label";
import type { TTransactionCategoryOptions } from "./category/t-transaction-category-options";
import type { TTransactionDate } from "./date/t-transaction-date";
import type { TTransactionType } from "./type/t-transaction-type";

//--------------------------------------------------------------------------------------------------//

export type TTransactionFormState = Readonly<{
  readonly transaction: {
    readonly type: TTransactionType;
    readonly category: {
      readonly label: TTransactionCategoryLabel;
      readonly options: TTransactionCategoryOptions;
      readonly value: TTransactionCategory;
    };
    readonly date: TTransactionDate;
    readonly amount: TTransactionAmount;
  };
  readonly confirmation: TConfirmation;
}>;
