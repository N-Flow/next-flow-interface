import IBaseAttribute from '@/service/sync/attribute/instance/base-attribute.interface'

export default interface IStepAttribute<T extends object = never> extends IBaseAttribute<T> {
  generate(sid: string): T
}
