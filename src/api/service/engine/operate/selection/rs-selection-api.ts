import RsSelectionNodeInfo from './dto/rs-selection-node-info'

export default interface RsSelectionApi {
  set(nid: string): void

  add(nid: string): void

  remove(nid: string): void

  clear(): void

  has(nid: string): boolean

  get(nid: string): RsSelectionNodeInfo | null
}
