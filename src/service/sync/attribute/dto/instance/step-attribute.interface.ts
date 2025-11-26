import IBaseAttribute from '@/service/sync/attribute/dto/instance/base-attribute.interface'

export default interface IStepAttribute<T = unknown> extends IBaseAttribute<T> {
  generate(sid: string): T
}
