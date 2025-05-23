import "./Warning.css";

export default function Warning({ message }) {
  return (
    <div className="transaction-form-warning">
      <p className="transaction-form-warning-text">{message}</p>
    </div>
  );
}
