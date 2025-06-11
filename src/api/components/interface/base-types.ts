import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
export type SpanProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

export type DivPropsWithoutOnChange = Omit<DivProps, 'onChange'>
export type SpanPropsWithoutOnChange = Omit<SpanProps, 'onChange'>
