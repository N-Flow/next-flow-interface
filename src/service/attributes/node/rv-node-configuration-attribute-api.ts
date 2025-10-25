import RvNodeConfiguration from '@/service/sync/interface/step/attributes/node/rv-node-configuration.interface'

export default interface RvNodeConfigurationAttributeApi {
  key: string

  defaultValue: RvNodeConfiguration

  generate(nid: string): RvNodeConfiguration

  ensure(nid: string): boolean
}
