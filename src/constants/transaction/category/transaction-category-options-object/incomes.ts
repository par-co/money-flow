// constants
import { TRANSACTION_CATEGORY_OPTIONS_OBJECT_KEYS } from "./keys";

// classes
import AppOption from "../../../../utilities/classes/AppOption";

// functions
import { createSelectOneOptionFor } from "../../../../utilities/functions/createSelectOneOptionFor";
import { createIDForOption } from "../../../../utilities/functions/createIDForOption";

//--------------------------------------------------------------------------------------------------//

export const TRANSACTION_CATEGORY_OPTIONS_OBJECT_INCOMES = Object.freeze([
  createSelectOneOptionFor(
    "transaction-category-options",
    TRANSACTION_CATEGORY_OPTIONS_OBJECT_KEYS[2]
  ),

  new AppOption<"salary", "Salary">(
    createIDForOption("transaction-category-options", "incomes", "salary"),
    "salary",
    "Salary"
  ),

  new AppOption<"investments", "Investments">(
    createIDForOption("transaction-category-options", "incomes", "investments"),
    "investments",
    "Investments"
  ),

  new AppOption<"gift", "Gift">(
    createIDForOption("transaction-category-options", "incomes", "gift"),
    "gift",
    "Gift"
  ),
] as const);
