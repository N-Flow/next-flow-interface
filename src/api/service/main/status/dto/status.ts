export default interface Status {
  Authenticated: boolean
  DataSynchronized: boolean
  SyncInitialized: boolean
  RsInitialized: boolean
  AllInitialized: boolean
  PluginInstalled: boolean
  PluginPreLoaded: boolean
  FileLoaded: boolean
  ModelLoaded: boolean
  PluginPreRendered: boolean
  Rendered: boolean
  Shown: boolean
}
