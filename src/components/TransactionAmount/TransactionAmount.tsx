// css
import "./TransactionAmount.css";

// constants
import { MAX_TRANSACTION_AMOUNT_NUMBER } from "../../constants/transaction/amount/max-transaction-amount/max-transaction-amount-number";
import { MIN_TRANSACTION_AMOUNT_NUMBER } from "../../constants/transaction/amount/min-transaction-amount/min-transaction-amount-number";

// icons
import { BsCheckCircleFill, Bs4CircleFill } from "react-icons/bs";

// react-currency-input-field
import CurrencyInput from "react-currency-input-field";

// types
import type { TTransactionAmountContext } from "../../types";

// JSX
import type { JSX } from "react";

//--------------------------------------------------------------------------------------------------//

type TTransactionAmountProps = Pick<
  TTransactionAmountContext,
  | "initialTransactionAmount"
  | "transactionAmount"
  | "setTransactionAmount"
  | "isTransactionAmountValid"
>;

export default function TransactionAmount({
  initialTransactionAmount,
  transactionAmount,
  setTransactionAmount,
  isTransactionAmountValid,
}: TTransactionAmountProps): JSX.Element {
  const handleAmountChange = (value: string | undefined): void => {
    if (value) {
      setTransactionAmount(value);
    } else {
      setTransactionAmount(initialTransactionAmount);
    }
  };

  return (
    <div className="transaction-form-amount icon-and-tag">
      {isTransactionAmountValid() ? (
        <BsCheckCircleFill className="icon icon-purple" />
      ) : (
        <Bs4CircleFill className="icon icon-purple" />
      )}

      <label
        htmlFor="input-transaction-amount"
        className="transaction-form-label"
      >
        Please enter the amount:
      </label>

      <CurrencyInput
        id="input-transaction-amount"
        className="transaction-form-currency-input"
        value={transactionAmount}
        onValueChange={handleAmountChange}
        allowNegativeValue={false}
        placeholder="enter amount"
        step={1.0}
        min={MIN_TRANSACTION_AMOUNT_NUMBER}
        max={MAX_TRANSACTION_AMOUNT_NUMBER}
        decimalScale={2}
        prefix="€ "
      />
    </div>
  );
}
