// hooks
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

// types
import type { TTransactionsContext } from "../../types";

// JSX
import type { JSX } from "react";

//--------------------------------------------------------------------------------------------------//

type TScrollToTopProps = Pick<TTransactionsContext, "transactions">;

export default function ScrollToTop({
  transactions,
}: TScrollToTopProps): JSX.Element | null {
  const { pathname } = useLocation();
  const transactionsLength = transactions.length;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, transactionsLength]);

  return null;
}
