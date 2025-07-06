// constants
import { TRANSACTION_CATEGORY_OPTIONS_OBJECT_KEYS } from "./keys";

// classes
import AppOption from "../../../../utilities/classes/AppOption";

// functions
import { createSelectOneOptionFor } from "../../../../utilities/functions/createSelectOneOptionFor";
import { createIDForOption } from "../../../../utilities/functions/createIDForOption";

//--------------------------------------------------------------------------------------------------//

export const TRANSACTION_CATEGORY_OPTIONS_OBJECT_EXPENSES = Object.freeze([
  createSelectOneOptionFor(
    "transaction-category-options",
    TRANSACTION_CATEGORY_OPTIONS_OBJECT_KEYS[1]
  ),

  new AppOption<"rent and housing", "Rent and Housing">(
    createIDForOption(
      "transaction-category-options",
      "expenses",
      "rent-and-housing"
    ),
    "rent and housing",
    "Rent and Housing"
  ),

  new AppOption<"food and groceries", "Food and Groceries">(
    createIDForOption(
      "transaction-category-options",
      "expenses",
      "food-and-groceries"
    ),
    "food and groceries",
    "Food and Groceries"
  ),

  new AppOption<"transportation", "Transportation">(
    createIDForOption(
      "transaction-category-options",
      "expenses",
      "transportation"
    ),
    "transportation",
    "Transportation"
  ),

  new AppOption<"entertainment", "Entertainment">(
    createIDForOption(
      "transaction-category-options",
      "expenses",
      "entertainment"
    ),
    "entertainment",
    "Entertainment"
  ),

  new AppOption<"shopping", "Shopping">(
    createIDForOption("transaction-category-options", "expenses", "shopping"),
    "shopping",
    "Shopping"
  ),

  new AppOption<"health and wellness", "Health and Wellness">(
    createIDForOption(
      "transaction-category-options",
      "expenses",
      "health-and-wellness"
    ),
    "health and wellness",
    "Health and Wellness"
  ),

  new AppOption<"education", "Education">(
    createIDForOption("transaction-category-options", "expenses", "education"),
    "education",
    "Education"
  ),
] as const);
