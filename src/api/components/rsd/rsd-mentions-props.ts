import { DivPropsSimple } from '@/api/components/interface/base-types'

export interface RsdMentionsProps extends DivPropsSimple {
  value: string
  onChange: (value: string) => void
  type?: 'text' | 'number' | 'password'
  placeholder?: string
  className?: string
  theme?: string
  rows?: number
}
