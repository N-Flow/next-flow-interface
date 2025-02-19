export default class FileUtils{
  static to3n(bn: number) {
    const integerPartLength = Math.floor(bn).toString().length
    const decimalPlaces = integerPartLength <= 1 ? 2 : 1
    return bn.toFixed(decimalPlaces)
  }

  static convertBytesToHigherUnit(bn: number) {
    const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    let i = 0
    while (bn >= 1024 && i < units.length - 1) {
      bn /= 1024
      i++
    }
    let numberText = FileUtils.to3n(bn)
    if (numberText.endsWith('.0')) numberText = numberText.slice(0, -2)
    if (numberText.endsWith('.00')) numberText = numberText.slice(0, -3)
    return `${numberText} ${units[i]}`
  }
}

