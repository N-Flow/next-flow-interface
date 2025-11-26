import IBaseAttribute from '@/service/sync/attribute/dto/instance/base-attribute.interface'

export default interface IGlobalAttribute<T = unknown> extends IBaseAttribute<T> {
  generate(): T
}
