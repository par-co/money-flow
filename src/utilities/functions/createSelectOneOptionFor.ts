// classes
import AppOption from "../classes/AppOption";

//functions
import { createIDForOption } from "./createIDForOption";

//--------------------------------------------------------------------------------------------------//

export function createSelectOneOptionFor(
  firstPart: string,
  optionKey: string
): AppOption<"", "Select one"> {
  return new AppOption<"", "Select one">(
    createIDForOption(firstPart, optionKey, "select-one"),
    "",
    "Select one"
  );
}
