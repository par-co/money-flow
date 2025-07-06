import type {
  ITransaction,
  TTransactionID,
  TTransactionType,
  TTransactionCategory,
  TTransactionDate,
  TTransactionAmount,
} from "../../types";

class Transaction implements ITransaction {
  id: TTransactionID;
  type: TTransactionType;
  category: TTransactionCategory;
  date: TTransactionDate;
  amount: TTransactionAmount;

  constructor(
    id: TTransactionID,
    type: TTransactionType,
    category: TTransactionCategory,
    date: TTransactionDate,
    amount: TTransactionAmount
  ) {
    this.id = id;
    this.type = type;
    this.category = category;
    this.date = date;
    this.amount = amount;
  }
}

export default Transaction;
