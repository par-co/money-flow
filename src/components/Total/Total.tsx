// css
import "./Total.css";

// functions
import { getTotalByType } from "../../utilities/functions/getTotalByType";
import { formatAmount } from "../../utilities/functions/formatAmount";

// types
import type { TTransactionsContext } from "../../types";

// JSX
import type { JSX } from "react";

//--------------------------------------------------------------------------------------------------//

type TTotalProps = Pick<TTransactionsContext, "transactions">;

export default function Total({ transactions }: TTotalProps): JSX.Element {
  const totalIncome: string = getTotalByType(transactions, "income");

  const totalExpenses: string = getTotalByType(transactions, "expense");

  const balance: string = (Number(totalIncome) - Number(totalExpenses)).toFixed(
    2
  );

  return (
    <div className="total">
      <p className="total-row">
        Total Income: <span>€ {formatAmount(totalIncome)}</span>
      </p>

      <p className="total-row">
        Total Expenses: <span>€ {formatAmount(totalExpenses)}</span>
      </p>

      <p className="total-row">
        Balance: <span>€ {formatAmount(balance)}</span>
      </p>
    </div>
  );
}
