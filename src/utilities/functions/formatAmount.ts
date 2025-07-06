export function formatAmount(amount: string): string {
  return Number(amount).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
