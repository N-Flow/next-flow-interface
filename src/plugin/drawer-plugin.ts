import { PluginViewProps } from '@/plugin/dto/plugin-view-props.interface'
import { MixView } from '@/type/view/mix-view'

import IconPlugin from './icon-plugin'

export default interface DrawerPlugin extends IconPlugin {
  title: string
  tip: string
  weight: number

  drawer: MixView<PluginViewProps>

  onRender?: () => void

  onTitleClick?: () => void
  onTitleContextMenu?: () => void
}
