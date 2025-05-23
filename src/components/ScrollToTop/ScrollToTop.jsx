import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function ScrollToTop({ transactions }) {
  const { pathname } = useLocation();
  const transactionsLength = transactions.length;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, transactionsLength]);

  return null;
}
