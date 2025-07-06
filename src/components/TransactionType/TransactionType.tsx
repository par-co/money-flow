// css
import "./TransactionType.css";

// icons
import { BsCheckCircleFill, Bs1CircleFill } from "react-icons/bs";

// type guards
import { isTTransactionType } from "../../utilities/functions/typeGuards/isTTransactionType";

// types
import type { TTransactionTypeContext } from "../../types";

// JSX
import type { JSX } from "react";

//--------------------------------------------------------------------------------------------------//

type TTransactionTypeProps = Pick<
  TTransactionTypeContext,
  "transactionTypeOptions" | "transactionType" | "setTransactionType"
>;

export default function TransactionType({
  transactionTypeOptions,
  transactionType,
  setTransactionType,
}: TTransactionTypeProps): JSX.Element {
  const handleChangeTransactionType = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const updatedTransactionType = e.target.value;

    if (isTTransactionType(updatedTransactionType)) {
      setTransactionType(updatedTransactionType);
    }
  };

  return (
    <div className="transaction-form-type icon-and-tag">
      {transactionType ? (
        <BsCheckCircleFill className="icon icon-purple" />
      ) : (
        <Bs1CircleFill className="icon icon-purple" />
      )}

      <label
        htmlFor="select-transaction-type"
        className="transaction-form-label"
      >
        Please select a transaction type:
      </label>

      <select
        id="select-transaction-type"
        className="transaction-form-select"
        value={transactionType}
        onChange={handleChangeTransactionType}
        required
      >
        {transactionTypeOptions.map((transactionTypeOption) => (
          <option
            key={transactionTypeOption.id}
            value={transactionTypeOption.value}
          >
            {transactionTypeOption.text}
          </option>
        ))}
      </select>
    </div>
  );
}
