// constants
import { WARNING_KEYS } from "./keys";
import { WARNING_TYPE } from "./warning-type";
import { WARNING_CATEGORY } from "./warning-category";
import { WARNING_DATE } from "./warning-date";
import { WARNING_AMOUNT } from "./warning-amount";

//--------------------------------------------------------------------------------------------------//

export const INITIAL_WARNING = Object.freeze({
  [WARNING_KEYS[0]]: WARNING_TYPE[0],
  [WARNING_KEYS[1]]: WARNING_CATEGORY[0],
  [WARNING_KEYS[2]]: WARNING_DATE[0],
  [WARNING_KEYS[3]]: WARNING_AMOUNT[0],
} as const);
