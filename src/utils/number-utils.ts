export function roundToX(num: number, x: number) {
  const factor = 10 ** x
  return Math.round(num * factor) / factor
}

export function r2(n: number): number {
  return roundToX(n, 2)
}

export function r3(n: number): number {
  return roundToX(n, 3)
}

export function isValidNumber(value: unknown): value is number {
  return typeof value === 'number' && !isNaN(value) && isFinite(value)
}

// Create a namespace object for backward compatibility
const NumberUtils = {
  roundToX,
  r2,
  r3,
  isValidNumber,
}

export default NumberUtils
