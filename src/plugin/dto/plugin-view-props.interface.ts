import { DivProps } from '@/api/components/interface/base-types'
import ViewPlugin from '@/plugin/view-plugin'

import DrawerPlugin from '../drawer-plugin'

export interface PluginViewProps extends DivProps {
  plugin: DrawerPlugin | ViewPlugin
}
