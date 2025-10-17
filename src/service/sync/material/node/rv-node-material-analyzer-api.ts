import { StoredRhineVar } from 'rhine-var'

import RvMaterial from '@/service/sync/interface/step/attributes/material/rv-material.interface'

export default interface RvNodeMaterialAnalyzerApi {
  /**
   * 确保当前材质的 RhineVar 对象包含节点材质信息 若没有则添加
   *
   * @param material {StoredRhineVar<RvMaterial>} 需操作的 RhineVar 材质数据对象
   * @Param nid {string}
   * @returns {Promise<boolean>} 是否添加了材质
   */
  ensure(material: StoredRhineVar<RvMaterial>, nid: string): Promise<boolean>
}
