// constants
import { TRANSACTION_TYPE_OPTIONS } from "../../../constants/transaction/type/transaction-type-options";

//--------------------------------------------------------------------------------------------------//

export type TTransactionType =
  (typeof TRANSACTION_TYPE_OPTIONS)[number]["value"];
