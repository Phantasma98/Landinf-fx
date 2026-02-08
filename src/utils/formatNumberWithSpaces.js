export function formatNumberWithSpaces(value, decimals = 0) {
  const safeNumber = Number(value);
  if (!Number.isFinite(safeNumber)) return String(value);

  const normalizedDecimals = Number.isInteger(decimals) && decimals > 0 ? decimals : 0;
  const fixed = safeNumber.toFixed(normalizedDecimals);
  const [integerPart, fractionalPart] = fixed.split(".");

  const groupedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return fractionalPart ? `${groupedInteger},${fractionalPart}` : groupedInteger;
}
