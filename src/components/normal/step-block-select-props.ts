import { DivPropsSimple } from '../interface/base-types'

export default interface StepBlockSelectProps extends DivPropsSimple {
  value: string[]
  onChange: (value: string[]) => void
}