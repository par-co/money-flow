import "./TransactionType.css";
import { v4 as uuidv4 } from "uuid";
import { BsCheckCircleFill, Bs1CircleFill } from "react-icons/bs";

export default function TransactionType({
  transactionTypeOptions,
  transactionType,
  setTransactionType,
}) {
  const handleChangeTransactionType = (e) => {
    setTransactionType(e.target.value);
  };

  return (
    <div className="transaction-form-type icon-and-tag">
      {!transactionType && <Bs1CircleFill className="icon icon-purple" />}
      {transactionType && <BsCheckCircleFill className="icon icon-purple " />}
      <label htmlFor="type" className="transaction-form-label">
        Please select a transaction type:
      </label>
      <select
        id="type"
        className="transaction-form-select"
        value={transactionType}
        onChange={handleChangeTransactionType}
        required
      >
        <option key={uuidv4()} value="">
          select one
        </option>
        {transactionTypeOptions.map((option) => (
          <option key={uuidv4()} value={option.toLowerCase()}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
