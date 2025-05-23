import "./TransactionDate.css";
import { BsCheckCircleFill, Bs3CircleFill } from "react-icons/bs";

export default function TransactionDate({
  transactionDate,
  setTransactionDate,
}) {
  const handleChangeTransactionDate = (e) => {
    setTransactionDate(e.target.value);
  };

  return (
    <div className="transaction-form-date icon-and-tag">
      {!transactionDate && <Bs3CircleFill className="icon icon-purple" />}
      {transactionDate && <BsCheckCircleFill className="icon icon-purple" />}
      <label htmlFor="date" className="transaction-form-label">
        Please select the transaction date:
      </label>
      <input
        id="date"
        type="date"
        className="transaction-form-select"
        value={transactionDate}
        onChange={handleChangeTransactionDate}
        required
      />
    </div>
  );
}
