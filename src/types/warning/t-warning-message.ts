// constants
import { WARNINGS } from "../../constants/warning/warnings";

//--------------------------------------------------------------------------------------------------//

export type TWarningMessage = (typeof WARNINGS)[keyof typeof WARNINGS][number];
