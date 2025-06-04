import {StoredRhineVar} from "rhine-var"

import RvGlobal from "../interface/global/rv-global.interface"

export default interface RvGlobalServiceApi {

  state: StoredRhineVar<RvGlobal>

}
