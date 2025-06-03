import {ReactNode} from "react"
import {EmptyProps} from "antd"

export interface AntEmptyProps extends EmptyProps{
  className?: string
  classNameInner?: string
  image?: ReactNode
  description?: ReactNode
  children?: ReactNode
}