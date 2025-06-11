import { RvPath } from 'rhine-var'

import { PathValueArray } from '@/utils/dto/path-value-array'

export function recursPathValue<T = unknown>(path: RvPath, value: T): PathValueArray<T> {
  const pvList: PathValueArray<T> = []
  pvList.push({ path, value })
  return pvList
}

// Create a namespace object for backward compatibility
const DataUtils = {
  recursPathValue,
}

export default DataUtils
