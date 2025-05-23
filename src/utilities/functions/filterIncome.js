export default function filterIncome(transactions) {
  return transactions.filter((transaction) => transaction.type === "income");
}
