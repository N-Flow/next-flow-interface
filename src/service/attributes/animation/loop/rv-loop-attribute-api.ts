import RvLoop from '@/service/sync/interface/step/node/animation/loop/rv-loop.interface'

export default interface RvLoopAttributeApi {
  key: string

  defaultValue: RvLoop

  generate(): RvLoop

  ensure(nid: string): boolean
}
