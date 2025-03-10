import {RvModelOrigin} from "@/api/service/sync/interface/model/rv-model-origin.enum";
import {RvModelFormat} from "@/api/service/sync/interface/model/rv-model-format.enum";
import RvNode from "@/api/service/sync/interface/model/node/rv-node.interface";
import RvBasicConfig from "@/api/service/sync/interface/model/config/rv-basic-config.interface";

export default interface RvModel {
  mid: string
  name: string
  origin: RvModelOrigin
  format: RvModelFormat
  fid?: string
  config?: RvBasicConfig | any
  node?: string
}


/**
 * Example
 *
 * 1. Basic Model
 *
 * {
 *   mid: 'M-XXX',
 *   name: 'Basic XXX',
 *   origin: RvModelOrigin.BASIC,
 *   format: RvModelFormat.BUILTIN,
 *   fid: 'F-XXX',
 *   config: {
 *     type: RvBasicType.CUBE,
 *     args: {
 *       w: 1,
 *       h: 1,
 *       d: 1
 *     }
 *   },
 *   node: {
 *     nid: 'N-XXX',
 *     name: 'M-XXX',
 *   }
 * }
 *
 *
 * 2. Upload Model
 *
 * {
 *   mid: 'M-XXX',
 *   name: 'FileNameWithOutExtension',
 *   origin: RvModelOrigin.UPLOAD,
 *   format: RvModelFormat.GLB,
 *   fid: 'F-XXX',
 *   node: {  // 在模型首次添加入场景后 填写这个选项 随后其他协同者才可开始加载这个模型
 *     nid: 'N-XXX',
 *     name: 'M-XXX',
 *     children: [
 *       ...
 *     ]
 *   },
 * }
 *
 *
 * 3. Model From Image / Video
 *
 * {
 *   mid: 'M-XXX',
 *   name: 'M-XXX',
 *   origin: RvModelOrigin.UPLOAD,
 *   format: RvModelFormat.MP4,
 *   fid: 'F-XXX',
 *   node: {
 *     nid: 'N-XXX',
 *     name: 'M-XXX',
 *   }
 * }
 *
 *
 * 4. Text Model
 *
 * {
 *   mid: 'M-XXX',
 *   name: 'Text XXX',
 *   origin: RvModelOrigin.BASIC,
 *   format: RvModelFormat.BUILTIN,
 *   fid: 'F-XXX',
 *   config: {
 *     type: RvBasicType.TEXT,
 *     text: 'Hello World',
 *   },
 *   node: {
 *     nid: 'N-XXX',
 *     name: 'M-XXX',
 *   }
 * }
 *
 */



