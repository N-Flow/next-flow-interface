import {StoredRhineVar, YPath} from "rhine-var";

export default class RvUtils {

  static makeYPath(path: string): YPath {
    let yPath: YPath = []
    for (const item of path.split('.')) {
      const num = parseInt(item, 10)
      if (!isNaN(num) && item === num.toString()) {
        yPath.push(num)
      } else {
        yPath.push(item)
      }
    }
    return yPath
  }

  static makeYPathString(path: YPath): string {
    return path.join('.')
  }

  static ensureYPath(path: string | YPath): YPath {
    if (typeof path === 'string') {
      path = RvUtils.makeYPath(path)
    }
    return path
  }

  static ensureYPathString(path: string | YPath): string {
    if (typeof path !== 'string') {
      path = RvUtils.makeYPathString(path)
    }
    return path
  }

  static getByYPath<T = any>(source: StoredRhineVar<any> | any, path: string | YPath): T {
    path = RvUtils.ensureYPath(path)
    let obj: any = source
    for (const key of path) {
      obj = obj[key]
    }
    return obj
  }

  static setByYPath<T = any>(source: StoredRhineVar<any>, path: string | YPath, value: T): void {
    path = RvUtils.ensureYPath(path)
    let obj: any = source
    for (let i = 0; i < path.length - 1; i++) {
      obj = obj[path[i]]
    }
    obj[path[path.length - 1]] = value
  }

  // 检查两段路径是否完全重叠，长度可不同，开头相同。指从开头开始每一项比较，直到有一方结束，是否全部相同
  static checkYPathOverlay(from: YPath | string, target: YPath | string) {
    from = RvUtils.ensureYPath(from)
    target = RvUtils.ensureYPath(target)
    let n = from.length > target.length ? target.length : from.length
    for (let i = 0; i < n; i++) {
      if (from[i] != target[i]) {
        return false
      }
    }
    return true
  }

}
