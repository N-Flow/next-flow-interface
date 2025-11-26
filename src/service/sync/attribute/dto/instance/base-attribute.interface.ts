import { RvPath } from 'rhine-var'

import { AttributeType } from '@/service/sync/attribute/dto/attribute-type.enum'

export default interface IBaseAttribute<T = unknown> {
  type: AttributeType

  path: RvPath

  defaultValue?: T

  getPathString(): string
}
