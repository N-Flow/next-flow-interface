export function convertTimeText(seconds: number): string {
  const h = Math.floor(seconds / 3600),
    m = Math.floor((seconds % 3600) / 60),
    s = Math.floor(seconds % 60)

  return [
    h > 0 ? String(h).padStart(2, '0') : null,
    String(m).padStart(2, '0'),
    String(s).padStart(2, '0'),
  ]
    .filter(Boolean)
    .join(':')
}

export function formatDateTo17Digits(date: Date = new Date()) {
  const year = date.getFullYear().toString(),
    month = (date.getMonth() + 1).toString().padStart(2, '0'),
    day = date.getDate().toString().padStart(2, '0'),
    hours = date.getHours().toString().padStart(2, '0'),
    minutes = date.getMinutes().toString().padStart(2, '0'),
    seconds = date.getSeconds().toString().padStart(2, '0'),
    milliseconds = date.getMilliseconds().toString().padStart(3, '0')
  return year + month + day + hours + minutes + seconds + milliseconds
}

// 时间差 转换为 HHH:MM:SS 的形式
export function formatDuration(startTimestamp: number, endTimestamp: number): string {
  const diff = endTimestamp - startTimestamp,
    seconds = Math.floor(diff / 1000),
    hours = Math.floor(seconds / 3600),
    minutes = Math.floor((seconds % 3600) / 60),
    secs = seconds % 60

  return `${hours > 0 ? `${hours.toString().padStart(2, '0')}:` : ''}${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

// Create a namespace object for backward compatibility
const TimeUtils = {
  convertTimeText,
  formatDateTo17Digits,
  formatDuration,
}

export default TimeUtils
