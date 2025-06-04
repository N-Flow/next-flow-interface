import {StoredRhineVar, RvPath} from "rhine-var"

export default class RvUtils {

  static makeRvPath(path: string): RvPath {
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

  static makeRvPathString(path: RvPath): string {
    return path.join('.')
  }

  static ensureRvPath(path: string | RvPath): RvPath {
    if (typeof path === 'string') {
      path = RvUtils.makeRvPath(path)
    }
    return path
  }

  static ensureRvPathString(path: string | RvPath): string {
    if (typeof path !== 'string') {
      path = RvUtils.makeRvPathString(path)
    }
    return path
  }

  static getByRvPath<T = any>(source: StoredRhineVar | any, path: string | RvPath): T  {
    path = RvUtils.ensureRvPath(path)
    let obj: any = source
    for (const key of path) {
      if (obj === undefined) {
        return undefined as any
      }
      obj = obj[key]
    }
    return obj
  }

  static setByRvPath<T = any>(source: StoredRhineVar, path: string | RvPath, value: T): void {
    path = RvUtils.ensureRvPath(path)
    let obj: any = source
    for (let i = 0; i < path.length - 1; i++) {
      obj = obj[path[i]]
    }
    obj[path[path.length - 1]] = value
  }

  // 检查两段路径是否完全重叠，长度可不同，开头相同。指从开头开始每一项比较，直到有一方结束，是否全部相同
  static checkRvPathOverlay(from: RvPath | string, target: RvPath | string) {
    from = RvUtils.ensureRvPath(from)
    target = RvUtils.ensureRvPath(target)
    const n = from.length > target.length ? target.length : from.length
    for (let i = 0; i < n; i++) {
      if (from[i] != target[i]) {
        return false
      }
    }
    return true
  }

}
