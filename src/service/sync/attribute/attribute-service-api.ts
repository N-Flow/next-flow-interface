import { IAttribute } from '@/service/sync/attribute/dto/instance/attribute.interface'

export default interface AttributeServiceApi {
  register(definition: IAttribute): void
}
