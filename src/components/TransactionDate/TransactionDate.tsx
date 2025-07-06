// css
import "./TransactionDate.css";

// icons
import { BsCheckCircleFill, Bs3CircleFill } from "react-icons/bs";

// types
import type { TTransactionDateContext } from "../../types";

// JSX
import type { JSX } from "react";

//--------------------------------------------------------------------------------------------------//

type TTransactionDateProps = Pick<
  TTransactionDateContext,
  "transactionDate" | "setTransactionDate"
>;

export default function TransactionDate({
  transactionDate,
  setTransactionDate,
}: TTransactionDateProps): JSX.Element {
  const handleChangeTransactionDate = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedTransactionDate = e.target.value;
    setTransactionDate(updatedTransactionDate);
  };

  return (
    <div className="transaction-form-date icon-and-tag">
      {transactionDate ? (
        <BsCheckCircleFill className="icon icon-purple" />
      ) : (
        <Bs3CircleFill className="icon icon-purple" />
      )}

      <label
        htmlFor="input-transaction-date"
        className="transaction-form-label"
      >
        Please select the transaction date:
      </label>

      <input
        id="input-transaction-date"
        type="date"
        className="transaction-form-select"
        value={transactionDate}
        onChange={handleChangeTransactionDate}
        required
      />
    </div>
  );
}
