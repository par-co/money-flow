import { v4 as uuidv4 } from "uuid";
import "./TransactionCategory.css";
import { BsCheckCircleFill, Bs2CircleFill } from "react-icons/bs";

export default function TransactionCategory({
  transactionCategoryLabel,
  transactionCategoryOptions,
  transactionCategory,
  setTransactionCategory,
}) {
  const handleChangeTransactionCategory = (e) => {
    setTransactionCategory(e.target.value);
  };

  return (
    <div className="transaction-form-category icon-and-tag">
      {!transactionCategory && <Bs2CircleFill className="icon icon-purple" />}
      {transactionCategory && (
        <BsCheckCircleFill className="icon icon-purple" />
      )}
      <label htmlFor="category" className="transaction-form-label">
        {transactionCategoryLabel}
      </label>
      <select
        id="category"
        className="transaction-form-select"
        value={transactionCategory}
        onChange={handleChangeTransactionCategory}
        required
      >
        <option key={uuidv4()} value="">
          select one
        </option>
        {transactionCategoryOptions.map((option) => (
          <option key={uuidv4()} value={option.toLowerCase()}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
