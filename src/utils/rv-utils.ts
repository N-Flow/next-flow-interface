import { RvPath, StoredRhineVar } from 'rhine-var'

export function makeRvPath(path: string): RvPath {
  const rvPath: RvPath = []
  for (const item of path.split('.')) {
    const num = parseInt(item, 10)
    if (!isNaN(num) && item === num.toString()) {
      rvPath.push(num)
    } else {
      rvPath.push(item)
    }
  }
  return rvPath
}

export function makeRvPathString(path: RvPath): string {
  return path.join('.')
}

export function ensureRvPath(path: string | RvPath): RvPath {
  if (typeof path === 'string') {
    return makeRvPath(path)
  }
  return path
}

export function ensureRvPathString(path: string | RvPath): string {
  if (typeof path !== 'string') {
    return makeRvPathString(path)
  }
  return path
}

export function getByRvPath(
  source: StoredRhineVar | Record<string | number, unknown>,
  path: string | RvPath,
): unknown {
  const resolvedPath = ensureRvPath(path)
  let obj: unknown = source
  for (const key of resolvedPath) {
    if (obj === undefined || obj === null) {
      return undefined
    }
    obj = (obj as Record<string | number, unknown>)[key]
  }
  return obj
}

export function setByRvPath(source: StoredRhineVar, path: string | RvPath, value: unknown): void {
  const resolvedPath = ensureRvPath(path)
  let obj: Record<string | number, unknown> = source as Record<string | number, unknown>
  for (let i = 0; i < resolvedPath.length - 1; i++) {
    obj = obj[resolvedPath[i]] as Record<string | number, unknown>
  }
  obj[resolvedPath[resolvedPath.length - 1]] = value
}

// 检查两段路径是否完全重叠，长度可不同，开头相同。指从开头开始每一项比较，直到有一方结束，是否全部相同
export function checkRvPathOverlay(from: RvPath | string, target: RvPath | string): boolean {
  const fromPath = ensureRvPath(from)
  const targetPath = ensureRvPath(target)
  const n = fromPath.length > targetPath.length ? targetPath.length : fromPath.length
  for (let i = 0; i < n; i++) {
    if (fromPath[i] != targetPath[i]) {
      return false
    }
  }
  return true
}

export function checkAnyRvPathOverlay(
  from: RvPath | string,
  targetList: (RvPath | string)[],
): boolean {
  const fromPath = ensureRvPath(from)
  return targetList.some((target) => checkRvPathOverlay(fromPath, target))
}

// 检查两段路径是否完全相同
export function checkRvPathSame(from: RvPath | string, target: RvPath | string): boolean {
  const fromPath = ensureRvPath(from)
  const targetPath = ensureRvPath(target)
  if (fromPath.length !== targetPath.length) {
    return false
  }
  for (let i = 0; i < fromPath.length; i++) {
    if (fromPath[i] !== targetPath[i]) {
      return false
    }
  }
  return true
}

export function checkAnyRvPathSame(
  from: RvPath | string,
  targetList: (RvPath | string)[],
): boolean {
  const fromPath = ensureRvPath(from)
  return targetList.some((target) => checkRvPathSame(fromPath, target))
}

// Create a namespace object for backward compatibility
const RvUtils = {
  makeRvPath,
  makeRvPathString,
  ensureRvPath,
  ensureRvPathString,
  getByRvPath,
  setByRvPath,
  checkRvPathSame,
  checkAnyRvPathSame,
  checkRvPathOverlay,
  checkAnyRvPathOverlay,
}

export default RvUtils
