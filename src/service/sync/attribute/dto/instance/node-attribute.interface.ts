import IBaseAttribute from '@/service/sync/attribute/dto/instance/base-attribute.interface'

export default interface INodeAttribute<T extends object = never> extends IBaseAttribute<T> {
  generate(sid: string, nid: string): T
}
