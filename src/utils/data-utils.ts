import {RvPath} from "rhine-var"

import {PathValueArray} from "@/utils/dto/path-value-array"

export default class DataUtils {

  static recursPathValue(path: RvPath, value: any): PathValueArray {
    const pvList: PathValueArray = []
    pvList.push({path, value})
    return pvList
  }

}
