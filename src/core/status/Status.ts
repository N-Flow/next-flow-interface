
export default interface Status {
  Authenticated: boolean
  CRDTSynchronized: boolean
  CRDTInitialized: boolean
  RsInitialized: boolean
  AllInitialized: boolean
  Loaded: boolean
  Rendered: boolean
  Shown: boolean
}
