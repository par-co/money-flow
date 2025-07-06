// constants
import { TRANSACTION_CATEGORY_OPTIONS_OBJECT } from "../../../constants/transaction/category/transaction-category-options-object";

//--------------------------------------------------------------------------------------------------//

export type TTransactionCategoryOptions =
  (typeof TRANSACTION_CATEGORY_OPTIONS_OBJECT)[keyof typeof TRANSACTION_CATEGORY_OPTIONS_OBJECT];
