import DialogCreateOptions from '@/api/service/main/dialog/dto/dialog-create-options.interface'
import { PluginViewProps } from '@/plugin/dto/plugin-view-props.interface'
import { MixView } from '@/type/view/mix-view'

import IconPlugin from './icon-plugin'

export default interface DialogPlugin extends IconPlugin {
  options: DialogCreateOptions

  view: MixView<PluginViewProps>

  onRender?: () => void
}
