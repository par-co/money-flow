// constants
import { WARNINGS } from "../../constants/warning/warnings";

//--------------------------------------------------------------------------------------------------//

export type TWarning = {
  readonly [K in keyof typeof WARNINGS]: (typeof WARNINGS)[K][number];
};
