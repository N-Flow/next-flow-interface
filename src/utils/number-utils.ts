export default class NumberUtils {
  static roundToX(num: number, x: number) {
    const factor = Math.pow(10, x);
    return Math.round(num * factor) / factor;
  }

  static r2(n: number): number {
    return NumberUtils.roundToX(n, 2)
  }

  static r3(n: number): number {
    return NumberUtils.roundToX(n, 3)
  }

  static isValidNumber(value: any): boolean {
    return typeof value === 'number' && !isNaN(value) && isFinite(value)
  }
}

