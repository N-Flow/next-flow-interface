export default interface RvPlugin {
  id: string
  version: string | VersionPoint
  default: {
    viewer: PluginDefaultLevel
    editor: PluginDefaultLevel
  }
}

export enum PluginDefaultLevel {
  ADD = 'ADD',
  ENABLE = 'ENABLE',
  OPEN = 'OPEN',
}

export enum VersionPoint {
  LATEST_STABLE = 'LATEST_STABLE',
  LATEST_CANARY = 'LATEST_CANARY',
}
