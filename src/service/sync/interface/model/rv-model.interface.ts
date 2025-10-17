import RvBasicConfig from '@/service/sync/interface/model/config/rv-basic-config.interface'
import { RvModelOrigin } from '@/service/sync/interface/model/rv-model-origin.enum'

export default interface RvModel {
  mid: string
  name: string
  origin: RvModelOrigin
  fid?: string
  config?: RvBasicConfig | Record<string, unknown>
  node?: string
  // Node?: RvNode
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
