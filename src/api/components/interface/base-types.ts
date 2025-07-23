import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
export type SpanProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

export type DivPropsSimple = Omit<DivProps, 'onChange' | 'defaultValue'>
export type SpanPropsSimple = Omit<SpanProps, 'onChange' | 'defaultValue'>
