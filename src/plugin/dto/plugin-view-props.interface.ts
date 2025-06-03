import DrawerPlugin from "../drawer-plugin"
import ViewPlugin from "@/plugin/view-plugin"
import {DivProps} from "@/api/components/interface/base-types"

export interface PluginViewProps extends DivProps {
  plugin: DrawerPlugin | ViewPlugin,
}
