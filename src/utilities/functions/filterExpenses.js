export default function filterExpenses(transactions) {
  return transactions.filter((transaction) => transaction.type === "expense");
}
