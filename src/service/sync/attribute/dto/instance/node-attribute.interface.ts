import IBaseAttribute from '@/service/sync/attribute/dto/instance/base-attribute.interface'

export default interface INodeAttribute<T = unknown> extends IBaseAttribute<T> {
  generate(sid: string, nid: string): T
}
