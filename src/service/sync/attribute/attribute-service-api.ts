import { RvPath } from 'rhine-var'

import { AttributeType } from '@/service/sync/attribute/dto/attribute-type.enum'
import { IAttribute } from '@/service/sync/attribute/dto/instance/attribute.interface'
import IGlobalAttribute from '@/service/sync/attribute/dto/instance/global-attribute.interface'
import INodeAttribute from '@/service/sync/attribute/dto/instance/node-attribute.interface'
import IStepAttribute from '@/service/sync/attribute/dto/instance/step-attribute.interface'

/**
 * 属性服务 API 接口
 *
 * 负责管理和注册所有类型的属性（Node、Step、Global）
 * 提供属性的注册、查询、内置属性黑名单管理等功能
 */
export default interface AttributeServiceApi {
  /**
   * 通用路径黑名单
   *
   * 包含所有类型属性都禁止使用的路径
   * @example [['parent'], ['subscribe'], ['unsubscribe']]
   */
  commonBlacklist: RvPath[]

  /**
   * Node 类型属性的路径黑名单
   */
  nodeBlacklist: RvPath[]

  /**
   * Step 类型属性的路径黑名单
   * @example [['nodes']]
   */
  stepBlacklist: RvPath[]

  /**
   * Global 类型属性的路径黑名单
   * @example [['steps']]
   */
  globalBlacklist: RvPath[]

  /**
   * 已注册的 Node 类型属性列表
   */
  nodeAttributes: INodeAttribute[]

  /**
   * 已注册的 Step 类型属性列表
   */
  stepAttributes: IStepAttribute[]

  /**
   * 已注册的 Global 类型属性列表
   */
  globalAttributes: IGlobalAttribute[]

  /**
   * 注册属性
   *
   * 将属性实例注册到对应的属性列表中
   * 注册前会检查路径是否在黑名单中以及是否与已有路径冲突
   *
   * @param attribute - 要注册的属性实例
   * @throws 如果路径在黑名单中
   * @throws 如果路径与已注册的路径冲突
   * @throws 如果属性类型与实例类型不匹配
   */
  register(attribute: IAttribute): void

  /**
   * 通过路径精确匹配获取属性
   *
   * @param type - 属性类型
   * @param path - 属性路径，支持 RvPath 数组或字符串格式
   * @returns 匹配的属性实例，未找到返回 undefined
   */
  get(type: AttributeType, path: RvPath | string): IAttribute | undefined

  /**
   * 通过路径获取 NodeAttribute
   *
   * @param path - 属性路径，支持 RvPath 数组或字符串格式
   * @returns 匹配的 NodeAttribute 实例，未找到返回 undefined
   */
  getNodeAttribute(path: RvPath | string): INodeAttribute | undefined

  /**
   * 通过路径获取 StepAttribute
   *
   * @param path - 属性路径，支持 RvPath 数组或字符串格式
   * @returns 匹配的 StepAttribute 实例，未找到返回 undefined
   */
  getStepAttribute(path: RvPath | string): IStepAttribute | undefined

  /**
   * 通过路径获取 GlobalAttribute
   *
   * @param path - 属性路径，支持 RvPath 数组或字符串格式
   * @returns 匹配的 GlobalAttribute 实例，未找到返回 undefined
   */
  getGlobalAttribute(path: RvPath | string): IGlobalAttribute | undefined

  /**
   * 根据类型获取属性列表
   *
   * @param type - 属性类型，不传入时返回所有类型的属性
   * @returns 属性列表
   */
  getList(type?: AttributeType): IAttribute[]

  /**
   * 检查路径是否与已注册的属性路径冲突
   *
   * @param type - 属性类型
   * @param path - 要检查的路径
   * @returns 如果存在冲突返回 true，否则返回 false
   */
  isPathConflict(type: AttributeType, path: RvPath): boolean
}
