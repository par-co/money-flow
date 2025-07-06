// constants
import { MIN_TRANSACTION_AMOUNT_NUMBER } from "./min-transaction-amount-number";

// functions
import { formatAmount } from "../../../../utilities/functions/formatAmount";

//--------------------------------------------------------------------------------------------------//

export const MIN_TRANSACTION_AMOUNT_FORMATTED: string = formatAmount(
  String(MIN_TRANSACTION_AMOUNT_NUMBER)
);
