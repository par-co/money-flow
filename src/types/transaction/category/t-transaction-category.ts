// constants
import { TRANSACTION_CATEGORY_OPTIONS_OBJECT } from "../../../constants/transaction/category/transaction-category-options-object";

//--------------------------------------------------------------------------------------------------//

export type TTransactionCategory =
  (typeof TRANSACTION_CATEGORY_OPTIONS_OBJECT)[keyof typeof TRANSACTION_CATEGORY_OPTIONS_OBJECT][number]["value"];
