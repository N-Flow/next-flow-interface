import IGlobalAttribute from '@/service/sync/attribute/instance/global-attribute.interface'
import INodeAttribute from '@/service/sync/attribute/instance/node-attribute.interface'
import IStepAttribute from '@/service/sync/attribute/instance/step-attribute.interface'

export type IAttribute<T extends object = never> =
  | INodeAttribute<T>
  | IStepAttribute<T>
  | IGlobalAttribute<T>
