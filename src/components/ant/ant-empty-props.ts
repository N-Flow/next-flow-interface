import { EmptyProps } from 'antd'
import { ReactNode } from 'react'

export interface AntEmptyProps extends EmptyProps {
  className?: string
  classNameInner?: string
  image?: ReactNode
  description?: ReactNode
  children?: ReactNode
}
