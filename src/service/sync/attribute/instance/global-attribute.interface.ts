import IBaseAttribute from '@/service/sync/attribute/instance/base-attribute.interface'

export default interface IGlobalAttribute<T extends object = never> extends IBaseAttribute<T> {
  generate(): T
}
