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
}
