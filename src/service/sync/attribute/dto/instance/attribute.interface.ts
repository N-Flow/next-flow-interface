import IGlobalAttribute from '@/service/sync/attribute/dto/instance/global-attribute.interface'
import INodeAttribute from '@/service/sync/attribute/dto/instance/node-attribute.interface'
import IStepAttribute from '@/service/sync/attribute/dto/instance/step-attribute.interface'

export type IAttribute = INodeAttribute | IStepAttribute | IGlobalAttribute
