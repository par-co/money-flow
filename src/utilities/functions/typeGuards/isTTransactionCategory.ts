// constants
import { TRANSACTION_CATEGORY_OPTIONS_OBJECT } from "../../../constants/transaction/category/transaction-category-options-object";

// type guards
import { isString } from "./isString";

// types
import type { TTransactionCategory } from "../../../types";

//--------------------------------------------------------------------------------------------------//

const transactionCategoryValues = Object.freeze([
  ...TRANSACTION_CATEGORY_OPTIONS_OBJECT.expenses.map(
    (transactionCategoryOption) => transactionCategoryOption.value
  ),
  ...TRANSACTION_CATEGORY_OPTIONS_OBJECT.incomes.map(
    (transactionCategoryOption) => transactionCategoryOption.value
  ),
  ...TRANSACTION_CATEGORY_OPTIONS_OBJECT.initial.map(
    (transactionCategoryOption) => transactionCategoryOption.value
  ),
] as const);

const checkedTransactionCategoryValues: readonly TTransactionCategory[] =
  transactionCategoryValues;

export function isTTransactionCategory(
  value: unknown
): value is TTransactionCategory {
  return (
    isString(value) &&
    checkedTransactionCategoryValues.includes(value as TTransactionCategory)
  );
}
