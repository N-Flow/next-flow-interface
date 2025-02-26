import React, {FunctionComponent} from "react";

export interface MaterialSymbolOptions {
  fill?: boolean
  size?: string
  color?: string
  className?: string
  style?: React.CSSProperties
}

export type MaterialSymbolFunction = (icon: string, options?: MaterialSymbolOptions) => FunctionComponent

