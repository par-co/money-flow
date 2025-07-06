// constants
import { TRANSACTION_CATEGORY_OPTIONS_OBJECT_KEYS } from "./keys";

// classes
import AppOption from "../../../../utilities/classes/AppOption";

// functions
import { createIDForOption } from "../../../../utilities/functions/createIDForOption";

//--------------------------------------------------------------------------------------------------//

export const TRANSACTION_CATEGORY_OPTIONS_OBJECT_INITIAL = Object.freeze([
  new AppOption<"", "">(
    createIDForOption(
      "transaction-category-options",
      TRANSACTION_CATEGORY_OPTIONS_OBJECT_KEYS[0],
      ""
    ),
    "",
    ""
  ),
] as const);
