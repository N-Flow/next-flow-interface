import {MouseEvent, KeyboardEvent, FocusEvent, PointerEvent, UIEvent, WheelEvent, DragEvent} from "react";

export type NativeMouseEventSubscriber = (e: MouseEvent) => void

export type NativeDragEventSubscriber = (e: DragEvent) => void

export type NativeWheelEventSubscriber = (e: WheelEvent) => void

export type NativePointerEventSubscriber = (e: PointerEvent) => void

export type NativeKeyboardEventSubscriber = (e: KeyboardEvent) => void

export type NativeFocusEventSubscriber = (e: FocusEvent) => void

export type NativeUIEventSubscriber = (e: UIEvent) => void

export type NativeAnyEventSubscriber = (e: any) => void
