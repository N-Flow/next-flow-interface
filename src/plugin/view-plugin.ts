import { PluginViewProps } from '@/plugin/dto/plugin-view-props.interface'
import { MixView } from '@/type/view/mix-view'

import BasePlugin from './base-plugin'

export default interface ViewPlugin extends BasePlugin {
  view: MixView<PluginViewProps>

  onRender?: () => void
}
