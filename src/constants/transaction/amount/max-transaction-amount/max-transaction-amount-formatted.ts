// constants
import { MAX_TRANSACTION_AMOUNT_NUMBER } from "./max-transaction-amount-number";

// functions
import { formatAmount } from "../../../../utilities/functions/formatAmount";

//--------------------------------------------------------------------------------------------------//

export const MAX_TRANSACTION_AMOUNT_FORMATTED: string = formatAmount(
  String(MAX_TRANSACTION_AMOUNT_NUMBER)
);
