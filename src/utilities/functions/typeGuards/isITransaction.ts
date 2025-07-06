// type guards
import { isTTransactionType } from "./isTTransactionType";
import { isString } from "./isString";

// types
import type { ITransaction } from "../../../types";

//--------------------------------------------------------------------------------------------------//

export function isITransaction(item: unknown): item is ITransaction {
  if (item === null || typeof item !== "object") {
    return false;
  } else {
    const obj = item as Record<string, unknown>;

    const { id, type, category, date, amount } = obj;

    return (
      isTTransactionType(type) && [id, category, date, amount].every(isString)
    );
  }
}
