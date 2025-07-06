// css
import "./TransactionCategory.css";

// icons
import { BsCheckCircleFill, Bs2CircleFill } from "react-icons/bs";

// type guards
import { isTTransactionCategory } from "../../utilities/functions/typeGuards/isTTransactionCategory";

// types
import type { TTransactionCategoryContext } from "../../types";

// JSX
import type { JSX } from "react";

//--------------------------------------------------------------------------------------------------//

type TTransactionCategoryProps = Pick<
  TTransactionCategoryContext,
  | "transactionCategoryLabel"
  | "transactionCategoryOptions"
  | "transactionCategory"
  | "setTransactionCategory"
>;

export default function TransactionCategory({
  transactionCategoryLabel,
  transactionCategoryOptions,
  transactionCategory,
  setTransactionCategory,
}: TTransactionCategoryProps): JSX.Element {
  const handleChangeTransactionCategory = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const updatedTransactionCategory = e.target.value;

    if (isTTransactionCategory(updatedTransactionCategory)) {
      setTransactionCategory(updatedTransactionCategory);
    }
  };

  return (
    <div className="transaction-form-category icon-and-tag">
      {transactionCategory ? (
        <BsCheckCircleFill className="icon icon-purple" />
      ) : (
        <Bs2CircleFill className="icon icon-purple" />
      )}

      <label
        htmlFor="select-transaction-category"
        className="transaction-form-label"
      >
        {transactionCategoryLabel}
      </label>

      <select
        id="select-transaction-category"
        className="transaction-form-select"
        value={transactionCategory}
        onChange={handleChangeTransactionCategory}
        required
      >
        {transactionCategoryOptions.map((transactionCategoryOption) => (
          <option
            key={transactionCategoryOption.id}
            value={transactionCategoryOption.value}
          >
            {transactionCategoryOption.text}
          </option>
        ))}
      </select>
    </div>
  );
}
