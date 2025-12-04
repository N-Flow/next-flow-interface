import { EventType, RvPath, StoredRhineVar } from 'rhine-var'

/**
 * RvPath 路径工具类
 * 提供 RvPath 的创建、转换、访问和比较等功能
 */
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class RvUtils {
  /**
   * 将字符串路径转换为 RvPath 数组
   * @param path - 以点分隔的路径字符串，如 "a.0.b"
   * @returns RvPath 数组，数字字符串会被转换为数字类型
   * @example
   * RvUtils.makeRvPath("a.0.b") // ['a', 0, 'b']
   */
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

  /**
   * 将 RvPath 数组转换为字符串路径
   * @param path - RvPath 数组
   * @returns 以点分隔的路径字符串
   * @example
   * RvUtils.makeRvPathString(['a', 0, 'b']) // "a.0.b"
   */
  static makeRvPathString(path: RvPath): string {
    return path.join('.')
  }

  /**
   * 确保路径为 RvPath 数组格式
   * @param path - 字符串路径或 RvPath 数组
   * @returns RvPath 数组
   */
  static ensureRvPath(path: string | RvPath): RvPath {
    if (typeof path === 'string') {
      return RvUtils.makeRvPath(path)
    }
    return path
  }

  /**
   * 确保路径为字符串格式
   * @param path - 字符串路径或 RvPath 数组
   * @returns 字符串路径
   */
  static ensureRvPathString(path: string | RvPath): string {
    if (typeof path !== 'string') {
      return RvUtils.makeRvPathString(path)
    }
    return path
  }

  /**
   * 根据路径从对象中获取值
   * @typeParam T - 返回值的类型
   * @param source - 源对象
   * @param path - 访问路径
   * @returns 路径对应的值，如果路径不存在则返回 undefined
   * @example
   * RvUtils.getByRvPath({ a: { b: 1 } }, "a.b") // 1
   */
  static getByRvPath<T = unknown>(source: StoredRhineVar, path: string | RvPath): T | undefined {
    const resolvedPath = RvUtils.ensureRvPath(path)
    let obj: unknown = source
    for (const key of resolvedPath) {
      if (obj === undefined || obj === null) {
        return undefined
      }
      obj = (obj as Record<string | number, unknown>)[key]
    }
    return obj as T
  }

  /**
   * 根据路径设置对象中的值
   * @param source - 源对象
   * @param path - 设置路径
   * @param value - 要设置的值
   * @example
   * const obj = { a: { b: 1 } }
   * RvUtils.setByRvPath(obj, "a.b", 2) // obj.a.b === 2
   */
  static setByRvPath(source: StoredRhineVar, path: string | RvPath, value: unknown): void {
    const resolvedPath = RvUtils.ensureRvPath(path)
    let obj: Record<string | number, unknown> = source as Record<string | number, unknown>
    for (let i = 0; i < resolvedPath.length - 1; i++) {
      obj = obj[resolvedPath[i]] as Record<string | number, unknown>
    }
    obj[resolvedPath[resolvedPath.length - 1]] = value
  }

  /**
   * 检查两段路径是否完全重叠
   * 长度可不同，从开头开始每一项比较，直到有一方结束，是否全部相同
   * @param from - 第一个路径
   * @param target - 第二个路径
   * @returns 如果路径重叠则返回 true
   * @example
   * RvUtils.checkRvPathOverlay("a.b", "a.b.c") // true
   * RvUtils.checkRvPathOverlay("a.b", "a.c") // false
   */
  static checkRvPathOverlay(from: RvPath | string, target: RvPath | string): boolean {
    const fromPath = RvUtils.ensureRvPath(from)
    const targetPath = RvUtils.ensureRvPath(target)
    const n = fromPath.length > targetPath.length ? targetPath.length : fromPath.length
    for (let i = 0; i < n; i++) {
      if (fromPath[i] != targetPath[i]) {
        return false
      }
    }
    return true
  }

  // 判断 target 是否处于 from 的开头位置
  static checkRvPathStartWith(from: RvPath | string, target: RvPath | string): boolean {
    const fromPath = RvUtils.ensureRvPath(from)
    const targetPath = RvUtils.ensureRvPath(target)
    if (fromPath.length < targetPath.length) {
      return false
    }
    for (let i = 0; i < target.length; i++) {
      if (targetPath[i] != fromPath[i]) {
        return false
      }
    }
    return true
  }

  /**
   * 检查路径是否与目标列表中的任意路径重叠
   * @param from - 要检查的路径
   * @param targetList - 目标路径列表
   * @returns 如果与任意目标路径重叠则返回 true
   */
  static checkAnyRvPathOverlay(from: RvPath | string, targetList: (RvPath | string)[]): boolean {
    const fromPath = RvUtils.ensureRvPath(from)
    return targetList.some((target) => RvUtils.checkRvPathOverlay(fromPath, target))
  }

  /**
   * 检查两段路径是否完全相同
   * @param from - 第一个路径
   * @param target - 第二个路径
   * @returns 如果路径完全相同则返回 true
   * @example
   * RvUtils.checkRvPathSame("a.b", "a.b") // true
   * RvUtils.checkRvPathSame("a.b", "a.b.c") // false
   */
  static checkRvPathSame(from: RvPath | string, target: RvPath | string): boolean {
    const fromPath = RvUtils.ensureRvPath(from)
    const targetPath = RvUtils.ensureRvPath(target)
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

  /**
   * 检查路径是否与目标列表中的任意路径完全相同
   * @param from - 要检查的路径
   * @param targetList - 目标路径列表
   * @returns 如果与任意目标路径相同则返回 true
   */
  static checkAnyRvPathSame(from: RvPath | string, targetList: (RvPath | string)[]): boolean {
    const fromPath = RvUtils.ensureRvPath(from)
    return targetList.some((target) => RvUtils.checkRvPathSame(fromPath, target))
  }

  static isChangeEventType(type: EventType | string) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
    return type == EventType.ADD || type == EventType.UPDATE || type == EventType.DELETE
  }
}

export default RvUtils
