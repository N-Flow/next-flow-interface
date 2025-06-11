// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function throttle<T extends (...args: any[]) => void>(func: T, wait: number): T {
  if (wait === 0) {
    return func
  }

  let lastArgs: Parameters<T> | undefined,
    lastExec = 0,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    lastThis: any,
    timeout: ReturnType<typeof setTimeout> | null = null

  function execute() {
    lastExec = Date.now()
    if (lastArgs) {
      func.apply(lastThis, lastArgs)
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const throttled = function (this: any, ...args: Parameters<T>) {
    const now = Date.now(),
      elapsed = now - lastExec

    lastArgs = args
    lastThis = this as unknown

    if (lastExec === 0) {
      setTimeout(execute, 1)
      return
    }

    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }

    if (elapsed < wait) {
      timeout = setTimeout(() => {
        execute()
        timeout = null
      }, wait - elapsed)
    } else {
      execute()
    }
  } as T

  return throttled
}
