// classes
import AppOption from "../../../utilities/classes/AppOption";

// functions
import { createSelectOneOptionFor } from "../../../utilities/functions/createSelectOneOptionFor";
import { createIDForOption } from "../../../utilities/functions/createIDForOption";

//--------------------------------------------------------------------------------------------------//

export const TRANSACTION_TYPE_OPTIONS = Object.freeze([
  createSelectOneOptionFor("transaction-type-options", ""),

  new AppOption<"expense", "Expense">(
    createIDForOption("transaction-type-options", "", "expense"),
    "expense",
    "Expense"
  ),

  new AppOption<"income", "Income">(
    createIDForOption("transaction-type-options", "", "income"),
    "income",
    "Income"
  ),
] as const);
