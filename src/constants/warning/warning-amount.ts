// constants
import { MAX_TRANSACTION_AMOUNT_FORMATTED } from "../transaction/amount/max-transaction-amount/max-transaction-amount-formatted";
import { MIN_TRANSACTION_AMOUNT_FORMATTED } from "../transaction/amount/min-transaction-amount/min-transaction-amount-formatted";

//--------------------------------------------------------------------------------------------------//

export const WARNING_AMOUNT = Object.freeze([
  "",
  "The amount cannot be empty.",
  "The amount should be a number.",
  "The amount cannot be zero.",
  `The amount should be at least ${MIN_TRANSACTION_AMOUNT_FORMATTED}`,
  `The amount should be at most ${MAX_TRANSACTION_AMOUNT_FORMATTED}`,
] as const);
