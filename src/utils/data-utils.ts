import { RvPath } from 'rhine-var'

export type PathValueArray<T = unknown> = { path: RvPath; value: T }[]

export function recursPathValue<T>(path: RvPath, value: T): PathValueArray<T> {
  const pvList: PathValueArray<T> = []
  pvList.push({ path, value })
  return pvList
}

// Create a namespace object for backward compatibility
const DataUtils = {
  recursPathValue,
}

export default DataUtils
