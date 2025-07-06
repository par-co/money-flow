// constants
import { WARNING_TYPE } from "./warning-type";
import { WARNING_CATEGORY } from "./warning-category";
import { WARNING_DATE } from "./warning-date";
import { WARNING_AMOUNT } from "./warning-amount";
import { WARNING_KEYS } from "./keys";

//--------------------------------------------------------------------------------------------------//

export const WARNINGS = Object.freeze({
  [WARNING_KEYS[0]]: WARNING_TYPE,
  [WARNING_KEYS[1]]: WARNING_CATEGORY,
  [WARNING_KEYS[2]]: WARNING_DATE,
  [WARNING_KEYS[3]]: WARNING_AMOUNT,
} as const);
