import "./Total.css";
import formatAmount from "../../utilities/functions/formatAmount";
import filterIncome from "../../utilities/functions/filterIncome";
import filterExpenses from "../../utilities/functions/filterExpenses";

export default function Total({ transactions }) {
  const totalIncome = filterIncome(transactions)
    .reduce((sum, transaction) => sum + Number(transaction.amount), 0)
    .toFixed(2);

  const totalExpenses = filterExpenses(transactions)
    .reduce((sum, transaction) => sum + Number(transaction.amount), 0)
    .toFixed(2);

  const balance = (Number(totalIncome) - Number(totalExpenses)).toFixed(2);

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
