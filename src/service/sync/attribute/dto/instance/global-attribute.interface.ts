import IBaseAttribute from '@/service/sync/attribute/dto/instance/base-attribute.interface'

export default interface IGlobalAttribute<T extends object = never> extends IBaseAttribute<T> {
  generate(): T
}
