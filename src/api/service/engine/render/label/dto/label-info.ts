import { Vector3 } from '@babylonjs/core'
import { TransformNode } from '@babylonjs/core/Meshes/transformNode'

import { LabelTheme } from '@/api/service/engine/render/label/dto/label-theme.enum'

export default class LabelInfo {
  parentElement: HTMLDivElement | null = null
  pointElement: HTMLDivElement | null = null
  lineElement: HTMLDivElement | null = null
  blockElement: HTMLDivElement | null = null
  textElement: HTMLDivElement | null = null

  validate = false
  always = false
  show = false

  lastClickTime = 0
  lastSp: Vector3 | null = null

  constructor(
    public nid: string,
    public node: TransformNode | null = null,
    public text = '',
    public theme: LabelTheme = LabelTheme.Default,
    public x = 0,
    public y = 0,
  ) {}
}
