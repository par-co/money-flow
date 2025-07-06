// constants
import { TRANSACTION_TYPE_OPTIONS } from "../../../constants/transaction/type/transaction-type-options";

// type guards
import { isString } from "./isString";

// types
import type { TTransactionType } from "../../../types";

//--------------------------------------------------------------------------------------------------//

const transactionTypeValues = Object.freeze(
  TRANSACTION_TYPE_OPTIONS.map(
    (transactionTypeOption) => transactionTypeOption.value
  )
);

const checkedTransactionTypeValues: readonly TTransactionType[] =
  transactionTypeValues;

export function isTTransactionType(value: unknown): value is TTransactionType {
  return (
    isString(value) &&
    checkedTransactionTypeValues.includes(value as TTransactionType)
  );
}
