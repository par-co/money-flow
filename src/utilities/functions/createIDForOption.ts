export function createIDForOption(
  firstPart: string,
  optionKey: string,
  optionValue: string
): string {
  return `${firstPart}-${optionKey}-option-${optionValue}`;
}
