import { DivProps } from '@/components/interface/base-types'
import DialogPlugin from '@/plugin/dialog-plugin'
import ViewPlugin from '@/plugin/view-plugin'

import DrawerPlugin from '../drawer-plugin'

export interface PluginViewProps extends DivProps {
  plugin: DrawerPlugin | ViewPlugin | DialogPlugin
}
