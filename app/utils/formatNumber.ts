export default function formatNumber(num: string | number) {
  const numToString = String(num);
  if (numToString.length === 1) {
    return `0${numToString}`;
  }
  return String(num);
}
