import "./TransactionAmount.css";
import CurrencyInput from "react-currency-input-field";
import { BsCheckCircleFill, Bs4CircleFill } from "react-icons/bs";

export default function TransactionAmount({
  transactionAmount,
  setTransactionAmount,
}) {
  return (
    <div className="transaction-form-amount icon-and-tag">
      {(!transactionAmount ||
        Number(transactionAmount) < 0.01 ||
        isNaN(transactionAmount)) && (
        <Bs4CircleFill className="icon icon-purple" />
      )}
      {Number(transactionAmount) >= 0.01 && (
        <BsCheckCircleFill className="icon icon-purple" />
      )}
      <label htmlFor="amount" className="transaction-form-label">
        Please enter the amount:
      </label>
      <CurrencyInput
        id="amount"
        className="transaction-form-currency-input"
        value={transactionAmount}
        onValueChange={(value) => setTransactionAmount(value)}
        allowNegativeValue={false}
        placeholder="enter amount"
        step={1.0}
        min={0.01}
        decimalScale={2}
        prefix="€ "
      />
    </div>
  );
}
