// constants
import { INITIAL_WARNING } from "../constants/warning/initial-warning";

// hooks
import { useState } from "react";

// types
import type { TWarning } from "../types";

//--------------------------------------------------------------------------------------------------//

export const useWarning = () => {
  const [warning, setWarning] = useState<TWarning>(INITIAL_WARNING);

  /**
   * Updates a specific field in the warning state.
   */
  const updateWarningField = <K extends keyof TWarning>(
    key: K,
    value: TWarning[K]
  ): void => {
    setWarning((prev) => ({ ...prev, [key]: value }));
  };

  /**
   * Resets a specific field in the warning state.
   */
  const resetWarningField = <K extends keyof TWarning>(key: K): void => {
    setWarning((prev) => ({ ...prev, [key]: INITIAL_WARNING[key] }));
  };

  /**
   * Resets all fields in the warning state.
   */
  const resetWarning = (): void => {
    setWarning({ ...INITIAL_WARNING });
  };

  return {
    warning,
    updateWarningField,
    resetWarningField,
    resetWarning,
  };
};
